"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { SectionHeading } from "@/components/section-heading";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { methodology } from "@/lib/content";
import {
  Radar,
  Network,
  ScanSearch,
  Crosshair,
  FileText,
  ChevronRight,
  type LucideIcon,
} from "lucide-react";

const icons: Record<string, LucideIcon> = {
  Radar,
  Network,
  ScanSearch,
  Crosshair,
  FileText,
};

export function MethodologySection() {
  const [active, setActive] = useState(0);
  const phase = methodology[active];
  const ActiveIcon = icons[phase.icon] ?? Crosshair;

  return (
    <section id="approach" className="relative py-20 md:py-28">
      <div className="container mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          index="03"
          eyebrow="Methodology"
          title="How I operate"
          description="A repeatable kill-chain from first recon to final remediation. Tap a phase to inspect it."
        />

        {/* Phase rail */}
        <div className="relative mb-8">
          {/* connecting line */}
          <div className="absolute left-0 right-0 top-5 hidden h-px bg-border md:block" />
          <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-5">
            {methodology.map((p, i) => {
              const Icon = icons[p.icon] ?? Crosshair;
              const on = i === active;
              return (
                <button
                  key={p.id}
                  onClick={() => setActive(i)}
                  className="group relative flex flex-col items-center text-center"
                  aria-pressed={on}
                >
                  <span
                    className={`relative z-10 flex h-10 w-10 items-center justify-center rounded-full border-2 transition-all duration-300 ${
                      on
                        ? "border-accent bg-accent text-accent-foreground shadow-[0_0_20px_-2px_hsl(var(--accent))]"
                        : "border-border bg-background text-muted-foreground group-hover:border-accent/60 group-hover:text-accent"
                    }`}
                  >
                    <Icon className="h-5 w-5" />
                  </span>
                  <span className="mt-2 font-mono text-[11px] uppercase tracking-wider text-muted-foreground">
                    0{i + 1}
                  </span>
                  <span
                    className={`text-xs font-medium transition-colors ${
                      on ? "text-foreground" : "text-muted-foreground"
                    }`}
                  >
                    {p.title}
                  </span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Active phase detail */}
        <AnimatePresence mode="wait">
          <motion.div
            key={phase.id}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.25 }}
          >
            <Card className="glass p-6 md:p-8">
              <div className="flex items-start gap-4">
                <div className="hidden rounded-lg border border-accent/30 bg-accent/10 p-3 text-accent sm:inline-flex">
                  <ActiveIcon className="h-6 w-6" />
                </div>
                <div className="flex-1">
                  <div className="flex items-center gap-2">
                    <span className="font-mono text-sm text-accent">
                      Phase 0{active + 1}
                    </span>
                    <h3 className="text-xl font-semibold">{phase.title}</h3>
                  </div>
                  <p className="mt-1 text-muted-foreground">{phase.summary}</p>

                  <ul className="mt-4 space-y-2">
                    {phase.points.map((pt, j) => (
                      <li key={j} className="flex gap-2.5 text-sm text-foreground/85">
                        <ChevronRight className="mt-0.5 h-4 w-4 shrink-0 text-accent" />
                        <span>{pt}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="mt-5 flex flex-wrap gap-1.5">
                    {phase.tools.map((t) => (
                      <Badge key={t} variant="secondary" className="font-mono text-[11px]">
                        {t}
                      </Badge>
                    ))}
                  </div>
                </div>
              </div>
            </Card>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}
