import { Briefcase, Calendar } from "lucide-react";

const experiences = [
  {
    year: "2025-2026",
    title: "Havelock Smart Resident Portal - AN AI-Driven Apartment Management System",
    company: "University of Bedfordshire",
    description: "Developed a full stack smart resident management system using React.js, Node.js and MongoDB.Implemented AI-based complaint prioritization and role-based access control.Built features such as visitor pass generation, parcel tracking and billing management.Designed RESTful APIs and ensured secure, scalable system architecture.",
    tags: ["React", "Tailwind CSS", "Node.js", "Express", "MongoDB" ]
  },
  {
    year: "2026",
    title: "Vill 97 - Official Website",
    company: "University of Bedfordshire",
    description: "Developed a full-stack web application using React.js, Node.js and PostgreSQL.Contributed as a Scheduling Manager, planning and tracking project timelines to ensure timely delivery.Designed and implemented a User Management System for handling user registration, authentication and data management.Colloborated within a team consist of five members with divided roles as Project Manager, Startup Manager, Quality Manager, Risk Manager and Scheduling Manager using version control tools to manage code and project workflow.Worked under the Agile Methodology Concept.",
    tags: ["React", "Tailwind CSS", "Node.js", "PostgreSQL" ]
  },
  {
    year: "2026",
    title: "Banana Math Game",
    company: "University of Bedfordshire",
    description: "Developed a user-friendly web application for a given API in university project.This is a puzzled game and added more events to make it fun.This was developed by using html, CSS, JavaScript, PHP and MySQL.",
    tags: ["HTML/CSS", "JavaScript", "PHP", "MySQL" ]
  },
  {
    year: "2025",
    title: "Wealth Management App with AI Recommendation System",
    company: "Codewave Academy",
    description: "Built a full-stack, AI-augmented wealth management app using Next.js 14, Tailwind, Express, and MongoDB. Implemented secure REST APIs, authentication UX, and Amazon Bedrock-powered recommendations. Delivered production-ready features including logging, rate limiting, and deployment documentation.",
    tags: ["Next.js 14", "Tailwind CSS", "Node.js", "Express", "MongoDB", "AWS Bedrock"]
  },
  {
    year: "2022-2025",
    title: "Inventory Management System",
    company: "SLIIT City Uni - HD in IT",
    description: "Developed a complete inventory management system for a seafood restaurant client. Built responsive React front-end with RESTful APIs using Node.js and Express.js, connected to MongoDB for real-time data handling. Included role-based login, PDF reporting, and low-stock alerts.",
    tags: ["React", "Node.js", "Express.js", "MongoDB", "REST API"]
  },
  {
    year: "2023",
    title: "E-commerce Website for Luxury Watches",
    company: "SLIIT City Uni",
    description: "Developed a fully functional e-commerce website with responsive modern UI. Implemented dynamic product listings, user authentication, shopping cart, and secure checkout using PHP and MySQL. Designed intuitive front-end pages with HTML, CSS, and JavaScript.",
    tags: ["HTML/CSS", "JavaScript", "PHP", "MySQL"]
  }
];

const Experience = () => {
  return (
    <section id="projects" className="py-24 px-4 bg-secondary/30">
      <div className="container max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <p className="text-primary font-mono text-sm mb-3">My Journey</p>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Academic <span className="gradient-text">Projects</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Real-world projects that showcase my skills in building complete web applications.
          </p>
        </div>
        
        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-px bg-border md:-translate-x-1/2" />
          
          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <div 
                key={index}
                className={`relative flex flex-col md:flex-row gap-8 ${
                  index % 2 === 0 ? 'md:flex-row-reverse' : ''
                }`}
              >
                {/* Timeline dot */}
                <div className="absolute left-8 md:left-1/2 w-4 h-4 rounded-full bg-primary border-4 border-background -translate-x-1/2 z-10" />
                
                {/* Content */}
                <div className={`flex-1 ml-16 md:ml-0 ${index % 2 === 0 ? 'md:pr-16' : 'md:pl-16'}`}>
                  <div className="glass rounded-xl p-6 hover:border-primary/50 transition-all duration-300">
                    <div className="flex items-center gap-2 text-primary mb-3">
                      <Calendar className="w-4 h-4" />
                      <span className="font-mono text-sm">{exp.year}</span>
                    </div>
                    <h3 className="text-xl font-semibold mb-2">{exp.title}</h3>
                    <div className="flex items-center gap-2 text-muted-foreground mb-4">
                      <Briefcase className="w-4 h-4" />
                      <span className="text-sm">{exp.company}</span>
                    </div>
                    <p className="text-muted-foreground text-sm mb-4 leading-relaxed">
                      {exp.description}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {exp.tags.map((tag) => (
                        <span 
                          key={tag}
                          className="px-3 py-1 text-xs font-mono bg-primary/10 text-primary rounded-full"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
                
                {/* Spacer for alternating layout */}
                <div className="hidden md:block flex-1" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
