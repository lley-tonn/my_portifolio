import { useState, useEffect, useRef, useCallback } from 'react';
import { ExternalLink, Github, ChevronLeft, ChevronRight } from 'lucide-react';
import { cn } from '@/lib/utils';

// 3D Card Component with visionOS aesthetics
const Card3D = ({ project, position, isActive, onClick, onMouseEnter, onMouseLeave }) => {
    // position: -2, -1, 0 (active), 1, 2
    const getTransform = () => {
        const baseZ = -200; // Base depth in pixels
        const spacing = 420; // Horizontal spacing between cards

        if (position === 0) {
            // Active card - center, front, full scale
            return {
                transform: 'translateX(0) translateZ(0) rotateY(0deg) scale(1)',
                opacity: 1,
                zIndex: 50
            };
        }

        const absPos = Math.abs(position);
        const direction = position > 0 ? 1 : -1;

        // Side and back cards - pushed back in Z-space, rotated, scaled down
        return {
            transform: `translateX(${direction * spacing * absPos}px) translateZ(${baseZ * absPos}px) rotateY(${-direction * 8 * Math.min(absPos, 2)}deg) scale(${1 - absPos * 0.15})`,
            opacity: Math.max(0.3, 1 - absPos * 0.3),
            zIndex: 50 - Math.abs(position) * 10,
            filter: absPos > 0 ? `blur(${absPos * 2}px)` : 'blur(0)'
        };
    };

    const style = getTransform();

    return (
        <div
            className={cn(
                "absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2",
                "transition-all duration-700 ease-out",
                "cursor-pointer",
                isActive && "cursor-default"
            )}
            style={{
                ...style,
                willChange: 'transform, opacity, filter'
            }}
            onClick={onClick}
            onMouseEnter={onMouseEnter}
            onMouseLeave={onMouseLeave}
        >
            <div
                className={cn(
                    "relative w-[380px] sm:w-[480px] md:w-[560px]",
                    "h-[340px] sm:h-[380px] md:h-[420px]",
                    "rounded-3xl overflow-hidden",
                    "bg-gradient-to-br from-card/95 to-card/70 dark:from-black/90 dark:to-black/70",
                    "backdrop-blur-2xl",
                    "border border-border/40 dark:border-border/20",
                    "shadow-2xl",
                    isActive && "border-primary/40 shadow-[0_0_40px_rgba(255,107,53,0.3)]",
                    "transition-all duration-300"
                )}
            >
                {/* Card Content */}
                <div className="relative w-full h-full">
                    {/* Project Image */}
                    {project.image ? (
                        <>
                            <img
                                src={project.image}
                                alt={project.title}
                                className="w-full h-full object-cover"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/50 to-transparent"></div>
                        </>
                    ) : (
                        <div className="w-full h-full bg-gradient-to-br from-primary/20 to-primary/5 flex items-center justify-center relative">
                            <div className="absolute inset-0 opacity-10">
                                <div className="absolute top-0 left-0 w-32 h-32 bg-primary rounded-full blur-3xl"></div>
                                <div className="absolute bottom-0 right-0 w-32 h-32 bg-primary rounded-full blur-3xl"></div>
                            </div>
                            <p className="text-foreground/40 text-center px-6 relative z-10">Screenshot coming soon</p>
                        </div>
                    )}

                    {/* Content Overlay */}
                    <div className="absolute bottom-0 left-0 right-0 p-6 sm:p-8">
                        <h3 className="text-2xl sm:text-3xl font-bold text-white mb-2">
                            {project.title}
                        </h3>
                        <p className="text-white/70 text-sm mb-4">
                            {project.description}
                        </p>
                        {isActive && (
                            <p className="text-primary text-xs flex items-center gap-2 animate-fade-in">
                                <span className="inline-block w-2 h-2 rounded-full bg-primary animate-pulse"></span>
                                Click to view details
                            </p>
                        )}
                    </div>

                    {/* Active Glow Effect */}
                    {isActive && (
                        <div className="absolute inset-0 bg-gradient-to-t from-primary/10 via-transparent to-transparent pointer-events-none"></div>
                    )}
                </div>
            </div>
        </div>
    );
};

