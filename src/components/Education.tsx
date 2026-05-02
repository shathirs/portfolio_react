import { GraduationCap, Award, Calendar } from "lucide-react";

const education = [
  {
    period: "2025 - Present",
    degree: "BSc (Hons) in Software Engineering",
    institution: "University of Bedfordshire",
    type: "degree"
  },
  {
    period: "2022 - 2025",
    degree: "Higher Diploma in Information Technology",
    institution: "SLIIT City Uni",
    type: "diploma"
  }
];

const achievements = [
  "Higher Diploma in Information Technology (SLIIT City Uni)",
  "Certificate in Human Resource Management (CIPM)",
  "G.C.E. Advance Level Certificate (D.S.Sennanayaka National School Beruwala)"
];

const Education = () => {
  return (
    <section id="education" className="py-24 px-4">
      <div className="container max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <p className="text-primary font-mono text-sm mb-3">Education</p>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Academic <span className="gradient-text">Background</span>
          </h2>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-8">
          {/* Education Cards */}
          <div className="space-y-6">
            <h3 className="text-xl font-semibold flex items-center gap-2 mb-6">
              <GraduationCap className="w-5 h-5 text-primary" />
              Education
            </h3>
            {education.map((edu, index) => (
              <div 
                key={index}
                className="glass rounded-xl p-6 hover:border-primary/50 transition-all duration-300"
              >
                <div className="flex items-center gap-2 text-primary mb-3">
                  <Calendar className="w-4 h-4" />
                  <span className="font-mono text-sm">{edu.period}</span>
                </div>
                <h4 className="text-lg font-semibold mb-2">{edu.degree}</h4>
                <p className="text-muted-foreground">{edu.institution}</p>
              </div>
            ))}
          </div>
          
          {/* Achievements */}
          <div>
            <h3 className="text-xl font-semibold flex items-center gap-2 mb-6">
              <Award className="w-5 h-5 text-primary" />
              Achievements & Certifications
            </h3>
            <div className="glass rounded-xl p-6">
              <ul className="space-y-4">
                {achievements.map((achievement, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <div className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0" />
                    <span className="text-muted-foreground">{achievement}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
