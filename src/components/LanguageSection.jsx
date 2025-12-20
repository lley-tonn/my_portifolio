import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faJs, faHtml5, faCss3Alt, faPython, faReact } from "@fortawesome/free-brands-svg-icons";

export const LanguagesSection = () => {
    const languages = [
        {
            name: "JavaScript",
            icon: faJs,
            color: "text-yellow-400",
            delay: 1
        },
        {
            name: "HTML",
            icon: faHtml5,
            color: "text-orange-500",
            delay: 2
        },
        {
            name: "CSS",
            icon: faCss3Alt,
            color: "text-blue-500",
            delay: 3
        },
        {
            name: "Python",
            icon: faPython,
            color: "text-blue-600",
            delay: 4
        },
        {
            name: "React",
            icon: faReact,
            color: "text-cyan-400",
            delay: 5
        }
    ];

    return (
        <section id="languages" className="relative min-h-screen flex flex-col items-center justify-center px-4 py-24">
            <div className="container max-w-6xl mx-auto z-10">
                <div className="space-y-12">
                    <h2 className="text-4xl md:text-5xl font-bold text-center">
                        <span className="text-primary">Languages</span> & Technologies
                    </h2>

                    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
                        {languages.map((lang, index) => {
                            return (
                                <div
                                    key={index}
                                    className="group flex flex-col items-center justify-center p-6 rounded-xl
                                               bg-gradient-to-br from-card/60 to-card/30 dark:from-card/50 dark:to-card/20
                                               border border-border/40 dark:border-border/30
                                               backdrop-blur-md
                                               hover:border-primary/60 dark:hover:border-primary/50
                                               transition-all duration-300
                                               hover:shadow-xl hover:shadow-primary/20
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
                                    <h3 className="text-lg font-semibold text-foreground text-center group-hover:text-primary transition-colors duration-300">
                                        {lang.name}
                                    </h3>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </div>
        </section>
    );
};
