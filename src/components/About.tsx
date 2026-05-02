import { Code2, Lightbulb, Users, Rocket } from "lucide-react";

const highlights = [
  {
    icon: Code2,
    title: "Full-Stack Development",
    description: "Experienced with MERN stack, building complete web applications from frontend to backend."
  },
  {
    icon: Lightbulb,
    title: "Problem Solver",
    description: "Passionate about finding innovative solutions and tackling complex challenges."
  },
  {
    icon: Users,
    title: "Team Player",
    description: "Strong collaboration skills with experience in agile development environments."
  },
  {
    icon: Rocket,
    title: "Fast Learner",
    description: "Quick to adapt to new technologies and always eager to expand my skill set."
  }
];

const About = () => {
  return (
    <section id="about" className="py-24 px-4 relative">
      <div className="container max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <p className="text-primary font-mono text-sm mb-3">About Me</p>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Passionate About <span className="gradient-text">Technology</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            I'm a Software Engineering student with hands-on experience in building 
            real-world applications. My journey in tech is driven by curiosity and 
            a desire to create meaningful solutions.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {highlights.map((item, index) => (
            <div 
              key={item.title}
              className="glass rounded-xl p-6 hover:border-primary/50 transition-all duration-300 group"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                <item.icon className="w-6 h-6 text-primary" />
              </div>
              <h3 className="font-semibold text-lg mb-2">{item.title}</h3>
              <p className="text-muted-foreground text-sm">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
