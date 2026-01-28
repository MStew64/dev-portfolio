const experience = [
  {
    company: "Oracle",
    role: "Software Engineer",
    duration: "2023 - 2025",
    description: "Contributed to large-scale service modernization efforts, redesigning APIs, deprecating legacy components, and supporting production systems used by hundreds of engineers.",
    technologies: ["Java", "Python", "TypeScript", "React", "OCI", "SQL"]
  },
  {
    company: "Oracle",
    role: "Software Developer Intern",
    duration: "2022 - 2022",
    description: "Developed responsive web applications using React and TypeScript, collaborated with engineers to implement user interfaces.",
    technologies: ["React", "TypeScript", "HTML", "CSS", "Java", "SQL"]
  },
  {
    company: "Oracle",
    role: "Software Developer Intern",
    duration: "2021 - 2021",
    description: "Improved a legacy codebase by migrating to TypeScript, adding Cypress tests, and optimizing backend data processing.",
    technologies: ["JavaScript", "HTML", "CSS", "Node.js", "TypeScript", "Cypress", "SQL", "Java"]
  },
  {
    company: "Generali Global Asistance",
    role: "Software Developer Intern",
    duration: "2020 - 2021",
    description: "Automated key rotations with AWS Lambda and built Cypress tests with QA to improve security compliance and testing efficiency.",
    technologies: ["JavaScript", "HTML", "CSS", "Node.js", "TypeScript", "Cypress", "SQL", "AWS", "Java"]
  }
];

export const Experience = () => {
  return (
    <section id= "experience" className="py-32 relative overflow-hidden">
      <div 
        className = "absolute top-1/2 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl -translate-y-1/2"
      />
      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <span className="text-secondary-foreground text-sm font-medium tracking-wider uppercase animate-fade-in">Career Journey</span>
          <h2 className="text-4xl md:text-5xl font-bold leading-tight animate-fade-in animation-delay-100 text-secondary-foreground">
            Experience that <span className="font-serif italic font-normal text-white">shapes my journey.</span>
          </h2>

          <p className="text-muted-foreground animate-fade-in animation-delay-200">
            My professional journey in software development:
          </p>
        </div>

        {/* Experience Entries */}
        <div className="relative">
  {/* Timeline line */}
  <div
    className="timeline-glow absolute left-0 md:left-1/2 top-0 bottom-0 w-[2px]
    bg-gradient-to-b from-primary/70 via-primary/30 to-transparent
    md:-translate-x-1/2 shadow-[0_0_25px_rgba(32,178,166,0.8)]"
  />

  {/* Entries */}
      <div className="space-y-16">
        {experience.map((item, index) => (
          <div
            key={index}
            className="relative grid grid-cols-1 md:grid-cols-2 gap-8 animate-fade-in"
            style={{ animationDelay: `${index * 100}ms` }}
          >
            {/* Content */}
            <div
              className={` glass rounded-2xl p-6 border border-primary/20 hover:border-primary/40 transition-all duration-300
                pl-8 md:pl-0
                ${index % 2 === 0
                  ? "md:pr-16 md:text-right"
                  : "md:col-start-2 md:pl-16"}
              `}
            >
              <h3 className="text-2xl font-semibold">{item.role}</h3>
              <p className="text-muted-foreground">{item.company}</p>
              <p className="text-muted-foreground">{item.duration}</p>

              <div className="mt-4 md:w-7/12 md:ml-auto">
                <p className="text-muted-foreground">{item.description}</p>

                <div className="flex flex-wrap gap-2 mt-4">
                  {item.technologies.map((tech, i) => (
                    <span
                      key={i}
                      className="px-3 py-1 bg-surface text-primary rounded-full text-sm"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Timeline dot */}
            <span
              className="absolute left-0 md:left-1/2 top-6 w-4 h-4 bg-primary rounded-full
              md:-translate-x-1/2 shadow-[0_0_15px_rgba(32,178,166,0.9)]"
            />
            </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};