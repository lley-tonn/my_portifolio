import { useEffect, useState } from "react";
import { ThemeToggle } from "../components/ui/ThemeToggle";
import { NeuronBackground } from "../components/ui/NeuronBackground";
import { Navbar } from "../components/layout/Navbar";
import { cn } from "@/lib/utils";
import { db, auth } from "@/lib/firebase";
import { collection, getDocs, orderBy, query } from "firebase/firestore";
import { signInWithEmailAndPassword, onAuthStateChanged, signOut } from "firebase/auth";

export const Messages = () => {
  const [messages, setMessages] = useState([]);
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loggingIn, setLoggingIn] = useState(false);

  const firebaseConfigured = auth !== null && db !== null;

  useEffect(() => {
    if (!firebaseConfigured) {
      setLoading(false);
      return;
    }
    const unsub = onAuthStateChanged(auth, (u) => {
      setUser(u);
      setLoading(false);
    });
    return () => unsub();
  }, [firebaseConfigured]);

  const handleAdminLogin = async (e) => {
    e.preventDefault();
    if (!auth) return;
    setError("");
    setLoggingIn(true);
    try {
      await signInWithEmailAndPassword(auth, email, password);
    } catch (err) {
      setError("Invalid email or password");
    } finally {
      setLoggingIn(false);
    }
  };

  const handleSignOut = async () => {
    if (!auth) return;
    await signOut(auth);
  };

  useEffect(() => {
    if (!user || !db) return;

    const fetchMessages = async () => {
      try {
        const q = query(
          collection(db, "messages"),
          orderBy("createdAt", "desc")
        );
        const snapshot = await getDocs(q);
        const data = snapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        setMessages(data);
      } catch (err) {
        console.error(err);
        setMessages([]);
      }
    };

    fetchMessages();
  }, [user]);

  const hasMessages = messages.length > 0;

  if (loading) {
    return (
      <div className="min-h-screen text-foreground overflow-x-hidden relative">
        <ThemeToggle />
        <NeuronBackground />
        <Navbar />
        <main className="container mx-auto px-4 pt-32 pb-16 flex items-center justify-center">
          <p className="text-foreground/70">Loading...</p>
        </main>
      </div>
    );
  }

  if (!firebaseConfigured) {
    return (
      <div className="min-h-screen text-foreground overflow-x-hidden relative">
        <ThemeToggle />
        <NeuronBackground />
        <Navbar />
        <main className="container mx-auto px-4 pt-32 pb-16">
          <section
            className="relative max-w-md mx-auto rounded-3xl border border-border/40 bg-card/80 dark:bg-card/40
                       backdrop-blur-xl shadow-xl overflow-hidden"
          >
            <div className="px-6 sm:px-10 py-6 sm:py-8 text-center">
              <h1 className="text-2xl font-bold tracking-tight mb-4">
                Configuration <span className="text-primary">Error</span>
              </h1>
              <p className="text-foreground/70">
                Firebase is not configured. Please set up your environment variables.
              </p>
            </div>
          </section>
        </main>
      </div>
    );
  }

  return (
    <div className="min-h-screen text-foreground overflow-x-hidden relative">
      <ThemeToggle />
      <NeuronBackground />
      <Navbar />

      <main className="container mx-auto px-4 pt-32 pb-16">
        {!user ? (
          <section
            className="relative max-w-md mx-auto rounded-3xl border border-border/40 bg-card/80 dark:bg-card/40
                       backdrop-blur-xl shadow-xl overflow-hidden"
          >
            <div className="px-6 sm:px-10 py-6 sm:py-8 border-b border-border/40 bg-gradient-to-r from-primary/10 via-transparent to-orange-500/10">
              <h1 className="text-2xl sm:text-3xl font-bold tracking-tight">
                Admin <span className="text-primary">Login</span>
              </h1>
              <p className="mt-2 text-sm text-foreground/70">
                Sign in to view your messages.
              </p>
            </div>

            <form onSubmit={handleAdminLogin} className="px-6 sm:px-10 py-6 sm:py-8 space-y-4">
              {error && (
                <div className="p-3 rounded-lg bg-red-500/10 border border-red-500/30 text-red-500 text-sm">
                  {error}
                </div>
              )}
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-foreground/70 mb-1">
                  Email
                </label>
                <input
                  id="email"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="w-full px-4 py-2 rounded-lg border border-border/40 bg-background/70
                             text-foreground placeholder:text-foreground/50 focus:outline-none
                             focus:ring-2 focus:ring-primary/50 focus:border-primary/50 transition-all"
                  placeholder="your@email.com"
                />
              </div>
              <div>
                <label htmlFor="password" className="block text-sm font-medium text-foreground/70 mb-1">
                  Password
                </label>
                <input
                  id="password"
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                  className="w-full px-4 py-2 rounded-lg border border-border/40 bg-background/70
                             text-foreground placeholder:text-foreground/50 focus:outline-none
                             focus:ring-2 focus:ring-primary/50 focus:border-primary/50 transition-all"
                  placeholder="Enter your password"
                />
              </div>
              <button
                type="submit"
                disabled={loggingIn}
                className="w-full px-4 py-2 rounded-lg bg-primary text-primary-foreground font-medium
                           hover:bg-primary/90 focus:outline-none focus:ring-2 focus:ring-primary/50
                           disabled:opacity-50 disabled:cursor-not-allowed transition-all"
              >
                {loggingIn ? "Signing in..." : "Sign In"}
              </button>
            </form>
          </section>
        ) : (
          <section
            className="relative rounded-3xl border border-border/40 bg-card/80 dark:bg-card/40
                       backdrop-blur-xl shadow-xl overflow-hidden"
          >
            <div className="px-6 sm:px-10 py-6 sm:py-8 border-b border-border/40 bg-gradient-to-r from-primary/10 via-transparent to-orange-500/10 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
              <div>
                <h1 className="text-3xl sm:text-4xl font-bold tracking-tight">
                  My <span className="text-primary">messages</span>
                </h1>
                <p className="mt-2 text-sm sm:text-base text-foreground/70">
                  Messages submitted through your contact form.
                </p>
              </div>
              <button
                onClick={handleSignOut}
                className="px-4 py-2 rounded-lg border border-border/40 bg-background/70
                           text-foreground/70 hover:text-foreground hover:border-border
                           transition-all text-sm font-medium self-start sm:self-auto"
              >
                Sign Out
              </button>
            </div>

            <div className="px-4 sm:px-6 lg:px-8 py-6 sm:py-8">
              {!hasMessages && (
                <div className="flex flex-col items-center justify-center py-16 text-center text-foreground/70">
                  <p className="text-lg font-medium">No messages yet</p>
                  <p className="mt-1 text-sm">
                    Once someone sends you a message, it will appear here.
                  </p>
                </div>
              )}

              {hasMessages && (
                <div className="overflow-x-auto">
                  <table className="min-w-full text-sm border-separate border-spacing-y-2">
                    <thead>
                      <tr>
                        <th
                          scope="col"
                          className="text-left text-xs sm:text-sm font-semibold text-foreground/70 uppercase tracking-wide px-3 sm:px-4 py-2"
                        >
                          Name
                        </th>
                        <th
                          scope="col"
                          className="text-left text-xs sm:text-sm font-semibold text-foreground/70 uppercase tracking-wide px-3 sm:px-4 py-2"
                        >
                          Email
                        </th>
                        <th
                          scope="col"
                          className="text-left text-xs sm:text-sm font-semibold text-foreground/70 uppercase tracking-wide px-3 sm:px-4 py-2"
                        >
                          Message
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      {messages.map((msg) => (
                        <tr
                          key={msg.id}
                          className={cn(
                            "align-top",
                            "rounded-2xl",
                            "bg-background/70 dark:bg-background/40 border border-border/40",
                            "shadow-sm hover:shadow-lg hover:border-primary/40 transition-all duration-200"
                          )}
                        >
                          <td className="px-3 sm:px-4 py-3 sm:py-4 text-foreground font-medium whitespace-nowrap">
                            {msg.name}
                          </td>
                          <td className="px-3 sm:px-4 py-3 sm:py-4 text-primary whitespace-nowrap">
                            <a href={`mailto:${msg.email}`} className="hover:underline">
                              {msg.email}
                            </a>
                          </td>
                          <td className="px-3 sm:px-4 py-3 sm:py-4 text-foreground/80 max-w-xl">
                            <p className="whitespace-pre-wrap break-words">
                              {msg.message}
                            </p>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              )}
            </div>
          </section>
        )}
      </main>
    </div>
  );
};
