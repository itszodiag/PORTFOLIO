import type { CSSProperties } from "react"

const skillCategories = [
  {
    title: "Frontend",
    skills: [
      { name: "React", level: 85 },
      { name: "JavaScript", level: 80 },
      { name: "HTML/CSS", level: 90 },
      { name: "Tailwind CSS", level: 75 },
    ],
  },
  {
    title: "Backend",
    skills: [
      { name: "PHP", level: 80 },
      { name: "Laravel", level: 85 },
      { name: "Node.js", level: 60 },
      { name: "REST APIs", level: 75 },
    ],
  },
  {
    title: "Database",
    skills: [
      { name: "MySQL", level: 80 },
      { name: "MongoDB", level: 70 },
    ],
  },
  {
    title: "Tools & DevOps",
    skills: [
      { name: "Git", level: 80 },
      { name: "Docker", level: 55 },
      { name: "VS Code", level: 90 },
    ],
  },
]

export function SkillsSection() {
  return (
    <section id="skills" className="section-grid py-24 bg-secondary/30">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="mb-4 text-sm font-semibold uppercase text-primary animate-reveal">
            Skills
          </h2>
          <h3 className="mb-12 text-3xl font-bold text-foreground text-balance md:text-4xl animate-reveal motion-delay-1">
            Technologies I work with
          </h3>

          <div className="grid md:grid-cols-2 gap-8">
            {skillCategories.map((category, index) => (
              <div
                key={category.title}
                className={`surface-panel rounded-lg border border-white/10 p-6 transition-all duration-300 hover:-translate-y-1 hover:border-primary/50 hover:shadow-lg hover:shadow-primary/20 animate-rotate-in motion-delay-${index + 2} group`}
              >
                <h4 className="text-lg font-semibold text-foreground mb-6 group-hover:text-primary transition-colors duration-300">
                  {category.title}
                </h4>
                <div className="space-y-4">
                  {category.skills.map((skill, skillIndex) => (
                    <div key={skill.name} className="animate-scale-in" style={{ animationDelay: `${skillIndex * 100}ms` }}>
                      <div className="flex justify-between mb-2">
                        <span className="text-sm text-muted-foreground group-hover:text-foreground transition-colors duration-300">
                          {skill.name}
                        </span>
                        <span className="text-sm text-muted-foreground group-hover:text-primary transition-colors duration-300 font-medium">
                          {skill.level}%
                        </span>
                      </div>
                      <div className="h-2 overflow-hidden rounded-full bg-background/70 group-hover:shadow-lg group-hover:shadow-primary/20 transition-all duration-300">
                        <div
                          className="h-full rounded-full bg-gradient-to-r from-primary to-accent animate-skill group-hover:animate-gradient-shift transition-all duration-300"
                          style={{ "--skill-level": `${skill.level}%` } as CSSProperties}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
