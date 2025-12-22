import {cn} from "@/lib/utils"
import { useEffect, useState } from "react"
import { Menu, X } from "lucide-react"

const navItems = [
    { name: "Home", href: "#hero" },
    { name: "About", href: "#about" },
    { name: "Skills", href: "#skills" },
    { name: "Projects", href: "#projects" },
    { name: "Contact", href: "#contact" },
]

export const Navbar = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [activeSection, setActiveSection] = useState("#hero");
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
             setIsScrolled(window.scrollY > 10);
        }
        window.addEventListener("scroll", handleScroll);

        return () => {
            window.removeEventListener("scroll", handleScroll);
        }
    }, [])

    // Lock body scroll when mobile menu is open
    useEffect(() => {
        if (isMobileMenuOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }
        return () => {
            document.body.style.overflow = 'unset';
        };
    }, [isMobileMenuOpen]);

    const handleNavClick = (href) => {
        setActiveSection(href);
        setIsMobileMenuOpen(false);
    };

    return (
        <>
            {/* Navbar - Hidden when mobile menu is open */}
            <nav className={cn(
                "glass-navbar transition-opacity duration-300",
                isScrolled ? "glass-navbar--scrolled" : "",
                isMobileMenuOpen && "md:opacity-100 opacity-0"
            )}>
                <div className="container flex items-center justify-between">
                    <a
                        href="#hero"
                        className="text-xl font-bold text-primary flex items-center"
                        onClick={() => setActiveSection("#hero")}
                    >
                        <span className="relative z-10">
                            <span className="text-glow text-foreground">lley-</span>tonn
                        </span>
                    </a>

                    {/* Desktop Navigation - Hidden on mobile */}
                    <div className="hidden md:flex flex-wrap items-center gap-4 sm:gap-6 md:gap-8">
                        {navItems.map((item, key) => (
                            <a
                            key={key}
                            href={item.href}
                            onClick={() => setActiveSection(item.href)}
                            className={cn(
                                "text-sm sm:text-base text-foreground/80 hover:text-primary transition-colors duration-300 relative group",
                                activeSection === item.href && "text-primary"
                            )}>
                                {item.name}
                                <span className={cn(
                                    "absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full",
                                    activeSection === item.href && "w-full"
                                )}></span>
                            </a>
                        ))}
                    </div>

                    {/* Mobile Hamburger Button - Visible only on mobile */}
                    <button
                        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                        className={cn(
                            "md:hidden p-2.5 rounded-xl",
                            "bg-background/60 dark:bg-background/40",
                            "backdrop-blur-md",
                            "border border-primary/20",
                            "hover:border-primary/40 hover:bg-primary/5",
                            "transition-all duration-300",
                            "focus:outline-none focus:ring-2 focus:ring-primary/50",
                            isMobileMenuOpen && "border-primary/40 bg-primary/10"
                        )}
                        aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
                        aria-expanded={isMobileMenuOpen}
                    >
                        <div className="relative w-6 h-6">
                            <Menu
                                className={cn(
                                    "absolute inset-0 text-foreground transition-all duration-300",
                                    isMobileMenuOpen ? "opacity-0 rotate-90 scale-0" : "opacity-100 rotate-0 scale-100"
                                )}
                                size={24}
                            />
                            <X
                                className={cn(
                                    "absolute inset-0 text-primary transition-all duration-300",
                                    isMobileMenuOpen ? "opacity-100 rotate-0 scale-100" : "opacity-0 -rotate-90 scale-0"
                                )}
                                size={24}
                            />
                        </div>
                    </button>
                </div>
            </nav>

            {/* Mobile Menu Overlay - Visible only on mobile when open */}
            {isMobileMenuOpen && (
                <div className="md:hidden fixed inset-0 z-[9999] animate-fade-in">
                    {/* Backdrop */}
                    <div
                        className="absolute inset-0 bg-black/60 backdrop-blur-sm"
                        onClick={() => setIsMobileMenuOpen(false)}
                        aria-hidden="true"
                    />

                    {/* Close Button - Fixed position */}
                    <button
                        onClick={() => setIsMobileMenuOpen(false)}
                        className={cn(
                            "fixed top-5 right-4 z-[10000] p-2.5 rounded-xl",
                            "bg-background/80 dark:bg-background/60",
                            "backdrop-blur-md",
                            "border border-primary/40",
                            "hover:bg-primary/10",
                            "transition-all duration-300"
                        )}
                        aria-label="Close menu"
                    >
                        <X className="w-6 h-6 text-primary" size={24} />
                    </button>

                    {/* Menu Container - Liquid Glass Card */}
                    <div
                        className="absolute top-20 left-4 right-4 mx-auto max-w-sm rounded-3xl overflow-hidden animate-fade-in"
                        role="dialog"
                        aria-modal="true"
                        aria-label="Mobile navigation menu"
                    >
                        {/* Liquid Glass Background */}
                        <div className="absolute inset-0 bg-gradient-to-br from-white/95 via-white/90 to-white/95 dark:from-black/95 dark:via-black/90 dark:to-black/95 backdrop-blur-2xl" />

                        {/* Thin Orange Border */}
                        <div className="absolute inset-0 rounded-3xl border border-primary/30 pointer-events-none" />

                        {/* Menu Content */}
                        <div className="relative z-10 p-6">
                            {/* Navigation Links */}
                            <nav className="space-y-2" role="navigation">
                                {navItems.map((item, index) => (
                                    <a
                                        key={index}
                                        href={item.href}
                                        onClick={() => handleNavClick(item.href)}
                                        className={cn(
                                            "flex items-center px-4 py-3.5 rounded-2xl",
                                            "text-base font-medium",
                                            "transition-all duration-200",
                                            "focus:outline-none focus:ring-2 focus:ring-primary/50",
                                            activeSection === item.href
                                                ? "bg-primary/10 text-primary border border-primary/30"
                                                : "text-foreground/80 hover:text-primary hover:bg-primary/5 border border-transparent hover:border-primary/20"
                                        )}
                                    >
                                        <span className="flex-1">{item.name}</span>
                                        {activeSection === item.href && (
                                            <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                                        )}
                                    </a>
                                ))}
                            </nav>
                        </div>
                    </div>
                </div>
            )}
        </>
    )
}
