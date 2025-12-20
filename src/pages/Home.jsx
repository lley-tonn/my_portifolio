import { ThemeToggle } from "../components/ThemeToggle";
import { NeuronBackground } from "../components/NeuronBackground";
import { Navbar } from "../components/Navbar";
import { HeroSection } from "../components/HeroSection";
import { AboutmeSection } from "../components/AboutmeSection";
import { SkillsSection } from "../components/SkilsSection";
import { LanguagesSection } from "../components/LanguageSection";

export const Home = () => {
    return (
        <div className="min-h-screen bg-background dark:bg-black text-foreground overflow-x-hidden"> 
            {/* Theme Toggle*/}
            <ThemeToggle />

            {/* Background Effect */}
            <NeuronBackground />

            {/* NavBar */}
            <Navbar />

            {/*  Main Content */}
            <main>
                <HeroSection/>
                <AboutmeSection />
                <SkillsSection />
                <LanguagesSection />
            </main>

            {/* Footer */}
        </div>
    );
}