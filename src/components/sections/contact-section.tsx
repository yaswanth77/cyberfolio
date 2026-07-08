"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { identity } from "@/lib/content";
import { Mail, Github, Linkedin, Copy, Check, BookOpen, Trophy } from "lucide-react";

export function ContactSection() {
  const [copied, setCopied] = useState(false);

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(identity.email);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      /* clipboard unavailable */
    }
  };

  return (
    <section id="contact" className="relative py-20 md:py-32">
      <div className="container mx-auto max-w-3xl px-4 text-center sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <p className="eyebrow justify-center">08. Contact</p>
          <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
            Let&apos;s <span className="text-gradient">work together</span>
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-base text-muted-foreground sm:text-lg">
            {identity.ctaLine} DMs open.
          </p>

          {/* email row */}
          <div className="mx-auto mt-8 flex max-w-md items-center justify-between gap-3 rounded-xl border border-border bg-card/60 p-2 pl-4 backdrop-blur">
            <code className="truncate font-mono text-sm text-foreground sm:text-base">
              {identity.email}
            </code>
            <div className="flex items-center gap-1.5">
              <Button variant="ghost" size="icon" onClick={copyEmail} aria-label="Copy email">
                {copied ? (
                  <Check className="h-4 w-4 text-emerald-400" />
                ) : (
                  <Copy className="h-4 w-4" />
                )}
              </Button>
              <Button asChild className="gap-2">
                <a href={`mailto:${identity.email}`}>
                  <Mail className="h-4 w-4" /> Email me
                </a>
              </Button>
            </div>
          </div>

          {/* socials */}
          <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
            <Button asChild variant="outline" size="lg" className="gap-2">
              <a href={identity.github} target="_blank" rel="noopener noreferrer">
                <Github className="h-5 w-5" /> GitHub
              </a>
            </Button>
            <Button asChild variant="outline" size="lg" className="gap-2">
              <a href={identity.linkedin} target="_blank" rel="noopener noreferrer">
                <Linkedin className="h-5 w-5" /> LinkedIn
              </a>
            </Button>
            <Button asChild variant="outline" size="lg" className="gap-2">
              <a href={identity.medium} target="_blank" rel="noopener noreferrer">
                <BookOpen className="h-5 w-5" /> Medium
              </a>
            </Button>
            <Button asChild variant="outline" size="lg" className="gap-2">
              <a href={identity.wpscan} target="_blank" rel="noopener noreferrer">
                <Trophy className="h-5 w-5" /> WPScan
              </a>
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
