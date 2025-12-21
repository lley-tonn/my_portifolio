

import {cn} from "@/lib/utils"
import { useEffect, useState } from "react"
import { Menu, X, Home, User, Code, Briefcase, Mail } from "lucide-react"

const navItems = [
    { name: "Home", href: "#hero", icon: Home },
    { name: "About", href: "#about", icon: User },
    { name: "Skills", href: "#skills", icon: Code },
    { name: "Projects", href: "#projects", icon: Briefcase },
    { name: "Contact", href: "#contact", icon: Mail },
]

export const Navbar = () => {

    const [isScrolled, setIsScrolled] = useState(false);
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [activeSection, setActiveSection] = useState("#hero");

    useEffect(() => {
        const handleScroll = () => {
             setIsScrolled(window.scrollY > 10);
        }
        window.addEventListener("scroll", handleScroll);

        return () => {
            window.removeEventListener("scroll", handleScroll);
        }
    }, [])

    // Lock body scroll when menu is open
    useEffect(() => {
        if (isMenuOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }
        return () => {
            document.body.style.overflow = 'unset';
        };
    }, [isMenuOpen]);

    const handleNavClick = (href) => {
        setActiveSection(href);
        setIsMenuOpen(false);
    };

    return (
        <nav className={cn(
            "glass-navbar",
            isScrolled ? "glass-navbar--scrolled" : ""
        )}>

            <div className="container flex items-center justify-between">
                <a href="#hero" className="text-xl font-bold text-primary flex items-center relative z-[10001]">
                    <span className="relative z-10 ">
                        <span className="text-glow text-foreground">lley-</span>tonn
                    </span>
                </a>
                {/* Desktop nav*/}
                <div className="hidden md:flex space-x-8">
                    {navItems.map((item, key) => (
                        <a
                        key={key}
                        href={item.href}
                        onClick={() => setActiveSection(item.href)}
                        className={cn(
                            "text-foreground/80 hover:text-primary transition-colors duration-300 relative group",
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


                {/* Mobile hamburger button */}
                <button
                    onClick={() => setIsMenuOpen((prev) => !prev)}
                    className={cn(
                        "md:hidden p-2.5 rounded-xl relative z-[10001]",
                        "transition-all duration-300",
                        "hover:bg-primary/10",
                        isMenuOpen
                            ? "text-primary bg-primary/10"
                            : "text-foreground"
                    )}
                    aria-label={isMenuOpen ? "Close Menu" : "Open Menu"}
                >
                    <div className="relative w-6 h-6">
                        <Menu
                            size={24}
                            className={cn(
                                "absolute inset-0 transition-all duration-300",
                                isMenuOpen
                                    ? "opacity-0 rotate-90 scale-0"
                                    : "opacity-100 rotate-0 scale-100"
                            )}
                        />
                        <X
                            size={24}
                            className={cn(
                                "absolute inset-0 transition-all duration-300",
                                isMenuOpen
                                    ? "opacity-100 rotate-0 scale-100"
                                    : "opacity-0 -rotate-90 scale-0"
                            )}
                        />
                    </div>
                </button>


                {/* Mobile menu overlay */}
                <div
                    className={cn(
                        "fixed inset-0 z-[10000] md:hidden",
                        "transition-all duration-500 ease-in-out",
                        isMenuOpen
                            ? "opacity-100 pointer-events-auto"
                            : "opacity-0 pointer-events-none"
                    )}
                >
                    {/* Backdrop with blur */}
                    <div
                        className={cn(
                            "absolute inset-0 bg-gradient-to-br from-background/98 via-background/95 to-background/98",
                            "dark:from-black/98 dark:via-black/95 dark:to-black/98",
                            "backdrop-blur-2xl",
                            "transition-all duration-500",
                            isMenuOpen ? "opacity-100" : "opacity-0"
                        )}
                        onClick={() => setIsMenuOpen(false)}
                    />

                    {/* Decorative gradient orbs */}
                    <div className="absolute inset-0 overflow-hidden pointer-events-none">
                        <div className={cn(
                            "absolute top-20 right-10 w-72 h-72 bg-primary/20 rounded-full blur-3xl",
                            "transition-all duration-700",
                            isMenuOpen ? "opacity-100 scale-100" : "opacity-0 scale-50"
                        )}></div>
                        <div className={cn(
                            "absolute bottom-20 left-10 w-96 h-96 bg-primary/10 rounded-full blur-3xl",
                            "transition-all duration-700 delay-100",
                            isMenuOpen ? "opacity-100 scale-100" : "opacity-0 scale-50"
                        )}></div>
                    </div>

                    {/* Menu content */}
                    <div className={cn(
                        "relative h-full flex flex-col items-center justify-center px-6 py-20",
                        "transition-all duration-500",
                        isMenuOpen ? "translate-y-0" : "-translate-y-8"
                    )}>
                        {/* Brand in mobile menu */}
                        <div className={cn(
                            "mb-12 transition-all duration-500 delay-100",
                            isMenuOpen ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-4"
                        )}>
                            <h2 className="text-3xl font-bold text-primary">
                                <span className="text-glow text-foreground">lley-</span>tonn
                            </h2>
                            <p className="text-foreground/60 text-sm text-center mt-2">
                                Software Developer & Designer
                            </p>
                        </div>

                        {/* Navigation links */}
                        <div className="flex flex-col space-y-2 w-full max-w-sm">
                            {navItems.map((item, index) => {
                                const IconComponent = item.icon;
                                return (
                                    <a
                                        key={index}
                                        href={item.href}
                                        className={cn(
                                            "group relative flex items-center gap-4 px-6 py-4 rounded-2xl",
                                            "text-lg font-medium",
                                            "transition-all duration-300",
                                            "hover:bg-primary/10 dark:hover:bg-primary/20",
                                            "hover:border-primary/40",
                                            "border border-transparent",
                                            activeSection === item.href
                                                ? "bg-primary/10 dark:bg-primary/20 border-primary/40 text-primary"
                                                : "text-foreground/80 hover:text-primary",
                                            // Staggered animation
                                            isMenuOpen
                                                ? "opacity-100 translate-x-0"
                                                : "opacity-0 -translate-x-8"
                                        )}
                                        style={{
                                            transitionDelay: isMenuOpen ? `${(index + 2) * 50}ms` : '0ms'
                                        }}
                                        onClick={() => handleNavClick(item.href)}
                                    >
                                        {/* Icon */}
                                        <div className={cn(
                                            "p-2 rounded-xl transition-all duration-300",
                                            "bg-primary/10 dark:bg-primary/20",
                                            "group-hover:bg-primary/20 dark:group-hover:bg-primary/30",
                                            "group-hover:scale-110",
                                            activeSection === item.href && "bg-primary/20 dark:bg-primary/30"
                                        )}>
                                            <IconComponent className="w-5 h-5" />
                                        </div>

                                        {/* Text */}
                                        <span className="flex-1">{item.name}</span>

                                        {/* Active indicator */}
                                        {activeSection === item.href && (
                                            <div className="w-2 h-2 rounded-full bg-primary animate-pulse"></div>
                                        )}

                                        {/* Hover arrow */}
                                        <svg
                                            className={cn(
                                                "w-5 h-5 transition-all duration-300",
                                                "opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0",
                                                activeSection === item.href && "opacity-100 translate-x-0"
                                            )}
                                            fill="none"
                                            stroke="currentColor"
                                            viewBox="0 0 24 24"
                                        >
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                        </svg>
                                    </a>
                                );
                            })}
                        </div>

                        {/* Footer text */}
                        <div className={cn(
                            "mt-12 text-center transition-all duration-500 delay-500",
                            isMenuOpen ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
                        )}>
                            <p className="text-foreground/50 text-sm">
                                Let's build something amazing together
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    )
}