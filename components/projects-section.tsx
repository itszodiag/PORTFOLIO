import { Wrench, Plane, Brain, Mail } from "lucide-react"
import { Badge } from "@/components/ui/badge"

const projects = [
  {
    title: "Maintenance On Demand Platform",
    description:
      "A comprehensive platform where users can request maintenance services online. Features a complete authentication system, request management, and an admin dashboard for service providers.",
    icon: Wrench,
    stack: ["Laravel", "MySQL", "Blade", "Tailwind CSS"],
    features: ["User Authentication", "Request System", "Admin Dashboard", "Real-time Status Updates"],
  },
  {
  title: "Personal Portfolio Website",
  description:
    "A dynamic portfolio website built using HTML, CSS, JavaScript, and PHP, showcasing my projects, skills, and experience. It includes a secure authentication system and a contact form connected to a MySQL database.",
  icon: Wrench,
  stack: ["HTML", "CSS", "JavaScript", "PHP", "MySQL"],
  features: [
    "User Authentication System (Login/Register)",
    "Admin Panel to Manage Projects",
    "Project Filtering by Programming Language",
    "Contact Form with Database Storage",
    "Responsive Design for All Devices",
  ],
}
]

export function ProjectsSection() {
  return (
    <section id="projects" className="relative overflow-hidden py-24">
      <div className="container mx-auto px-6">
        <div className="max-w-5xl mx-auto">
          <h2 className="mb-4 text-sm font-semibold uppercase text-primary animate-reveal">
            Projects
          </h2>
          <h3 className="mb-12 text-3xl font-bold text-foreground text-balance md:text-4xl animate-reveal motion-delay-1">
            Featured work
          </h3>

          <div className="grid gap-8">
            {projects.map((project, index) => (
              <article
                key={project.title}
                className={`surface-panel group rounded-lg border border-white/10 p-6 transition-all duration-300 hover:-translate-y-1 hover:border-primary/50 hover:shadow-2xl hover:shadow-primary/10 md:p-8 animate-rise motion-delay-${index + 1}`}
              >
                <div className="flex flex-col md:flex-row gap-6">
                  <div className="flex-shrink-0">
                    <div className="flex h-14 w-14 items-center justify-center rounded-lg border border-primary/20 bg-primary/10 transition-all duration-300 group-hover:scale-105 group-hover:bg-primary/20">
                      <project.icon className="h-7 w-7 text-primary transition-transform duration-300 group-hover:rotate-3" />
                    </div>
                  </div>

                  <div className="flex-1 space-y-4">
                    <div className="flex items-start justify-between gap-4">
                      <h4 className="text-xl font-semibold text-foreground group-hover:text-primary transition-colors">
                        {project.title}
                      </h4>
                      <span className="rounded-md border border-white/10 px-2 py-1 text-xs text-muted-foreground">
                        {String(index + 1).padStart(2, "0")}
                      </span>
                    </div>

                    <p className="text-muted-foreground leading-relaxed">
                      {project.description}
                    </p>

                    <div className="flex flex-wrap gap-2">
                      {project.stack.map((tech) => (
                        <Badge
                          key={tech}
                          variant="secondary"
                          className="text-xs"
                        >
                          {tech}
                        </Badge>
                      ))}
                    </div>

                    <div className="border-t border-white/10 pt-4">
                      <p className="text-sm text-muted-foreground mb-2">
                        Key Features:
                      </p>
                      <ul className="grid gap-2 sm:grid-cols-2">
                        {project.features.map((feature) => (
                          <li
                            key={feature}
                            className="text-sm text-foreground flex items-center gap-2"
                          >
                            <span className="w-1 h-1 rounded-full bg-primary" />
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
