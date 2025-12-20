



export const HeroSection =  () => {
    return (
        <section id="hero" className="relative min-h-screen flex flex-col items-center justify-center px-4 pt-24">
            <div className="container max-w-4xl mx-auto text-center z-10">
                <div className="space-y-6">
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
                </div>
            </div>
        </section>
    );
}