// Detail Modal Component
const ProjectDetailModal = ({ project, onClose }) => {
    useEffect(() => {
        const handleEsc = (e) => {
            if (e.key === 'Escape') onClose();
        };
        window.addEventListener('keydown', handleEsc);
        return () => window.removeEventListener('keydown', handleEsc);
    }, [onClose]);

    return (
        <div
            className="fixed inset-0 z-[9999] flex items-center justify-center p-4 animate-fade-in"
            onClick={onClose}
        >
            {/* Backdrop */}
            <div className="absolute inset-0 bg-black/80 backdrop-blur-xl"></div>

            {/* Modal */}
            <div
                className="relative z-10 w-full max-w-3xl max-h-[90vh] overflow-y-auto rounded-3xl
                           bg-gradient-to-br from-card/95 to-card/80 dark:from-black/95 dark:to-black/80
                           border border-primary/30 backdrop-blur-2xl
                           shadow-[0_0_60px_rgba(255,107,53,0.3)]
                           p-8 sm:p-10"
                onClick={(e) => e.stopPropagation()}
            >
                {/* Close button */}
                <button
                    onClick={onClose}
                    className="absolute top-4 right-4 w-10 h-10 rounded-full
                               bg-background/50 hover:bg-background/70
                               border border-border/40 hover:border-primary/40
                               flex items-center justify-center
                               transition-all duration-200"
                    aria-label="Close modal"
                >
                    <span className="text-foreground/70 text-xl">×</span>
                </button>

                {/* Content */}
                <div className="space-y-6">
                    <div>
                        <h2 className="text-3xl sm:text-4xl font-bold text-primary mb-2">
                            {project.title}
                        </h2>
                        <p className="text-foreground/60">
                            {project.description}
                        </p>
                    </div>

                    <div>
                        <h3 className="text-sm font-semibold text-foreground/70 uppercase tracking-wide mb-3">
                            About This Project
                        </h3>
                        <p className="text-foreground/80 leading-relaxed">
                            {project.fullDescription || project.description}
                        </p>
                    </div>

                    <div>
                        <h3 className="text-sm font-semibold text-foreground/70 uppercase tracking-wide mb-3">
                            Tech Stack
                        </h3>
                        <div className="flex flex-wrap gap-2">
                            {project.technologies.map((tech, idx) => (
                                <span
                                    key={idx}
                                    className="px-4 py-2 rounded-full text-sm font-medium
                                               bg-primary/15 text-primary border border-primary/30
                                               hover:bg-primary/25 transition-colors"
                                >
                                    {tech}
                                </span>
                            ))}
                        </div>
                    </div>

                    <div className="flex flex-col sm:flex-row gap-3 pt-4">
                        {project.link && project.link !== '#' && (
                            <a
                                href={project.link}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center justify-center gap-2 px-6 py-3 rounded-xl
                                           bg-primary text-primary-foreground font-semibold
                                           hover:shadow-[0_0_25px_rgba(255,107,53,0.5)]
                                           transition-all duration-300"
                            >
                                <Github className="w-5 h-5" />
                                <span>View on GitHub</span>
                            </a>
                        )}
                        {project.liveUrl && (
                            <a
                                href={project.liveUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center justify-center gap-2 px-6 py-3 rounded-xl
                                           bg-card/80 border-2 border-primary/40 text-primary font-semibold
                                           hover:bg-primary/15 transition-all duration-300"
                            >
                                <ExternalLink className="w-5 h-5" />
                                <span>Live Demo</span>
                            </a>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};

export const ProjectsSection = () => {
    const projects = [
        {
            id: 1,
            title: "CinQ",
            description: "Event Management App",
            fullDescription: "A comprehensive event management application built with React and Node.js. Features include event creation, ticket management, attendee tracking, and real-time notifications.",
            image: "/screenshots/CinQ.jpg",
            technologies: ["React", "Node.js", "MongoDB", "Express", "Socket.io"],
            link: "#",
            liveUrl: null
        },
        {
            id: 2,
            title: "Project 2",
            description: "Coming soon - screenshot to be added",
            fullDescription: "More details coming soon.",
            image: null,
            technologies: ["TBD"],
            link: "#",
            liveUrl: null
        },
        {
            id: 3,
            title: "Project 3",
            description: "Coming soon - screenshot to be added",
            fullDescription: "More details coming soon.",
            image: null,
            technologies: ["TBD"],
            link: "#",
            liveUrl: null
        },
        {
            id: 4,
            title: "Project 4",
            description: "Coming soon - screenshot to be added",
            fullDescription: "More details coming soon.",
            image: null,
            technologies: ["TBD"],
            link: "#",
            liveUrl: null
        }
    ];

    const [activeIndex, setActiveIndex] = useState(0);
    const [detailProject, setDetailProject] = useState(null);
    const [touchStart, setTouchStart] = useState(null);
    const [isPaused, setIsPaused] = useState(false);
    const autoScrollTimer = useRef(null);
    const resumeTimer = useRef(null);

    // Auto-scroll logic
    const startAutoScroll = useCallback(() => {
        if (autoScrollTimer.current) clearInterval(autoScrollTimer.current);

        autoScrollTimer.current = setInterval(() => {
            setActiveIndex((prev) => (prev + 1) % projects.length);
        }, 3000);
    }, [projects.length]);

    const pauseAutoScroll = useCallback(() => {
        if (autoScrollTimer.current) {
            clearInterval(autoScrollTimer.current);
            autoScrollTimer.current = null;
        }
        setIsPaused(true);
    }, []);

    const resumeAutoScrollWithDelay = useCallback(() => {
        if (resumeTimer.current) clearTimeout(resumeTimer.current);

        resumeTimer.current = setTimeout(() => {
            setIsPaused(false);
            startAutoScroll();
        }, 500);
    }, [startAutoScroll]);

    // Initialize auto-scroll
    useEffect(() => {
        startAutoScroll();
        return () => {
            if (autoScrollTimer.current) clearInterval(autoScrollTimer.current);
            if (resumeTimer.current) clearTimeout(resumeTimer.current);
        };
    }, [startAutoScroll]);

    // Pause on reduced motion preference
    useEffect(() => {
        const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');

        if (mediaQuery.matches) {
            pauseAutoScroll();
        }

        const handleChange = (e) => {
            if (e.matches) {
                pauseAutoScroll();
            } else {
                startAutoScroll();
            }
        };

        mediaQuery.addEventListener('change', handleChange);
        return () => mediaQuery.removeEventListener('change', handleChange);
    }, [pauseAutoScroll, startAutoScroll]);

    // Handle hover on active card ONLY
    const handleActiveCardHover = (isHovering) => {
        if (isHovering) {
            pauseAutoScroll();
            if (resumeTimer.current) clearTimeout(resumeTimer.current);
        } else {
            resumeAutoScrollWithDelay();
        }
    };

    // Navigation functions
    const goToNext = useCallback(() => {
        setActiveIndex((prev) => (prev + 1) % projects.length);
        pauseAutoScroll();
        resumeAutoScrollWithDelay();
    }, [projects.length, pauseAutoScroll, resumeAutoScrollWithDelay]);

    const goToPrev = useCallback(() => {
        setActiveIndex((prev) => (prev - 1 + projects.length) % projects.length);
        pauseAutoScroll();
        resumeAutoScrollWithDelay();
    }, [projects.length, pauseAutoScroll, resumeAutoScrollWithDelay]);

    // Keyboard navigation
    useEffect(() => {
        const handleKeyDown = (e) => {
            if (detailProject) return; // Don't navigate when modal is open

            if (e.key === 'ArrowRight' || e.key === 'Right') {
                e.preventDefault();
                goToNext();
            } else if (e.key === 'ArrowLeft' || e.key === 'Left') {
                e.preventDefault();
                goToPrev();
            } else if (e.key === ' ' || e.key === 'Spacebar') {
                // Spacebar toggles auto-scroll pause
                e.preventDefault();
                if (isPaused) {
                    startAutoScroll();
                    setIsPaused(false);
                } else {
                    pauseAutoScroll();
                }
            } else if (e.key === 'Enter') {
                // Enter opens detail modal for active card
                e.preventDefault();
                const activeProject = projects[activeIndex];
                setDetailProject(activeProject);
                pauseAutoScroll();
            }
        };

        window.addEventListener('keydown', handleKeyDown);
        return () => window.removeEventListener('keydown', handleKeyDown);
    }, [goToNext, goToPrev, detailProject, activeIndex, projects, isPaused, pauseAutoScroll, startAutoScroll]);

    // Touch/swipe handling for mobile
    const handleTouchStart = (e) => {
        setTouchStart(e.touches[0].clientX);
        pauseAutoScroll(); // Pause while user is touching
    };

    const handleTouchEnd = (e) => {
        if (!touchStart) return;

        const touchEnd = e.changedTouches[0].clientX;
        const diff = touchStart - touchEnd;

        // Swipe threshold: 50px
        if (Math.abs(diff) > 50) {
            if (diff > 0) {
                goToNext();
            } else {
                goToPrev();
            }
        } else {
            // If didn't swipe far enough, just resume auto-scroll
            resumeAutoScrollWithDelay();
        }

        setTouchStart(null);
    };

    // Calculate card positions relative to active index
    const getCardPosition = (index) => {
        const diff = index - activeIndex;

        // Normalize to -2 to 2 range for better circular wrapping
        if (diff > projects.length / 2) {
            return diff - projects.length;
        }
        if (diff < -projects.length / 2) {
            return diff + projects.length;
        }

        return diff;
    };

    return (
        <section
            id="projects"
            className="relative min-h-screen flex flex-col items-center justify-center px-4 py-24 overflow-hidden"
        >
            <div className="container max-w-7xl mx-auto z-10">
                <div className="space-y-16">
                    {/* Header */}
                    <div className="text-center space-y-4">
                        <h2 className="text-4xl md:text-5xl font-bold">
                            Featured <span className="text-primary">Projects</span>
                        </h2>
                        <p className="text-foreground/70 max-w-2xl mx-auto text-sm sm:text-base">
                            Navigate with arrow keys or swipe on mobile • Click the active card to view details
                        </p>
                    </div>

                    {/* 3D Carousel Container - visionOS spatial design */}
                    <div
                        className="relative w-full h-[400px] sm:h-[450px] md:h-[500px]"
                        style={{
                            perspective: '2000px',
                            perspectiveOrigin: 'center center'
                        }}
                        onTouchStart={handleTouchStart}
                        onTouchEnd={handleTouchEnd}
                    >
                        {/* Preserve 3D context */}
                        <div
                            className="relative w-full h-full"
                            style={{
                                transformStyle: 'preserve-3d'
                            }}
                        >
                            {projects.map((project, index) => {
                                const position = getCardPosition(index);
                                const isActive = position === 0;

                                // Only render cards in visible range (-2 to 2)
                                if (Math.abs(position) > 2) return null;

                                return (
                                    <Card3D
                                        key={project.id}
                                        project={project}
                                        position={position}
                                        isActive={isActive}
                                        onClick={() => {
                                            if (isActive) {
                                                // Open detail modal for active card
                                                setDetailProject(project);
                                                pauseAutoScroll();
                                            } else {
                                                // Navigate to clicked card
                                                setActiveIndex(index);
                                                pauseAutoScroll();
                                                resumeAutoScrollWithDelay();
                                            }
                                        }}
                                        onMouseEnter={() => {
                                            // CRITICAL: Only pause on active card hover
                                            if (isActive) handleActiveCardHover(true);
                                        }}
                                        onMouseLeave={() => {
                                            // Resume when leaving active card
                                            if (isActive) handleActiveCardHover(false);
                                        }}
                                    />
                                );
                            })}
                        </div>
                    </div>

                    {/* Navigation Controls */}
                    <div className="flex items-center justify-center gap-4 sm:gap-6">
                        <button
                            onClick={goToPrev}
                            className="w-11 h-11 sm:w-12 sm:h-12 rounded-full
                                       bg-card/60 hover:bg-card/80 dark:bg-card/40 dark:hover:bg-card/60
                                       border border-border/40 hover:border-primary/40
                                       backdrop-blur-md
                                       flex items-center justify-center
                                       transition-all duration-200
                                       hover:scale-110"
                            aria-label="Previous project"
                        >
                            <ChevronLeft className="w-5 h-5 sm:w-6 sm:h-6 text-foreground" />
                        </button>

                        {/* Indicators */}
                        <div className="flex gap-2">
                            {projects.map((_, index) => (
                                <button
                                    key={index}
                                    onClick={() => {
                                        setActiveIndex(index);
                                        pauseAutoScroll();
                                        resumeAutoScrollWithDelay();
                                    }}
                                    className={cn(
                                        "h-2 rounded-full transition-all duration-300",
                                        index === activeIndex
                                            ? "bg-primary w-8 shadow-[0_0_8px_rgba(255,107,53,0.6)]"
                                            : "bg-foreground/30 hover:bg-foreground/50 w-2"
                                    )}
                                    aria-label={`Go to project ${index + 1}`}
                                    aria-current={index === activeIndex}
                                />
                            ))}
                        </div>

                        <button
                            onClick={goToNext}
                            className="w-11 h-11 sm:w-12 sm:h-12 rounded-full
                                       bg-card/60 hover:bg-card/80 dark:bg-card/40 dark:hover:bg-card/60
                                       border border-border/40 hover:border-primary/40
                                       backdrop-blur-md
                                       flex items-center justify-center
                                       transition-all duration-200
                                       hover:scale-110"
                            aria-label="Next project"
                        >
                            <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6 text-foreground" />
                        </button>
                    </div>

                    {/* Helper text */}
                    <div className="text-center space-y-2">
                        <p className="text-foreground/40 text-xs sm:text-sm">
                            <kbd className="px-2 py-1 bg-card/60 border border-border/40 rounded text-xs">←</kbd>
                            <kbd className="px-2 py-1 bg-card/60 border border-border/40 rounded text-xs mx-1">→</kbd>
                            Navigate •
                            <kbd className="px-2 py-1 bg-card/60 border border-border/40 rounded text-xs mx-1">Space</kbd>
                            Pause •
                            <kbd className="px-2 py-1 bg-card/60 border border-border/40 rounded text-xs mx-1">Enter</kbd>
                            Details
                        </p>
                        {isPaused && (
                            <p className="text-primary/60 text-xs animate-fade-in">
                                Auto-scroll paused • Press Space to resume
                            </p>
                        )}
                    </div>
                </div>
            </div>

            {/* Detail Modal */}
            {detailProject && (
                <ProjectDetailModal
                    project={detailProject}
                    onClose={() => {
                        setDetailProject(null);
                        resumeAutoScrollWithDelay();
                    }}
                />
            )}
        </section>
    );
};
