"use client"

import { useState, useRef, useEffect } from "react"
import { Send, Github, Linkedin, Mail, Check } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Field, FieldLabel, FieldGroup } from "@/components/ui/field"

export function ContactSection() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [focusedField, setFocusedField] = useState<string | null>(null)
  const formRef = useRef<HTMLFormElement>(null)

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1000))

    setIsSubmitting(false)
    setIsSubmitted(true)

    // Reset form after 3 seconds
    setTimeout(() => {
      setIsSubmitted(false)
      formRef.current?.reset()
    }, 3000)
  }

  return (
    <section id="contact" className="relative overflow-hidden py-24">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/2 left-1/4 h-96 w-96 rounded-full bg-primary/10 blur-3xl animate-blob-rotate opacity-20" />
        <div className="absolute top-0 right-0 h-96 w-96 rounded-full bg-accent/10 blur-3xl animate-blob-rotate opacity-20" style={{ animationDelay: "-3s" }} />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto">
          <h2 className="mb-4 text-sm font-semibold uppercase text-primary animate-reveal">
            Contact
          </h2>
          <h3 className="mb-4 text-3xl font-bold text-foreground text-balance md:text-4xl animate-reveal motion-delay-1">
            Let&apos;s work together
          </h3>
          <p className="mb-12 max-w-xl text-muted-foreground animate-reveal motion-delay-2">
            Have a project in mind or want to discuss opportunities? 
            I&apos;d love to hear from you. Send me a message and I&apos;ll get back to you as soon as possible.
          </p>

          <div className="grid md:grid-cols-2 gap-12">
            <div className="animate-in-left motion-delay-3">
              {isSubmitted ? (
                <div className="surface-panel rounded-lg border border-primary/50 p-8 text-center animate-scale-in">
                  <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-primary/20 animate-success-check">
                    <Check className="h-8 w-8 text-primary" />
                  </div>
                  <h4 className="text-xl font-semibold text-foreground mb-2 animate-word-slide">
                    Message Sent!
                  </h4>
                  <p className="text-muted-foreground animate-word-slide motion-delay-1">
                    Thank you for reaching out. I&apos;ll get back to you soon.
                  </p>
                </div>
              ) : (
                <form ref={formRef} onSubmit={handleSubmit} className="space-y-6">
                  <FieldGroup>
                    <Field>
                      <FieldLabel htmlFor="name" className="group-hover:text-primary transition-colors duration-300">
                        Name
                      </FieldLabel>
                      <Input
                        id="name"
                        name="name"
                        placeholder="Your name"
                        required
                        className={`border-white/10 bg-input/70 transition-all duration-300 hover:border-primary/30 focus:border-primary/50 focus:shadow-lg focus:shadow-primary/10 ${focusedField === 'name' ? 'border-primary/50 shadow-lg shadow-primary/10' : ''}`}
                        onFocus={() => setFocusedField('name')}
                        onBlur={() => setFocusedField(null)}
                      />
                    </Field>
                    <Field>
                      <FieldLabel htmlFor="email" className="group-hover:text-primary transition-colors duration-300">
                        Email
                      </FieldLabel>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        placeholder="your@email.com"
                        required
                        className={`border-white/10 bg-input/70 transition-all duration-300 hover:border-primary/30 focus:border-primary/50 focus:shadow-lg focus:shadow-primary/10 ${focusedField === 'email' ? 'border-primary/50 shadow-lg shadow-primary/10' : ''}`}
                        onFocus={() => setFocusedField('email')}
                        onBlur={() => setFocusedField(null)}
                      />
                    </Field>
                    <Field>
                      <FieldLabel htmlFor="message" className="group-hover:text-primary transition-colors duration-300">
                        Message
                      </FieldLabel>
                      <Textarea
                        id="message"
                        name="message"
                        placeholder="Your message..."
                        rows={5}
                        required
                        className={`resize-none border-white/10 bg-input/70 transition-all duration-300 hover:border-primary/30 focus:border-primary/50 focus:shadow-lg focus:shadow-primary/10 ${focusedField === 'message' ? 'border-primary/50 shadow-lg shadow-primary/10' : ''}`}
                        onFocus={() => setFocusedField('message')}
                        onBlur={() => setFocusedField(null)}
                      />
                    </Field>
                  </FieldGroup>
                  <Button 
                    type="submit" 
                    size="lg" 
                    disabled={isSubmitting} 
                    className="w-full shadow-lg shadow-primary/20 hover:-translate-y-0.5 transition-all duration-300 group"
                  >
                    <span className="group-disabled:animate-pulse">{isSubmitting ? "Sending..." : "Send Message"}</span>
                    <Send className={`ml-2 h-4 w-4 transition-all duration-300 ${isSubmitting ? 'animate-spin-slow' : 'group-hover:translate-x-1'}`} />
                  </Button>
                </form>
              )}
            </div>

            <div className="space-y-8 animate-in-right motion-delay-3">
              <div className="animate-scale-in motion-delay-4">
                <h4 className="text-lg font-semibold text-foreground mb-4 hover:text-primary transition-colors duration-300">
                  Get in Touch
                </h4>
                <p className="text-muted-foreground leading-relaxed hover:text-foreground transition-colors duration-300">
                  Whether you&apos;re looking for a developer to join your team, 
                  have a freelance project, or just want to connect, 
                  feel free to reach out through any of these channels.
                </p>
              </div>

              <div className="space-y-4">
                {[
                  { href: "mailto:aririayman@gmail.com", icon: Mail, label: "Email", delay: 5 },
                  { href: "https://github.com/itszodiag", icon: Github, label: "GitHub", delay: 6, target: true },
                  { href: "https://www.linkedin.com/in/ariri-ayman-8340a0344/", icon: Linkedin, label: "LinkedIn", delay: 7, target: true },
                ].map(({ href, icon: Icon, label, delay, target }) => (
                  <a
                    key={label}
                    href={href}
                    target={target ? "_blank" : undefined}
                    rel={target ? "noopener noreferrer" : undefined}
                    className={`surface-panel group flex items-center gap-4 rounded-lg border border-white/10 p-4 transition-all duration-300 hover:-translate-y-1 hover:border-primary/50 hover:shadow-lg hover:shadow-primary/20 animate-scale-in motion-delay-${delay}`}
                  >
                    <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 transition-all duration-300 group-hover:bg-primary/20 group-hover:animate-pulse-glow">
                      <Icon className="h-5 w-5 text-primary transition-all duration-300 group-hover:scale-125 group-hover:rotate-12" />
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground group-hover:text-primary transition-colors duration-300 font-medium">
                        {label}
                      </p>
                    </div>
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
