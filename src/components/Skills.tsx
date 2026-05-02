import { Code, Database, Cloud, Wrench, Globe } from "lucide-react";

const skillCategories = [
  {
    icon: Code,
    title: "Frontend Development",
    skills: ["React.js", "Next.js", "HTML/CSS", "Bootstrap/Tailwind CSS", "TypeScript", "JavaScript", "JQuery"]
  },
  {
    icon: Database,
    title: "Backend Development",
    skills: ["Node.js", "Express.js", "REST APIs", "PHP"]
  },
  {
    icon: Database,
    title: "Database Management",
    skills: ["MongoDB", "MySQL", "PostgreSQL"]
  },
  {
    icon: Wrench,
    title: "Tools & Technologies",
    skills: ["Git & GitHub", "VS Code", "Cursor", "Postman"]
  },
  {
    icon: Cloud,
    title: "Cloud Technologies / Cloud Platforms",
    skills: ["AWS"]
  },
  {
    icon: Globe,
    title: "Web & Software Concepts",
    skills: ["Agile Methodology", "CRUD Operations"]
  },
  {
    icon: Globe,
    title: "Other Skills",
    skills: ["English", "Sinhala", "Tamil", "Problem-Solving", "Teamwork"]
  }
];

const Skills = () => {
  return (
    <section id="skills" className="py-24 px-4 bg-secondary/30">
      <div className="container max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <p className="text-primary font-mono text-sm mb-3">What I Know</p>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Technical <span className="gradient-text">Skills</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            A diverse skill set spanning frontend, backend, cloud technologies, and more.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category, index) => (
            <div 
              key={category.title}
              className="glass rounded-xl p-6 hover:border-primary/50 transition-all duration-300"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                  <category.icon className="w-5 h-5 text-primary" />
                </div>
                <h3 className="font-semibold text-lg">{category.title}</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill) => (
                  <span 
                    key={skill}
                    className="px-3 py-1.5 text-sm bg-muted text-foreground rounded-lg hover:bg-primary/20 hover:text-primary transition-colors cursor-default"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
