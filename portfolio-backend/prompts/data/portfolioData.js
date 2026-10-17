// Single source of truth for the Aadi AI chatbot.
// Only add facts that are true. Anything missing here, the bot will say is "not mentioned".

export const portfolioData = {
  owner: {
    name: "Aditya Kourav",
    role: "MERN stack developer and college student",
  },

  about: {
    summary:
      "Aditya is a MERN stack developer and a college student. He has been coding for more than 2 years and started with web development. He works solo and handles both frontend and backend in his projects.",
    experienceNote:
      "He has worked on some real-world projects for other people. He has not done an internship yet. Specific details of those client projects are not provided in the portfolio.",
    education:
      "Currently a college student. College name, degree, and year are not specified in the portfolio.",
    currentlyLearning: ["Generative AI", "DSA (Data Structures and Algorithms), basics"],
    socialPresence:
      "Aditya posts coding and web development videos on Instagram (@code_aadi) and has 1500+ followers there.",
    achievements:
      "No formal achievements or certificates are listed. The Instagram following (1500+ followers) is the only public milestone.",
  },

  skills: {
    knownAndUsedInProjects: [
      { group: "Frontend", items: ["HTML", "CSS", "JavaScript", "React"] },
      { group: "Backend", items: ["Node.js", "Express.js"] },
      { group: "Database", items: ["MongoDB", "Firebase"] },
      { group: "Languages", items: ["JavaScript"] },
      { group: "Tools & Deployment", items: ["Git", "GitHub"] },
      { group: "Other", items: ["REST API", "JWT", "Vercel", "Render"] },
    ],
    note:
      "Generative AI and DSA are things Aditya is currently learning. They are not listed as professional skills.",
  },

  services: [
    {
      title: "Full Stack Development",
      description:
        "Building complete web applications with React, Node.js, Express and MongoDB.",
    },
    {
      title: "Frontend Development",
      description:
        "Creating responsive, modern and interactive interfaces using React, JavaScript and CSS.",
    },
    {
      title: "Backend & API Development",
      description:
        "Building REST APIs, authentication systems and backend functionality using Node.js and Express.",
    },
  ],

  projects: [
    {
      title: "Full Stack Ecommerce",
      category: "Full Stack / E-Commerce",
      featured: true,
      description:
        "A complete MERN stack e-commerce application featuring Razorpay payments, proper authentication, Telegram bot integration and an admin panel.",
      techStack: ["MERN", "Razorpay", "Authentication", "Telegram Bot", "Admin Panel"],
      contribution: "Built solo (frontend and backend).",
      liveUrl: "https://full-stack-ecommerce-aadi.vercel.app/",
      githubUrl: "https://github.com/code-aadi/Full-Stack-Ecommerce",
    },
    {
      title: "E-Commerce Store",
      category: "React / Firebase",
      description:
        "A React-based e-commerce application using Firebase as the backend. Includes authentication, skeleton loading and EmailJS integration for order notifications.",
      techStack: ["React", "CSS", "Firebase", "EmailJS"],
      contribution: "Built solo.",
      liveUrl: "https://react-ecommerce-store-aadi.vercel.app",
      githubUrl: "https://github.com/code-aadi/React-Ecommerce-Store",
    },
    {
      title: "Grocery E-Commerce Store",
      category: "Frontend / JavaScript",
      description:
        "A frontend e-commerce project built using HTML, CSS and JavaScript with hardcoded product data and a WhatsApp checkout flow that sends cart details and total amount directly through WhatsApp.",
      techStack: ["HTML", "CSS", "JavaScript", "WhatsApp Integration"],
      contribution: "Built solo.",
      liveUrl: "https://aditya-grocery-store.netlify.app/",
      githubUrl: "https://github.com/code-aadi/Ecommerce-Store-frontend",
    },
    {
      title: "Expense Tracker",
      category: "React",
      description: "A clean expense tracking application built with React.",
      techStack: ["React", "CSS"],
      contribution: "Built solo.",
      liveUrl: "https://expense-tracker-react-aadi.vercel.app",
      githubUrl: "https://github.com/code-aadi/Expense-Tracker",
    },
    {
      title: "Tic Tac Toe",
      category: "JavaScript / Game",
      description:
        "A polished Tic Tac Toe game featuring sound effects and animated winning-line drawing.",
      techStack: ["HTML", "CSS", "JavaScript", "Animation", "Sound Effects"],
      contribution: "Built solo.",
      liveUrl: "https://tic-tac-toe-game-aadi.vercel.app",
      githubUrl: "https://github.com/code-aadi/Tic-Tac-Toe-Game",
    },
    {
      title: "Password Generator",
      category: "React",
      description:
        "A React-based password generator for creating secure random passwords.",
      techStack: ["React", "CSS"],
      contribution: "Built solo.",
      liveUrl: "https://password-generator-aadi.vercel.app",
      githubUrl: "https://github.com/code-aadi/Password-Generator",
    },
  ],

  contact: {
    email: "kouravaditya7@gmail.com",
    github: "https://github.com/code-aadi",
    linkedin: "https://www.linkedin.com/in/aditya-kourav-813959304/",
    instagram: "https://www.instagram.com/code_aadi",
    phone: null,
  },

  portfolioSections: ["Home", "About", "Skills", "Projects", "Journey", "Contact"],
};