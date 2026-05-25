"use client";

import { motion } from "framer-motion";
import { SectionHeading } from "@/components/section-heading";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { aiSecurity } from "@/lib/content";
import { Bot, ScanSearch, ShieldCheck, Library, type LucideIcon } from "lucide-react";

const icons: Record<string, LucideIcon> = {
  Bot,
  ScanSearch,
  ShieldCheck,
  Library,
};

const frameworks = [
  "OWASP Top 10 for LLMs",
  "MITRE ATLAS",
  "Prompt Injection",
  "Jailbreak Testing",
  "Garak",
  "ART",
  "Foolbox",
  "CleverHans",
];

export function AiSecuritySection() {
  return (
    <section id="ai-security" className="relative py-20 md:py-28">
      {/* accent backdrop */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-accent-2/[0.04] via-transparent to-transparent" />
      <div className="container mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          index="05"
          eyebrow="AI / LLM Security"
          title="Red-teaming the new attack surface"
          description="Most of security hasn't caught up to AI yet. I red-team large language models, pentest AI/LLM applications, and build the adversarial datasets that make models safer."
        />

        <div className="grid gap-5 md:grid-cols-2">
          {aiSecurity.map((item, i) => {
            const Icon = icons[item.icon] ?? Bot;
            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.45, delay: i * 0.06 }}
              >
                <Card className="glow-card glass h-full p-6">
                  <div className="flex items-start gap-4">
                    <div className="inline-flex rounded-lg border border-accent-2/30 bg-accent-2/10 p-3 text-accent-2">
                      <Icon className="h-6 w-6" />
                    </div>
                    <div>
                      <div className="flex flex-wrap items-center gap-2">
                        <h3 className="text-lg font-semibold">{item.title}</h3>
                        <Badge variant="outline" className="font-mono text-[10px]">
                          {item.org}
                        </Badge>
                      </div>
                      <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                        {item.body}
                      </p>
                    </div>
                  </div>
                </Card>
              </motion.div>
            );
          })}
        </div>

        {/* framework chips */}
        <motion.div
          className="mt-10 flex flex-wrap items-center justify-center gap-2"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          {frameworks.map((f) => (
            <span
              key={f}
              className="rounded-full border border-border bg-secondary/40 px-3 py-1.5 font-mono text-xs text-muted-foreground"
            >
              {f}
            </span>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
