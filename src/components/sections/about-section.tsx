"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { SectionHeading } from "@/components/section-heading";
import { Card } from "@/components/ui/card";
import { aboutText, focusAreas } from "@/lib/content";
import {
  Crosshair,
  Code2,
  BrainCircuit,
  Cloud,
  Bug,
  Radar,
  type LucideIcon,
} from "lucide-react";

const icons: Record<string, LucideIcon> = {
  Crosshair,
  Code2,
  BrainCircuit,
  Cloud,
  Bug,
  Radar,
};

export function AboutSection() {
  return (
    <section id="about" className="relative py-20 md:py-28">
      <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading index="01" eyebrow="About" title="Who I am" />

        <div className="grid gap-10 lg:grid-cols-[300px_1fr] lg:gap-14">
          {/* Photo */}
          <motion.div
            className="mx-auto w-full max-w-[280px] lg:max-w-none"
            initial={{ opacity: 0, scale: 0.92 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="group relative aspect-square overflow-hidden rounded-2xl border border-border">
              <div className="absolute inset-0 z-10 bg-gradient-to-tr from-accent/20 via-transparent to-accent-2/20 mix-blend-overlay" />
              <Image
                src="/cyberfolio/profile-pic.jpg"
                alt={`Portrait`}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-105"
                unoptimized
                priority
              />
            </div>
          </motion.div>

          {/* Intro text */}
          <motion.div
            className="space-y-4 text-base leading-relaxed text-muted-foreground sm:text-lg"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            {aboutText.map((p, i) => (
              <p key={i}>{p}</p>
            ))}
            <p className="pt-2 font-mono text-sm text-foreground/80">
              Certified in <span className="text-accent">CEH</span>,{" "}
              <span className="text-accent">eJPT</span>,{" "}
              <span className="text-accent">PEH</span> &{" "}
              <span className="text-accent">Security+</span> - pursuing{" "}
              <span className="text-accent-2">OSCP</span>,{" "}
              <span className="text-accent-2">CDSA</span> &{" "}
              <span className="text-accent-2">CBBH</span>.
            </p>
          </motion.div>
        </div>

        {/* Focus areas */}
        <div className="mt-16">
          <h3 className="mb-6 font-mono text-sm uppercase tracking-widest text-muted-foreground">
            // What I do
          </h3>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {focusAreas.map((area, i) => {
              const Icon = icons[area.icon] ?? Crosshair;
              return (
                <motion.div
                  key={area.title}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-60px" }}
                  transition={{ duration: 0.4, delay: i * 0.05 }}
                >
                  <Card className="glow-card glass h-full p-6">
                    <div className="mb-4 inline-flex rounded-lg border border-accent/30 bg-accent/10 p-2.5 text-accent">
                      <Icon className="h-5 w-5" />
                    </div>
                    <h4 className="text-lg font-semibold">{area.title}</h4>
                    <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                      {area.body}
                    </p>
                  </Card>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
