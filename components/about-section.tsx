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
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 h-80 w-80 rounded-full bg-primary/5 blur-3xl animate-blob-rotate opacity-20" />
        <div className="absolute -bottom-40 -left-40 h-80 w-80 rounded-full bg-accent/5 blur-3xl animate-blob-rotate opacity-20" style={{ animationDelay: "-2s" }} />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto">
          <h2 className="mb-4 text-sm font-semibold uppercase text-primary animate-reveal">
            About Me
          </h2>
          <h3 className="mb-8 text-3xl font-bold text-foreground text-balance md:text-4xl animate-reveal motion-delay-1">
            Building digital experiences with passion and precision
          </h3>

          <div className="grid md:grid-cols-2 gap-12">
            <div className="space-y-6 animate-in-left motion-delay-2">
              <p className="text-muted-foreground leading-relaxed hover:text-foreground transition-colors duration-300 cursor-default">
                I&apos;m a junior fullstack developer with a strong foundation in modern web technologies. 
                My journey in software development has equipped me with hands-on experience in building 
                robust applications from front to back.
              </p>
              <p className="text-muted-foreground leading-relaxed hover:text-foreground transition-colors duration-300 cursor-default">
                I specialize in <span className="text-foreground font-medium bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent animate-text-gradient">React</span>, 
                <span className="text-foreground font-medium bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent animate-text-gradient"> Laravel</span>, and 
                <span className="text-foreground font-medium bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent animate-text-gradient"> MySQL</span>, with growing expertise in 
                <span className="text-foreground font-medium bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent animate-text-gradient"> Docker</span> and modern DevOps practices. 
                I&apos;m fascinated by cloud computing and building scalable systems that can grow with user needs.
              </p>
              <p className="text-muted-foreground leading-relaxed hover:text-foreground transition-colors duration-300 cursor-default">
                Beyond coding, I&apos;m continuously learning about system architecture, microservices, 
                and best practices that make applications maintainable and efficient.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-4 animate-in-right motion-delay-2">
              {highlights.map((item, index) => (
                <div
                  key={item.label}
                  className={`surface-panel group rounded-lg border border-white/10 p-6 transition-all duration-300 hover:-translate-y-2 hover:border-primary/50 hover:shadow-2xl hover:shadow-primary/25 animate-scale-in motion-delay-${index + 3}`}
                >
                  <div className="relative mb-4">
                    <div className="absolute inset-0 rounded-lg bg-primary/20 blur-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 animate-glow-pulse" />
                    <item.icon className="relative h-8 w-8 text-primary transition-all duration-300 group-hover:scale-125 group-hover:rotate-12 group-hover:animate-spin-slow" />
                  </div>
                  <p className="text-sm font-medium text-foreground group-hover:text-primary transition-colors duration-300">
                    {item.label}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
