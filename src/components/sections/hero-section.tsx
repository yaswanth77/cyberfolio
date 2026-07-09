"use client";

import { Button } from "@/components/ui/button";
import { Github, Linkedin, Mail, ArrowDown } from "lucide-react";
import { motion } from "framer-motion";
import { TerminalHero } from "@/components/terminal-hero";
import { CountUp } from "@/components/count-up";
import { identity, stats } from "@/lib/content";

const container = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.12, delayChildren: 0.1 } },
};
const item = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 90, damping: 14 } },
};

export function HeroSection() {
  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center overflow-hidden pt-24 pb-12"
    >
      <div className="absolute inset-0 grid-bg" aria-hidden />
      <div className="container relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-center gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:gap-14">
          {/* Left: intro */}
          <motion.div variants={container} initial="hidden" animate="visible">
            <motion.p
              variants={item}
              className="eyebrow inline-flex items-center gap-2 rounded-full border border-accent/30 bg-accent/5 px-3 py-1"
            >
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent opacity-75" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-accent" />
              </span>
              Offensive security · AI red-teaming
            </motion.p>

            <motion.h1
              variants={item}
              className="mt-5 text-4xl font-extrabold tracking-tight sm:text-5xl lg:text-6xl"
            >
              {identity.name}
            </motion.h1>

            <motion.p
              variants={item}
              className="mt-4 font-mono text-lg font-medium text-gradient sm:text-xl"
            >
              {identity.headline}
            </motion.p>

            <motion.p
              variants={item}
              className="mt-5 max-w-xl text-base leading-relaxed text-muted-foreground sm:text-lg"
            >
              {identity.pitch}
            </motion.p>

            <motion.div variants={item} className="mt-8 flex flex-wrap items-center gap-3">
              <Button asChild size="lg" className="gap-2 font-medium">
                <a href="#projects">
                  View Work <ArrowDown className="h-4 w-4" />
                </a>
              </Button>
              <Button asChild size="lg" variant="outline" className="gap-2 font-medium">
                <a href="#contact">Get in touch</a>
              </Button>
              <div className="flex items-center gap-2 sm:ml-2">
                {[
                  { href: identity.github, icon: Github, label: "GitHub" },
                  { href: identity.linkedin, icon: Linkedin, label: "LinkedIn" },
                  { href: `mailto:${identity.email}`, icon: Mail, label: "Email" },
                ].map(({ href, icon: Icon, label }) => (
                  <Button
                    key={label}
                    asChild
                    variant="ghost"
                    size="icon"
                    className="text-muted-foreground hover:text-accent"
                  >
                    <a
                      href={href}
                      target={href.startsWith("http") ? "_blank" : undefined}
                      rel="noopener noreferrer"
                      aria-label={label}
                    >
                      <Icon className="h-5 w-5" />
                    </a>
                  </Button>
                ))}
              </div>
            </motion.div>
          </motion.div>

          {/* Right: terminal */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ delay: 0.35, duration: 0.6, ease: "easeOut" }}
          >
            <TerminalHero />
          </motion.div>
        </div>

        {/* Stat strip */}
        <motion.div
          className="mt-16 grid grid-cols-2 gap-px overflow-hidden rounded-xl border border-border/60 bg-border/40 sm:grid-cols-3 lg:grid-cols-7"
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.5 }}
        >
          {stats.map((s) => (
            <div key={s.label} className="bg-background/80 px-4 py-5 text-center">
              <div className="font-mono text-2xl font-bold text-gradient sm:text-3xl">
                <CountUp value={s.value} />
              </div>
              <div className="mt-1 text-xs text-muted-foreground">{s.label}</div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
