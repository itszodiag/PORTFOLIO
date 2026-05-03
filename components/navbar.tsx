"use client"

import { useState, useEffect } from "react"
import { Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { ThemeToggle } from "@/components/theme-toggle"

const navLinks = [
  { href: "#about", label: "About" },
  { href: "#skills", label: "Skills" },
  { href: "#projects", label: "Projects" },
  { href: "#experience", label: "Experience" },
  { href: "#contact", label: "Contact" },
]

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const isSolid = isScrolled || isMobileMenuOpen

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isSolid
          ? "border-b dark:border-white/10 light:border-foreground/15 dark:bg-background/90 light:bg-white/95 text-foreground dark:shadow-lg dark:shadow-black/20 light:shadow-md light:shadow-black/10 backdrop-blur-xl"
          : "bg-transparent text-white"
      }`}
    >
      <nav className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <a
            href="#"
            className={`text-xl font-bold transition-colors hover:text-primary ${
              isSolid ? "dark:text-foreground light:text-foreground" : "text-white"
            }`}
          >
            Ayman
          </a>

          {/* Desktop Navigation */}
          <ul className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className={`rounded-md px-2 py-1 text-sm font-medium transition-all hover:-translate-y-0.5 hover:text-primary ${
                    isSolid ? "dark:text-muted-foreground light:text-foreground dark:hover:bg-white/5 light:hover:bg-foreground/10" : "text-white/85 hover:bg-white/10"
                  }`}
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>

          {/* Right side icons */}
          <div className="flex items-center gap-2">
            <ThemeToggle />
            {/* Mobile Menu Button */}
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label="Toggle menu"
              className={`md:hidden ${isSolid ? "dark:hover:bg-white/10 light:hover:bg-foreground/10 dark:text-foreground light:text-foreground" : "text-white hover:bg-white/10"}`}
            >
              {isMobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <ul className="surface-panel animate-reveal md:hidden mt-4 flex flex-col gap-2 rounded-lg dark:border-white/10 light:border-foreground/15 border p-3">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="block rounded-md px-3 py-2 text-sm font-medium dark:text-muted-foreground light:text-foreground transition-colors dark:hover:bg-white/10 light:hover:bg-foreground/10 dark:hover:text-primary light:hover:text-primary"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        )}
      </nav>
    </header>
  )
}
