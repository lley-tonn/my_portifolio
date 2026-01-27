import { ThemeToggle } from "../components/ui/ThemeToggle";
import { NeuronBackground } from "../components/ui/NeuronBackground";
import { ConstructionNotice } from "../components/ui/ConstructionNotice";
import { Navbar } from "../components/layout/Navbar";
import { HeroSection } from "../components/sections/HeroSection";
import { AboutmeSection } from "../components/sections/AboutmeSection";
import { SkillsSection } from "../components/sections/SkilsSection";
import { ProjectsSection } from "../components/sections/ProjectsSection";
import { ContactSection } from "../components/sections/ContactSection";
import { FooterSection } from "../components/layout/FooterSection";

export const Home = () => {
    return (
        <div className="min-h-screen text-foreground overflow-x-hidden">
            {/* Construction Notice */}
            <ConstructionNotice />

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
                <ProjectsSection />
                <ContactSection />
            </main>

            {/* Footer */}
            <FooterSection />
        </div>
    );
}