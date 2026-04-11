"use client"

import { useState } from "react"
import { Send, Github, Linkedin, Mail } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Field, FieldLabel, FieldGroup } from "@/components/ui/field"

export function ContactSection() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1000))

    setIsSubmitting(false)
    setIsSubmitted(true)
  }

  return (
    <section id="contact" className="relative overflow-hidden py-24">
      <div className="container mx-auto px-6">
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
            <div className="animate-rise motion-delay-3">
              {isSubmitted ? (
                <div className="surface-panel rounded-lg border border-primary/50 p-8 text-center">
                  <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-primary/20">
                    <Send className="h-8 w-8 text-primary" />
                  </div>
                  <h4 className="text-xl font-semibold text-foreground mb-2">
                    Message Sent!
                  </h4>
                  <p className="text-muted-foreground">
                    Thank you for reaching out. I&apos;ll get back to you soon.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <FieldGroup>
                    <Field>
                      <FieldLabel htmlFor="name">Name</FieldLabel>
                      <Input
                        id="name"
                        name="name"
                        placeholder="Your name"
                        required
                        className="border-white/10 bg-input/70"
                      />
                    </Field>
                    <Field>
                      <FieldLabel htmlFor="email">Email</FieldLabel>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        placeholder="your@email.com"
                        required
                        className="border-white/10 bg-input/70"
                      />
                    </Field>
                    <Field>
                      <FieldLabel htmlFor="message">Message</FieldLabel>
                      <Textarea
                        id="message"
                        name="message"
                        placeholder="Your message..."
                        rows={5}
                        required
                        className="resize-none border-white/10 bg-input/70"
                      />
                    </Field>
                  </FieldGroup>
                  <Button type="submit" size="lg" disabled={isSubmitting} className="w-full shadow-lg shadow-primary/20 hover:-translate-y-0.5">
                    {isSubmitting ? "Sending..." : "Send Message"}
                    <Send className="ml-2 h-4 w-4" />
                  </Button>
                </form>
              )}
            </div>

            <div className="space-y-8 animate-rise motion-delay-4">
              <div>
                <h4 className="text-lg font-semibold text-foreground mb-4">
                  Get in Touch
                </h4>
                <p className="text-muted-foreground leading-relaxed">
                  Whether you&apos;re looking for a developer to join your team, 
                  have a freelance project, or just want to connect, 
                  feel free to reach out through any of these channels.
                </p>
              </div>

              <div className="space-y-4">
                <a
                  href="mailto:aririayman@gmail.com"
                  className="surface-panel group flex items-center gap-4 rounded-lg border border-white/10 p-4 transition-all hover:-translate-y-0.5 hover:border-primary/50"
                >
                  <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 transition-colors group-hover:bg-primary/20">
                    <Mail className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Email</p>
                  </div>
                </a>

                <a
                  href="https://github.com/itszodiag"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="surface-panel group flex items-center gap-4 rounded-lg border border-white/10 p-4 transition-all hover:-translate-y-0.5 hover:border-primary/50"
                >
                  <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 transition-colors group-hover:bg-primary/20">
                    <Github className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">GitHub</p>
                  </div>
                </a>

                <a
                  href="https://www.linkedin.com/in/ariri-ayman-8340a0344/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="surface-panel group flex items-center gap-4 rounded-lg border border-white/10 p-4 transition-all hover:-translate-y-0.5 hover:border-primary/50"
                >
                  <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 transition-colors group-hover:bg-primary/20">
                    <Linkedin className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">LinkedIn</p>
                   
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
