import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { ExternalLink, Github } from 'lucide-react';
import { cn } from '@/lib/utils';

// Individual Flip Card Component
const FlipCard = ({ project, isFlipped, onFlip, index }) => {
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const checkMobile = () => setIsMobile(window.innerWidth < 768);
        checkMobile();
        window.addEventListener('resize', checkMobile);
        return () => window.removeEventListener('resize', checkMobile);
    }, []);

    const handleClick = (e) => {
        e.stopPropagation();
        onFlip(project.id);
    };

    return (
        <div
            className={cn(
                "flip-card-container transition-all duration-500 ease-out",
                isFlipped ? "col-span-full md:col-span-2" : "col-span-1"
            )}
            style={{
                perspective: '1500px',
                transformStyle: 'preserve-3d',
            }}
        >
            <div
                className={cn(
                    "flip-card relative w-full transition-all duration-700 ease-out cursor-pointer",
                    isFlipped ? "h-[600px]" : "h-[400px]"
                )}
                onClick={handleClick}
                style={{
                    transformStyle: 'preserve-3d',
                    transform: isFlipped ? 'rotateY(180deg)' : 'rotateY(0deg)',
                }}
            >
                {/* Front of Card */}
                <div
                    className="flip-card-face flip-card-front absolute inset-0 rounded-2xl overflow-hidden
                               bg-gradient-to-br from-card/90 to-card/50 dark:from-card/70 dark:to-card/30
                               border border-border/60 dark:border-border/30
                               backdrop-blur-xl
                               shadow-xl dark:shadow-none
                               hover:shadow-2xl dark:hover:shadow-2xl
                               hover:shadow-primary/20 dark:hover:shadow-primary/20
                               hover:border-primary/60 dark:hover:border-primary/50
                               transition-all duration-300"
                    style={{
                        backfaceVisibility: 'hidden',
                        WebkitBackfaceVisibility: 'hidden',
                    }}
                >
                    {/* Project Image */}
                    <div className="relative w-full h-full">
                        {project.image ? (
                            <>
                                <img
                                    src={project.image}
                                    alt={project.title}
                                    className="w-full h-full object-cover"
                                />
                                {/* Gradient Overlay */}
                                <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/60 to-transparent"></div>
                            </>
                        ) : (
                            <div className="w-full h-full bg-gradient-to-br from-primary/30 to-primary/10
                                           flex items-center justify-center relative overflow-hidden">
                                <div className="absolute inset-0 opacity-10">
                                    <div className="absolute top-0 left-0 w-40 h-40 bg-primary rounded-full blur-3xl"></div>
                                    <div className="absolute bottom-0 right-0 w-40 h-40 bg-primary rounded-full blur-3xl"></div>
                                </div>
                                <p className="text-foreground/60 text-center px-4 font-medium relative z-10">
                                    Screenshot coming soon
                                </p>
                            </div>
                        )}

                        {/* Title Overlay */}
                        <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8 z-10">
                            <h3 className="text-2xl md:text-3xl font-bold text-white mb-2">
                                {project.title}
                            </h3>
                            <p className="text-white/70 text-sm mb-3">
                                {project.description}
                            </p>
                            <p className="text-white/80 text-xs flex items-center gap-2">
                                <span className="inline-block w-2 h-2 rounded-full bg-primary animate-pulse"></span>
                                Click to see details
                            </p>
                        </div>

                        {/* Flip Indicator */}
                        <div className="absolute top-4 right-4 p-3 rounded-full
                                       bg-primary/20 backdrop-blur-md
                                       border border-primary/40
                                       group-hover:scale-110
                                       transition-transform duration-300">
                            <ExternalLink className="w-5 h-5 text-primary" />
                        </div>

                        {/* Hover Glow */}
                        <div className="absolute inset-0 bg-gradient-to-t from-primary/5 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
                    </div>
                </div>

                {/* Back of Card */}
                <div
                    className="flip-card-face flip-card-back absolute inset-0 rounded-2xl overflow-hidden
                               bg-gradient-to-br from-card/95 to-card/70 dark:from-card/85 dark:to-card/60
                               border-2 border-primary/50 dark:border-primary/40
                               backdrop-blur-xl
                               shadow-2xl dark:shadow-none
                               p-6 md:p-8 flex flex-col justify-between
                               overflow-y-auto"
                    style={{
                        backfaceVisibility: 'hidden',
                        WebkitBackfaceVisibility: 'hidden',
                        transform: 'rotateY(180deg)',
                    }}
                >
                    {/* Close indicator */}
                    <div className="absolute top-4 right-4 text-xs text-foreground/50 flex items-center gap-2">
                        <span>Click to close</span>
                        <div className="w-6 h-6 rounded-full border border-foreground/30 flex items-center justify-center">
                            <span className="text-foreground/50">×</span>
                        </div>
                    </div>

                    <div className="space-y-6 mt-8">
                        {/* Title */}
                        <div>
                            <h3 className="text-3xl md:text-4xl font-bold text-primary mb-2">
                                {project.title}
                            </h3>
                            <p className="text-foreground/60 text-sm">
                                {project.description}
                            </p>
                        </div>

                        {/* Description */}
                        <div>
                            <h4 className="text-sm font-semibold text-foreground/70 uppercase tracking-wide mb-3">
                                About This Project
                            </h4>
                            <p className="text-foreground/80 leading-relaxed text-base">
                                {project.fullDescription || project.description}
                            </p>
                        </div>

                        {/* Tech Stack */}
                        <div className="space-y-3">
                            <h4 className="text-sm font-semibold text-foreground/70 uppercase tracking-wide">
                                Tech Stack
                            </h4>
                            <div className="flex flex-wrap gap-2">
                                {project.technologies.map((tech, idx) => (
                                    <span
                                        key={idx}
                                        className="px-4 py-2 rounded-full text-sm font-medium
                                                   bg-primary/15 dark:bg-primary/25
                                                   text-primary
                                                   border border-primary/30
                                                   hover:bg-primary/25 dark:hover:bg-primary/35
                                                   hover:scale-105
                                                   transition-all duration-300"
                                    >
                                        {tech}
                                    </span>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Links */}
                    <div className="flex flex-col sm:flex-row gap-3 pt-6 mt-auto">
                        {project.link && project.link !== '#' && (
                            <a
                                href={project.link}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center justify-center gap-2 px-6 py-3 rounded-xl
                                           bg-primary text-primary-foreground font-semibold
                                           hover:shadow-[0_0_25px_rgba(255,107,53,0.5)]
                                           hover:scale-105
                                           transition-all duration-300"
                                onClick={(e) => e.stopPropagation()}
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
                                           hover:bg-primary/15
                                           hover:border-primary/60
                                           hover:scale-105
                                           transition-all duration-300"
                                onClick={(e) => e.stopPropagation()}
                            >
                                <ExternalLink className="w-5 h-5" />
                                <span>Live Demo</span>
                            </a>
                        )}
                    </div>

                    {/* Glow Effect */}
                    <div className="absolute inset-0 bg-gradient-to-t from-primary/10 to-transparent pointer-events-none rounded-2xl"></div>
                </div>
            </div>
        </div>
    );
};

export const ProjectsSection = () => {
    const [flippedCard, setFlippedCard] = useState(null);

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

    const handleFlip = (projectId) => {
        setFlippedCard(flippedCard === projectId ? null : projectId);
    };

    // Close flipped card when clicking outside
    useEffect(() => {
        const handleClickOutside = (e) => {
            if (flippedCard && !e.target.closest('.flip-card-container')) {
                setFlippedCard(null);
            }
        };

        document.addEventListener('click', handleClickOutside);
        return () => document.removeEventListener('click', handleClickOutside);
    }, [flippedCard]);

    // Keyboard navigation
    useEffect(() => {
        const handleKeyDown = (e) => {
            if (e.key === 'Escape' && flippedCard) {
                setFlippedCard(null);
            }
        };

        window.addEventListener('keydown', handleKeyDown);
        return () => window.removeEventListener('keydown', handleKeyDown);
    }, [flippedCard]);

    return (
        <section id="projects" className="relative min-h-screen flex flex-col items-center justify-center px-4 py-24">
            <div className="container max-w-7xl mx-auto z-10">
                <div className="space-y-12">
                    {/* Header */}
                    <div className="text-center space-y-4">
                        <h2 className="text-4xl md:text-5xl font-bold">
                            Featured <span className="text-primary">Projects</span>
                        </h2>
                        <p className="text-foreground/70 max-w-2xl mx-auto">
                            Click on any project card to explore details, tech stack, and links
                        </p>
                    </div>

                    {/* Projects Grid - Accordion Style */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 auto-rows-fr">
                        {projects.map((project, index) => (
                            <FlipCard
                                key={project.id}
                                project={project}
                                isFlipped={flippedCard === project.id}
                                onFlip={handleFlip}
                                index={index}
                            />
                        ))}
                    </div>

                    {/* Helper text */}
                    <div className="text-center">
                        <p className="text-foreground/40 text-sm">
                            Press <kbd className="px-2 py-1 bg-card/60 border border-border/40 rounded text-xs">ESC</kbd> to close expanded cards
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};
