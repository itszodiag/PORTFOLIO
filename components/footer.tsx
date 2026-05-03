import { Github, Linkedin, Heart } from "lucide-react"

export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="relative dark:border-white/10 light:border-foreground/15 border-t dark:bg-background/95 light:bg-background/98 py-8 overflow-hidden">
      {/* Animated background gradient */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 h-96 w-96 rounded-full bg-primary/5 blur-3xl animate-bg-pulse opacity-20" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col items-center justify-between gap-8 animate-reveal md:flex-row md:gap-4">
          <p className="text-sm dark:text-muted-foreground light:text-foreground/60 dark:hover:text-foreground light:hover:text-foreground transition-colors duration-300 group">
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
              className="rounded-md dark:border-white/10 light:border-foreground/15 dark:bg-white/5 light:bg-foreground/5 dark:text-muted-foreground light:text-foreground/60 transition-all duration-300 hover:-translate-y-1 dark:hover:border-primary/50 light:hover:border-primary/50 dark:hover:text-primary light:hover:text-primary dark:hover:shadow-lg dark:hover:shadow-primary/20 light:hover:shadow-md light:hover:shadow-primary/10 dark:hover:bg-primary/10 light:hover:bg-primary/10 group animate-scale-in border p-2"
              aria-label="GitHub"
            >
              <Github className="h-5 w-5 transition-all duration-300 group-hover:scale-125 group-hover:rotate-12 group-hover:animate-spin-slow" />
            </a>
            <a
              href="https://www.linkedin.com/in/ariri-ayman-8340a0344/"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-md dark:border-white/10 light:border-foreground/15 dark:bg-white/5 light:bg-foreground/5 dark:text-muted-foreground light:text-foreground/60 transition-all duration-300 hover:-translate-y-1 dark:hover:border-primary/50 light:hover:border-primary/50 dark:hover:text-primary light:hover:text-primary dark:hover:shadow-lg dark:hover:shadow-primary/20 light:hover:shadow-md light:hover:shadow-primary/10 dark:hover:bg-primary/10 light:hover:bg-primary/10 group animate-scale-in motion-delay-1 border p-2"
              aria-label="LinkedIn"
            >
              <Linkedin className="h-5 w-5 transition-all duration-300 group-hover:scale-125 group-hover:rotate-12 group-hover:animate-swing" />
            </a>
          </div>

          <p className="text-sm dark:text-muted-foreground light:text-foreground/60 dark:hover:text-foreground light:hover:text-foreground transition-colors duration-300 flex items-center gap-1 group">
            <span>Built with</span>
            <Heart className="h-4 w-4 dark:text-primary/60 light:text-primary/50 dark:group-hover:text-primary light:group-hover:text-primary dark:group-hover:animate-pulse light:group-hover:animate-pulse group-hover:scale-125 transition-all duration-300" />
            <span className="group-hover:text-primary transition-colors duration-300">Next.js & Tailwind CSS</span>
          </p>
        </div>
      </div>
    </footer>
  )
}
