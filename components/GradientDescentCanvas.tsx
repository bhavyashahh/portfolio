"use client";

import { useEffect, useRef } from "react";

/**
 * 2D Contour Map Background — dynamic, animated optimization landscape.
 * Flowing particles, animated contours, live gradient descent, pulsing minima.
 */
export default function GradientDescentCanvas() {
  const ref = useRef<HTMLCanvasElement>(null);
  const dark = useRef(true);
  const reduced = useRef(false);
  const scrollY = useRef(0);

  useEffect(() => {
    reduced.current = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    const mqH = (e: MediaQueryListEvent) => {
      reduced.current = e.matches;
    };
    mq.addEventListener("change", mqH);
    const chk = () => {
      dark.current = document.documentElement.classList.contains("dark");
    };
    chk();
    const obs = new MutationObserver(chk);
    obs.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ["class"],
    });
    return () => {
      mq.removeEventListener("change", mqH);
      obs.disconnect();
    };
  }, []);

  useEffect(() => {
    const canvas = ref.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d", { alpha: true });
    if (!ctx) return;
    let raf: number;
    let w = 0,
      h = 0;

    const resize = () => {
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      w = window.innerWidth;
      h = window.innerHeight;
      canvas.width = w * dpr;
      canvas.height = h * dpr;
      canvas.style.width = w + "px";
      canvas.style.height = h + "px";
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      needsStaticRedraw = true;
    };

    // ── Scroll tracking — fade out after first viewport ──
    const onScroll = () => {
      scrollY.current = window.scrollY;
    };

    // ── Loss surface f(x, y) ──
    const minima = [
      { cx: 0.68, cy: 0.58, depth: 1.0, sx: 0.11, sy: 0.13 },
      { cx: 0.28, cy: 0.32, depth: 0.52, sx: 0.09, sy: 0.10 },
      { cx: 0.52, cy: 0.82, depth: 0.38, sx: 0.08, sy: 0.085 },
    ];

    const f = (x: number, y: number): number => {
      let val =
        0.45 * ((x - 0.5) * (x - 0.5) + (y - 0.5) * (y - 0.5)) +
        0.08 * (x - 0.5) * (y - 0.5) +
        0.35;
      val += 0.06 * Math.sin(x * 7.5) * Math.cos(y * 6.2);
      val += 0.03 * Math.cos(x * 4.1 + y * 3.3);
      for (const m of minima) {
        const dx = (x - m.cx) / m.sx;
        const dy = (y - m.cy) / m.sy;
        val -= m.depth * Math.exp(-0.5 * (dx * dx + dy * dy));
      }
      return val;
    };

    const eps = 0.002;
    const gradF = (x: number, y: number): [number, number] => {
      return [
        (f(x + eps, y) - f(x - eps, y)) / (2 * eps),
        (f(x, y + eps) - f(x, y - eps)) / (2 * eps),
      ];
    };

    // ── Field for contours ──
    const gridRes = 200;
    const field = new Float64Array((gridRes + 1) * (gridRes + 1));
    let fMin = Infinity,
      fMax = -Infinity;

    for (let iy = 0; iy <= gridRes; iy++) {
      for (let ix = 0; ix <= gridRes; ix++) {
        const val = f(ix / gridRes, iy / gridRes);
        field[iy * (gridRes + 1) + ix] = val;
        if (val < fMin) fMin = val;
        if (val > fMax) fMax = val;
      }
    }

    // ── Marching squares ──
    const traceContour = (
      level: number,
      cw: number,
      ch: number
    ): [number, number, number, number][] => {
      const segs: [number, number, number, number][] = [];
      const cellW = cw / gridRes;
      const cellH = ch / gridRes;
      const stride = gridRes + 1;

      for (let iy = 0; iy < gridRes; iy++) {
        for (let ix = 0; ix < gridRes; ix++) {
          const v00 = field[iy * stride + ix];
          const v10 = field[iy * stride + ix + 1];
          const v01 = field[(iy + 1) * stride + ix];
          const v11 = field[(iy + 1) * stride + ix + 1];

          const b =
            (v00 >= level ? 1 : 0) |
            ((v10 >= level ? 1 : 0) << 1) |
            ((v11 >= level ? 1 : 0) << 2) |
            ((v01 >= level ? 1 : 0) << 3);

          if (b === 0 || b === 15) continue;

          const lerp = (va: number, vb: number) => {
            const d = vb - va;
            return Math.abs(d) < 1e-12 ? 0.5 : (level - va) / d;
          };

          const x0 = ix * cellW;
          const y0 = iy * cellH;
          const tx = x0 + lerp(v00, v10) * cellW;
          const ty = y0;
          const rx = x0 + cellW;
          const ry = y0 + lerp(v10, v11) * cellH;
          const bx = x0 + lerp(v01, v11) * cellW;
          const by = y0 + cellH;
          const lx = x0;
          const ly = y0 + lerp(v00, v01) * cellH;

          const add = (ax: number, ay: number, bx2: number, by2: number) =>
            segs.push([ax, ay, bx2, by2]);

          switch (b) {
            case 1:  add(tx, ty, lx, ly); break;
            case 2:  add(tx, ty, rx, ry); break;
            case 3:  add(lx, ly, rx, ry); break;
            case 4:  add(rx, ry, bx, by); break;
            case 5:  add(tx, ty, rx, ry); add(lx, ly, bx, by); break;
            case 6:  add(tx, ty, bx, by); break;
            case 7:  add(lx, ly, bx, by); break;
            case 8:  add(lx, ly, bx, by); break;
            case 9:  add(tx, ty, bx, by); break;
            case 10: add(tx, ty, lx, ly); add(rx, ry, bx, by); break;
            case 11: add(rx, ry, bx, by); break;
            case 12: add(lx, ly, rx, ry); break;
            case 13: add(tx, ty, rx, ry); break;
            case 14: add(tx, ty, lx, ly); break;
          }
        }
      }
      return segs;
    };

    // ── Chain segments into polylines ──
    const chainSegments = (
      segs: [number, number, number, number][],
      tolerance: number
    ): [number, number][][] => {
      if (segs.length === 0) return [];
      const used = new Uint8Array(segs.length);
      const chains: [number, number][][] = [];
      const tol2 = tolerance * tolerance;
      const d2 = (ax: number, ay: number, bx: number, by: number) =>
        (ax - bx) * (ax - bx) + (ay - by) * (ay - by);

      for (let start = 0; start < segs.length; start++) {
        if (used[start]) continue;
        used[start] = 1;
        const chain: [number, number][] = [
          [segs[start][0], segs[start][1]],
          [segs[start][2], segs[start][3]],
        ];

        let changed = true;
        while (changed) {
          changed = false;
          const [ex, ey] = chain[chain.length - 1];
          for (let i = 0; i < segs.length; i++) {
            if (used[i]) continue;
            if (d2(ex, ey, segs[i][0], segs[i][1]) < tol2) {
              chain.push([segs[i][2], segs[i][3]]);
              used[i] = 1;
              changed = true;
              break;
            }
            if (d2(ex, ey, segs[i][2], segs[i][3]) < tol2) {
              chain.push([segs[i][0], segs[i][1]]);
              used[i] = 1;
              changed = true;
              break;
            }
          }
        }

        changed = true;
        while (changed) {
          changed = false;
          const [sx, sy] = chain[0];
          for (let i = 0; i < segs.length; i++) {
            if (used[i]) continue;
            if (d2(sx, sy, segs[i][2], segs[i][3]) < tol2) {
              chain.unshift([segs[i][0], segs[i][1]]);
              used[i] = 1;
              changed = true;
              break;
            }
            if (d2(sx, sy, segs[i][0], segs[i][1]) < tol2) {
              chain.unshift([segs[i][2], segs[i][3]]);
              used[i] = 1;
              changed = true;
              break;
            }
          }
        }

        if (chain.length >= 3) chains.push(chain);
      }
      return chains;
    };

    // Smooth curve drawing (Catmull-Rom splines)
    const drawSmooth = (
      c: CanvasRenderingContext2D | OffscreenCanvasRenderingContext2D,
      chain: [number, number][],
      closed: boolean
    ) => {
      if (chain.length < 2) return;
      c.beginPath();
      if (chain.length === 2) {
        c.moveTo(chain[0][0], chain[0][1]);
        c.lineTo(chain[1][0], chain[1][1]);
        return;
      }
      c.moveTo(chain[0][0], chain[0][1]);
      for (let i = 0; i < chain.length - 1; i++) {
        const p0 = chain[Math.max(i - 1, 0)];
        const p1 = chain[i];
        const p2 = chain[Math.min(i + 1, chain.length - 1)];
        const p3 = chain[Math.min(i + 2, chain.length - 1)];
        const t = 0.3;
        c.bezierCurveTo(
          p1[0] + (p2[0] - p0[0]) * t,
          p1[1] + (p2[1] - p0[1]) * t,
          p2[0] - (p3[0] - p1[0]) * t,
          p2[1] - (p3[1] - p1[1]) * t,
          p2[0],
          p2[1]
        );
      }
      if (closed) c.closePath();
    };

    // ── Contour levels ──
    const numLevels = 16;
    const levels: number[] = [];
    for (let i = 1; i <= numLevels; i++) {
      const t = i / (numLevels + 1);
      levels.push(fMin + (t * t * 0.7 + t * 0.3) * (fMax - fMin));
    }

    // ── Cached contour chains ──
    let cachedW = 0,
      cachedH = 0;
    type ContourData = {
      chains: [number, number][][];
      idx: number;
    };
    let cachedContours: ContourData[] = [];

    const rebuildContours = () => {
      cachedContours = [];
      for (let li = 0; li < levels.length; li++) {
        const segs = traceContour(levels[li], w, h);
        const tolerance = (Math.max(w, h) / gridRes) * 1.5;
        const chains = chainSegments(segs, tolerance);
        cachedContours.push({ chains, idx: li });
      }
      cachedW = w;
      cachedH = h;
    };

    // ── Flowing particles ──
    interface Particle {
      x: number; // normalized [0,1]
      y: number;
      life: number; // 0..1
      maxLife: number;
      speed: number;
    }

    const MAX_PARTICLES = 120;
    const particles: Particle[] = [];

    const spawnParticle = () => {
      // Spawn biased toward edges and saddle regions (away from minima)
      let x: number, y: number;
      let attempts = 0;
      do {
        x = Math.random();
        y = Math.random();
        attempts++;
      } while (attempts < 5 && f(x, y) < fMin + (fMax - fMin) * 0.3);

      particles.push({
        x,
        y,
        life: 0,
        maxLife: 0.8 + Math.random() * 0.4,
        speed: 0.3 + Math.random() * 0.4,
      });
    };

    // Initialize particles
    for (let i = 0; i < MAX_PARTICLES; i++) {
      const p: Particle = {
        x: Math.random(),
        y: Math.random(),
        life: Math.random(), // staggered
        maxLife: 0.8 + Math.random() * 0.4,
        speed: 0.3 + Math.random() * 0.4,
      };
      particles.push(p);
    }

    // ── Descent trajectories — multiple balls doing gradient descent ──
    interface DescentBall {
      x: number;
      y: number;
      vx: number;
      vy: number;
      trail: [number, number][];
      age: number;
      startX: number;
      startY: number;
    }

    const startPositions: [number, number][] = [
      [0.12, 0.15],
      [0.85, 0.12],
      [0.9, 0.85],
      [0.15, 0.88],
    ];

    let currentBallIdx = 0;
    const makeBall = (idx: number): DescentBall => ({
      x: startPositions[idx][0],
      y: startPositions[idx][1],
      vx: 0,
      vy: 0,
      trail: [],
      age: 0,
      startX: startPositions[idx][0],
      startY: startPositions[idx][1],
    });

    let ball = makeBall(0);
    const BALL_CYCLE_TIME = 30000; // ms per descent (slow)
    const BALL_FADE_TIME = 4000; // ms fade in/out
    let ballTimer = 0;

    // ── Static layer ──
    let staticCanvas: OffscreenCanvas | null = null;
    let staticCtx: OffscreenCanvasRenderingContext2D | null = null;
    let staticDark = dark.current;
    let needsStaticRedraw = true;

    const renderStatic = () => {
      if (w === 0 || h === 0) return;
      const dpr = Math.min(window.devicePixelRatio || 1, 2);

      try {
        staticCanvas = new OffscreenCanvas(w * dpr, h * dpr);
        staticCtx = staticCanvas.getContext("2d");
      } catch {
        staticCanvas = null;
        staticCtx = null;
        return;
      }
      if (!staticCtx) return;

      staticCtx.setTransform(dpr, 0, 0, dpr, 0, 0);
      staticDark = dark.current;
      const dk = staticDark;
      const slate = dk ? "148,163,184" : "100,116,139";

      // ── Grid ──
      const gridSpacing = 80;
      staticCtx.strokeStyle = `rgba(${slate}, ${dk ? 0.025 : 0.018})`;
      staticCtx.lineWidth = 0.5;
      for (let x = gridSpacing; x < w; x += gridSpacing) {
        staticCtx.beginPath();
        staticCtx.moveTo(x, 0);
        staticCtx.lineTo(x, h);
        staticCtx.stroke();
      }
      for (let y = gridSpacing; y < h; y += gridSpacing) {
        staticCtx.beginPath();
        staticCtx.moveTo(0, y);
        staticCtx.lineTo(w, y);
        staticCtx.stroke();
      }

      // ── Heatmap glow ──
      const blue = dk ? "96,165,250" : "37,99,235";
      const cyan_ = dk ? "56,189,248" : "14,116,144";

      for (let i = 0; i < minima.length; i++) {
        const m = minima[i];
        const mx = m.cx * w;
        const my = m.cy * h;
        const radius = Math.max(m.sx, m.sy) * Math.max(w, h) * 3;
        const isGlobal = i === 0;
        const c = isGlobal ? cyan_ : blue;
        const baseA = dk ? 0.06 : 0.045;
        const a = isGlobal ? baseA * 1.5 : baseA;

        const g = staticCtx.createRadialGradient(mx, my, 0, mx, my, radius);
        g.addColorStop(0, `rgba(${c}, ${a})`);
        g.addColorStop(0.35, `rgba(${c}, ${a * 0.5})`);
        g.addColorStop(0.7, `rgba(${c}, ${a * 0.15})`);
        g.addColorStop(1, "rgba(0,0,0,0)");
        staticCtx.fillStyle = g;
        staticCtx.fillRect(
          mx - radius,
          my - radius,
          radius * 2,
          radius * 2
        );
      }

      // ── Axis labels ──
      staticCtx.font = "500 9px 'SF Mono', 'Fira Code', monospace";
      staticCtx.fillStyle = `rgba(${slate}, ${dk ? 0.05 : 0.03})`;
      staticCtx.textAlign = "left";
      staticCtx.fillText("θ₁", 12, h - 12);
      staticCtx.textAlign = "right";
      staticCtx.fillText("θ₂", w - 12, 20);
    };

    let lastTime = 0;

    const draw = (time: number) => {
      const dt = Math.min(time - lastTime, 50); // cap delta
      lastTime = time;
      const dk = dark.current;

      if (w === 0 || h === 0) {
        raf = requestAnimationFrame(draw);
        return;
      }

      // ── Scroll-based visibility: fade out over first viewport height ──
      const scrollFade = Math.max(0, 1 - scrollY.current / (h * 0.6));

      // Skip drawing entirely when scrolled away
      if (scrollFade <= 0) {
        ctx.clearRect(0, 0, w, h);
        raf = requestAnimationFrame(draw);
        return;
      }

      ctx.globalAlpha = scrollFade;

      if (needsStaticRedraw || dk !== staticDark) {
        if (cachedW !== w || cachedH !== h) rebuildContours();
        renderStatic();
        needsStaticRedraw = false;
      }

      ctx.clearRect(0, 0, w, h);

      // ── Blit static ──
      if (staticCanvas) {
        ctx.drawImage(staticCanvas, 0, 0, w, h);
      }

      const blue_ = dk ? "96,165,250" : "37,99,235";
      const cyan_ = dk ? "56,189,248" : "14,116,144";
      const bright_ = dk ? "147,197,253" : "59,130,246";

      // ── Animated contour lines with flowing dashes ──
      if (cachedW !== w || cachedH !== h) rebuildContours();

      const dashOffset = (time * 0.005) % 100;

      for (const { chains, idx } of cachedContours) {
        const depthT = 1 - idx / levels.length;
        const alpha = (dk ? 0.16 : 0.12) * (0.35 + depthT * 0.65);
        const lw = depthT > 0.7 ? 1.2 : depthT > 0.4 ? 0.8 : 0.5;
        const color = idx < levels.length * 0.4 ? cyan_ : blue_;

        ctx.strokeStyle = `rgba(${color}, ${alpha})`;
        ctx.lineWidth = lw;
        ctx.lineCap = "round";
        ctx.lineJoin = "round";

        // Animate inner contours with dashes, outer ones solid
        if (depthT > 0.3) {
          const dashLen = 4 + depthT * 8;
          const gapLen = 3 + (1 - depthT) * 6;
          ctx.setLineDash([dashLen, gapLen]);
          ctx.lineDashOffset = -dashOffset * (0.5 + depthT * 0.5);
        } else {
          ctx.setLineDash([]);
        }

        for (const chain of chains) {
          const dx = chain[0][0] - chain[chain.length - 1][0];
          const dy = chain[0][1] - chain[chain.length - 1][1];
          const closed = dx * dx + dy * dy < 25;
          drawSmooth(ctx, chain, closed);
          ctx.stroke();
        }
      }
      ctx.setLineDash([]);

      if (reduced.current) {
        raf = requestAnimationFrame(draw);
        return;
      }

      // ── Pulsing rings at minima ──
      for (let i = 0; i < minima.length; i++) {
        const m = minima[i];
        const mx = m.cx * w;
        const my = m.cy * h;
        const isGlobal = i === 0;
        const c = isGlobal ? cyan_ : blue_;
        const period = isGlobal ? 12000 : 15000 + i * 2400;
        const phase = (time % period) / period;

        // Two staggered rings
        for (let r = 0; r < 2; r++) {
          const p = (phase + r * 0.5) % 1;
          const radius = p * (isGlobal ? 60 : 40);
          const ringAlpha =
            (dk ? 0.12 : 0.09) * Math.sin(p * Math.PI) * (1 - p * 0.3);

          if (ringAlpha > 0.005) {
            ctx.beginPath();
            ctx.arc(mx, my, radius, 0, Math.PI * 2);
            ctx.strokeStyle = `rgba(${c}, ${ringAlpha})`;
            ctx.lineWidth = 1 + (1 - p) * 0.5;
            ctx.stroke();
          }
        }

        // Center dot (steady)
        ctx.beginPath();
        ctx.arc(mx, my, isGlobal ? 2.5 : 1.8, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(${c}, ${dk ? 0.3 : 0.2})`;
        ctx.fill();

        // θ* label for global
        if (isGlobal) {
          ctx.font = "500 8px 'SF Mono', 'Fira Code', monospace";
          ctx.fillStyle = `rgba(${c}, ${dk ? 0.15 : 0.07})`;
          ctx.textAlign = "left";
          ctx.fillText("θ*", mx + 10, my - 6);
        }
      }

      // ── Flowing particles along gradient field ──
      const particleAlpha = dk ? 0.25 : 0.18;
      const step = dt * 0.00001;

      // Spawn replacements
      while (particles.length < MAX_PARTICLES) {
        spawnParticle();
      }

      for (let i = particles.length - 1; i >= 0; i--) {
        const p = particles[i];
        p.life += dt * 0.00015 * p.speed;

        if (p.life > p.maxLife || p.x < -0.05 || p.x > 1.05 || p.y < -0.05 || p.y > 1.05) {
          particles.splice(i, 1);
          continue;
        }

        // Move along negative gradient
        const [gx, gy] = gradF(p.x, p.y);
        const mag = Math.sqrt(gx * gx + gy * gy);
        if (mag > 0.001) {
          p.x -= (gx / mag) * step * p.speed * 60;
          p.y -= (gy / mag) * step * p.speed * 60;
        }

        // Fade in/out
        const lifeT = p.life / p.maxLife;
        const fade =
          lifeT < 0.15
            ? lifeT / 0.15
            : lifeT > 0.75
              ? (1 - lifeT) / 0.25
              : 1;
        const alpha = particleAlpha * fade * Math.min(mag * 4, 1);

        if (alpha < 0.005) continue;

        const px = p.x * w;
        const py = p.y * h;
        const r = 1.2 + mag * 2;

        // Glow
        const glow = ctx.createRadialGradient(px, py, 0, px, py, r * 3);
        glow.addColorStop(0, `rgba(${cyan_}, ${alpha * 0.4})`);
        glow.addColorStop(1, "rgba(0,0,0,0)");
        ctx.fillStyle = glow;
        ctx.fillRect(px - r * 3, py - r * 3, r * 6, r * 6);

        // Dot
        ctx.beginPath();
        ctx.arc(px, py, r, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(${bright_}, ${alpha})`;
        ctx.fill();
      }

      // ── Descent ball with trail ──
      ballTimer += dt;
      const cyclePhase = ballTimer / BALL_CYCLE_TIME;

      // Reset ball at end of cycle
      if (cyclePhase >= 1) {
        ballTimer = 0;
        currentBallIdx = (currentBallIdx + 1) % startPositions.length;
        ball = makeBall(currentBallIdx);
      }

      // Fade envelope
      const fadeIn = Math.min(ballTimer / BALL_FADE_TIME, 1);
      const fadeOut = Math.min(
        (BALL_CYCLE_TIME - ballTimer) / BALL_FADE_TIME,
        1
      );
      const ballFade = fadeIn * fadeOut;

      // Gradient descent with momentum
      if (ballFade > 0.01) {
        const lr = 0.003;
        const momentum = 0.95;
        const [gx, gy] = gradF(ball.x, ball.y);
        ball.vx = ball.vx * momentum - gx * lr;
        ball.vy = ball.vy * momentum - gy * lr;
        ball.x += ball.vx * (dt / 16);
        ball.y += ball.vy * (dt / 16);

        // Clamp
        ball.x = Math.max(0.02, Math.min(0.98, ball.x));
        ball.y = Math.max(0.02, Math.min(0.98, ball.y));

        // Record trail
        ball.trail.push([ball.x * w, ball.y * h]);
        if (ball.trail.length > 200) ball.trail.shift();

        const bx = ball.x * w;
        const by = ball.y * h;

        // Trail line
        if (ball.trail.length > 2) {
          ctx.lineCap = "round";
          ctx.lineJoin = "round";
          for (let i = 1; i < ball.trail.length; i++) {
            const t = i / ball.trail.length;
            const a = t * t * (dk ? 0.2 : 0.1) * ballFade;
            ctx.beginPath();
            ctx.moveTo(ball.trail[i - 1][0], ball.trail[i - 1][1]);
            ctx.lineTo(ball.trail[i][0], ball.trail[i][1]);
            ctx.strokeStyle = `rgba(${cyan_}, ${a})`;
            ctx.lineWidth = 0.5 + t * 1.5;
            ctx.stroke();
          }
        }

        // Ball glow
        const bloom = ctx.createRadialGradient(bx, by, 0, bx, by, 25);
        bloom.addColorStop(
          0,
          `rgba(${cyan_}, ${(dk ? 0.15 : 0.08) * ballFade})`
        );
        bloom.addColorStop(
          0.5,
          `rgba(${blue_}, ${(dk ? 0.05 : 0.02) * ballFade})`
        );
        bloom.addColorStop(1, "rgba(0,0,0,0)");
        ctx.fillStyle = bloom;
        ctx.fillRect(bx - 25, by - 25, 50, 50);

        // Ball
        ctx.beginPath();
        ctx.arc(bx, by, 4, 0, Math.PI * 2);
        const ballG = ctx.createRadialGradient(bx - 1, by - 1, 0, bx, by, 4);
        ballG.addColorStop(
          0,
          `rgba(${bright_}, ${(dk ? 0.95 : 0.75) * ballFade})`
        );
        ballG.addColorStop(
          1,
          `rgba(${cyan_}, ${(dk ? 0.7 : 0.5) * ballFade})`
        );
        ctx.fillStyle = ballG;
        ctx.fill();

        // Specular highlight
        ctx.beginPath();
        ctx.arc(bx - 1, by - 1.5, 1, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(255,255,255,${0.3 * ballFade})`;
        ctx.fill();

        // Loss label
        const loss = f(ball.x, ball.y);
        ctx.font = "500 8px 'SF Mono', 'Fira Code', monospace";
        ctx.fillStyle = `rgba(${bright_}, ${(dk ? 0.2 : 0.1) * ballFade})`;
        ctx.textAlign = "left";
        ctx.fillText(`L=${loss.toFixed(3)}`, bx + 10, by - 8);
      }

      ctx.globalAlpha = 1;
      raf = requestAnimationFrame(draw);
    };

    resize();
    window.addEventListener("resize", resize);
    window.addEventListener("scroll", onScroll, { passive: true });
    raf = requestAnimationFrame(draw);

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("resize", resize);
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  return (
    <canvas
      ref={ref}
      className="fixed inset-0 z-0 pointer-events-none"
      aria-hidden="true"
    />
  );
}
