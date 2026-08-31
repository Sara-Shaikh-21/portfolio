const freelancingPlatforms = [
    {
        name: "Upwork",
        icon: "💼",
        category: "General Freelancing",
        bestFor: "Custom software projects",
        difficulty: "Medium",
        remote: true,
        hourly: true,
        fixedPrice: true,
        skills: ["React", "Node.js", "TypeScript", "AI"],
        description:
            "A large freelance marketplace suitable for software development, AI and long-term client projects.",
        website: "https://www.upwork.com",
    },

    {
        name: "Fiverr",
        icon: "🟢",
        category: "Service Marketplace",
        bestFor: "Productized services",
        difficulty: "Medium",
        remote: true,
        hourly: true,
        fixedPrice: true,
        skills: ["Web Development", "React", "Node.js", "AI"],
        description:
            "Useful for offering clearly defined development services and smaller projects.",
        website: "https://www.fiverr.com",
    },

    {
        name: "Toptal",
        icon: "⭐",
        category: "Premium Network",
        bestFor: "Experienced developers",
        difficulty: "High",
        remote: true,
        hourly: true,
        fixedPrice: false,
        skills: ["Software Engineering", "React", "Node.js", "AI"],
        description:
            "A selective network focused on connecting clients with experienced professionals.",
        website: "https://www.toptal.com",
    },
];

export default freelancingPlatforms;