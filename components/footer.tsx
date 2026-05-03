import { Github, Linkedin, Heart } from "lucide-react"

export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="relative border-t border-white/10 bg-background/95 py-8 overflow-hidden">
      {/* Animated background gradient */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 h-96 w-96 rounded-full bg-primary/5 blur-3xl animate-bg-pulse opacity-20" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col items-center justify-between gap-8 animate-reveal md:flex-row md:gap-4">
          <p className="text-sm text-muted-foreground hover:text-foreground transition-colors duration-300 group">
            <span className="inline-flex items-center gap-1">
              <span>&copy;</span>
              <span className="group-hover:text-primary transition-colors duration-300">{currentYear}</span>
              <span>Ayman.</span>
              <span>All rights reserved.</span>
            </span>
          </p>

          <div className="flex items-center gap-4">
            <a
              href="https://github.com/itszodiag"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-md border border-white/10 bg-white/5 p-2 text-muted-foreground transition-all duration-300 hover:-translate-y-1 hover:border-primary/50 hover:text-primary hover:shadow-lg hover:shadow-primary/20 hover:bg-primary/10 group animate-scale-in"
              aria-label="GitHub"
            >
              <Github className="h-5 w-5 transition-all duration-300 group-hover:scale-125 group-hover:rotate-12 group-hover:animate-spin-slow" />
            </a>
            <a
              href="https://www.linkedin.com/in/ariri-ayman-8340a0344/"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-md border border-white/10 bg-white/5 p-2 text-muted-foreground transition-all duration-300 hover:-translate-y-1 hover:border-primary/50 hover:text-primary hover:shadow-lg hover:shadow-primary/20 hover:bg-primary/10 group animate-scale-in motion-delay-1"
              aria-label="LinkedIn"
            >
              <Linkedin className="h-5 w-5 transition-all duration-300 group-hover:scale-125 group-hover:rotate-12 group-hover:animate-swing" />
            </a>
          </div>

          <p className="text-sm text-muted-foreground hover:text-foreground transition-colors duration-300 flex items-center gap-1 group">
            <span>Built with</span>
            <Heart className="h-4 w-4 text-primary/60 group-hover:text-primary group-hover:animate-pulse group-hover:scale-125 transition-all duration-300" />
            <span className="group-hover:text-primary transition-colors duration-300">Next.js & Tailwind CSS</span>
          </p>
        </div>
      </div>
    </footer>
  )
}
