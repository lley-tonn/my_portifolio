import { Palette, Zap, Code, Brain } from "lucide-react";

export const SkillsSection = () => {
    const skills = [
        {
            category: "Graphics Design",
            description: "Illustration, branding, and print design.",
            icon: Palette,
            color: "from-pink-500 to-rose-500"
        },
        {
            category: "UI/UX Design",
            description: "User research, wireframing, prototyping, and user testing.",
            icon: Zap,
            color: "from-blue-500 to-cyan-500"
        },
        {
            category: "Frontend Development",
            description: "HTML, CSS, JavaScript, and responsive design.",
            icon: Code,
            color: "from-green-500 to-emerald-500"
        },
        {
            category: "AI and Machine Learning",
            description: "Automating tasks, Analyzing data and building intelligent systems.",
            icon: Brain,
            color: "from-purple-500 to-indigo-500"
        }
    ];

    return (
        <section id="skills" className="relative min-h-screen flex flex-col items-center justify-center px-4 py-24">
            <div className="container max-w-7xl mx-auto z-10">
                <div className="space-y-12">
                    <h2 className="text-4xl md:text-5xl font-bold text-center">
                        <span className="text-primary">Skills</span> & Expertise
                    </h2>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {skills.map((skill, index) => {
                            const IconComponent = skill.icon;
                            return (
                                <div 
                                    key={index}
                                    className="group relative h-96 rounded-xl overflow-hidden
                                               bg-gradient-to-br from-card/80 to-card/40 dark:from-card/60 dark:to-card/20
                                               border border-border/40 dark:border-border/30
                                               backdrop-blur-md
                                               hover:border-primary/60 dark:hover:border-primary/50
                                               transition-all duration-300 
                                               hover:shadow-2xl hover:shadow-primary/20
                                               cursor-pointer
                                               transform hover:scale-105 hover:-translate-y-2"
                                >
                                    {/* Gradient background on hover */}
                                    <div className={`absolute inset-0 bg-gradient-to-br ${skill.color} opacity-0 group-hover:opacity-10 transition-opacity duration-300`}></div>
                                    
                                    {/* Icon container */}
                                    <div className="absolute top-6 right-6 p-4 rounded-lg bg-gradient-to-br from-primary/20 to-primary/10 
                                                    group-hover:from-primary/40 group-hover:to-primary/20 transition-all duration-300">
                                        <IconComponent className="w-8 h-8 text-primary group-hover:scale-110 transition-transform duration-300" />
                                    </div>

                                    {/* Content */}
                                    <div className="relative h-full flex flex-col justify-between p-8">
                                        <div className="space-y-4">
                                            <h3 className="text-2xl md:text-3xl font-bold text-foreground group-hover:text-primary transition-colors duration-300">
                                                {skill.category}
                                            </h3>
                                            <p className="text-foreground/70 group-hover:text-foreground/90 text-base leading-relaxed transition-colors duration-300">
                                                {skill.description}
                                            </p>
                                        </div>

                                        {/* Hover indicator */}
                                        <div className="flex items-center gap-2 text-primary opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                            <span className="text-sm font-semibold">Learn more</span>
                                            <span className="group-hover:translate-x-1 transition-transform duration-300">→</span>
                                        </div>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </div>
        </section>
    );
};
