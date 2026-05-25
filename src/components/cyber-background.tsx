"use client";

import { useEffect, useRef } from "react";

/**
 * Subtle animated "constellation" network rendered on a canvas, fixed behind
 * all content. Honors prefers-reduced-motion by rendering a single static frame.
 */
export function CyberBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    let width = 0;
    let height = 0;
    let dpr = Math.min(window.devicePixelRatio || 1, 2);

    type Node = { x: number; y: number; vx: number; vy: number };
    let nodes: Node[] = [];

    const accent = () => {
      const styles = getComputedStyle(document.documentElement);
      const v = styles.getPropertyValue("--accent").trim() || "186 96% 56%";
      return v;
    };

    const buildNodes = () => {
      const density = Math.min(Math.max((width * height) / 22000, 28), 90);
      nodes = Array.from({ length: Math.floor(density) }, () => ({
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * 0.25,
        vy: (Math.random() - 0.5) * 0.25,
      }));
    };

    const resize = () => {
      width = canvas.clientWidth;
      height = canvas.clientHeight;
      dpr = Math.min(window.devicePixelRatio || 1, 2);
      canvas.width = width * dpr;
      canvas.height = height * dpr;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      buildNodes();
    };

    const draw = () => {
      const a = accent();
      ctx.clearRect(0, 0, width, height);
      const maxDist = 140;

      for (let i = 0; i < nodes.length; i++) {
        const n = nodes[i];
        n.x += n.vx;
        n.y += n.vy;
        if (n.x < 0 || n.x > width) n.vx *= -1;
        if (n.y < 0 || n.y > height) n.vy *= -1;

        for (let j = i + 1; j < nodes.length; j++) {
          const m = nodes[j];
          const dx = n.x - m.x;
          const dy = n.y - m.y;
          const dist = Math.hypot(dx, dy);
          if (dist < maxDist) {
            const op = (1 - dist / maxDist) * 0.18;
            ctx.strokeStyle = `hsl(${a} / ${op})`;
            ctx.lineWidth = 1;
            ctx.beginPath();
            ctx.moveTo(n.x, n.y);
            ctx.lineTo(m.x, m.y);
            ctx.stroke();
          }
        }
      }

      for (const n of nodes) {
        ctx.fillStyle = `hsl(${a} / 0.5)`;
        ctx.beginPath();
        ctx.arc(n.x, n.y, 1.4, 0, Math.PI * 2);
        ctx.fill();
      }
    };

    let raf = 0;
    const loop = () => {
      draw();
      raf = requestAnimationFrame(loop);
    };

    resize();
    if (reduced) {
      draw();
    } else {
      loop();
    }

    window.addEventListener("resize", resize);
    return () => {
      window.removeEventListener("resize", resize);
      cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
      {/* glow blobs */}
      <div className="absolute -top-40 -left-32 h-[36rem] w-[36rem] rounded-full bg-accent/10 blur-[120px] animate-glow-pulse" />
      <div className="absolute top-1/3 -right-40 h-[32rem] w-[32rem] rounded-full bg-accent-2/10 blur-[120px] animate-glow-pulse" />
      <canvas ref={canvasRef} className="h-full w-full opacity-70" />
    </div>
  );
}
