import { useState, useEffect, useRef } from "react";
import { cn } from "@/lib/utils";

export const AboutmeSection = () => {
    const [isVisible, setIsVisible] = useState(false);
    const sectionRef = useRef(null);

    // Intersection Observer for entrance animations
    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                }
            },
            { threshold: 0.2 }
        );

        if (sectionRef.current) {
            observer.observe(sectionRef.current);
        }

        return () => {
            if (sectionRef.current) {
                observer.unobserve(sectionRef.current);
            }
        };
    }, []);

    return (
        <section
            ref={sectionRef}
            id="about"
            className="relative min-h-screen flex flex-col items-center justify-center px-4 py-24 overflow-hidden"
        >
            {/* Animated Background Decorations */}
            <div className="absolute inset-0 pointer-events-none overflow-hidden">
                {/* Floating Gradient Orbs */}
                <div
                    className="absolute top-1/4 -left-20 w-72 h-72 bg-primary/15 rounded-full blur-3xl animate-float opacity-40"
                    style={{ animationDelay: '0s', animationDuration: '10s' }}
                ></div>
                <div
                    className="absolute bottom-1/4 -right-20 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-float opacity-40"
                    style={{ animationDelay: '3s', animationDuration: '12s' }}
                ></div>

                {/* Geometric Accents */}
                <div className="absolute top-20 right-1/4 w-24 h-24 border border-primary/20 rounded-lg rotate-12 animate-float"
                     style={{ animationDuration: '8s', animationDelay: '2s' }}></div>
                <div className="absolute bottom-32 left-1/3 w-16 h-16 border border-primary/15 rounded-full animate-pulse-subtle"></div>
            </div>

            <div className="container max-w-6xl mx-auto z-10">
                <div className="space-y-16">
                    {/* Header with Animation */}
                    <div className={cn(
                        "space-y-4 transition-all duration-1000",
                        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
                    )}>
                        <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold">
                            <span className="text-primary">About</span> Me
                        </h2>
                        <div className="w-24 h-1 bg-gradient-to-r from-primary via-primary/50 to-transparent rounded-full"></div>
                    </div>

                    {/* Main Content with Stagger Animation */}
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                        {/* Text Content - Left Aligned */}
                        <div className={cn(
                            "space-y-6 transition-all duration-1000 delay-200",
                            isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-10"
                        )}>
                            <div className="relative">
                                {/* Decorative Quote Mark */}
                                <div className="absolute -left-4 -top-2 text-6xl text-primary/20 font-serif">"</div>

                                <p className="text-base md:text-lg text-foreground/85 leading-relaxed relative z-10 text-left">
                                    I am an <span className="text-primary font-semibold">undergraduate</span> pursuing a Bachelor of Science in{" "}
                                    <span className="text-primary font-semibold">Computer Science</span>. Alongside my studies, I enjoy{" "}
                                    <span className="text-primary font-semibold">graphics design</span> as a creative outlet and have a strong passion for{" "}
                                    <span className="text-primary font-semibold">Artificial Intelligence and Machine Learning</span>.
                                </p>
                            </div>

                            <p className="text-base md:text-lg text-foreground/85 leading-relaxed text-left">
                                I am driven by <span className="text-primary font-semibold">curiosity</span>, <span className="text-primary font-semibold">problem-solving</span>, and the{" "}
                                challenge of building <span className="text-primary font-semibold">innovative solutions</span> through technology.
                            </p>

                            {/* Call to Action */}
                            <div className="pt-4">
                                <a
                                    href="#contact"
                                    className="group inline-flex items-center gap-2 px-6 py-3 rounded-xl
                                             bg-gradient-to-r from-primary/10 to-primary/5
                                             border border-primary/30
                                             hover:from-primary/20 hover:to-primary/10
                                             hover:border-primary/50
                                             hover:scale-105
                                             transition-all duration-300"
                                >
                                    <span className="text-foreground group-hover:text-primary font-semibold transition-colors">
                                        Let's Connect
                                    </span>
                                    <svg className="w-5 h-5 text-primary group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                                    </svg>
                                </a>
                            </div>
                        </div>

                        {/* Animated Avatar */}
                        <div className={cn(
                            "flex items-center justify-center transition-all duration-1000 delay-400",
                            isVisible ? "opacity-100 translate-x-0 scale-100" : "opacity-0 translate-x-10 scale-90"
                        )}>
                            <div className="relative">
                                {/* Animated Glow Ring */}
                                <div className="absolute inset-0 rounded-full bg-gradient-to-br from-primary/30 via-primary/20 to-transparent
                                              blur-2xl animate-pulse-subtle"></div>

                                {/* Avatar Container */}
                                <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden
                                              border-4 border-primary/30
                                              bg-gradient-to-br from-card/80 to-card/40
                                              backdrop-blur-md
                                              shadow-2xl shadow-primary/20
                                              animate-float">

                                    {/* Animated SVG Avatar - Smiling Man */}
                                    <svg viewBox="0 0 200 200" className="w-full h-full p-8">
                                        {/* Head */}
                                        <circle cx="100" cy="100" r="60" fill="var(--primary)" opacity="0.2"/>
                                        <circle cx="100" cy="100" r="55" fill="var(--primary)" opacity="0.3"/>

                                        {/* Face */}
                                        <circle cx="100" cy="95" r="50" fill="hsl(var(--primary))" opacity="0.4"/>

                                        {/* Eyes with blink animation */}
                                        <g className="animate-blink" style={{ transformOrigin: '85px 85px' }}>
                                            <circle cx="85" cy="85" r="5" fill="hsl(var(--foreground))"/>
                                        </g>
                                        <g className="animate-blink" style={{ transformOrigin: '115px 85px', animationDelay: '0.1s' }}>
                                            <circle cx="115" cy="85" r="5" fill="hsl(var(--foreground))"/>
                                        </g>

                                        {/* Smile - animated arc */}
                                        <path
                                            d="M 80 105 Q 100 120 120 105"
                                            stroke="hsl(var(--foreground))"
                                            strokeWidth="3"
                                            fill="none"
                                            strokeLinecap="round"
                                            className="animate-pulse-subtle"
                                        />

                                        {/* Sparkle effects */}
                                        <g className="animate-float" style={{ animationDuration: '3s' }}>
                                            <circle cx="60" cy="70" r="2" fill="hsl(var(--primary))" opacity="0.8"/>
                                            <circle cx="140" cy="75" r="2" fill="hsl(var(--primary))" opacity="0.8"/>
                                            <circle cx="100" cy="50" r="2" fill="hsl(var(--primary))" opacity="0.8"/>
                                        </g>
                                    </svg>

                                    {/* Floating particles */}
                                    <div className="absolute inset-0 overflow-hidden pointer-events-none">
                                        <div className="absolute top-10 left-10 w-2 h-2 bg-primary/60 rounded-full animate-float"
                                             style={{ animationDuration: '4s', animationDelay: '0s' }}></div>
                                        <div className="absolute top-20 right-16 w-1.5 h-1.5 bg-primary/40 rounded-full animate-float"
                                             style={{ animationDuration: '5s', animationDelay: '1s' }}></div>
                                        <div className="absolute bottom-16 left-20 w-2 h-2 bg-primary/50 rounded-full animate-float"
                                             style={{ animationDuration: '6s', animationDelay: '2s' }}></div>
                                    </div>
                                </div>

                                {/* Orbiting Elements */}
                                <div className="absolute top-0 right-0 w-12 h-12 rounded-full bg-primary/20 backdrop-blur-md
                                              flex items-center justify-center animate-float"
                                     style={{ animationDuration: '4s', animationDelay: '0.5s' }}>
                                    <span className="text-2xl">💻</span>
                                </div>
                                <div className="absolute bottom-0 left-0 w-12 h-12 rounded-full bg-primary/20 backdrop-blur-md
                                              flex items-center justify-center animate-float"
                                     style={{ animationDuration: '5s', animationDelay: '1s' }}>
                                    <span className="text-2xl">🎨</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Stats Section with Counter Animation */}
                    <div className={cn(
                        "grid grid-cols-2 md:grid-cols-4 gap-6 transition-all duration-1000 delay-600",
                        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
                    )}>
                        {[
                            { label: "Projects Built", value: "10+", icon: "💻" },
                            { label: "Technologies", value: "15+", icon: "⚡" },
                            { label: "Coffee Consumed", value: "∞", icon: "☕" },
                            { label: "Lines of Code", value: "10K+", icon: "📝" }
                        ].map((stat, index) => (
                            <div
                                key={index}
                                className="text-center p-6 rounded-2xl
                                         bg-gradient-to-br from-card/60 to-card/30 dark:from-card/50 dark:to-card/20
                                         border border-border/40 dark:border-border/30
                                         backdrop-blur-md
                                         hover:border-primary/40
                                         hover:scale-105
                                         transition-all duration-300
                                         group"
                                style={{ transitionDelay: `${index * 50}ms` }}
                            >
                                <div className="text-3xl mb-2 group-hover:scale-125 transition-transform duration-300">
                                    {stat.icon}
                                </div>
                                <div className="text-2xl md:text-3xl font-bold text-primary mb-1
                                              group-hover:scale-110 transition-transform duration-300">
                                    {stat.value}
                                </div>
                                <div className="text-xs md:text-sm text-foreground/60 uppercase tracking-wider">
                                    {stat.label}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};
