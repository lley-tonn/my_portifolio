export const AboutmeSection = () => {
    return (
        <section id="about" className="relative min-h-screen flex flex-col items-center justify-center px-4 py-24">
            <div className="container max-w-4xl mx-auto z-10">
                <div className="space-y-8">
                    <h2 className="text-4xl md:text-5xl font-bold text-center">
                        <span className="text-primary">About</span> Me
                    </h2>
                    
                    <div className="prose prose-invert max-w-none">
                        <p className="text-base md:text-lg text-foreground/85 leading-relaxed">
                            I am an undergraduate pursuing a Bachelor of Science in Computer Science. Alongside my studies, I enjoy graphics design as a creative outlet and have a strong passion for Artificial Intelligence and Machine Learning. I am driven my curiosity, problem-solving and challenge of building innovative solutions through technology.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};
