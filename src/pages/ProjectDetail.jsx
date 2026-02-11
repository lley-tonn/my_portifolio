import { useParams } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { ExternalLink, Github, ArrowLeft, Zap, Clock, Search, Accessibility } from 'lucide-react';
import { FooterSection } from '../components/layout/FooterSection';
import { getProject } from '../data/projects';

export const ProjectDetail = () => {
    const { slug, projectId } = useParams();
    const identifier = slug || projectId;
    const project = getProject(identifier);

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

    const defaultSeo = {
        title: `${project.title} – Project | Agenorwoth Adrian`,
        description: project.fullDescription || project.description,
        openGraph: {
            title: `${project.title} – Project | Agenorwoth Adrian`,
            description: project.fullDescription || project.description,
            url: `/projects/${project.slug}`,
            type: 'website'
        }
    };

    const seo = project.seo || defaultSeo;

    return (
        <div className="min-h-screen flex flex-col">
            <Helmet>
                <title>{seo.title}</title>
                <meta name="description" content={seo.description} />
                <meta property="og:title" content={seo.openGraph?.title || seo.title} />
                <meta property="og:description" content={seo.openGraph?.description || seo.description} />
                <meta property="og:url" content={seo.openGraph?.url || `/projects/${project.slug}`} />
                <meta property="og:type" content={seo.openGraph?.type || 'website'} />
            </Helmet>

            <main className="flex-grow relative w-full">
                {/* Back Button */}
                <div className="relative z-10 px-4 py-6 bg-background/80 backdrop-blur-sm">
                    <div className="max-w-4xl mx-auto">
                        <button
                            onClick={() => window.history.back()}
                            className="flex items-center gap-2 text-primary hover:gap-4 transition-all font-semibold mb-8"
                        >
                            <ArrowLeft className="w-5 h-5" />
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
                        {/* Title and Tagline */}
                        <div className="space-y-4">
                            <h1 className="text-5xl md:text-6xl font-bold text-foreground">
                                {project.title}
                            </h1>
                            {project.tagline && (
                                <p className="text-xl text-primary font-medium">
                                    {project.tagline}
                                </p>
                            )}
                        </div>

                        {/* Overview Section */}
                        {project.overview && (
                            <div className="space-y-4">
                                <h2 className="text-2xl font-bold text-foreground">Overview</h2>
                                <p className="text-foreground/80 text-lg leading-relaxed">
                                    {project.overview}
                                </p>
                            </div>
                        )}

                        {/* Problem Section */}
                        {project.problem && project.problem.length > 0 && (
                            <div className="space-y-4 p-6 rounded-xl bg-gradient-to-br from-red-500/10 to-red-500/5 border border-red-500/20">
                                <h2 className="text-2xl font-bold text-foreground">Problem</h2>
                                <ul className="space-y-3">
                                    {project.problem.map((item, index) => (
                                        <li key={index} className="flex items-start gap-3">
                                            <span className="w-2 h-2 rounded-full bg-red-500 mt-2.5 flex-shrink-0"></span>
                                            <span className="text-foreground/80 text-lg">{item}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        )}

                        {/* Solution Section */}
                        {project.solution && project.solution.length > 0 && (
                            <div className="space-y-4 p-6 rounded-xl bg-gradient-to-br from-green-500/10 to-green-500/5 border border-green-500/20">
                                <h2 className="text-2xl font-bold text-foreground">Solution</h2>
                                <ul className="space-y-3">
                                    {project.solution.map((item, index) => (
                                        <li key={index} className="flex items-start gap-3">
                                            <svg className="w-6 h-6 text-green-500 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                                                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                                            </svg>
                                            <span className="text-foreground/80 text-lg">{item}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        )}

                        {/* Technologies */}
                        <div className="space-y-4">
                            <h2 className="text-2xl font-bold text-foreground">Tech Stack</h2>
                            <div className="flex flex-wrap gap-3">
                                {project.technologies.map((tech, index) => (
                                    <span
                                        key={index}
                                        className="px-4 py-2 rounded-full text-sm font-medium
                                                   bg-primary/15 text-primary border border-primary/30
                                                   hover:bg-primary/25 transition-colors"
                                    >
                                        {tech}
                                    </span>
                                ))}
                            </div>
                        </div>

                        {/* Key Features */}
                        {project.features && project.features.length > 0 && (
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

                        {/* Performance Metrics */}
                        {project.metrics && (
                            <div className="space-y-6">
                                <h2 className="text-2xl font-bold text-foreground">Performance Metrics</h2>
                                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                                    {project.metrics.lighthouse && (
                                        <div className="p-6 rounded-xl bg-gradient-to-br from-card/80 to-card/40 border border-border/40 text-center space-y-2">
                                            <Zap className="w-8 h-8 text-primary mx-auto" />
                                            <p className="text-3xl font-bold text-primary">{project.metrics.lighthouse}</p>
                                            <p className="text-sm text-foreground/60 font-medium">Lighthouse</p>
                                        </div>
                                    )}
                                    {project.metrics.loadTime && (
                                        <div className="p-6 rounded-xl bg-gradient-to-br from-card/80 to-card/40 border border-border/40 text-center space-y-2">
                                            <Clock className="w-8 h-8 text-primary mx-auto" />
                                            <p className="text-3xl font-bold text-primary">{project.metrics.loadTime}</p>
                                            <p className="text-sm text-foreground/60 font-medium">Load Time</p>
                                        </div>
                                    )}
                                    {project.metrics.seo && (
                                        <div className="p-6 rounded-xl bg-gradient-to-br from-card/80 to-card/40 border border-border/40 text-center space-y-2">
                                            <Search className="w-8 h-8 text-primary mx-auto" />
                                            <p className="text-3xl font-bold text-primary">{project.metrics.seo}</p>
                                            <p className="text-sm text-foreground/60 font-medium">SEO Score</p>
                                        </div>
                                    )}
                                    {project.metrics.accessibility && (
                                        <div className="p-6 rounded-xl bg-gradient-to-br from-card/80 to-card/40 border border-border/40 text-center space-y-2">
                                            <Accessibility className="w-8 h-8 text-primary mx-auto" />
                                            <p className="text-3xl font-bold text-primary">{project.metrics.accessibility}</p>
                                            <p className="text-sm text-foreground/60 font-medium">Accessibility</p>
                                        </div>
                                    )}
                                </div>
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
                                    <ExternalLink className="w-5 h-5" />
                                    View Live Project
                                </a>
                            )}
                            {project.link && project.link !== '#' && (
                                <a
                                    href={project.link}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex-1 px-6 py-4 border border-foreground/30 text-foreground font-semibold rounded-lg hover:border-foreground hover:bg-foreground/5 transition-colors flex items-center justify-center gap-2 text-lg"
                                >
                                    <Github className="w-5 h-5" />
                                    View on GitHub
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
