import { useState, useEffect, useRef } from "react";
import { cn } from "@/lib/utils";

export const HeroSection = () => {
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
    const [isVisible, setIsVisible] = useState(false);
    const heroRef = useRef(null);

    // Mouse parallax effect
    useEffect(() => {
        const handleMouseMove = (e) => {
            const { clientX, clientY } = e;
            const centerX = window.innerWidth / 2;
            const centerY = window.innerHeight / 2;

            setMousePosition({
                x: (clientX - centerX) / 50,
                y: (clientY - centerY) / 50
            });
        };

        window.addEventListener('mousemove', handleMouseMove);
        return () => window.removeEventListener('mousemove', handleMouseMove);
    }, []);

    // Trigger animations on mount
    useEffect(() => {
        setIsVisible(true);
    }, []);

    return (
        <section
            ref={heroRef}
            id="hero"
            className="relative min-h-screen flex flex-col items-center justify-center px-4 pt-24 overflow-hidden"
        >
            {/* Animated Background Decorations */}
            <div className="absolute inset-0 pointer-events-none overflow-hidden">
                {/* Floating Gradient Orbs */}
                <div
                    className="absolute top-20 left-10 w-96 h-96 bg-primary/20 rounded-full blur-3xl animate-float opacity-30"
                    style={{
                        animationDelay: '0s',
                        animationDuration: '8s',
                        transform: `translate(${mousePosition.x * 0.5}px, ${mousePosition.y * 0.5}px)`
                    }}
                ></div>
                <div
                    className="absolute bottom-20 right-10 w-80 h-80 bg-primary/15 rounded-full blur-3xl animate-float opacity-30"
                    style={{
                        animationDelay: '2s',
                        animationDuration: '10s',
                        transform: `translate(${mousePosition.x * -0.3}px, ${mousePosition.y * -0.3}px)`
                    }}
                ></div>
                <div
                    className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-72 h-72 bg-primary/10 rounded-full blur-3xl animate-pulse-subtle"
                    style={{
                        transform: `translate(calc(-50% + ${mousePosition.x * 0.2}px), calc(-50% + ${mousePosition.y * 0.2}px))`
                    }}
                ></div>

                {/* Geometric Shapes */}
                <div className="absolute top-1/4 right-1/4 w-32 h-32 border-2 border-primary/20 rounded-lg rotate-45 animate-float"
                     style={{ animationDuration: '6s', animationDelay: '1s' }}></div>
                <div className="absolute bottom-1/3 left-1/4 w-24 h-24 border-2 border-primary/10 rounded-full animate-pulse-subtle"></div>

                {/* Grid Pattern */}
                <div className="absolute inset-0 bg-[linear-gradient(rgba(255,107,53,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,107,53,0.03)_1px,transparent_1px)] bg-[size:50px_50px] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_50%,#000_60%,transparent_100%)]"></div>
            </div>

            <div className="container max-w-4xl mx-auto text-center z-10">
                <div className="space-y-8">
                    {/* Main Heading with Stagger Animation */}
                    <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight">
                        <span className={cn(
                            "inline-block transition-all duration-1000 ease-out",
                            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
                        )}>
                            Hi, I'm
                        </span>
                        {" "}
                        <span className="whitespace-nowrap">
                            <span className={cn(
                                "inline-block text-primary transition-all duration-1000 ease-out delay-100",
                                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
                            )}>
                                Agenorwoth
                            </span>
                            {" "}
                            <span className={cn(
                                "inline-block transition-all duration-1000 ease-out delay-200",
                                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
                            )}>
                                Lleyton
                            </span>
                        </span>
                        <br />
                        <span className={cn(
                            "inline-block relative transition-all duration-1000 ease-out delay-200",
                            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
                        )}>
                            Adrian
                        </span>
                    </h1>

                    {/* Subtitle with Typing Effect */}
                    <h2 className={cn(
                        "text-xl md:text-2xl lg:text-3xl font-semibold text-foreground/90 relative inline-block transition-all duration-1000 ease-out delay-300",
                        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
                    )}>
                        <span className="relative">
                            a Software Developer
                            {/* Cursor blink effect */}
                            <span className="inline-block w-0.5 h-6 md:h-8 bg-primary ml-1 animate-blink"></span>
                        </span>
                    </h2>

                    {/* Description */}
                    <p className={cn(
                        "text-base md:text-lg text-foreground/75 leading-relaxed max-w-2xl mx-auto transition-all duration-1000 ease-out delay-500",
                        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
                    )}>
                        I love challenges as much as I love to break my own code. I build for fun, function and occasionally to see if it's even possible.
                    </p>

                    {/* Enhanced Liquid Glass Buttons */}
                    <div className={cn(
                        "flex flex-col sm:flex-row items-center justify-center gap-4 transition-all duration-1000 ease-out delay-700",
                        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
                    )}>
                        {/* Get in Touch Button - Primary */}
                        <a
                            href="#contact"
                            className="group relative px-8 py-4 rounded-2xl overflow-hidden
                                       transition-all duration-500 hover:scale-105 active:scale-95
                                       hover:shadow-2xl hover:shadow-primary/30"
                        >
                            {/* Liquid glass background */}
                            <div className="absolute inset-0 bg-gradient-to-br from-primary/90 to-primary/70
                                          backdrop-blur-xl
                                          transition-all duration-500
                                          group-hover:from-primary group-hover:to-primary/80"></div>

                            {/* Animated shine effect */}
                            <div className="absolute inset-0 opacity-0 group-hover:opacity-100
                                          bg-gradient-to-r from-transparent via-white/30 to-transparent
                                          -translate-x-full group-hover:translate-x-full
                                          transition-all duration-1000"></div>

                            {/* Shimmer effect */}
                            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                                <div className="absolute inset-0 bg-gradient-to-br from-white/20 via-transparent to-transparent"></div>
                            </div>

                            {/* Ripple effect on click */}
                            <div className="absolute inset-0 group-active:scale-0 scale-100 opacity-0 group-active:opacity-100
                                          bg-white/20 rounded-2xl transition-all duration-500"></div>

                            {/* Button text */}
                            <span className="relative z-10 font-semibold text-white flex items-center gap-2">
                                Get in Touch
                                <svg
                                    className="w-5 h-5 transition-all duration-300
                                             group-hover:translate-x-1 group-hover:scale-110"
                                    fill="none"
                                    stroke="currentColor"
                                    viewBox="0 0 24 24"
                                >
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                                </svg>
                            </span>

                            {/* Outer glow on hover */}
                            <div className="absolute -inset-1 bg-primary/30 rounded-2xl blur-xl opacity-0
                                          group-hover:opacity-100 transition-opacity duration-500 -z-10"></div>
                        </a>

                        {/* Explore My Work Button - Secondary */}
                        <a
                            href="#projects"
                            className="group relative px-8 py-4 rounded-2xl overflow-hidden
                                       transition-all duration-500 hover:scale-105 active:scale-95
                                       hover:shadow-xl hover:shadow-primary/20"
                        >
                            {/* Liquid glass background */}
                            <div className="absolute inset-0 bg-gradient-to-br
                                          from-card/70 to-card/50
                                          backdrop-blur-xl
                                          transition-all duration-500
                                          group-hover:from-card/90 group-hover:to-card/70"></div>

                            {/* Animated glow effect */}
                            <div className="absolute inset-0 opacity-0 group-hover:opacity-100
                                          bg-gradient-to-r from-transparent via-primary/10 to-transparent
                                          -translate-x-full group-hover:translate-x-full
                                          transition-all duration-1000"></div>

                            {/* Button text */}
                            <span className="relative z-10 font-semibold text-foreground group-hover:text-primary
                                           transition-colors duration-300 flex items-center gap-2">
                                Explore My Work
                                <svg
                                    className="w-5 h-5 transition-all duration-300
                                             group-hover:translate-y-1 group-hover:scale-110"
                                    fill="none"
                                    stroke="currentColor"
                                    viewBox="0 0 24 24"
                                >
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                                </svg>
                            </span>

                            {/* Outer glow on hover */}
                            <div className="absolute -inset-1 bg-primary/20 rounded-2xl blur-xl opacity-0
                                          group-hover:opacity-100 transition-opacity duration-500 -z-10"></div>
                        </a>
                    </div>

                    {/* Social Links with Animation */}
                    <div className={cn(
                        "flex items-center justify-center gap-4 pt-8 transition-all duration-1000 ease-out delay-1000",
                        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
                    )}>
                        {[
                            { href: "https://github.com/lley-tonn", icon: "M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" },
                            { href: "https://twitter.com/AdrianLleyton", icon: "M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" },
                            { href: "https://instagram.com/lley_tonn", icon: "M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" }
                        ].map((social, index) => (
                            <a
                                key={index}
                                href={social.href}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="w-12 h-12 rounded-full bg-card/60 backdrop-blur-md border border-border/40
                                         flex items-center justify-center
                                         hover:bg-primary/10 hover:border-primary/40 hover:scale-110 hover:-translate-y-1
                                         transition-all duration-300 group"
                                style={{ transitionDelay: `${index * 50}ms` }}
                            >
                                <svg className="w-5 h-5 text-foreground/70 group-hover:text-primary transition-colors" fill="currentColor" viewBox="0 0 24 24">
                                    <path d={social.icon} />
                                </svg>
                            </a>
                        ))}
                    </div>
                </div>
            </div>

            {/* Animated Scroll Indicator */}
            <a
                href="#about"
                className={cn(
                    "absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 group cursor-pointer transition-all duration-1000 delay-1200",
                    isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
                )}
            >
                <span className="text-xs text-foreground/50 uppercase tracking-wider group-hover:text-primary transition-colors">
                    Scroll Down
                </span>
                <div className="w-6 h-10 rounded-full border-2 border-foreground/30 group-hover:border-primary/60
                              flex items-start justify-center p-2 transition-colors">
                    <div className="w-1 h-2 bg-primary rounded-full animate-scroll-down"></div>
                </div>
            </a>
        </section>
    );
};
