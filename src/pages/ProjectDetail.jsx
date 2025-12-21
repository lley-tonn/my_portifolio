import { useParams, useNavigate } from 'react-router-dom';
import { FooterSection } from '../components/FooterSection';

// Project data - same as in ProjectsSection
const projectsData = [
    {
        id: 1,
        title: "CinQ",
        description: "Event Management App",
        fullDescription: "A comprehensive event management application built with React and Node.js. Features include event creation, ticket management, attendee tracking, and real-time notifications. CinQ simplifies the entire event lifecycle from planning to execution, providing organizers with powerful tools to manage attendees, check-ins, and post-event analytics.",
        image: "/screenshots/CinQ.jpg",
        technologies: ["React", "Node.js", "MongoDB", "Express", "JWT Auth"],
        link: "#",
        liveUrl: null,
        features: [
            "Event creation and management",
            "Ticket sales and management",
            "Real-time attendee tracking",
            "Check-in system",
            "Event analytics and reporting",
            "Email notifications"
        ],
        challenges: "Building a scalable system that could handle multiple concurrent events with real-time updates required careful database optimization and WebSocket implementation.",
        learnings: "Gained deep experience with full-stack development, real-time data synchronization, and user authentication systems."
    },
    {
        id: 2,
        title: "Project 2",
        description: "Coming soon - screenshot to be added",
        fullDescription: "More details coming soon.",
        image: null,
        technologies: ["TBD"],
        link: "#",
        liveUrl: null,
        features: [],
        challenges: "",
        learnings: ""
    },
    {
        id: 3,
        title: "Project 3",
        description: "Coming soon - screenshot to be added",
        fullDescription: "More details coming soon.",
        image: null,
        technologies: ["TBD"],
        link: "#",
        liveUrl: null,
        features: [],
        challenges: "",
        learnings: ""
    },
    {
        id: 4,
        title: "Project 4",
        description: "Coming soon - screenshot to be added",
        fullDescription: "More details coming soon.",
        image: null,
        technologies: ["TBD"],
        link: "#",
        liveUrl: null,
        features: [],
        challenges: "",
        learnings: ""
    }
];

export const ProjectDetail = () => {
    const { projectId } = useParams();
    const navigate = useNavigate();
    const project = projectsData.find(p => p.id === parseInt(projectId));

    if (!project) {
        return (
            <div className="min-h-screen flex flex-col">
                <main className="flex-grow flex items-center justify-center px-4 py-24">
                    <div className="text-center space-y-4">
                        <h1 className="text-4xl font-bold text-foreground">Project Not Found</h1>
                        <p className="text-foreground/70 text-lg">The project you're looking for doesn't exist.</p>
                        <button
                            onClick={() => window.history.back()}
                            className="mt-6 px-6 py-3 bg-primary text-background font-semibold rounded-lg hover:bg-primary/90 transition-colors"
                        >
                            Back to Projects
                        </button>
                    </div>
                </main>
                <FooterSection />
            </div>
        );
    }

    return (
        <div className="min-h-screen flex flex-col">

            <main className="flex-grow relative w-full">
                {/* Back Button */}
                <div className="relative z-10 px-4 py-6 bg-background/80 backdrop-blur-sm">
                    <div className="max-w-4xl mx-auto">
                        <button
                            onClick={() => window.history.back()}
                            className="flex items-center gap-2 text-primary hover:gap-4 transition-all font-semibold mb-8"
                        >
                            <svg className="w-5 h-5 rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                            </svg>
                            Back to Projects
                        </button>
                    </div>
                </div>

                {/* Project Hero Section */}
                {project.image && (
                    <div className="relative w-full h-96 overflow-hidden">
                        <img
                            src={project.image}
                            alt={project.title}
                            className="w-full h-full object-cover"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>
                    </div>
                )}

                {/* Project Content */}
                <div className="relative z-10 px-4 py-24">
                    <div className="max-w-4xl mx-auto space-y-12">
                        {/* Title and Description */}
                        <div className="space-y-4">
                            <h1 className="text-5xl md:text-6xl font-bold text-foreground">
                                {project.title}
                            </h1>
                            <p className="text-xl text-foreground/80 leading-relaxed">
                                {project.fullDescription}
                            </p>
                        </div>

                        {/* Technologies */}
                        <div className="space-y-4">
                            <h2 className="text-2xl font-bold text-foreground">Technologies Used</h2>
                            <div className="flex flex-wrap gap-3">
                                {project.technologies.map((tech, index) => (
                                    <span
                                        key={index}
                                        className="px-4 py-2 rounded-lg bg-primary/20 text-primary border border-primary/40 font-medium"
                                    >
                                        {tech}
                                    </span>
                                ))}
                            </div>
                        </div>

                        {/* Features */}
                        {project.features.length > 0 && (
                            <div className="space-y-4">
                                <h2 className="text-2xl font-bold text-foreground">Key Features</h2>
                                <ul className="space-y-3">
                                    {project.features.map((feature, index) => (
                                        <li key={index} className="flex items-start gap-3">
                                            <svg className="w-6 h-6 text-primary flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                                                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                                            </svg>
                                            <span className="text-foreground/80 text-lg">{feature}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        )}

                        {/* Challenges */}
                        {project.challenges && (
                            <div className="space-y-4 p-6 rounded-xl bg-gradient-to-br from-card/80 to-card/40 border border-border/40">
                                <h2 className="text-2xl font-bold text-foreground">Challenges</h2>
                                <p className="text-foreground/80 text-lg leading-relaxed">
                                    {project.challenges}
                                </p>
                            </div>
                        )}

                        {/* Learnings */}
                        {project.learnings && (
                            <div className="space-y-4 p-6 rounded-xl bg-gradient-to-br from-primary/20 to-primary/10 border border-primary/40">
                                <h2 className="text-2xl font-bold text-foreground">Key Learnings</h2>
                                <p className="text-foreground/80 text-lg leading-relaxed">
                                    {project.learnings}
                                </p>
                            </div>
                        )}

                        {/* Action Buttons */}
                        <div className="flex flex-col sm:flex-row gap-4 pt-8">
                            {project.liveUrl && (
                                <a
                                    href={project.liveUrl}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex-1 px-6 py-4 bg-primary text-background font-semibold rounded-lg hover:bg-primary/90 transition-colors flex items-center justify-center gap-2 text-lg"
                                >
                                    View Live Project
                                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                                    </svg>
                                </a>
                            )}
                            <button
                                onClick={() => window.history.back()}
                                className="flex-1 px-6 py-4 border border-primary/60 text-primary font-semibold rounded-lg hover:border-primary hover:bg-primary/10 transition-colors text-lg"
                            >
                                Back to Projects
                            </button>
                        </div>
                    </div>
                </div>
            </main>

            <FooterSection />
        </div>
    );
};
