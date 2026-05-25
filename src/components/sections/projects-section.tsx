"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { SectionHeading } from "@/components/section-heading";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { projects, type Project } from "@/lib/content";
import {
  Github,
  Sparkles,
  ChevronDown,
  ScanSearch,
  Radar,
  Cloud,
  Search,
  ShieldAlert,
  Network,
  Lock,
  type LucideIcon,
} from "lucide-react";

const icons: Record<string, LucideIcon> = {
  ScanSearch,
  Radar,
  Cloud,
  Search,
  ShieldAlert,
  Network,
  Lock,
};

function CaseStudy({ cs }: { cs: NonNullable<Project["caseStudy"]> }) {
  const rows = [
    { label: "Challenge", text: cs.challenge },
    { label: "Approach", text: cs.approach },
    { label: "Result", text: cs.result },
  ];
  return (
    <div className="mt-4 space-y-3 rounded-lg border border-border/60 bg-background/40 p-4">
      {rows.map((r) => (
        <div key={r.label} className="grid grid-cols-[88px_1fr] gap-3">
          <span className="font-mono text-[11px] uppercase tracking-wider text-accent">
            {r.label}
          </span>
          <span className="text-sm leading-relaxed text-muted-foreground">{r.text}</span>
        </div>
      ))}
    </div>
  );
}

function ProjectCard({ project }: { project: Project }) {
  const [open, setOpen] = useState(false);
  const Icon = icons[project.icon] ?? Search;
  const featured = project.featured;

  return (
    <Card
      className={`glow-card glass flex h-full overflow-hidden ${
        featured ? "flex-col lg:flex-row" : "flex-col"
      }`}
    >
      {/* Visual zone */}
      <div className={`relative shrink-0 overflow-hidden ${featured ? "lg:w-2/5" : ""}`}>
        {project.image ? (
          <div className={`relative ${featured ? "h-48 lg:h-full" : "h-44"}`}>
            <Image src={project.image} alt={project.title} fill className="object-cover" unoptimized />
            <div className="absolute inset-0 bg-gradient-to-t from-card via-card/20 to-transparent" />
          </div>
        ) : (
          <div
            className={`relative flex items-center justify-center bg-gradient-to-br from-accent/15 via-card to-accent-2/15 ${
              featured ? "h-48 lg:h-full" : "h-44"
            }`}
          >
            <Icon className="h-16 w-16 text-accent/70" />
            <div className="absolute inset-0 grid-bg opacity-40" />
          </div>
        )}
      </div>

      {/* Content */}
      <div className="flex flex-1 flex-col p-6">
        <div className="flex items-center gap-2">
          <Icon className="h-5 w-5 text-accent" />
          <h3 className="text-lg font-semibold">{project.title}</h3>
          {project.ai && (
            <Badge className="gap-1 border-accent-2/40 bg-accent-2/15 text-accent-2 hover:bg-accent-2/20">
              <Sparkles className="h-3 w-3" /> AI
            </Badge>
          )}
        </div>

        <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{project.blurb}</p>

        <div className="mt-4 flex flex-wrap gap-1.5">
          {project.stack.map((tag) => (
            <Badge key={tag} variant="secondary" className="font-mono text-[11px]">
              {tag}
            </Badge>
          ))}
        </div>

        {/* expandable case study */}
        <AnimatePresence initial={false}>
          {open && project.caseStudy && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="overflow-hidden"
            >
              <CaseStudy cs={project.caseStudy} />
            </motion.div>
          )}
        </AnimatePresence>

        <div className="mt-5 flex items-center gap-2">
          {project.caseStudy && (
            <Button
              variant="ghost"
              size="sm"
              className="gap-1.5 px-2 text-accent hover:text-accent"
              onClick={() => setOpen((v) => !v)}
              aria-expanded={open}
            >
              <ChevronDown
                className={`h-4 w-4 transition-transform ${open ? "rotate-180" : ""}`}
              />
              {open ? "Hide case study" : "Case study"}
            </Button>
          )}
          {project.repo && (
            <Button asChild variant="outline" size="sm" className="gap-2">
              <a href={project.repo} target="_blank" rel="noopener noreferrer">
                <Github className="h-4 w-4" /> GitHub
              </a>
            </Button>
          )}
        </div>
      </div>
    </Card>
  );
}

export function ProjectsSection() {
  return (
    <section id="projects" className="relative py-20 md:py-28">
      <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          index="04"
          eyebrow="Projects"
          title="Things I've built"
          description="Open-source security tooling and hands-on labs. Expand any card for the case study behind it."
        />

        <div className="grid auto-rows-fr gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, i) => (
            <motion.div
              key={project.title}
              className={project.featured ? "sm:col-span-2 lg:col-span-3" : ""}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.45, delay: (i % 3) * 0.05 }}
            >
              <ProjectCard project={project} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
