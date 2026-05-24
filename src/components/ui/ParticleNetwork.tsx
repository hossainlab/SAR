
import React, { useRef, useEffect, useCallback } from 'react';

interface Particle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  radius: number;
  opacity: number;
  type: 'node' | 'data' | 'accent';
  pulsePhase: number;
  pulseSpeed: number;
}

const ParticleNetwork: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const animationRef = useRef<number>(0);
  const particlesRef = useRef<Particle[]>([]);
  const mouseRef = useRef({ x: -1000, y: -1000 });
  const sizeRef = useRef({ w: 0, h: 0 });

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const createParticles = (w: number, h: number): Particle[] => {
      const count = Math.min(Math.floor((w * h) / 14000), 70);
      const particles: Particle[] = [];
      for (let i = 0; i < count; i++) {
        const type: Particle['type'] = i < count * 0.3 ? 'node' : i < count * 0.8 ? 'data' : 'accent';
        particles.push({
          x: Math.random() * w,
          y: Math.random() * h,
          vx: (Math.random() - 0.5) * 0.35,
          vy: (Math.random() - 0.5) * 0.25,
          radius: type === 'node' ? 2.5 + Math.random() * 1.5 : type === 'data' ? 1.2 + Math.random() * 1 : 1 + Math.random() * 0.8,
          opacity: type === 'node' ? 0.5 + Math.random() * 0.3 : 0.2 + Math.random() * 0.3,
          type,
          pulsePhase: Math.random() * Math.PI * 2,
          pulseSpeed: 0.008 + Math.random() * 0.012,
        });
      }
      return particles;
    };

    const handleResize = () => {
      const parent = canvas.parentElement;
      if (!parent) return;
      const w = parent.clientWidth;
      const h = parent.clientHeight;
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      canvas.width = w * dpr;
      canvas.height = h * dpr;
      canvas.style.width = w + 'px';
      canvas.style.height = h + 'px';
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      sizeRef.current = { w, h };
      particlesRef.current = createParticles(w, h);
    };

    const getColor = (type: Particle['type'], alpha: number) => {
      if (type === 'node') return `rgba(99, 102, 241, ${alpha})`;
      if (type === 'accent') return `rgba(139, 92, 246, ${alpha})`;
      return `rgba(148, 163, 184, ${alpha})`;
    };

    const animate = () => {
      const { w, h } = sizeRef.current;
      if (w === 0 || h === 0) {
        animationRef.current = requestAnimationFrame(animate);
        return;
      }
      ctx.clearRect(0, 0, w, h);

      const particles = particlesRef.current;
      const mx = mouseRef.current.x;
      const my = mouseRef.current.y;

      // Update
      for (const p of particles) {
        p.x += p.vx;
        p.y += p.vy;
        p.pulsePhase += p.pulseSpeed;

        if (p.x < 0) { p.x = 0; p.vx = Math.abs(p.vx); }
        if (p.x > w) { p.x = w; p.vx = -Math.abs(p.vx); }
        if (p.y < 0) { p.y = 0; p.vy = Math.abs(p.vy); }
        if (p.y > h) { p.y = h; p.vy = -Math.abs(p.vy); }

        // Mouse repulsion
        const dx = p.x - mx;
        const dy = p.y - my;
        const dist = Math.sqrt(dx * dx + dy * dy);
        if (dist < 100 && dist > 0) {
          const force = (100 - dist) / 100 * 0.12;
          p.vx += (dx / dist) * force;
          p.vy += (dy / dist) * force;
        }

        p.vx *= 0.997;
        p.vy *= 0.997;
      }

      // Draw connections
      const maxDist = 130;
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const a = particles[i];
          const b = particles[j];
          const dx = a.x - b.x;
          const dy = a.y - b.y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < maxDist) {
            const alpha = (1 - dist / maxDist) * 0.12;
            const hasNode = a.type === 'node' || b.type === 'node';
            ctx.strokeStyle = hasNode
              ? `rgba(99, 102, 241, ${alpha})`
              : `rgba(148, 163, 184, ${alpha * 0.6})`;
            ctx.lineWidth = hasNode ? 0.8 : 0.4;
            ctx.beginPath();
            ctx.moveTo(a.x, a.y);
            ctx.lineTo(b.x, b.y);
            ctx.stroke();
          }
        }
      }

      // Draw particles
      for (const p of particles) {
        const pulse = 1 + Math.sin(p.pulsePhase) * 0.15;
        const r = p.radius * pulse;
        const alpha = p.opacity * (0.85 + Math.sin(p.pulsePhase * 0.7) * 0.15);

        // Glow for nodes
        if (p.type === 'node') {
          const glow = ctx.createRadialGradient(p.x, p.y, 0, p.x, p.y, r * 4);
          glow.addColorStop(0, `rgba(99, 102, 241, ${alpha * 0.12})`);
          glow.addColorStop(1, 'rgba(99, 102, 241, 0)');
          ctx.fillStyle = glow;
          ctx.beginPath();
          ctx.arc(p.x, p.y, r * 4, 0, Math.PI * 2);
          ctx.fill();
        }

        // Core
        ctx.fillStyle = getColor(p.type, alpha);
        ctx.beginPath();
        ctx.arc(p.x, p.y, r, 0, Math.PI * 2);
        ctx.fill();

        // Bright center for nodes
        if (p.type === 'node') {
          ctx.fillStyle = `rgba(255, 255, 255, ${alpha * 0.5})`;
          ctx.beginPath();
          ctx.arc(p.x, p.y, r * 0.3, 0, Math.PI * 2);
          ctx.fill();
        }
      }

      animationRef.current = requestAnimationFrame(animate);
    };

    // Mouse tracking on the parent (not canvas) so pointer-events:none works
    const parent = canvas.parentElement!;
    const handleMouseMove = (e: MouseEvent) => {
      const rect = parent.getBoundingClientRect();
      mouseRef.current = { x: e.clientX - rect.left, y: e.clientY - rect.top };
    };
    const handleMouseLeave = () => {
      mouseRef.current = { x: -1000, y: -1000 };
    };

    handleResize();
    animationRef.current = requestAnimationFrame(animate);

    window.addEventListener('resize', handleResize);
    parent.addEventListener('mousemove', handleMouseMove);
    parent.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      cancelAnimationFrame(animationRef.current);
      window.removeEventListener('resize', handleResize);
      parent.removeEventListener('mousemove', handleMouseMove);
      parent.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      style={{ position: 'absolute', top: 0, left: 0, pointerEvents: 'none', opacity: 0.75 }}
    />
  );
};

export default ParticleNetwork;
