"use client";

import { useEffect, useRef, useState } from "react";

type Item =
  | { kind: "header" }
  | { kind: "command"; text: string }
  | { kind: "output"; text: string };

// Kali-style interactive session. Headers appear instantly; commands are typed
// at a human cadence; results stream out character by character like a real
// terminal. One consistent palette: cyan prompt/markers, white values.
const items: Item[] = [
  { kind: "header" },
  { kind: "command", text: "whoami" },
  { kind: "output", text: "> Security Engineer · Penetration Tester · AI Security Researcher" },
  { kind: "output", text: "> M.S. Cybersecurity, University of Maryland · 4.0 GPA" },
  { kind: "header" },
  { kind: "command", text: "./recon --summary" },
  { kind: "output", text: "[+] 3+ yrs offensive & defensive security" },
  { kind: "output", text: "[+] 120+ vulnerabilities found & disclosed" },
  { kind: "output", text: "[+] 1,000+ security alerts triaged" },
  { kind: "output", text: "[+] Bug bounty · AppSec · Cloud · AI/LLM security" },
  { kind: "output", text: "[+] CEH · PEH · eJPTv2 · OSCP in progress" },
  { kind: "header" },
  { kind: "command", text: "./connect" },
  { kind: "output", text: "> I break and build things." },
  { kind: "output", text: "> Open to interesting problems & good conversations" },
];

function PromptHeader() {
  return (
    <div className="text-muted-foreground">
      ┌──(<span className="font-semibold text-accent">yaswanth㉿kali</span>)-[
      <span className="text-foreground/60">~</span>]
    </div>
  );
}

function Cursor() {
  return (
    <span className="ml-0.5 inline-block h-4 w-[9px] translate-y-0.5 bg-accent align-middle animate-blink" />
  );
}

function CommandLine({ text, cursor }: { text: string; cursor?: boolean }) {
  return (
    <div className="text-muted-foreground">
      └─<span className="text-accent">$</span>{" "}
      <span className="text-foreground">{text}</span>
      {cursor && <Cursor />}
    </div>
  );
}

function OutputLine({ text, cursor }: { text: string; cursor?: boolean }) {
  const m = text.match(/^(\[\+\]|>)\s/);
  if (m) {
    return (
      <div className="pl-3">
        <span className="text-accent">{m[1]}</span>{" "}
        <span className="text-foreground/85">{text.slice(m[0].length)}</span>
        {cursor && <Cursor />}
      </div>
    );
  }
  return (
    <div className="pl-3 text-foreground/85">
      {text}
      {cursor && <Cursor />}
    </div>
  );
}

export function TerminalHero() {
  // The terminal always types out: it is the centerpiece of the hero, so we
  // intentionally animate even when prefers-reduced-motion is set.
  const [revealed, setRevealed] = useState(0);
  const [typed, setTyped] = useState("");
  const timer = useRef<ReturnType<typeof setTimeout>>();

  useEffect(() => {
    let cancelled = false;
    let index = 0;
    let charIndex = 0;

    const wait = (fn: () => void, ms: number) => {
      timer.current = setTimeout(() => {
        if (!cancelled) fn();
      }, ms);
    };

    const tick = () => {
      // finished: stop on an idle prompt (replays only on refresh)
      if (index >= items.length) return;

      const item = items[index];

      // headers print instantly
      if (item.kind === "header") {
        setRevealed((v) => v + 1);
        index++;
        wait(tick, 240);
        return;
      }

      // commands are typed character by character (a person typing)
      if (charIndex <= item.text.length) {
        setTyped(item.text.slice(0, charIndex));
        charIndex++;
        wait(tick, 40 + Math.random() * 55);
        return;
      }

      // command done: hold with cursor (Enter), then dump ALL its output at
      // once like a real terminal, and continue to the next prompt
      wait(() => {
        let next = index + 1;
        while (next < items.length && items[next].kind === "output") next++;
        setRevealed(next);
        setTyped("");
        charIndex = 0;
        index = next;
        wait(tick, 550);
      }, 380);
    };

    wait(tick, 500);
    return () => {
      cancelled = true;
      if (timer.current) clearTimeout(timer.current);
    };
  }, []);

  const active = items[revealed];
  const done = revealed >= items.length;

  return (
    <div className="glow-card glass relative overflow-hidden rounded-xl shadow-2xl">
      {/* CRT scanlines */}
      <div
        className="pointer-events-none absolute inset-0 z-20 opacity-[0.12]"
        style={{
          backgroundImage:
            "repeating-linear-gradient(0deg, rgba(255,255,255,0.5) 0px, rgba(255,255,255,0.5) 1px, transparent 2px, transparent 4px)",
        }}
        aria-hidden
      />
      {/* moving scan beam */}
      <div
        className="pointer-events-none absolute left-0 right-0 z-20 h-16 animate-scan bg-gradient-to-b from-transparent via-accent/10 to-transparent"
        aria-hidden
      />

      {/* title bar */}
      <div className="flex items-center gap-2 border-b border-border/60 bg-secondary/40 px-4 py-3">
        <span className="h-3 w-3 rounded-full bg-red-500/80" />
        <span className="h-3 w-3 rounded-full bg-yellow-500/80" />
        <span className="h-3 w-3 rounded-full bg-green-500/80" />
        <span className="ml-2 font-mono text-xs text-muted-foreground">yaswanth@kali: ~</span>
      </div>

      {/* body */}
      <div className="min-h-[20rem] space-y-1 p-5 font-mono text-[13px] leading-relaxed sm:text-sm">
        {items.slice(0, revealed).map((item, i) => {
          if (item.kind === "header") return <PromptHeader key={i} />;
          if (item.kind === "command") return <CommandLine key={i} text={item.text} />;
          return <OutputLine key={i} text={item.text} />;
        })}

        {/* command currently being typed */}
        {active?.kind === "command" && <CommandLine text={typed} cursor />}

        {/* idle prompt with cursor at the end of a run */}
        {done && (
          <>
            <PromptHeader />
            <CommandLine text="" cursor />
          </>
        )}
      </div>
    </div>
  );
}
