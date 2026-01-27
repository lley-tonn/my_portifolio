import { useState, useEffect } from "react";
import { X, AlertTriangle, Wrench } from "lucide-react";
import { cn } from "@/lib/utils";

export const ConstructionNotice = () => {
    const [isVisible, setIsVisible] = useState(false);
    const [isClosing, setIsClosing] = useState(false);

    useEffect(() => {
        const hasSeenNotice = localStorage.getItem("construction-notice-dismissed");

        if (!hasSeenNotice) {
            setTimeout(() => setIsVisible(true), 500);
        }
    }, []);

    const handleDismiss = () => {
        setIsClosing(true);
        setTimeout(() => {
            setIsVisible(false);
            localStorage.setItem("construction-notice-dismissed", "true");
        }, 300);
    };

    if (!isVisible) return null;

    return (
        <>
            <div
                className={cn(
                    "fixed inset-0 bg-black/50 backdrop-blur-sm z-[9998] transition-opacity duration-300",
                    isClosing ? "opacity-0" : "opacity-100"
                )}
                onClick={handleDismiss}
            />

            <div
                className={cn(
                    "fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-[9999]",
                    "w-[90%] max-w-lg transition-all duration-300",
                    isClosing ? "opacity-0 scale-95" : "opacity-100 scale-100"
                )}
            >
                <div className="relative bg-card/95 backdrop-blur-xl border border-primary/40 rounded-2xl shadow-2xl overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-primary/5 pointer-events-none" />

                    <button
                        onClick={handleDismiss}
                        className={cn(
                            "absolute top-4 right-4 z-10 p-2 rounded-full",
                            "bg-background/80 hover:bg-background transition-colors",
                            "text-foreground/60 hover:text-foreground",
                            "focus:outline-none focus:ring-2 focus:ring-primary"
                        )}
                        aria-label="Close notice"
                    >
                        <X className="w-5 h-5" />
                    </button>

                    <div className="relative p-8 space-y-6 text-center">
                        <div className="flex flex-col items-center gap-4">
                            <div className="flex-shrink-0 p-3 rounded-full bg-primary/20 border border-primary/40">
                                <Wrench className="w-8 h-8 text-primary animate-pulse" />
                            </div>

                            <div className="space-y-2">
                                <h2 className="text-2xl font-bold text-foreground flex items-center justify-center gap-2">
                                    Site Under Construction
                                    <AlertTriangle className="w-5 h-5 text-primary" />
                                </h2>
                                <p className="text-foreground/80 leading-relaxed">
                                    Welcome! This portfolio is actively being developed and improved.
                                    Some features may not be fully functional yet.
                                </p>
                            </div>
                        </div>

                        <div className="space-y-3 text-sm text-foreground/70">
                            <div className="flex items-center justify-center gap-2">
                                <span className="text-primary">•</span>
                                <span>Contact form functionality is in progress</span>
                            </div>
                            <div className="flex items-center justify-center gap-2">
                                <span className="text-primary">•</span>
                                <span>Additional project showcases coming soon</span>
                            </div>
                            <div className="flex items-center justify-center gap-2">
                                <span className="text-primary">•</span>
                                <span>Some content and features are being finalized</span>
                            </div>
                        </div>

                        <div className="pt-4 border-t border-border/40">
                            <p className="text-xs text-foreground/60 text-center">
                                Thank you for your patience and understanding
                            </p>
                        </div>

                        <button
                            onClick={handleDismiss}
                            className={cn(
                                "w-full py-3 px-6 rounded-lg font-semibold",
                                "bg-primary text-background",
                                "hover:bg-primary/90 transition-colors",
                                "focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2",
                                "dark:focus:ring-offset-black"
                            )}
                        >
                            Got it, Continue Browsing
                        </button>
                    </div>
                </div>
            </div>
        </>
    );
};
