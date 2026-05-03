"use client"

import { ArrowDown, Github, Linkedin } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useEffect, useState } from "react"

export function HeroSection() {
  const [offsetY, setOffsetY] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      setOffsetY(window.scrollY)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <section className="section-grid relative flex min-h-[88svh] items-center overflow-hidden py-28 md:py-32">
      <img
        src="/hero-workspace.jpg"
        alt="Developer workspace with code on a monitor"
        className="absolute inset-0 h-full w-full object-cover saturate-125"
        style={{ transform: `translateY(${offsetY * 0.5}px)` }}
      />
      <div className="absolute inset-0 bg-gradient-to-r from-background via-background/85 to-accent/35" />
      <div className="absolute inset-0 dark:bg-background/30 light:bg-background/15" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-3xl dark:text-white light:text-foreground">
          <p className="mb-4 inline-flex rounded-md border border-primary/35 bg-primary/10 px-3 py-1 text-sm font-medium text-primary animate-fade-in">
            Hello, I&apos;m
          </p>
          <h1 className="mb-4 text-5xl font-bold text-balance sm:text-6xl md:text-7xl dark:text-white light:text-foreground animate-reveal motion-delay-1">
            Ayman
          </h1>
          <h2 className="mb-6 text-2xl dark:text-white/85 light:text-foreground/75 md:text-3xl animate-reveal motion-delay-2">
            Junior Fullstack Developer
          </h2>
          <p className="mb-8 max-w-xl text-lg leading-relaxed dark:text-white/80 light:text-foreground/70 animate-reveal motion-delay-3">
            Passionate about web development, modern architectures, and DevOps practices. 
            I build scalable, user-friendly applications that make a difference.
          </p>

          <div className="flex flex-wrap gap-4 mb-12 animate-reveal motion-delay-4">
            <Button asChild size="lg" className="group bg-primary text-primary-foreground shadow-lg shadow-primary/20 hover:-translate-y-0.5 hover:bg-primary/90 transition-all duration-300 hover:shadow-lg hover:shadow-primary/40">
              <a href="#projects">
                View Projects
                <ArrowDown className="ml-2 h-4 w-4 group-hover:translate-y-1 transition-transform" />
              </a>
            </Button>
            <Button asChild variant="outline" size="lg" className="dark:border-white/35 dark:bg-white/10 dark:text-white dark:hover:bg-white dark:hover:text-foreground light:border-foreground/30 light:bg-foreground/10 light:text-foreground light:hover:bg-foreground light:hover:text-background hover:-translate-y-0.5 transition-all duration-300">
              <a href="#contact">Contact Me</a>
            </Button>
          </div>

          <div className="flex items-center gap-4 animate-reveal motion-delay-5">
            <a
              href="https://github.com/itszodiag"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-md dark:border-white/15 dark:bg-white/10 dark:text-white/75 light:border-foreground/20 light:bg-foreground/10 light:text-foreground/60 transition-all hover:-translate-y-0.5 dark:hover:border-primary/60 dark:hover:text-white dark:hover:bg-primary/20 light:hover:border-primary/50 light:hover:text-primary light:hover:bg-primary/15 hover:animate-pulse-glow p-2"
              aria-label="GitHub"
            >
              <Github className="h-6 w-6 transition-transform hover:rotate-12" />
            </a>
            <a
              href="https://www.linkedin.com/in/ariri-ayman-8340a0344/"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-md dark:border-white/15 dark:bg-white/10 dark:text-white/75 light:border-foreground/20 light:bg-foreground/10 light:text-foreground/60 transition-all hover:-translate-y-0.5 dark:hover:border-primary/60 dark:hover:text-white dark:hover:bg-primary/20 light:hover:border-primary/50 light:hover:text-primary light:hover:bg-primary/15 hover:animate-pulse-glow p-2"
              aria-label="LinkedIn"
            >
              <Linkedin className="h-6 w-6 transition-transform hover:rotate-12" />
            </a>
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-drift">
        <ArrowDown className="h-6 w-6 dark:text-white/75 light:text-foreground/50 animate-float" />
      </div>
    </section>
  )
}
