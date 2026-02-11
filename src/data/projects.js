/**
 * Centralized projects data
 * All project information is stored here to avoid duplication
 */

export const projects = [
    {
        id: 1,
        slug: "cinq",
        title: "CinQ",
        tagline: "Event Management App",
        description: "Event Management App",
        fullDescription: "A comprehensive event management application built with React and Node.js. Features include event creation, ticket management, attendee tracking, and real-time notifications. CinQ simplifies the entire event lifecycle from planning to execution, providing organizers with powerful tools to manage attendees, check-ins, and post-event analytics.",
        image: "/screenshots/CinQ.jpg",
        technologies: ["React", "Node.js", "MongoDB", "Express", "Socket.io"],
        link: null,
        liveUrl: null,
        features: [
            "Event creation and management",
            "Ticket sales and management",
            "Real-time attendee tracking",
            "Check-in system",
            "Event analytics and reporting",
            "Email notifications"
        ],
        challenges: "Building a scalable system that could handle multiple concurrent events with real-time updates required careful database optimization and WebSocket implementation.",
        learnings: "Gained deep experience with full-stack development, real-time data synchronization, and user authentication systems.",
        metrics: null,
        overview: null,
        problem: null,
        solution: null
    },
    {
        id: 2,
        slug: "giannifit",
        title: "GianniFit",
        tagline: "Modern fitness brand website built for performance and conversions.",
        description: "Modern fitness brand website built for performance and conversions.",
        fullDescription: "GianniFit is a modern fitness brand website designed to showcase training programs, capture leads, and drive online sales through a clean, mobile-first experience. Built with Next.js, React, and Tailwind CSS, the site features secure payment processing through Stripe and a scalable backend powered by Supabase.",
        image: "/screenshots/giannifit.jpg",
        technologies: ["Next.js", "React", "Tailwind CSS", "Stripe", "Supabase"],
        link: null,
        liveUrl: "https://giannifit.shop",
        features: [
            "Secure checkout flow",
            "Fully responsive design",
            "SEO-optimized pages",
            "Scalable backend architecture",
            "Clean conversion-focused UI"
        ],
        challenges: "Integrating Stripe for secure payments while maintaining a seamless user experience required careful handling of payment states and error scenarios. Optimizing for both desktop and mobile while achieving high Lighthouse scores demanded meticulous attention to performance metrics.",
        learnings: "Deepened expertise in performance optimization techniques, payment gateway integration, and building mobile-first responsive interfaces that convert visitors into customers.",
        metrics: {
            lighthouse: "95+",
            loadTime: "< 1.5s",
            seo: "98",
            accessibility: "100"
        },
        overview: "GianniFit is a modern fitness brand website designed to showcase training programs, capture leads, and drive online sales through a clean, mobile-first experience.",
        problem: [
            "No strong digital presence",
            "Poor mobile optimization",
            "No seamless online payment integration",
            "Limited performance optimization"
        ],
        solution: [
            "Built a mobile-first responsive UI",
            "Integrated Stripe for secure payments",
            "Used Supabase for scalable backend functionality",
            "Optimized for performance and SEO"
        ],
        seo: {
            title: "GianniFit – Fitness Website Project | Agenorwoth Adrian",
            description: "Case study of GianniFit, a modern fitness website built using Next.js, Stripe, and Supabase. Designed for performance, scalability, and conversions.",
            openGraph: {
                title: "GianniFit – Fitness Website Project | Agenorwoth Adrian",
                description: "Case study of GianniFit, a modern fitness website built using Next.js, Stripe, and Supabase. Designed for performance, scalability, and conversions.",
                url: "/projects/giannifit",
                type: "website"
            }
        }
    }
];

/**
 * Get a project by its slug
 * @param {string} slug - The project slug
 * @returns {object|undefined} The project object or undefined
 */
export const getProjectBySlug = (slug) => {
    return projects.find(p => p.slug === slug);
};

/**
 * Get a project by its ID
 * @param {number|string} id - The project ID
 * @returns {object|undefined} The project object or undefined
 */
export const getProjectById = (id) => {
    return projects.find(p => p.id === parseInt(id));
};

/**
 * Get a project by either slug or ID
 * @param {string} identifier - The project slug or ID
 * @returns {object|undefined} The project object or undefined
 */
export const getProject = (identifier) => {
    // First try to find by slug
    const bySlug = getProjectBySlug(identifier);
    if (bySlug) return bySlug;

    // Then try by ID
    return getProjectById(identifier);
};
