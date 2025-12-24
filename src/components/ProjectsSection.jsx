import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { ChevronLeft, ChevronRight, ExternalLink } from 'lucide-react';

export const ProjectsSection = () => {
    const navigate = useNavigate();
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isAutoPlaying, setIsAutoPlaying] = useState(true);

    const projects = [
        {
            id: 1,
            title: "CinQ",
            description: "Event Management App",
            fullDescription: "A comprehensive event management application built with React and Node.js. Features include event creation, ticket management, attendee tracking, and real-time notifications.",
            image: "/screenshots/CinQ.jpg",
            technologies: ["React", "Node.js", "MongoDB"],
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

    // Auto-slide carousel every 4 seconds
    useEffect(() => {
        if (!isAutoPlaying) return;

        const interval = setInterval(() => {
            nextSlide();
        }, 4000);

        return () => clearInterval(interval);
    }, [currentIndex, isAutoPlaying]);

    const nextSlide = () => {
        setCurrentIndex((prev) => (prev + 1) % projects.length);
    };

    const prevSlide = () => {
        setCurrentIndex((prev) => (prev - 1 + projects.length) % projects.length);
    };

    const goToSlide = (index) => {
        setCurrentIndex(index);
        setIsAutoPlaying(false);
    };

    // Get 3 projects to display (with wrapping)
    const getDisplayedProjects = () => {
        const displayed = [];
        for (let i = 0; i < 3; i++) {
            displayed.push(projects[(currentIndex + i) % projects.length]);
        }
        return displayed;
    };

    const displayedProjects = getDisplayedProjects();

    return (
        <section id="projects" className="relative min-h-screen flex flex-col items-center justify-center px-4 py-24">
            <div className="container max-w-7xl mx-auto z-10">
                <div className="space-y-16">
                    {/* Header */}
                    <div className="text-center space-y-4">
                        <h2 className="text-4xl md:text-5xl font-bold">
                            Featured <span className="text-primary">Projects</span>
                        </h2>
                        <p className="text-foreground/70 max-w-2xl mx-auto">
                            Explore my latest work and creative solutions
                        </p>
                    </div>

                    {/* Carousel Container */}
                    <div className="relative">
                        {/* Cards Grid */}
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
                            {displayedProjects.map((project, idx) => (
                                <div
                                    key={`${project.id}-${idx}`}
                                    onClick={() => navigate(`/project/${project.id}`)}
                                    className="group relative rounded-2xl overflow-hidden
                                               bg-gradient-to-br from-card/90 to-card/50 dark:from-card/70 dark:to-card/30
                                               border border-border/60 dark:border-border/30
                                               backdrop-blur-xl
                                               shadow-xl dark:shadow-none
                                               hover:shadow-2xl dark:hover:shadow-2xl
                                               hover:shadow-primary/30 dark:hover:shadow-primary/30
                                               hover:border-primary/60 dark:hover:border-primary/50
                                               transition-all duration-500
                                               cursor-pointer
                                               transform hover:scale-[1.02] hover:-translate-y-2
                                               animate-fade-in"
                                    style={{ animationDelay: `${idx * 0.1}s` }}
                                >
                                    {/* Project Image */}
                                    <div className="relative w-full h-64 overflow-hidden">
                                        {project.image ? (
                                            <>
                                                <img
                                                    src={project.image}
                                                    alt={project.title}
                                                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                                                />
                                                {/* Gradient Overlay */}
                                                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent"></div>

                                                {/* Floating Action Icon */}
                                                <div className="absolute top-4 right-4 p-3 rounded-full
                                                               bg-primary/20 backdrop-blur-md
                                                               border border-primary/40
                                                               opacity-0 group-hover:opacity-100
                                                               transform translate-y-2 group-hover:translate-y-0
                                                               transition-all duration-300">
                                                    <ExternalLink className="w-5 h-5 text-primary" />
                                                </div>
                                            </>
                                        ) : (
                                            <div className="w-full h-full bg-gradient-to-br from-primary/30 to-primary/10
                                                           flex items-center justify-center relative overflow-hidden">
                                                {/* Animated background pattern */}
                                                <div className="absolute inset-0 opacity-10">
                                                    <div className="absolute top-0 left-0 w-40 h-40 bg-primary rounded-full blur-3xl"></div>
                                                    <div className="absolute bottom-0 right-0 w-40 h-40 bg-primary rounded-full blur-3xl"></div>
                                                </div>
                                                <p className="text-foreground/60 text-center px-4 font-medium relative z-10">
                                                    Screenshot coming soon
                                                </p>
                                            </div>
                                        )}
                                    </div>

                                    {/* Project Info */}
                                    <div className="p-6 space-y-4">
                                        {/* Title */}
                                        <div className="flex items-start justify-between gap-4">
                                            <h3 className="text-2xl font-bold text-foreground
                                                          group-hover:text-primary
                                                          transition-colors duration-300">
                                                {project.title}
                                            </h3>
                                        </div>

                                        {/* Description */}
                                        <p className="text-foreground/70 text-sm leading-relaxed line-clamp-2">
                                            {project.description}
                                        </p>

                                        {/* Technologies */}
                                        <div className="flex flex-wrap gap-2 pt-2">
                                            {project.technologies.map((tech, index) => (
                                                <span
                                                    key={index}
                                                    className="px-3 py-1.5 rounded-full text-xs font-medium
                                                               bg-primary/10 dark:bg-primary/20
                                                               text-primary
                                                               border border-primary/20 dark:border-primary/30
                                                               group-hover:bg-primary/20 dark:group-hover:bg-primary/30
                                                               group-hover:border-primary/40
                                                               transition-all duration-300"
                                                >
                                                    {tech}
                                                </span>
                                            ))}
                                        </div>

                                        {/* View Project Link */}
                                        <div className="flex items-center gap-2 text-primary font-semibold text-sm
                                                       opacity-0 group-hover:opacity-100
                                                       transform translate-y-2 group-hover:translate-y-0
                                                       transition-all duration-300">
                                            <span>View Project</span>
                                            <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300"
                                                 fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                            </svg>
                                        </div>
                                    </div>

                                    {/* Hover Glow Effect */}
                                    <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
                                        <div className="absolute inset-0 bg-gradient-to-t from-primary/5 to-transparent"></div>
                                    </div>
                                </div>
                            ))}
                        </div>

                        {/* Navigation Controls */}
                        <div className="flex items-center justify-center gap-4 mt-8">
                            {/* Previous Button */}
                            <button
                                onClick={prevSlide}
                                onMouseEnter={() => setIsAutoPlaying(false)}
                                className="p-3 rounded-full
                                           bg-card/80 dark:bg-card/60
                                           border border-border/40 dark:border-border/30
                                           backdrop-blur-md
                                           hover:border-primary/60 dark:hover:border-primary/50
                                           hover:bg-primary/10 dark:hover:bg-primary/20
                                           transition-all duration-300
                                           group"
                                aria-label="Previous project"
                            >
                                <ChevronLeft className="w-5 h-5 text-foreground/70 group-hover:text-primary transition-colors duration-300" />
                            </button>

                            {/* Dots Indicator */}
                            <div className="flex items-center gap-2">
                                {projects.map((_, index) => (
                                    <button
                                        key={index}
                                        onClick={() => goToSlide(index)}
                                        className={`transition-all duration-300 rounded-full
                                                   ${index === currentIndex
                                                       ? 'w-8 h-2 bg-primary'
                                                       : 'w-2 h-2 bg-foreground/30 hover:bg-foreground/50'}`}
                                        aria-label={`Go to project ${index + 1}`}
                                    />
                                ))}
                            </div>

                            {/* Next Button */}
                            <button
                                onClick={nextSlide}
                                onMouseEnter={() => setIsAutoPlaying(false)}
                                className="p-3 rounded-full
                                           bg-card/80 dark:bg-card/60
                                           border border-border/40 dark:border-border/30
                                           backdrop-blur-md
                                           hover:border-primary/60 dark:hover:border-primary/50
                                           hover:bg-primary/10 dark:hover:bg-primary/20
                                           transition-all duration-300
                                           group"
                                aria-label="Next project"
                            >
                                <ChevronRight className="w-5 h-5 text-foreground/70 group-hover:text-primary transition-colors duration-300" />
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};
