export const FooterSection = () => {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="relative mt-20 py-12 border-t border-border/30 dark:border-border/20 bg-background/50 dark:bg-background/30">
            <div className="container max-w-6xl mx-auto px-4 z-10 relative">
                <div className="flex flex-col md:flex-row items-center justify-between gap-6">
                    {/* Copyright text */}
                    <p className="text-foreground/70 text-sm text-center md:text-left">
                        &copy; {currentYear} Agenorwoth Lleyton Adrian • All rights reserved.
                    </p>

                    {/* Links */}
                    <div className="flex items-center gap-6 text-sm">
                        <a 
                            href="#privacy" 
                            className="text-foreground/70 hover:text-primary transition-colors duration-300"
                        >
                            Privacy Policy
                        </a>
                        <span className="text-foreground/40">|</span>
                        <a 
                            href="#terms" 
                            className="text-foreground/70 hover:text-primary transition-colors duration-300"
                        >
                            Terms of Service
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    );
};
