import { Palette, Zap, Code, Brain } from "lucide-react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faJs, faHtml5, faCss3Alt, faPython, faReact, faSwift } from "@fortawesome/free-brands-svg-icons";

export const SkillsSection = () => {
    const skills = [
        {
            category: "Graphics Design",
            description: "Illustration, branding, and print design.",
            icon: Palette,
            color: "from-pink-500 to-rose-500",
            tools: ["Photoshop", "Illustrator", "Figma", "InDesign"]
        },
        {
            category: "UI/UX Design",
            description: "User research, wireframing, prototyping, and user testing.",
            icon: Zap,
            color: "from-blue-500 to-cyan-500",
            tools: ["Figma", "Sketch", "Adobe XD", "Framer"]
        },
        {
            category: "Frontend Development",
            description: "HTML, CSS, JavaScript, and responsive design.",
            icon: Code,
            color: "from-green-500 to-emerald-500",
            tools: ["React", "Tailwind", "Next.js", "TypeScript"]
        },
        {
            category: "AI and Machine Learning",
            description: "Automating tasks, Analyzing data and building intelligent systems.",
            icon: Brain,
            color: "from-purple-500 to-indigo-500",
            tools: ["TensorFlow", "PyTorch", "Keras", "Pandas"]
        }
    ];

    const languages = [
        {
            name: "SwiftUI",
            icon: faSwift,
            color: "text-orange-600",
            delay: 1
        },
        {
            name: "JavaScript",
            icon: faJs,
            color: "text-yellow-400",
            delay: 2
        },
        {
            name: "HTML",
            icon: faHtml5,
            color: "text-orange-500",
            delay: 3
        },
        {
            name: "CSS",
            icon: faCss3Alt,
            color: "text-blue-500",
            delay: 4
        },
        {
            name: "Python",
            icon: faPython,
            color: "text-blue-600",
            delay: 5
        },
        {
            name: "React",
            icon: faReact,
            color: "text-cyan-400",
            delay: 6
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
                                    className="group relative rounded-xl overflow-hidden
                                               bg-gradient-to-br from-card/80 to-card/40 dark:from-card/60 dark:to-card/20
                                               border border-border/60 dark:border-border/30
                                               backdrop-blur-md
                                               shadow-lg dark:shadow-none
                                               hover:shadow-2xl dark:hover:shadow-2xl
                                               hover:shadow-primary/20 dark:hover:shadow-primary/20
                                               hover:border-primary/60 dark:hover:border-primary/50
                                               transition-all duration-300
                                               cursor-pointer
                                               transform hover:scale-105 hover:-translate-y-2"
                                >
                                    {/* Gradient background on hover */}
                                    <div className={`absolute inset-0 bg-gradient-to-br ${skill.color} opacity-0 group-hover:opacity-10 transition-opacity duration-300`}></div>

                                    {/* Content */}
                                    <div className="relative p-6 space-y-6 flex flex-col items-center text-center">
                                        {/* Icon container - centered at top */}
                                        <div className="p-4 rounded-xl bg-gradient-to-br from-primary/20 to-primary/10
                                                       group-hover:from-primary/40 group-hover:to-primary/20
                                                       transition-all duration-300
                                                       shadow-lg group-hover:shadow-xl group-hover:shadow-primary/20">
                                            <IconComponent className="w-10 h-10 text-primary group-hover:scale-110 transition-transform duration-300" />
                                        </div>

                                        {/* Title and Description */}
                                        <div className="space-y-3">
                                            <h3 className="text-xl md:text-2xl font-bold text-foreground group-hover:text-primary transition-colors duration-300">
                                                {skill.category}
                                            </h3>
                                            <p className="text-sm text-foreground/70 group-hover:text-foreground/90 leading-relaxed transition-colors duration-300">
                                                {skill.description}
                                            </p>
                                        </div>

                                        {/* Tools Section */}
                                        <div className="space-y-2 w-full">
                                            <div className="flex flex-wrap gap-2 justify-center">
                                                {skill.tools.map((tool, toolIndex) => (
                                                    <span
                                                        key={toolIndex}
                                                        className="px-3 py-1 rounded-full text-xs font-medium
                                                                   bg-primary/10 dark:bg-primary/20
                                                                   text-primary
                                                                   border border-primary/20 dark:border-primary/30
                                                                   group-hover:bg-primary/20 dark:group-hover:bg-primary/30
                                                                   group-hover:border-primary/40
                                                                   transition-all duration-300"
                                                    >
                                                        {tool}
                                                    </span>
                                                ))}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            );
                        })}
                    </div>

                    {/* Languages & Technologies subsection */}
                    <div className="mt-24 space-y-12">
                        <h3 className="text-3xl md:text-4xl font-bold text-center">
                            <span className="text-primary">Languages</span> & Technologies
                        </h3>

                        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
                            {languages.map((lang, index) => {
                                return (
                                    <div
                                        key={index}
                                        className="group flex flex-col items-center justify-center p-6 rounded-xl
                                                   bg-gradient-to-br from-card/60 to-card/30 dark:from-card/50 dark:to-card/20
                                                   border border-border/60 dark:border-border/30
                                                   backdrop-blur-md
                                                   shadow-md dark:shadow-none
                                                   hover:shadow-xl dark:hover:shadow-xl
                                                   hover:shadow-primary/20 dark:hover:shadow-primary/20
                                                   hover:border-primary/60 dark:hover:border-primary/50
                                                   transition-all duration-300
                                                   cursor-pointer
                                                   transform hover:scale-110 hover:-translate-y-3"
                                        style={{
                                            animationDelay: `${lang.delay * 0.1}s`
                                        }}
                                    >
                                        {/* FontAwesome Icon */}
                                        <FontAwesomeIcon
                                            icon={lang.icon}
                                            className={`text-5xl mb-4 ${lang.color} group-hover:scale-125 transition-transform duration-300`}
                                        />

                                        {/* Language name */}
                                        <h4 className="text-lg font-semibold text-foreground text-center group-hover:text-primary transition-colors duration-300">
                                            {lang.name}
                                        </h4>
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};
