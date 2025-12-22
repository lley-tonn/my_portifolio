



export const HeroSection =  () => {
    return (
        <section id="hero" className="relative min-h-screen flex flex-col items-center justify-center px-4 pt-24">
            <div className="container max-w-4xl mx-auto text-center z-10">
                <div className="space-y-8">
                    <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
                        <span className="opacity-0 animate-fade-in">Hi, I'm </span>
                        <span className="text-primary opacity-0 animate-fade-in-delay-1">Agenorwoth</span>
                        <span className="text-gradient opacity-0 animate-fade-in-delay-1"> Lleyton Adrian</span>
                    </h1>

                    <h2 className="text-xl md:text-2xl font-semibold text-foreground/90 opacity-0 animate-fade-in-delay-2">
                        a Software Developer
                    </h2>

                    <p className="text-base md:text-lg text-foreground/75 leading-relaxed max-w-2xl mx-auto opacity-0 animate-fade-in-delay-3">
                        I love challenges as much as I love to break my own code. I build for fun, function and occasionally to see if it's even possible.
                    </p>

                    {/* Liquid Glass Buttons */}
                    <div className="flex flex-col sm:flex-row items-center justify-center gap-4 opacity-0 animate-fade-in-delay-4">
                        {/* Get in Touch Button - Primary */}
                        <a
                            href="#contact"
                            className="group relative px-8 py-4 rounded-2xl overflow-hidden
                                       transition-all duration-500 hover:scale-105 active:scale-95"
                        >
                            {/* Liquid glass background */}
                            <div className="absolute inset-0 bg-gradient-to-br from-primary/90 to-primary/70
                                          backdrop-blur-xl
                                          transition-all duration-500
                                          group-hover:from-primary group-hover:to-primary/80"></div>

                            {/* Animated glow effect */}
                            <div className="absolute inset-0 opacity-0 group-hover:opacity-100
                                          bg-gradient-to-r from-transparent via-white/20 to-transparent
                                          -translate-x-full group-hover:translate-x-full
                                          transition-all duration-700"></div>

                            {/* Shimmer effect */}
                            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                                <div className="absolute inset-0 bg-gradient-to-br from-white/10 via-transparent to-transparent"></div>
                            </div>

                            {/* Button text */}
                            <span className="relative z-10 font-semibold text-white flex items-center gap-2">
                                Get in Touch
                                <svg
                                    className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1"
                                    fill="none"
                                    stroke="currentColor"
                                    viewBox="0 0 24 24"
                                >
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                                </svg>
                            </span>

                            {/* Outer glow on hover */}
                            <div className="absolute -inset-1 bg-primary/20 rounded-2xl blur-xl opacity-0
                                          group-hover:opacity-100 transition-opacity duration-500 -z-10"></div>
                        </a>

                        {/* Explore My Work Button - Secondary */}
                        <a
                            href="#projects"
                            className="group relative px-8 py-4 rounded-2xl overflow-hidden
                                       transition-all duration-500 hover:scale-105 active:scale-95"
                        >
                            {/* Liquid glass background */}
                            <div className="absolute inset-0 bg-gradient-to-br
                                          from-background/60 to-background/40
                                          dark:from-card/60 dark:to-card/40
                                          backdrop-blur-xl
                                          transition-all duration-500
                                          group-hover:from-background/80 group-hover:to-background/60
                                          dark:group-hover:from-card/80 dark:group-hover:to-card/60"></div>

                            {/* Animated glow effect */}
                            <div className="absolute inset-0 opacity-0 group-hover:opacity-100
                                          bg-gradient-to-r from-transparent via-primary/10 to-transparent
                                          -translate-x-full group-hover:translate-x-full
                                          transition-all duration-700"></div>

                            {/* Shimmer effect */}
                            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-transparent"></div>
                            </div>

                            {/* Button text */}
                            <span className="relative z-10 font-semibold text-foreground group-hover:text-primary
                                           transition-colors duration-300 flex items-center gap-2">
                                Explore My Work
                                <svg
                                    className="w-5 h-5 transition-transform duration-300 group-hover:translate-y-1"
                                    fill="none"
                                    stroke="currentColor"
                                    viewBox="0 0 24 24"
                                >
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                                </svg>
                            </span>

                            {/* Outer glow on hover */}
                            <div className="absolute -inset-1 bg-primary/10 rounded-2xl blur-xl opacity-0
                                          group-hover:opacity-100 transition-opacity duration-500 -z-10"></div>
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
}