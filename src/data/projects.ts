export type Project = {
  reports?: {
    title: string;
    fileUrl: string;
    type?: "pdf" | "doc" | "docx";
  }[];
  year: string;
  title: string;
  company?: string;
  description: string;
  github?: string;
  images: string[];
  videoTitle?: string;
  videoEmbedUrl?: string;
  videoDriveUrl?: string;
  tags: string[];
  slug: string;
};

export const projects: Project[] = [
  {
    year: "2025-Present",
    title: "Havelock Smart Resident Portal - AN AI-Driven Apartment Management System",
    company: "University of Bedfordshire",
    description:
      "Developed a full stack smart resident management system using React.js, Node.js and MongoDB.Implemented AI-based complaint prioritization and role-based access control.Built features such as visitor pass generation, parcel tracking and billing management.Designed RESTful APIs and ensured secure, scalable system architecture.",
    github: "https://github.com/shathirs/havelock_smart.git",
    images: [
      "/projects/Havelock Smart/Admin-dashboard.png",
      "/projects/Havelock Smart/Authentication Interface.png",
      "/projects/Havelock Smart/Home Page-1.png",
      "/projects/Havelock Smart/Reception-deshboard.png",
      "/projects/Havelock Smart/Resident-profile.png",
      "/projects/Havelock Smart/Security-dashboard.png"
    ],
    videoTitle: "Havelock Smart Demo Recording",
    videoEmbedUrl: "https://drive.google.com/file/d/1S74rWwFVvVkRUkRbip8GO20ytL8xlwdM/preview",
    videoDriveUrl: "https://drive.google.com/file/d/1S74rWwFVvVkRUkRbip8GO20ytL8xlwdM/view?usp=drive_link",
    reports: [
      {
        title: "Contextual Report",
        fileUrl: "/projects/Havelock Smart/reports/2526110 - Contextual Report.pdf",
        type: "pdf"
      },
      {
        title: "Havelock Smart SRS Document",
        fileUrl: "/projects/Havelock Smart/reports/srs.docx",
        type: "docx"
      }
    ],
    tags: ["React", "Tailwind CSS", "Node.js", "Express", "MongoDB"],
    slug: "havelock-smart-resident-portal"
  },
  {
    year: "2026",
    title: "Villa 97, Bolgoda - Official Website",
    company: "University of Bedfordshire",
    description:
      "Developed a full-stack web application using React.js, Node.js and PostgreSQL.Contributed as a Scheduling Manager, planning and tracking project timelines to ensure timely delivery.Designed and implemented a User Management System for handling user registration, authentication and data management.Colloborated within a team consist of five members with divided roles as Project Manager, Startup Manager, Quality Manager, Risk Manager and Scheduling Manager using version control tools to manage code and project workflow.Worked under the Agile Methodology Concept.",
    github: "",
    images: ["/projects/Villa 97/Home Page.png", "/projects/Villa 97/Admin side - user management.png"],
    tags: ["React", "Tailwind CSS", "Node.js", "PostgreSQL"],
    slug: "villa-97-bolgoda-official-website"
  },
  {
    year: "2026",
    title: "AI Recipe Generator",
    description:
      "Developed a full-stack web application using React.js, Node.js and PostgreSQL.Google Gemini for recipe generation (and pantry-aware ideas).JWT authentication; optional SMTP password-reset emails.Users save recipes, plan weekly meals, build shopping lists (including sync from meal plans), and manage a pantry.",
    github: "https://github.com/shathirs/ai-recipe-generator.git",
    images: ["/projects/ai-recipe-1.png", "/projects/ai-recipe-2.png"],
    tags: ["React", "Tailwind CSS", "Node.js", "PostgreSQL"],
    slug: "ai-recipe-generator"
  },
  {
    year: "2025",
    title: "Banana Math Game",
    company: "University of Bedfordshire",
    description:
      "Developed a user-friendly web application for a given API in university project.This is a puzzled game and added more events to make it fun.This was developed by using html, CSS, JavaScript, PHP and MySQL.",
    github: "",
    images: ["/projects/banana-math-1.png", "/projects/banana-math-2.png"],
    videoTitle: "Banana Math Game Demo",
    videoEmbedUrl: "https://drive.google.com/file/d/1F-nyu1XmIEtduVWwAeLrY1oVQZqTNS7_/preview",
    videoDriveUrl: "https://drive.google.com/file/d/1F-nyu1XmIEtduVWwAeLrY1oVQZqTNS7_/view?usp=drive_link",
    tags: ["HTML/CSS", "JavaScript", "PHP", "MySQL"],
    slug: "banana-math-game"
  },
  {
    year: "2025",
    title: "Wealth Management App with AI Recommendation System",
    company: "Codewave Academy",
    description:
      "Built a full-stack, AI-augmented wealth management app using Next.js 14, Tailwind, Express, and MongoDB. Implemented secure REST APIs, authentication UX, and Amazon Bedrock-powered recommendations. Delivered production-ready features including logging, rate limiting, and deployment documentation.",
    github: "https://github.com/shathirs/codewave-academy.git",
    images: ["/projects/wealth-management-1.png", "/projects/wealth-management-2.png"],
    tags: ["Next.js 14", "Tailwind CSS", "Node.js", "Express", "MongoDB", "AWS Bedrock"],
    slug: "wealth-management-app-ai-recommendation-system"
  },
  {
    year: "2024",
    title: "Inventory Management System",
    company: "SLIIT City Uni - HD in IT",
    description:
      "Developed a complete inventory management system for a seafood restaurant client. Built responsive React front-end with RESTful APIs using Node.js and Express.js, connected to MongoDB for real-time data handling. Included role-based login, PDF reporting, and low-stock alerts.",
    github: "",
    images: ["/projects/inventory-1.png", "/projects/inventory-2.png"],
    tags: ["React", "Node.js", "Express.js", "MongoDB", "REST API"],
    slug: "inventory-management-system"
  },
  {
    year: "2023",
    title: "E-commerce Website for Luxury Watches",
    company: "SLIIT City Uni - HD in IT",
    description:
      "Developed a fully functional e-commerce website with responsive modern UI. Implemented dynamic product listings, user authentication, shopping cart, and secure checkout using PHP and MySQL. Designed intuitive front-end pages with HTML, CSS, and JavaScript.",
    github: "",
    images: ["/projects/ecommerce-watch-1.png", "/projects/ecommerce-watch-2.png"],
    tags: ["HTML/CSS", "JavaScript", "PHP", "MySQL"],
    slug: "ecommerce-website-luxury-watches"
  }
];
