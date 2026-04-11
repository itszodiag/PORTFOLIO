"use client"

import { ArrowDown, Github, Linkedin } from "lucide-react"
import { Button } from "@/components/ui/button"

export function HeroSection() {
  return (
    <section className="section-grid relative flex min-h-[88svh] items-center overflow-hidden py-28 md:py-32">
      <img
        src="/hero-workspace.jpg"
        alt="Developer workspace with code on a monitor"
        className="absolute inset-0 h-full w-full object-cover saturate-125"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-background via-background/85 to-accent/35" />
      <div className="absolute inset-0 bg-background/30" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-3xl text-white">
          <p className="mb-4 inline-flex rounded-md border border-primary/35 bg-primary/10 px-3 py-1 text-sm font-medium text-primary animate-fade-in">
            Hello, I&apos;m
          </p>
          <h1 className="mb-4 text-5xl font-bold text-balance sm:text-6xl md:text-7xl animate-reveal motion-delay-1">
            Ayman
          </h1>
          <h2 className="mb-6 text-2xl text-white/85 md:text-3xl animate-reveal motion-delay-2">
            Junior Fullstack Developer
          </h2>
          <p className="mb-8 max-w-xl text-lg leading-relaxed text-white/80 animate-reveal motion-delay-3">
            Passionate about web development, modern architectures, and DevOps practices. 
            I build scalable, user-friendly applications that make a difference.
          </p>

          <div className="flex flex-wrap gap-4 mb-12 animate-reveal motion-delay-4">
            <Button asChild size="lg" className="group bg-primary text-primary-foreground shadow-lg shadow-primary/20 hover:-translate-y-0.5 hover:bg-primary/90">
              <a href="#projects">
                View Projects
                <ArrowDown className="ml-2 h-4 w-4 group-hover:translate-y-1 transition-transform" />
              </a>
            </Button>
            <Button asChild variant="outline" size="lg" className="border-white/35 bg-white/10 text-white hover:-translate-y-0.5 hover:bg-white hover:text-foreground">
              <a href="#contact">Contact Me</a>
            </Button>
          </div>

          <div className="flex items-center gap-4 animate-reveal motion-delay-5">
            <a
              href="https://github.com/itszodiag"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-md border border-white/15 bg-white/10 p-2 text-white/75 transition-all hover:-translate-y-0.5 hover:border-primary/60 hover:text-white"
              aria-label="GitHub"
            >
              <Github className="h-6 w-6" />
            </a>
            <a
              href="https://www.linkedin.com/in/ariri-ayman-8340a0344/"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-md border border-white/15 bg-white/10 p-2 text-white/75 transition-all hover:-translate-y-0.5 hover:border-primary/60 hover:text-white"
              aria-label="LinkedIn"
            >
              <Linkedin className="h-6 w-6" />
            </a>
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-drift">
        <ArrowDown className="h-6 w-6 text-white/75" />
      </div>
    </section>
  )
}
