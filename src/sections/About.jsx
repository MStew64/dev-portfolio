import { Code2, Lightbulb, Rocket, User } from "lucide-react";

const highlights =[
  {
    icon: Code2,
    title: "Clean Code",
    description:
      "I write clean, maintainable code following best practices to ensure readability and scalability.",
  },
  {
    icon: Rocket,
    title: "Fast Performance",
    description:
      "I optimize applications for speed and efficiency, ensuring a smooth user experience.",
  },
  {
    icon: Lightbulb,
    title: "Innovative Solutions",
    description:
      "I stay updated with the latest technologies and continuously improve my skills to deliver cutting-edge solutions.", 
  },
  {
    icon: User,
    title: "Collaborative Team Player",
    description:
      "I work well in team environments, valuing communication and collaboration to achieve common goals.",
  }
]

export const About = () => {
  return (
  <section id="about" className="py-32 relative overflow-hidden">
    <div className="container mx-auto px-6 relative z-10">
      <div className="grid lg:grid-cols-2 gap-16 items-center">
        {/* Left Column */}
        <div className="space-y-8">
          <div className="animate-fade-in">
            <span className="text-secondary-foreground text-sm font-medium tracking-wider uppercase">About Me</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold leading-tight animate-fade-in animation-delay-100 text-secondary-foreground">
            Building Scalable Web Applications
            <span className="font-serif italic font-normal text-white">
              {" "}with Modern Technologies.
            </span>
          </h2>

          <div className="space-y-4 text-muted-foreground animate-fade-in animation-delay-200">
            <p>
              I’m a software developer with experience building and modernizing web applications, APIs, and cloud services at scale.
               My work focuses on creating reliable, maintainable systems that improve developer efficiency and deliver real impact to users.
            </p>
            <p>
              At Oracle, I contributed to large-scale service modernization efforts, redesigning APIs, deprecating legacy components, and supporting production systems used by hundreds of engineers. 
              I’ve worked across the stack using React on the frontend and Java, Python, and TypeScript on the backend, with an emphasis on performance, code quality, and long-term maintainability.
            </p>
            <p>
              I enjoy collaborating across teams, mentoring developers, and translating complex requirements into practical solutions. 
              Whether building new features, improving existing systems, or supporting critical infrastructure, I aim to write thoughtful code that scales with both the product and the team.
            </p>
          </div>

          <div className="glass rounded-2xl p-6 glow-border animate-fade-in animation-delay-300">
            <p className="text-lg font-medium italic text-foreground">
              I strive to build software that solves real problems, scales with growing teams, and 
              makes complex systems easier to understand and maintain.
            </p>
          </div>
        </div>
        {/* Right Column */}
        <div className="grid sm:grid-cols-2 gap-6">
          {highlights.map((highlight, index) => (
            <div key={index} className="glass rounded-2xl p-6 flex flex-col items-start gap-4 hover:scale-[1.03] transition-transform duration-300 animate-fade-in" style={{ animationDelay: `${(index + 3) * 100}ms` }}>
              <div className="bg-primary/10 text-primary p-3 rounded-lg">
                <highlight.icon className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-semibold text-foreground">{highlight.title}</h3>
              <p className="text-muted-foreground">{highlight.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  </section>
);
};