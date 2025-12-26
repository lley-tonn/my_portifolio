import { useEffect, useState, useRef } from "react";

/**
 * Custom hook for scroll-aware navigation using Intersection Observer API
 * Tracks which section is currently visible and returns its ID
 *
 * @param {string[]} sectionIds - Array of section IDs to observe (e.g., ['hero', 'about', 'skills'])
 * @param {Object} options - Intersection Observer options
 * @returns {string} - Currently active section ID with # prefix (e.g., '#hero')
 */
export const useScrollSpy = (sectionIds, options = {}) => {
    const [activeSection, setActiveSection] = useState(sectionIds[0] ? `#${sectionIds[0]}` : '');
    const observerRef = useRef(null);
    const sectionVisibilityRef = useRef({});

    useEffect(() => {
        // Initialize visibility tracking
        sectionIds.forEach(id => {
            sectionVisibilityRef.current[id] = 0;
        });

        // Intersection Observer callback
        const observerCallback = (entries) => {
            entries.forEach(entry => {
                const sectionId = entry.target.id;

                // Update visibility ratio for this section
                sectionVisibilityRef.current[sectionId] = entry.intersectionRatio;
            });

            // Find the section with the highest visibility ratio
            let maxRatio = 0;
            let mostVisibleSection = null;

            Object.entries(sectionVisibilityRef.current).forEach(([id, ratio]) => {
                if (ratio > maxRatio) {
                    maxRatio = ratio;
                    mostVisibleSection = id;
                }
            });

            // Update active section if we found a visible one
            if (mostVisibleSection && maxRatio > 0) {
                setActiveSection(`#${mostVisibleSection}`);
            }
        };

        // Create Intersection Observer with optimized settings
        const observerOptions = {
            // Trigger when section enters the center 30% of viewport
            rootMargin: '-35% 0px -35% 0px',
            // Use multiple thresholds for smoother tracking
            threshold: [0, 0.1, 0.2, 0.3, 0.4, 0.5, 0.6, 0.7, 0.8, 0.9, 1.0],
            ...options
        };

        observerRef.current = new IntersectionObserver(observerCallback, observerOptions);

        // Observe all sections
        const observedElements = [];
        sectionIds.forEach(id => {
            const element = document.getElementById(id);
            if (element) {
                observerRef.current.observe(element);
                observedElements.push(element);
            }
        });

        // Cleanup
        return () => {
            observedElements.forEach(element => {
                if (observerRef.current) {
                    observerRef.current.unobserve(element);
                }
            });
            if (observerRef.current) {
                observerRef.current.disconnect();
            }
        };
    }, [sectionIds, options]);

    return activeSection;
};
