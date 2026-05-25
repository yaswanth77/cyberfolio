"use client";

import { motion } from "framer-motion";
import { SectionHeading } from "@/components/section-heading";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { experiences } from "@/lib/content";

export function ExperienceSection() {
  return (
    <section id="experience" className="relative py-20 md:py-28">
      <div className="container mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          index="02"
          eyebrow="Experience"
          title="Where I've worked"
          description="From Big Four SOC and incident response to offensive consulting and frontier AI red-teaming."
        />

        <div className="relative">
          {/* timeline rail */}
          <div className="absolute left-[7px] top-2 bottom-2 w-px bg-gradient-to-b from-accent via-border to-transparent md:left-[9px]" />

          <div className="space-y-8">
            {experiences.map((exp, i) => (
              <motion.div
                key={`${exp.company}-${i}`}
                className="relative pl-8 md:pl-12"
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.45 }}
              >
                {/* node */}
                <span
                  className={`absolute left-0 top-2 flex h-4 w-4 items-center justify-center rounded-full border-2 ${
                    exp.current
                      ? "border-accent bg-accent/30"
                      : "border-border bg-background"
                  } md:left-0.5`}
                >
                  {exp.current && (
                    <span className="h-1.5 w-1.5 animate-ping rounded-full bg-accent" />
                  )}
                </span>

                <Card className="glow-card glass p-5 sm:p-6">
                  <div className="flex flex-col gap-1 sm:flex-row sm:items-start sm:justify-between">
                    <div>
                      <h3 className="text-lg font-semibold sm:text-xl">{exp.title}</h3>
                      <p className="text-accent">{exp.company}</p>
                    </div>
                    <div className="flex shrink-0 items-center gap-2">
                      {exp.tag && (
                        <Badge variant="secondary" className="font-mono text-[10px]">
                          {exp.tag}
                        </Badge>
                      )}
                      <span className="font-mono text-xs text-muted-foreground">
                        {exp.duration}
                      </span>
                    </div>
                  </div>
                  <ul className="mt-4 space-y-2">
                    {exp.points.map((p, j) => (
                      <li
                        key={j}
                        className="flex gap-2.5 text-sm leading-relaxed text-muted-foreground"
                      >
                        <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-accent" />
                        <span>{p}</span>
                      </li>
                    ))}
                  </ul>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
