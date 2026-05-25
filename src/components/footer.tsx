import { Terminal, Github, Linkedin, Mail } from "lucide-react";
import { identity } from "@/lib/content";

export function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="border-t border-border/60 py-10">
      <div className="container mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-4 sm:flex-row sm:px-6 lg:px-8">
        <div className="flex items-center gap-2 font-mono text-sm text-muted-foreground">
          <Terminal className="h-4 w-4 text-accent" />
          <span>
            <span className="text-accent">~/</span>yaswanth - built &amp; broken with care
          </span>
        </div>
        <div className="flex items-center gap-4">
          <a
            href={identity.github}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="text-muted-foreground transition-colors hover:text-accent"
          >
            <Github className="h-5 w-5" />
          </a>
          <a
            href={identity.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="text-muted-foreground transition-colors hover:text-accent"
          >
            <Linkedin className="h-5 w-5" />
          </a>
          <a
            href={`mailto:${identity.email}`}
            aria-label="Email"
            className="text-muted-foreground transition-colors hover:text-accent"
          >
            <Mail className="h-5 w-5" />
          </a>
        </div>
        <p className="text-center font-mono text-xs text-muted-foreground sm:text-right">
          © {year} {identity.name}
        </p>
      </div>
    </footer>
  );
}
