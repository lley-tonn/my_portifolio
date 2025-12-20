import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGithub,
  faTwitter,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";
import {
  faEnvelope,
  faPhone,
} from "@fortawesome/free-solid-svg-icons";

export const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [response, setResponse] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const contactLinks = [
    {
      icon: faEnvelope,
      href: "mailto:lagenorwoth@gmail.com",
      text: "lagenorwoth@gmail.com",
    },
    {
      icon: faPhone,
      href: "tel:+256783164154",
      text: "+256 783 164 154",
    },
    {
      icon: faGithub,
      href: "https://github.com/lley-tonn",
      text: "lley-tonn",
      external: true,
    },
    {
      icon: faTwitter,
      href: "https://twitter.com/AdrianLleyton",
      text: "AdrianLleyton",
      external: true,
    },
    {
      icon: faInstagram,
      href: "https://instagram.com/lley_tonn",
      text: "lley_tonn",
      external: true,
    },
  ];

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setResponse("");

    try {
      setTimeout(() => {
        setResponse("Thank you for your message! I'll get back to you soon.");
        setFormData({ name: "", email: "", message: "" });
        setIsSubmitting(false);
      }, 1000);
    } catch {
      setResponse("Error sending message. Please try again.");
      setIsSubmitting(false);
    }
  };

  return (
    <section
      id="contact"
      className="relative min-h-screen flex items-center justify-center px-4 py-24"
    >
      <div className="container max-w-6xl mx-auto z-10">
        <div className="space-y-12">
          <h2 className="text-4xl md:text-5xl font-bold text-center">
            Get in <span className="text-primary">Touch</span>
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {/* Contact Info */}
            <div className="space-y-8">
              <p className="text-lg text-foreground/80">
                Feel free to connect with me! I'm always open to new
                opportunities and collaborations.
              </p>

              <div className="space-y-4">
                {contactLinks.map((link, index) => (
                  <a
                    key={index}
                    href={link.href}
                    target={link.external ? "_blank" : undefined}
                    rel={link.external ? "noopener noreferrer" : undefined}
                    className="
                      flex items-center gap-4 p-4 rounded-lg
                      bg-gradient-to-br from-card/60 to-card/30
                      dark:from-card/50 dark:to-card/20
                      border border-border/40 dark:border-border/30
                      hover:border-primary/60
                      transition-all duration-300
                      hover:shadow-lg group
                    "
                  >
                    <FontAwesomeIcon
                      icon={link.icon}
                      className="text-2xl text-primary transition-transform duration-300 group-hover:scale-125"
                    />
                    <div className="flex flex-col">
                      <span className="text-sm text-foreground/60">
                        {link.label}
                      </span>
                      <span className="text-base md:text-lg font-semibold text-foreground group-hover:text-primary transition-colors">
                        {link.text}
                      </span>
                    </div>
                  </a>
                ))}
              </div>
            </div>

            {/* Contact Form */}
            <div
              className="
                p-8 rounded-xl
                bg-gradient-to-br from-card/80 to-card/40
                dark:from-card/60 dark:to-card/20
                border border-border/40 dark:border-border/30
                backdrop-blur-md
              "
            >
              <form onSubmit={handleSubmit} className="space-y-5">
                <input
                  type="text"
                  name="name"
                  placeholder="Your Name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="
                    w-full px-4 py-3 rounded-lg
                    bg-background/50 dark:bg-background/30
                    border border-border/40 dark:border-border/30
                    text-foreground placeholder-foreground/50
                    focus:outline-none focus:ring-2 focus:ring-primary/20
                  "
                />

                <input
                  type="email"
                  name="email"
                  placeholder="Your Email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="
                    w-full px-4 py-3 rounded-lg
                    bg-background/50 dark:bg-background/30
                    border border-border/40 dark:border-border/30
                    text-foreground placeholder-foreground/50
                    focus:outline-none focus:ring-2 focus:ring-primary/20
                  "
                />

                <textarea
                  name="message"
                  placeholder="Your Message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="
                    w-full px-4 py-3 rounded-lg resize-none
                    bg-background/50 dark:bg-background/30
                    border border-border/40 dark:border-border/30
                    text-foreground placeholder-foreground/50
                    focus:outline-none focus:ring-2 focus:ring-primary/20
                  "
                />

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="
                    w-full px-6 py-3 rounded-lg font-semibold
                    bg-gradient-to-r from-primary to-orange-600
                    text-primary-foreground
                    hover:shadow-lg hover:shadow-primary/30
                    active:scale-95
                    disabled:opacity-50 disabled:cursor-not-allowed
                    transition-all
                  "
                >
                  {isSubmitting ? "Sending..." : "Send Message"}
                </button>

                {response && (
                  <p
                    className={`text-center font-semibold ${
                      response.includes("Thank")
                        ? "text-green-400"
                        : "text-red-400"
                    }`}
                  >
                    {response}
                  </p>
                )}
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};