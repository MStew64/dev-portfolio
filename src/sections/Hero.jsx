import { Button } from "@/components/Button";
import { ArrowRight,ChevronDown, Github, Linkedin } from "lucide-react";
import { AnimatedBorderButton } from "../components/AnimatedBorderButton";

const skills = [
  "React",
  "TypeScript",
  "Python",
  "Java",
  "AWS",
  "SQL",
  "HTML",
  "CSS",
  "Node.js",
  "Git",
  "Cypress"
];

export const Hero = () => {
  return <section className=" relative min-h-screen flex items-center overflow-hidden ">
    {/* Background Image or Graphic */}
    <div className=" absolute inset-0">
      <img src = "/hero-bg.jpg" alt = "Hero image" className="w-full h-full object-cover -z-10 opacity-40"/>
      <div className=" absolute inset-0 bg-gradient-to-b from-background/20 via-background/80 to-background"/>
    </div>

    {/* Green Dots */}
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {[...Array(30)].map((_, index) => (
        <div
          key={index}
          className="absolute w-2 h-2 rounded-full opacity-60"
          style={{
            backgroundColor: "#20B2A6",
            top: `${Math.random() * 100}%`,
            left: `${Math.random() * 100}%`,
            animation: `slow-drift ${15 + Math.random() * 20}s ease-in-out infinite`,
            animationDelay: `${Math.random() * 5}s`,
          }}
        />
      ))}
    </div>

    {/* Content */}
    <div className="container mx-auto px-6 pt-32 pb-20 relative z-10">
      <div className="grid lg:grid-cols-2 gap-12 items-center">
        {/* Left Column - Text Content */}
        <div className="space-y-8">
          <div className="animate-fade-in">
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass text-sm text-primary">
              <span className="w-2 h-2 bg-primary rounded-full animate-pulse"/>
                Software Engineer • Full Stack Developer
            </span>
          </div>

          {/* Headline */}
          <div className="space-y-4">
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight animate-fade-in animation-delay-100">
              Building <span className="text-primary glow-text">digital</span>
              <br />
               experiences through
              <br/>
               <span className="font-serif italic font-normal text-white">innovative solutions.</span> 
            </h1>
            <p className="text-lg text-muted-foreground max-w-lg animate-fade-in animation-delay-200">
              Hi, I'm Michael Stewart, a Software developer experienced
               in React frontends and Python, TypeScript, and Java backend systems.
               Building reliable, web and cloud applications.
            </p>
          </div>
          {/* Call to Action Buttons */}
          <div className="flex flex-wrap  animate-fade-in animation-delay-300">
            <Button size="lg">
              Contact Me <ArrowRight className="w-5 h-5" />
            </Button>
            <AnimatedBorderButton />

          </div>
          {/* Social Media Links */}
          <div className=" flex items-center gap-4 animate-fade-in animation-delay-400">
            <span className="text-sm text-muted-foreground">Follow me: </span>
            {[{icon: Github, href: "https://github.com/MStew64"},
              {icon: Linkedin, href: "https://www.linkedin.com/in/michael-stewart-515a11159/"},
            ].map((social, index) => (
              <a 
              key={index}
              href={social.href}
              className=" p-2 rounded-full glass hover:bg-primary/10 hover:text-primary transition-all durartion-300"
            >
              <social.icon className="w-5 h-5"  />
            </a>
          ))}
          </div>
        </div>

        {/* Right Column - Image or Graphic */}
        <div className="relative animate-fade-in animation-delay-300 ">
          {/* Profile image or graphic */}
          <div className="relative max-w-md mx-auto">
            <div className="absolute inset-0 rounded-3xl bg-gradient-to-br
            from-primary/30 via-transparent to-primary/10 blur-2xl
            animate-pulse"/>
            <div className="relative glass rounded-3xl p-2 glow-border">
              <img 
              src="/profile-photo.jpg" 
              alt="Michael Stewart" 
              className="w-full aspect-[4/5] object-cover rounded-2xl" 
              />

              {/* Floating Badge */}
              <div className="absolute -bottom-4 -right-4 glass rounded-xl px-4 py-3 animate-float">
                <div className="flex items-center gap-3">
                  <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse" />
                  <span className="text-sm font-medium"> Available for work</span>
                </div>
              </div>

              {/* Stats */}
              <div className="absolute -top-4 -left-4 glass rounded-xl px-4 py-3 animate-float animattion-delay-500">
                <div className="flex items-center gap-3">
                  <div className="text-center">
                    <div className="text-xl font-bold text-primary">2+</div>
                    <div className="text-xs text-sm text-muted-foreground">Years Experience</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Skills Tags */ }
      <div className="mt-20 animate-fade-in animation-delay-600">
        <p className=" text-sm text-muted-foreground mb-6 text-center"> Technologies I work with:</p>
        <div className="relative overflow-hidden">
          <div className="flex animate-marquee">
            {[...skills, ...skills].map((skill, index) => (
            <div key={index} className="flex-shrink-0 px-8 py-4">
              <span className="text-xl font-semibold text-muted-foreground/50 hover:text-muted-foreground transition-colors">
                {skill}
              </span>
            </div>
          ))}</div>
        </div>
      </div>
    </div>

    <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-fade-in animation-delay-800">
      <a href="#about" 
      className="flex flex-col items-center gap-2 text-muted-foreground hover:text-primary transition-colors">
        <span className="text-xs uppercase tracking-wider">Scroll </span>
        <ChevronDown className="w-6 h-6 animate-bounce" />
      </a>
    </div>
  </section>;
};