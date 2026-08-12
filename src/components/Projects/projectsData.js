import p1 from "../../assets/sk_logo.png";
import p2 from "../../assets/urb_logo.png";
import p3 from "../../assets/pict_logo.jpg";
import p4 from "../../assets/react.png";
import p5 from "../../assets/dice.png";
import p6 from "../../assets/openai.png";
import p7 from "../../assets/Sticky_Notes.png";
import p8 from "../../assets/game2048.png";
import p9 from "../../assets/commerceAI.avif";

const ProjectsData = [
    {
        imgsrc: p9,

        title: "AI-Customer-Support-Agent",

        text:
            "Built a multi-agent AI customer support platform using Azure AI Foundry. Implemented an AI-driven router that dynamically delegated user requests to specialized Shopping, Order, Refund, and Support agents, each with dedicated prompts and tool access.",

        tech: [
            "Azure OpenAI",
            "Azure AI Foundry ",
            "Azure Cosmos DB",
            "Azure Container App",
            "Azure Static Web App",
            "Swagger",
            "Open AI"
        ],

        view: "https://orange-forest-0012be30f.7.azurestaticapps.net/",

        source: "https://github.com/Sara-Shaikh-21/AI-Customer-Support-Agent",
    },




    {
        imgsrc: p7,

        title: "Sticky Notes Service App",

        text:
            "Backend focused application for a multi-user notes service. Think backend server for Google Keep or Apple Notes. It should expose REST APIs to manage users and their personal notes. The primary features should include: ● New User Registration ● User authentication (Login) ● Creating, reading, updating, and deleting notes ● Sharing a note with another user",

        tech: [
            "DialogFlow",
            "Google Cloud",
            "NLP",
            "ChatBot",
            "JavaScript",
            "Web Integration",
        ],

        view: "https://notes-service.netlify.app/",

        source: "https://github.com/Sara-Shaikh-21/notes-service",
    },


    {
        imgsrc: p8,

        title: "2048 Game (React + Node)",

        text:
            "The game consists of a 4×4 grid where numbered tiles slide in four directions — up, down, left, and right. When two tiles with the same number collide, they merge into one tile with their sum. The objective is to create a tile with the value 2048 while maximizing the score.",

        tech: [
            "DialogFlow",
            "Google Cloud",
            "NLP",
            "ChatBot",
            "JavaScript",
            "Web Integration",
        ],

        view: "https://game-2048-assig.netlify.app/",

        source: "https://github.com/Sara-Shaikh-21/game2048",
    },


    {
        imgsrc: p3,

        title: "PICT ChatBot Project",

        text:
            "Developed an AI-powered chatbot for Pune Institute of Computer Technology using Google DialogFlow and Google Cloud Platform. The chatbot was designed to help students and parents quickly access information such as timetables, syllabus details, office hours, admission queries, and website navigation. Successfully handled interactions for more than 1000+ users and improved accessibility of college-related information.",

        tech: [
            "DialogFlow",
            "Google Cloud",
            "NLP",
            "ChatBot",
            "JavaScript",
            "Web Integration",
        ],

        view: "https://pict.edu/",

        source: "https://pict.edu/",
    },

    {
        imgsrc: p1,

        title: "Skill Space - Training & Competency Mapping",

        text:
            "Built a Training and Competency Management platform that enables organizations to monitor trainee progress, evaluate competency levels, and streamline training workflows. The system provides dashboards for management authorities and supports competency tracking, training evaluation, and performance monitoring through an interactive web application.",

        tech: [
            "React.js",
            "Node.js",
            "Express.js",
            "MongoDB",
            "MERN Stack",
            "REST APIs",
        ],

        view: "https://skill-space.netlify.app/",

        source: "https://github.com/Sara-Shaikh-21/Skill-Space",
    },

    {
        imgsrc: p4,

        title: "Personal Portfolio Website",

        text:
            "Designed and developed a fully responsive developer portfolio using React.js to showcase projects, work experience, technical skills, and achievements. Implemented modern UI/UX principles, reusable components, responsive layouts, and interactive sections to create a clean and professional personal brand website.",

        tech: [
            "React.js",
            "JavaScript",
            "CSS3",
            "Responsive Design",
            "Frontend Development",
            "Netlify",
        ],

        view: "https://sara-shaikh.netlify.app/",

        source: "https://github.com/Sara-Shaikh-21/Portfolio",
    },

    {
        imgsrc: p6,

        title: "AI Image Generation using DALL·E",

        text:
            "Developed an AI-powered image generation application integrated with OpenAI’s DALL·E model. Users can generate and customize images through prompts using advanced AI capabilities. Built an interactive frontend interface for seamless image creation and enhanced user experience.",

        tech: [
            "React.js",
            "OpenAI API",
            "DALL·E",
            "JavaScript",
            "AI Integration",
            "Frontend Development",
        ],

        view: "https://github.com/Sara-Shaikh-21/Image-Generation",

        source: "https://github.com/Sara-Shaikh-21/Image-Generation",
    },

    {
        imgsrc: p2,

        title: "Urban Amenities",

        text:
            "Developed a home services platform that allows users to book trusted services including beauty treatments, plumbing, carpentry, appliance repair, painting, cleaning, and wellness solutions. The platform also empowers service providers to showcase their services and connect with customers through a responsive digital interface.",

        tech: [
            "React.js",
            "JavaScript",
            "CSS3",
            "Responsive UI",
            "Web Development",
            "Frontend Development",
        ],

        view: "https://urban-amenities.netlify.app/",

        source:
            "https://github.com/Sara-Shaikh-21/Urban-Amenities-homeservices-provider",
    },

    {
        imgsrc: p5,

        title: "Dice Game",

        text:
            "Created an interactive browser-based dice game using JavaScript where players take turns rolling dice to accumulate scores strategically. The game includes score tracking, game state management, dynamic UI updates, and responsive gameplay logic.",

        tech: [
            "HTML5",
            "CSS3",
            "JavaScript",
            "DOM Manipulation",
            "Game Logic",
            "Frontend Development",
        ],

        view: "https://sara-shaikh-21.github.io/Dice-Game/",

        source: "https://github.com/Sara-Shaikh-21/Dice-Game",
    },
];

export default ProjectsData;