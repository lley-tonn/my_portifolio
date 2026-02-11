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
        slug: "gianni",
        title: "Gianni",
        tagline: "Modern fashion discovery platform built for personalization and conversion.",
        description: "Modern fashion discovery platform built for personalization and conversion.",
        fullDescription: "Gianni is a fashion discovery web application designed to help users recreate and refine their personal style. Users can upload outfit photos or describe a look they want to achieve, and Gianni analyzes the style, breaks down each piece, and provides curated shopping options to bring the outfit to life. Built with Next.js, TypeScript, and Tailwind CSS, the platform follows a clean, scalable architecture with Supabase handling authentication, database management, and storage. Stripe powers subscription payments, enabling a recurring revenue model. The system is optimized for performance, modularity, and future feature expansion.",
        image: "/screenshots/gianni.jpg",
        technologies: ["Next.js", "TypeScript", "Tailwind CSS", "Stripe", "Supabase"],
        link: null,
        liveUrl: "https://giannifit.shop",
        features: [
            "AI-powered outfit analysis",
            "Personalized style recommendations",
            "Curated shopping options",
            "Subscription-based payments",
            "Secure authentication flow",
            "Fully responsive design"
        ],
        challenges: "Building an intelligent style analysis system that accurately breaks down outfits and matches pieces to shopping options required careful integration of AI capabilities. Implementing a subscription model with Stripe while maintaining a seamless user experience demanded meticulous attention to payment flows and state management.",
        learnings: "Deepened expertise in AI-powered feature development, subscription payment systems, and building personalized user experiences that drive engagement and conversion.",
        metrics: {
            lighthouse: "95+",
            loadTime: "< 1.5s",
            seo: "98",
            accessibility: "100"
        },
        overview: "Gianni is a fashion discovery web application designed to help users recreate and refine their personal style. Users can upload outfit photos or describe a look they want to achieve, and Gianni analyzes the style, breaks down each piece, and provides curated shopping options to bring the outfit to life.",
        problem: [
            "Difficulty recreating outfits seen online or in real life",
            "Time-consuming manual search for matching pieces",
            "Lack of personalized fashion recommendations",
            "No unified platform for style discovery and shopping"
        ],
        solution: [
            "Built AI-powered outfit analysis and breakdown",
            "Integrated curated shopping recommendations",
            "Implemented Stripe for subscription payments",
            "Used Supabase for auth, database, and storage",
            "Optimized for performance and scalability"
        ],
        seo: {
            title: "Gianni – Fashion Discovery Platform | Agenorwoth Adrian",
            description: "Case study of Gianni, a modern fashion discovery platform built using Next.js, TypeScript, Stripe, and Supabase. Designed for personalization and conversion.",
            openGraph: {
                title: "Gianni – Fashion Discovery Platform | Agenorwoth Adrian",
                description: "Case study of Gianni, a modern fashion discovery platform built using Next.js, TypeScript, Stripe, and Supabase. Designed for personalization and conversion.",
                url: "/projects/gianni",
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
