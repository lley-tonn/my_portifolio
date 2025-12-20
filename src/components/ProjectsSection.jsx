import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

export const ProjectsSection = () => {
    const navigate = useNavigate();
    const [showAll, setShowAll] = useState(false);
    const [currentIndex, setCurrentIndex] = useState(0);

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

    // Auto-slide carousel every 3 seconds
    useEffect(() => {
        if (showAll) return; // Don't auto-slide when showing all
        
        const interval = setInterval(() => {
            setCurrentIndex((prev) => (prev + 2) % projects.length);
        }, 3000);

        return () => clearInterval(interval);
    }, [showAll, projects.length]);

    const displayedProjects = showAll 
        ? projects 
        : projects.slice(currentIndex, currentIndex + 2).length === 2
            ? projects.slice(currentIndex, currentIndex + 2)
            : [...projects.slice(currentIndex), ...projects.slice(0, (currentIndex + 2) % projects.length)];

    return (
        <section id="projects" className="relative min-h-screen flex flex-col items-center justify-center px-4 py-24">
            <div className="container max-w-6xl mx-auto z-10">
                <div className="space-y-12">
                    <h2 className="text-4xl md:text-5xl font-bold text-center">
                        Featured <span className="text-primary">Projects</span>
                    </h2>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 transition-all duration-500">
                        {displayedProjects.map((project) => (
                            <div
                                key={project.id}
                                onClick={() => navigate(`/project/${project.id}`)}
                                className="group relative rounded-xl overflow-hidden
                                           bg-gradient-to-br from-card/80 to-card/40
                                           border border-border/40
                                           backdrop-blur-md
                                           hover:border-primary/60
                                           transition-all duration-300
                                           hover:shadow-2xl hover:shadow-primary/20
                                           cursor-pointer
                                           transform hover:scale-105 hover:-translate-y-2
                                           flex flex-col h-full"
                            >
                                {/* Project Image */}
                                {project.image ? (
                                    <div className="relative w-full h-80 overflow-hidden bg-background/50">
                                        <img
                                            src={project.image}
                                            alt={project.title}
                                            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                                        />
                                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                                    </div>
                                ) : (
                                    <div className="w-full h-80 bg-gradient-to-br from-primary/20 to-primary/10 flex items-center justify-center">
                                        <p className="text-foreground/50 text-center px-4">Screenshot coming soon</p>
                                    </div>
                                )}

                                {/* Project Info */}
                                <div className="p-6 space-y-4 flex-grow flex flex-col">
                                    <h3 className="text-xl font-bold text-foreground group-hover:text-primary transition-colors duration-300 text-left">
                                        {project.title}
                                    </h3>

                                    <p className="text-foreground/70 text-sm leading-relaxed flex-grow text-left">
                                        {project.description}
                                    </p>

                                    {/* Technologies */}
                                    <div className="flex flex-wrap gap-2 pt-2">
                                        {project.technologies.map((tech, index) => (
                                            <span
                                                key={index}
                                                className="px-2 py-1 rounded-full text-xs
                                                           bg-primary/20 text-primary
                                                           group-hover:bg-primary/40
                                                           transition-colors duration-300"
                                            >
                                                {tech}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Show All/Show Less Projects Arrow */}
                    <div className="flex justify-center pt-8">
                        <button 
                            onClick={() => setShowAll(!showAll)}
                            className="group flex items-center gap-2 text-primary font-semibold hover:gap-4 transition-all duration-300 bg-none border-none cursor-pointer p-0"
                        >
                            {showAll ? 'Show Less Projects' : 'Show All Projects'}
                            <svg className={`w-5 h-5 transition-transform duration-300 ${showAll ? 'rotate-180' : ''} group-hover:translate-x-1`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                            </svg>
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
};
