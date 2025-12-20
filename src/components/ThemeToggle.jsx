import { Moon, Sun } from "lucide-react";
import { useEffect, useState } from "react";
import {cn} from "@/lib/utils";

export const ThemeToggle = () => {
    const [isDarkMode, setIsDarkMode] = useState(false);

    useEffect(() => {
        const storedTheme = localStorage.getItem("theme")
        if (storedTheme === "dark") {
            setIsDarkMode(true)
            document.documentElement.classList.add("dark");
        } else {
            setIsDarkMode(false)
            document.documentElement.classList.remove("dark");
        }
    },[]);

    const toggleTheme = () =>{
        if (isDarkMode) {
            document.documentElement.classList.remove("dark");
            localStorage.setItem("theme", "light")
            setIsDarkMode(false)
        } else {
            document.documentElement.classList.add("dark");
            localStorage.setItem("theme", "dark")
            setIsDarkMode(true)
        }
    }

    return (
        <button 
            onClick={toggleTheme}
            className={cn(
                "fixed bottom-6 right-6 z-50 p-3.5 rounded-full",
                "bg-background/80 dark:bg-background/60 backdrop-blur-xl",
                "border border-border/50 dark:border-border/30",
                "shadow-xl hover:shadow-2xl transition-all duration-300",
                "hover:scale-110 active:scale-95",
                "focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2",
                "dark:focus:ring-offset-black"
            )}
            aria-label={isDarkMode ? "Switch to light mode" : "Switch to dark mode"}
        > 
            {isDarkMode ? (
                <Sun className="h-5 w-5 text-yellow-300"/>
            ) : (
                <Moon className="h-5 w-5 text-blue-900 dark:text-blue-300"/>
            )}
        </button>
    );
};