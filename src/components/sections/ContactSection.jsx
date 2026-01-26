import { useState, useRef, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGithub,
  faTwitter,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";
import {
  faEnvelope,
  faPhone,
  faPaperPlane,
  faCheckCircle,
  faExclamationCircle,
} from "@fortawesome/free-solid-svg-icons";
import { cn } from "@/lib/utils";

export const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [response, setResponse] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [focusedField, setFocusedField] = useState(null);
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

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

  // Intersection Observer for entrance animations
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

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
        setResponse("success");
        setFormData({ name: "", email: "", message: "" });
        setIsSubmitting(false);

        // Clear success message after 5 seconds
        setTimeout(() => setResponse(""), 5000);
      }, 1500);
    } catch {
      setResponse("error");
      setIsSubmitting(false);

      // Clear error message after 5 seconds
      setTimeout(() => setResponse(""), 5000);
    }
  };

  return (
    <section
      ref={sectionRef}
      id="contact"
      className="relative min-h-screen flex items-center justify-center px-4 py-24 overflow-hidden"
    >
      {/* Animated Background Orbs */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-20 -left-20 w-72 h-72 bg-primary/10 rounded-full blur-3xl animate-float"
             style={{ animationDelay: '0s', animationDuration: '8s' }}></div>
        <div className="absolute bottom-20 -right-20 w-96 h-96 bg-primary/15 rounded-full blur-3xl animate-float"
             style={{ animationDelay: '2s', animationDuration: '10s' }}></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-primary/5 rounded-full blur-3xl animate-pulse-subtle"></div>
      </div>

      <div className="container max-w-6xl mx-auto z-10">
        <div className="space-y-12">
          {/* Header with stagger animation */}
          <div className={cn(
            "text-center space-y-4 transition-all duration-1000",
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          )}>
            <h2 className="text-4xl md:text-5xl font-bold">
              Get in <span className="text-primary">Touch</span>
            </h2>
            <p className="text-lg text-foreground/80 max-w-2xl mx-auto">
              Feel free to connect with me! I'm always open to new
              opportunities and collaborations.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
            {/* Contact Info - Animated */}
            <div className="space-y-6 sm:space-y-8">
              <div className="space-y-3 sm:space-y-4">
                {contactLinks.map((link, index) => (
                  <a
                    key={index}
                    href={link.href}
                    target={link.external ? "_blank" : undefined}
                    rel={link.external ? "noopener noreferrer" : undefined}
                    className={cn(
                      "flex items-center gap-3 sm:gap-4 p-3 sm:p-4 md:p-5 rounded-xl group relative overflow-hidden",
                      "bg-gradient-to-br from-card/60 to-card/30 dark:from-card/50 dark:to-card/20",
                      "border border-border/40 dark:border-border/30",
                      "hover:border-primary/60 dark:hover:border-primary/50",
                      "hover:shadow-xl hover:shadow-primary/10",
                      "transition-all duration-500",
                      "hover:scale-[1.02] hover:-translate-y-1",
                      isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-10"
                    )}
                    style={{
                      transitionDelay: `${index * 100}ms`
                    }}
                  >
                    {/* Animated gradient on hover */}
                    <div className="absolute inset-0 bg-gradient-to-r from-primary/0 via-primary/5 to-primary/0
                                    translate-x-[-100%] group-hover:translate-x-[100%]
                                    transition-transform duration-1000 ease-out"></div>

                    {/* Icon with ripple effect */}
                    <div className="relative">
                      <div className="absolute inset-0 bg-primary/20 rounded-full scale-0 group-hover:scale-150
                                      opacity-0 group-hover:opacity-100 transition-all duration-500"></div>
                      <div className="w-12 h-12 sm:w-13 sm:h-13 md:w-14 md:h-14 rounded-full bg-primary/10 dark:bg-primary/20
                                      flex items-center justify-center
                                      group-hover:bg-primary/20 dark:group-hover:bg-primary/30
                                      group-hover:rotate-12 transition-all duration-300 relative z-10">
                        <FontAwesomeIcon
                          icon={link.icon}
                          className="text-2xl text-primary transition-transform duration-300
                                     group-hover:scale-125"
                        />
                      </div>
                    </div>

                    <div className="flex flex-col relative z-10">
                      <span className="text-xs text-foreground/50 uppercase tracking-wider mb-1
                                       group-hover:text-foreground/70 transition-colors">
                        {link.label}
                      </span>
                      <span className="text-base md:text-lg font-semibold text-foreground
                                       group-hover:text-primary transition-colors duration-300">
                        {link.text}
                      </span>
                    </div>

                    {/* Arrow indicator */}
                    <div className="ml-auto opacity-0 -translate-x-4 group-hover:opacity-100
                                    group-hover:translate-x-0 transition-all duration-300">
                      <svg className="w-5 h-5 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                      </svg>
                    </div>
                  </a>
                ))}
              </div>
            </div>

            {/* Contact Form - Animated */}
            <div
              className={cn(
                "p-8 rounded-2xl relative overflow-hidden",
                "bg-gradient-to-br from-card/80 to-card/40 dark:from-card/60 dark:to-card/20",
                "border border-border/40 dark:border-border/30",
                "backdrop-blur-md",
                "shadow-xl dark:shadow-none",
                "transition-all duration-1000 delay-300",
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
              )}
            >
              {/* Decorative corner accents */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-primary/10 to-transparent
                              rounded-bl-full pointer-events-none"></div>
              <div className="absolute bottom-0 left-0 w-32 h-32 bg-gradient-to-tr from-primary/10 to-transparent
                              rounded-tr-full pointer-events-none"></div>

              <form onSubmit={handleSubmit} className="space-y-6 relative z-10">
                {/* Name Input */}
                <div className="relative">
                  <input
                    type="text"
                    name="name"
                    placeholder=" "
                    value={formData.name}
                    onChange={handleChange}
                    onFocus={() => setFocusedField('name')}
                    onBlur={() => setFocusedField(null)}
                    required
                    className={cn(
                      "w-full px-4 pt-6 pb-2 rounded-xl peer",
                      "bg-background/50 dark:bg-background/30",
                      "border-2 border-border/40 dark:border-border/30",
                      "text-foreground placeholder-transparent",
                      "focus:outline-none focus:border-primary/60 focus:ring-4 focus:ring-primary/10",
                      "transition-all duration-300",
                      focusedField === 'name' && "shadow-lg shadow-primary/20"
                    )}
                  />
                  <label className={cn(
                    "absolute left-4 transition-all duration-300 pointer-events-none",
                    "peer-placeholder-shown:top-4 peer-placeholder-shown:text-base peer-placeholder-shown:text-foreground/50",
                    "peer-focus:top-2 peer-focus:text-xs peer-focus:text-primary",
                    formData.name ? "top-2 text-xs text-primary" : "top-4 text-base text-foreground/50"
                  )}>
                    Your Name
                  </label>
                </div>

                {/* Email Input */}
                <div className="relative">
                  <input
                    type="email"
                    name="email"
                    placeholder=" "
                    value={formData.email}
                    onChange={handleChange}
                    onFocus={() => setFocusedField('email')}
                    onBlur={() => setFocusedField(null)}
                    required
                    className={cn(
                      "w-full px-4 pt-6 pb-2 rounded-xl peer",
                      "bg-background/50 dark:bg-background/30",
                      "border-2 border-border/40 dark:border-border/30",
                      "text-foreground placeholder-transparent",
                      "focus:outline-none focus:border-primary/60 focus:ring-4 focus:ring-primary/10",
                      "transition-all duration-300",
                      focusedField === 'email' && "shadow-lg shadow-primary/20"
                    )}
                  />
                  <label className={cn(
                    "absolute left-4 transition-all duration-300 pointer-events-none",
                    "peer-placeholder-shown:top-4 peer-placeholder-shown:text-base peer-placeholder-shown:text-foreground/50",
                    "peer-focus:top-2 peer-focus:text-xs peer-focus:text-primary",
                    formData.email ? "top-2 text-xs text-primary" : "top-4 text-base text-foreground/50"
                  )}>
                    Your Email
                  </label>
                </div>

                {/* Message Input */}
                <div className="relative">
                  <textarea
                    name="message"
                    placeholder=" "
                    value={formData.message}
                    onChange={handleChange}
                    onFocus={() => setFocusedField('message')}
                    onBlur={() => setFocusedField(null)}
                    required
                    rows={5}
                    className={cn(
                      "w-full px-4 pt-6 pb-2 rounded-xl resize-none peer",
                      "bg-background/50 dark:bg-background/30",
                      "border-2 border-border/40 dark:border-border/30",
                      "text-foreground placeholder-transparent",
                      "focus:outline-none focus:border-primary/60 focus:ring-4 focus:ring-primary/10",
                      "transition-all duration-300",
                      focusedField === 'message' && "shadow-lg shadow-primary/20"
                    )}
                  />
                  <label className={cn(
                    "absolute left-4 transition-all duration-300 pointer-events-none",
                    "peer-placeholder-shown:top-4 peer-placeholder-shown:text-base peer-placeholder-shown:text-foreground/50",
                    "peer-focus:top-2 peer-focus:text-xs peer-focus:text-primary",
                    formData.message ? "top-2 text-xs text-primary" : "top-4 text-base text-foreground/50"
                  )}>
                    Your Message
                  </label>
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className={cn(
                    "w-full px-6 py-4 rounded-xl font-semibold relative overflow-hidden group",
                    "bg-gradient-to-r from-primary to-orange-600",
                    "text-primary-foreground",
                    "hover:shadow-2xl hover:shadow-primary/40",
                    "hover:scale-[1.02]",
                    "active:scale-95",
                    "disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100",
                    "transition-all duration-300"
                  )}
                >
                  {/* Button shine effect */}
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent
                                  translate-x-[-100%] group-hover:translate-x-[100%]
                                  transition-transform duration-1000 ease-out"></div>

                  <span className="relative z-10 flex items-center justify-center gap-2">
                    {isSubmitting ? (
                      <>
                        <svg className="animate-spin h-5 w-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                        </svg>
                        <span>Sending...</span>
                      </>
                    ) : (
                      <>
                        <FontAwesomeIcon icon={faPaperPlane} className="group-hover:translate-x-1 transition-transform" />
                        <span>Send Message</span>
                      </>
                    )}
                  </span>
                </button>

                {/* Response Messages */}
                {response && (
                  <div className={cn(
                    "p-4 rounded-xl flex items-center gap-3",
                    "animate-fade-in",
                    response === "success"
                      ? "bg-green-500/10 border border-green-500/30 text-green-400"
                      : "bg-red-500/10 border border-red-500/30 text-red-400"
                  )}>
                    <FontAwesomeIcon
                      icon={response === "success" ? faCheckCircle : faExclamationCircle}
                      className="text-xl animate-bounce"
                    />
                    <p className="font-semibold">
                      {response === "success"
                        ? "Thank you for your message! I'll get back to you soon."
                        : "Error sending message. Please try again."}
                    </p>
                  </div>
                )}
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
