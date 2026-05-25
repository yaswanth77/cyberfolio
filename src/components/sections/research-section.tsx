"use client";

import { motion } from "framer-motion";
import { SectionHeading } from "@/components/section-heading";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { bugBounty, publications } from "@/lib/content";
import { Bug, BookOpen, ExternalLink, Target } from "lucide-react";

export function ResearchSection() {
  return (
    <section id="research" className="relative py-20 md:py-28">
      <div className="container mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          index="07"
          eyebrow="Research & Disclosure"
          title="Bug bounty & publications"
          description="Real-world vulnerability research and disclosure, plus published security research."
        />

        <div className="grid gap-5 lg:grid-cols-2">
          {/* Bug bounty */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.45 }}
          >
            <Card className="glow-card glass h-full p-6">
              <div className="mb-4 flex items-center gap-3">
                <div className="inline-flex rounded-lg border border-accent/30 bg-accent/10 p-2.5 text-accent">
                  <Bug className="h-5 w-5" />
                </div>
                <h3 className="text-xl font-semibold">Bug Bounty & Vuln Research</h3>
              </div>
              <ul className="space-y-2.5">
                {bugBounty.points.map((p, i) => (
                  <li
                    key={i}
                    className="flex gap-2.5 text-sm leading-relaxed text-muted-foreground"
                  >
                    <Target className="mt-0.5 h-4 w-4 shrink-0 text-accent" />
                    <span>{p}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-5 flex flex-wrap gap-2">
                {bugBounty.platforms.map((p) => (
                  <Badge key={p} variant="secondary" className="font-mono text-xs">
                    {p}
                  </Badge>
                ))}
              </div>
            </Card>
          </motion.div>

          {/* Publications */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.45, delay: 0.08 }}
          >
            <Card className="glow-card glass h-full p-6">
              <div className="mb-4 flex items-center gap-3">
                <div className="inline-flex rounded-lg border border-accent-2/30 bg-accent-2/10 p-2.5 text-accent-2">
                  <BookOpen className="h-5 w-5" />
                </div>
                <h3 className="text-xl font-semibold">Publications</h3>
              </div>
              {publications.map((pub) => (
                <div key={pub.title}>
                  <h4 className="font-medium leading-snug">{pub.title}</h4>
                  <p className="mt-1 text-sm text-muted-foreground">
                    {pub.authors} · {pub.year}
                  </p>
                  <p className="text-sm text-foreground/80">{pub.venue}</p>
                  <div className="mt-3 flex flex-wrap gap-1.5">
                    {pub.tags.map((t) => (
                      <Badge key={t} variant="secondary" className="text-[11px]">
                        {t}
                      </Badge>
                    ))}
                  </div>
                  {pub.link && (
                    <a
                      href={pub.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-4 inline-flex items-center gap-1.5 text-sm text-accent hover:underline"
                    >
                      Read the paper <ExternalLink className="h-3.5 w-3.5" />
                    </a>
                  )}
                </div>
              ))}
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
