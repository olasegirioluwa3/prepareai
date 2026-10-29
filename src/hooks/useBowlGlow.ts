import { useEffect, useRef } from 'react';

const BOWL_CORE = '#fbbf24';  // ZED amber-400
const BOWL_RIM = '#f97316';   // ZED orange-500
const OUTSIDE = '#ffffff';

export function useBowlGlow() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const width = 96;
    const height = 60;
    canvas.width = width;
    canvas.height = height;

    const imgData = ctx.createImageData(width, height);
    const data = imgData.data;

    const rgbCore = [251, 191, 36];  // #fbbf24 ZED amber-400
    const rgbRim = [249, 115, 22];   // #f97316 ZED orange-500
    const rgbOutside = [255, 255, 255];

    function lerp(a: number, b: number, t: number) { return a + (b - a) * t; }
    function smoothstep(t: number) { return t * t * (3 - 2 * t); }
    function mix(c1: number[], c2: number[], t: number) {
      return [
        Math.round(lerp(c1[0], c2[0], t)),
        Math.round(lerp(c1[1], c2[1], t)),
        Math.round(lerp(c1[2], c2[2], t))
      ];
    }

    let tip = 0.30, half = 0.34, soft = 0.22;
    let curTip = tip, curHalf = half, curSoft = soft;
    let introTime = 0;
    let introDone = false;

    const scrollKeys = [
      {q:0,tip:.30,half:.34,soft:.22},
      {q:.03,tip:.45,half:.38,soft:.26},
      {q:.08,tip:.65,half:.38,soft:.22},
      {q:.18,tip:.80,half:.38,soft:.22},
      {q:.40,tip:.95,half:.38,soft:.19},
      {q:.66,tip:1.05,half:.46,soft:.16},
      {q:.87,tip:1.05,half:.66,soft:.13},
      {q:1.15,tip:1.10,half:.90,soft:.10},
      {q:1.43,tip:1.30,half:1.60,soft:.10},
      {q:1.8,tip:2.40,half:3.00,soft:.10}
    ];

    function getScrollTarget(q: number) {
      let i = 0;
      for(;i<scrollKeys.length-1&&scrollKeys[i+1].q<=q;i++);
      const k0 = scrollKeys[i], k1 = scrollKeys[Math.min(i+1,scrollKeys.length-1)];
      const t = k0.q===k1.q?0:(q-k0.q)/(k1.q-k0.q);
      return {
        tip: lerp(k0.tip,k1.tip,t),
        half: lerp(k0.half,k1.half,t),
        soft: lerp(k0.soft,k1.soft,t)
      };
    }

    function drawBowl(t: number, h: number, s: number) {
      const aspect = window.innerWidth / window.innerHeight;
      const points = [];
      for (let i = 0; i < 48; i++) {
        const yy = -0.3 + (t + 0.3) * (i / 47);
        const CX = h * aspect * Math.pow(1 - yy / t, 0.72);
        points.push({ x: CX, y: yy });
      }

      for (let y = 0; y < height; y++) {
        for (let x = 0; x < width; x++) {
          const px = Math.abs(x / width - 0.5) * aspect;
          const py = y / height;

          let minDist = Infinity;
          for (let i = 0; i < points.length - 1; i++) {
            const p0 = points[i], p1 = points[i + 1];
            const dx = p1.x - p0.x, dy = p1.y - p0.y;
            const len = Math.sqrt(dx * dx + dy * dy);
            const t0 = Math.max(0, Math.min(1, ((px - p0.x) * dx + (py - p0.y) * dy) / (len * len)));
            const projX = p0.x + t0 * dx;
            const projY = p0.y + t0 * dy;
            const dist = Math.sqrt((px - projX) ** 2 + (py - projY) ** 2);
            if (dist < minDist) minDist = dist;
          }

          const inside = py < t && px < h * aspect * Math.pow(1 - py / t, 0.72);
          const sd = inside ? -minDist : minDist;
          const RND = 0.25;
          const g = 1 - smoothstep((sd + RND + s) / (2 * s));

          let rgb;
          if (g < 0.38) {
            const tt = smoothstep(g / 0.38);
            rgb = mix(rgbOutside, rgbRim, tt);
          } else {
            const tt = smoothstep((g - 0.38) / 0.62);
            rgb = mix(rgbRim, rgbCore, tt);
          }

          const idx = (y * width + x) * 4;
          data[idx] = rgb[0];
          data[idx + 1] = rgb[1];
          data[idx + 2] = rgb[2];
          data[idx + 3] = 255;
        }
      }
      ctx.putImageData(imgData, 0, 0);
    }

    let animationFrame: number;
    const startTime = performance.now();

    function loop(time: number) {
      if (!introDone) {
        introTime = (time - startTime) / 1000;
        if (introTime < 0.25) {
          tip = -0.3; half = 0.3; soft = 0.1;
        } else if (introTime < 1.3) {
          const t = smoothstep((introTime - 0.25) / 1.05);
          const tgt = getScrollTarget(0);
          tip = lerp(-0.3, tgt.tip, t);
          half = lerp(0.3, tgt.half, t);
          soft = lerp(0.1, tgt.soft, t);
        } else {
          introDone = true;
          curTip = tip; curHalf = half; curSoft = soft;
        }
        curTip = tip; curHalf = half; curSoft = soft;
      } else {
        const drift = Math.sin(time * 0.00033 + 1.3) * 0.02;
        const wobble = Math.sin(time * 0.0005) * 0.015;
        drawBowl(curTip + drift, curHalf + wobble, curSoft);
      }

      if (!introDone) drawBowl(tip, half, soft);
      animationFrame = requestAnimationFrame(loop);
    }

    const handleScroll = () => {
      if (!introDone) return;
      const q = window.scrollY / window.innerHeight;
      const tgt = getScrollTarget(q);
      curTip += (tgt.tip - curTip) * 0.12;
      curHalf += (tgt.half - curHalf) * 0.12;
      curSoft += (tgt.soft - curSoft) * 0.12;
    };

    const handleResize = () => {
      if (!introDone) return;
      handleScroll();
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    window.addEventListener('resize', handleResize);
    animationFrame = requestAnimationFrame(loop);

    return () => {
      cancelAnimationFrame(animationFrame);
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return canvasRef;
}
