import React, { useRef, useEffect } from "react";

interface Node {
  x: number;
  y: number;
  vx: number;
  vy: number;
}

export default function PlexusBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const nodesRef = useRef<Node[]>([]);
  const animRef = useRef<number>(0);

  useEffect(() => {
    // Respect prefers-reduced-motion
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    // Read design tokens from CSS custom properties
    const rootStyles = getComputedStyle(document.documentElement);
    const mutedFg = rootStyles.getPropertyValue("--muted-foreground").trim();
    // Parse HSL components: "218 12% 55%"
    const [h, s, l] = mutedFg.split(/\s+/);
    const lineColor = (alpha: number) => `hsla(${h}, ${s}, ${l}, ${alpha})`;
    const dotColor = lineColor(0.4);

    let w = 0;
    let h2 = 0;
    const dpr = window.devicePixelRatio || 1;

    const resize = () => {
      const rect = canvas.getBoundingClientRect();
      w = rect.width;
      h2 = rect.height;
      canvas.width = w * dpr;
      canvas.height = h2 * dpr;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    };

    const initNodes = () => {
      const count = Math.min(50, Math.floor((w * h2) / 15000));
      nodesRef.current = Array.from({ length: count }, () => ({
        x: Math.random() * w,
        y: Math.random() * h2,
        vx: (Math.random() - 0.5) * 0.4,
        vy: (Math.random() - 0.5) * 0.4,
      }));
    };

    const isMobile = window.innerWidth < 768;
    const shouldAnimate = !isMobile && !prefersReducedMotion;

    const draw = () => {
      ctx.clearRect(0, 0, w, h2);
      const nodes = nodesRef.current;
      const maxDist = 160;

      for (let i = 0; i < nodes.length; i++) {
        for (let j = i + 1; j < nodes.length; j++) {
          const dx = nodes[i].x - nodes[j].x;
          const dy = nodes[i].y - nodes[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < maxDist) {
            const alpha = (1 - dist / maxDist) * 0.35;
            ctx.strokeStyle = lineColor(alpha);
            ctx.lineWidth = 0.8;
            ctx.beginPath();
            ctx.moveTo(nodes[i].x, nodes[i].y);
            ctx.lineTo(nodes[j].x, nodes[j].y);
            ctx.stroke();
          }
        }
      }

      for (const n of nodes) {
        ctx.fillStyle = dotColor;
        ctx.beginPath();
        ctx.arc(n.x, n.y, 1.8, 0, Math.PI * 2);
        ctx.fill();

        if (shouldAnimate) {
          n.x += n.vx;
          n.y += n.vy;
          if (n.x < 0 || n.x > w) n.vx *= -1;
          if (n.y < 0 || n.y > h2) n.vy *= -1;
        }
      }

      if (shouldAnimate) {
        animRef.current = requestAnimationFrame(draw);
      }
    };

    const initId = requestAnimationFrame(() => {
      requestAnimationFrame(() => {
        resize();
        initNodes();
        draw();
      });
    });

    const onResize = () => { resize(); initNodes(); };
    window.addEventListener("resize", onResize);
    return () => {
      cancelAnimationFrame(initId);
      cancelAnimationFrame(animRef.current);
      window.removeEventListener("resize", onResize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full pointer-events-none z-0"
      aria-hidden="true"
    />
  );
}
