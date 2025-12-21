import { ThemeToggle } from "../components/ThemeToggle";
import { NeuronBackground } from "../components/NeuronBackground";
import { Navbar } from "../components/Navbar";
import { HeroSection } from "../components/HeroSection";
import { AboutmeSection } from "../components/AboutmeSection";
import { SkillsSection } from "../components/SkilsSection";
import { ProjectsSection } from "../components/ProjectsSection";
import { ContactSection } from "../components/ContactSection";
import { FooterSection } from "../components/FooterSection";

export const Home = () => {
    return (
        <div className="min-h-screen text-foreground overflow-x-hidden"> 
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