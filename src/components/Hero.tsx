import { Mail, Phone, MapPin, Github, Linkedin } from "lucide-react";
import { Button } from "@/components/ui/button";
import profileImage from "@/assets/profile.jpg";

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden px-4 py-20">
      {/* Background gradient orbs */}
      <div className="absolute top-1/4 -left-32 w-96 h-96 bg-primary/20 rounded-full blur-3xl animate-float" />
      <div className="absolute bottom-1/4 -right-32 w-96 h-96 bg-accent/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '3s' }} />
      
      <div className="container max-w-6xl mx-auto relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
          {/* Profile Image */}
          <div className="relative animate-fade-up" style={{ animationDelay: '0.1s' }}>
            <div className="w-56 h-56 md:w-72 md:h-72 rounded-full overflow-hidden glass glow p-1">
              <img 
                src={profileImage} 
                alt="Shathir Sheriff" 
                className="w-full h-full object-cover rounded-full"
              />
            </div>
            <div className="absolute -bottom-2 -right-2 w-20 h-20 bg-primary rounded-full flex items-center justify-center animate-pulse-glow">
              <span className="text-primary-foreground font-bold text-sm text-center leading-tight">Open to<br/>Work</span>
            </div>
          </div>
          
          {/* Content */}
          <div className="flex-1 text-center lg:text-left">
            <p className="text-primary font-mono text-sm md:text-base mb-3 animate-fade-up" style={{ animationDelay: '0.2s' }}>
              Hello, I'm
            </p>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-4 animate-fade-up" style={{ animationDelay: '0.3s' }}>
              <span className="gradient-text">Shathir Sheriff</span>
            </h1>
            <h2 className="text-xl md:text-2xl text-muted-foreground mb-6 animate-fade-up" style={{ animationDelay: '0.4s' }}>
              Software Engineering Student
            </h2>
            <p className="text-muted-foreground max-w-xl mb-8 leading-relaxed animate-fade-up" style={{ animationDelay: '0.5s' }}>
              An enthusiastic student at University of Bedfordshire passionate about web development, 
              problem-solving, and exploring innovative solutions in tech. Always eager to learn, 
              collaborate, and contribute to impactful projects.
            </p>
            
            {/* Contact Info */}
            <div className="flex flex-wrap justify-center lg:justify-start gap-4 mb-8 animate-fade-up" style={{ animationDelay: '0.6s' }}>
              <a href="mailto:sheriffshathir@gmail.com" className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors">
                <Mail className="w-4 h-4" />
                <span className="text-sm">sheriffshathir@gmail.com</span>
              </a>
              <a href="tel:+94714876345" className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors">
                <Phone className="w-4 h-4" />
                <span className="text-sm">+94 71 4876 345</span>
              </a>
            </div>
            
            {/* CTA Buttons */}
            <div className="flex flex-wrap justify-center lg:justify-start gap-4 animate-fade-up" style={{ animationDelay: '0.7s' }}>
              <Button size="lg" className="gap-2">
                <Mail className="w-4 h-4" />
                Get in Touch
              </Button>
              <Button variant="outline" size="lg" className="gap-2">
                <Github className="w-4 h-4" />
                GitHub
              </Button>
              <Button variant="outline" size="lg" className="gap-2">
                <Linkedin className="w-4 h-4" />
                LinkedIn
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
