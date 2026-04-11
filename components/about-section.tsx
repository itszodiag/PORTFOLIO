import { Code2, Server, Database, Cloud } from "lucide-react"

const highlights = [
  { icon: Code2, label: "Frontend Development" },
  { icon: Server, label: "Backend Development" },
  { icon: Database, label: "Database Design" },
  { icon: Cloud, label: "DevOps & Cloud" },
]

export function AboutSection() {
  return (
    <section id="about" className="relative overflow-hidden py-24">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="mb-4 text-sm font-semibold uppercase text-primary animate-reveal">
            About Me
          </h2>
          <h3 className="mb-8 text-3xl font-bold text-foreground text-balance md:text-4xl animate-reveal motion-delay-1">
            Building digital experiences with passion and precision
          </h3>

          <div className="grid md:grid-cols-2 gap-12">
            <div className="space-y-6 animate-reveal motion-delay-2">
              <p className="text-muted-foreground leading-relaxed">
                I&apos;m a junior fullstack developer with a strong foundation in modern web technologies. 
                My journey in software development has equipped me with hands-on experience in building 
                robust applications from front to back.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                I specialize in <span className="text-foreground font-medium">React</span>, 
                <span className="text-foreground font-medium"> Laravel</span>, and 
                <span className="text-foreground font-medium"> MySQL</span>, with growing expertise in 
                <span className="text-foreground font-medium"> Docker</span> and modern DevOps practices. 
                I&apos;m fascinated by cloud computing and building scalable systems that can grow with user needs.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Beyond coding, I&apos;m continuously learning about system architecture, microservices, 
                and best practices that make applications maintainable and efficient.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-4">
              {highlights.map((item, index) => (
                <div
                  key={item.label}
                  className={`surface-panel group rounded-lg border border-white/10 p-6 transition-all duration-300 hover:-translate-y-1 hover:border-primary/50 animate-rise motion-delay-${index + 1}`}
                >
                  <item.icon className="mb-4 h-8 w-8 text-primary transition-transform duration-300 group-hover:scale-110" />
                  <p className="text-sm font-medium text-foreground">{item.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
