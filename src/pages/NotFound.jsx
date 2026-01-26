import { ThemeToggle } from "../components/ui/ThemeToggle";
import { NeuronBackground } from "../components/ui/NeuronBackground";
import { Navbar } from "../components/layout/Navbar";

export const NotFound = () => {
    return (
        <div className="min-h-screen text-foreground overflow-x-hidden">
            <ThemeToggle />
            <NeuronBackground />
            <Navbar />
            <main className="min-h-screen flex items-center justify-center pt-24">
                <div className="container max-w-4xl mx-auto text-center px-4">
                    <h1 className="text-4xl md:text-6xl font-bold mb-4">404</h1>
                    <p className="text-xl text-foreground/80">Page Not Found</p>
                </div>
            </main>
        </div>
    );
}