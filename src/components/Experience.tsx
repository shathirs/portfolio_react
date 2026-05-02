import { Briefcase, Calendar } from "lucide-react";

const experiences = [
  {
    year: "2025",
    title: "Wealth Management App with AI Recommendation System",
    company: "Codewave Academy",
    description: "Built a full-stack, AI-augmented wealth management app using Next.js 14, Tailwind, Express, and MongoDB. Implemented secure REST APIs, authentication UX, and Amazon Bedrock-powered recommendations. Delivered production-ready features including logging, rate limiting, and deployment documentation.",
    tags: ["Next.js 14", "Tailwind CSS", "Express", "MongoDB", "AWS Bedrock"]
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
    tags: ["PHP", "MySQL", "HTML/CSS", "JavaScript"]
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
