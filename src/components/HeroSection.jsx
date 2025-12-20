



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
                </div>
            </div>
        </section>
    );
}