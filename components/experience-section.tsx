import { Briefcase, Calendar } from "lucide-react"

export function ExperienceSection() {
  return (
    <section id="experience" className="section-grid py-24 bg-secondary/30">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="mb-4 text-sm font-semibold uppercase text-primary animate-reveal">
            Experience
          </h2>
          <h3 className="mb-12 text-3xl font-bold text-foreground text-balance md:text-4xl animate-reveal motion-delay-1">
            Professional journey
          </h3>

          <div className="relative">
            <div className="absolute bottom-0 left-0 top-0 w-px bg-gradient-to-b from-primary via-border to-transparent animate-in-left md:left-8" />

            <div className="relative pl-8 md:pl-20">
              <div className="absolute left-0 h-4 w-4 -translate-x-1/2 rounded-full border-4 border-background bg-primary shadow-lg shadow-primary/30 md:left-8 animate-pulse-glow" />

              <div className="surface-panel rounded-lg border border-white/10 p-6 animate-in-right motion-delay-2 md:p-8 transition-all duration-300 hover:-translate-y-1 hover:border-primary/50 hover:shadow-lg hover:shadow-primary/20 group">
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-4">
                  <div className="group-hover:translate-x-1 transition-transform duration-300">
                    <h4 className="text-xl font-semibold text-foreground group-hover:text-primary transition-colors duration-300">
                      Internship
                    </h4>
                    <p className="text-primary font-medium">Groupe MFI</p>
                  </div>
                  <div className="flex items-center gap-2 rounded-md border border-white/10 px-3 py-2 text-sm text-muted-foreground group-hover:border-primary/30 group-hover:text-primary group-hover:bg-primary/10 transition-all duration-300">
                    <Calendar className="h-4 w-4" />
                    <span>2026</span>
                  </div>
                </div>

                <p className="text-muted-foreground leading-relaxed mb-6 group-hover:text-muted-foreground/90 transition-colors duration-300">
                  Completed an internship at Groupe MFI, a company specializing in printer systems 
                  including sales, maintenance, and repair services. This experience provided valuable 
                  exposure to real-world technical operations and client interactions.
                </p>

                <div className="space-y-4">
                  <h5 className="text-sm font-medium text-foreground group-hover:text-primary transition-colors duration-300">
                    Key Responsibilities & Learnings:
                  </h5>
                  <ul className="grid md:grid-cols-2 gap-3">
                    {[
                      "Technical troubleshooting and maintenance",
                      "Client communication and support",
                      "System documentation and reporting",
                      "Team collaboration on projects",
                      "Understanding business operations",
                      "Problem-solving in real scenarios",
                    ].map((item, index) => (
                      <li
                        key={item}
                        className="flex items-start gap-2 rounded-md bg-white/5 p-3 text-sm text-muted-foreground group-hover:bg-white/10 group-hover:text-foreground transition-all duration-300 hover:translate-x-1 animate-word-slide"
                        style={{ animationDelay: `${index * 80}ms` }}
                      >
                        <Briefcase className="h-4 w-4 text-primary mt-0.5 flex-shrink-0 group-hover:animate-pulse-glow" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
