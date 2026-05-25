"use client";

import { motion } from "framer-motion";
import { SectionHeading } from "@/components/section-heading";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { skillGroups, proficiency, certifications, education } from "@/lib/content";
import { Award, GraduationCap, CheckCircle2, Loader } from "lucide-react";

const LEVELS: Record<string, number> = { Competent: 1, Proficient: 2, Expert: 3 };

function Meter({ level }: { level: string }) {
  const filled = LEVELS[level] ?? 1;
  return (
    <span className="flex gap-1" aria-label={level}>
      {[0, 1, 2].map((i) => (
        <span
          key={i}
          className={`h-1.5 w-5 rounded-full ${
            i < filled ? "bg-accent" : "bg-border"
          }`}
        />
      ))}
    </span>
  );
}

export function SkillsSection() {
  return (
    <section id="skills" className="relative py-20 md:py-28">
      <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading index="06" eyebrow="Skills & Credentials" title="The arsenal" />

        {/* Proficiency matrix */}
        <div className="mb-10">
          <div className="mb-4 flex items-center justify-between">
            <h3 className="font-mono text-sm uppercase tracking-widest text-muted-foreground">
              // Capability matrix
            </h3>
            <div className="hidden items-center gap-4 font-mono text-[11px] text-muted-foreground sm:flex">
              <span className="flex items-center gap-1.5"><Meter level="Competent" /> Competent</span>
              <span className="flex items-center gap-1.5"><Meter level="Proficient" /> Proficient</span>
              <span className="flex items-center gap-1.5"><Meter level="Expert" /> Expert</span>
            </div>
          </div>
          <Card className="glass p-5 sm:p-6">
            <div className="grid gap-x-8 gap-y-3.5 sm:grid-cols-2 lg:grid-cols-3">
              {proficiency.map((p, i) => (
                <motion.div
                  key={p.domain}
                  className="flex items-center justify-between gap-3"
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: (i % 6) * 0.04 }}
                >
                  <span className="text-sm text-foreground/85">{p.domain}</span>
                  <Meter level={p.level} />
                </motion.div>
              ))}
            </div>
          </Card>
        </div>

        {/* Tooling */}
        <h3 className="mb-4 font-mono text-sm uppercase tracking-widest text-muted-foreground">
          // Tooling
        </h3>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {skillGroups.map((group, i) => (
            <motion.div
              key={group.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.4, delay: (i % 4) * 0.05 }}
            >
              <Card className="glow-card glass h-full p-5">
                <h4 className="mb-3 font-mono text-xs uppercase tracking-widest text-accent">
                  {group.label}
                </h4>
                <div className="flex flex-wrap gap-1.5">
                  {group.items.map((item) => (
                    <Badge key={item} variant="secondary" className="text-xs font-normal">
                      {item}
                    </Badge>
                  ))}
                </div>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Certs + Education */}
        <div className="mt-6 grid gap-4 lg:grid-cols-2">
          <Card className="glass p-6">
            <div className="mb-5 flex items-center gap-3">
              <Award className="h-6 w-6 text-accent" />
              <h3 className="text-xl font-semibold">Certifications</h3>
            </div>
            <div className="space-y-4">
              <div>
                <p className="mb-2 font-mono text-xs uppercase tracking-widest text-emerald-400">
                  Achieved
                </p>
                <div className="flex flex-wrap gap-2">
                  {certifications.achieved.map((c) => (
                    <span
                      key={c.name}
                      className="inline-flex items-center gap-1.5 rounded-md border border-emerald-500/25 bg-emerald-500/10 px-2.5 py-1 text-xs text-emerald-300"
                    >
                      <CheckCircle2 className="h-3.5 w-3.5" />
                      {c.name}
                    </span>
                  ))}
                </div>
              </div>
              <div>
                <p className="mb-2 font-mono text-xs uppercase tracking-widest text-accent-2">
                  In Progress
                </p>
                <div className="flex flex-wrap gap-2">
                  {certifications.inProgress.map((c) => (
                    <span
                      key={c.name}
                      className="inline-flex items-center gap-1.5 rounded-md border border-accent-2/30 bg-accent-2/10 px-2.5 py-1 text-xs text-accent-2"
                    >
                      <Loader className="h-3.5 w-3.5" />
                      {c.name} <span className="text-muted-foreground">· {c.issuer}</span>
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </Card>

          <Card className="glass p-6">
            <div className="mb-5 flex items-center gap-3">
              <GraduationCap className="h-6 w-6 text-accent" />
              <h3 className="text-xl font-semibold">Education</h3>
            </div>
            <div className="space-y-5">
              {education.map((edu) => (
                <div key={edu.school} className="border-l-2 border-accent/40 pl-4">
                  <h4 className="font-medium">{edu.degree}</h4>
                  <p className="text-sm text-accent">{edu.school}</p>
                  <p className="font-mono text-xs text-muted-foreground">
                    {edu.duration} · GPA {edu.gpa}
                  </p>
                  <p className="mt-1 text-xs leading-relaxed text-muted-foreground/80">
                    {edu.coursework}
                  </p>
                </div>
              ))}
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
}
