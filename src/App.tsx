type RGB = [number, number, number];
interface Glyph { el: HTMLSpanElement; hl: boolean }
interface Bowl { tip: number; half: number; soft: number }

const $ = <T extends HTMLElement>(id: string): T => {
  const el = document.getElementById(id);
  if (!el) throw new Error(`#${id} not found`);
  return el as T;
};
const clamp = (v: number, a = 0, b = 1): number => Math.max(a, Math.min(b, v));
const smooth = (x: number): number => { x = clamp(x); return x * x * (3 - 2 * x); };
const mix = (a: RGB, b: RGB, t: number): RGB => [a[0] + (b[0] - a[0]) * t, a[1] + (b[1] - a[1]) * t, a[2] + (b[2] - a[2]) * t];
const hex = (h: string): RGB => [parseInt(h.slice(1, 3), 16), parseInt(h.slice(3, 5), 16), parseInt(h.slice(5, 7), 16)];

/* ---------- Brand colours ---------- */
const BRAND = '#ff6a1a';
const NAVY = '#0b1d3a';
const REVEAL = '#ff7a2f';
const PANEL_GHOST = '#8f7a68';
const PANEL_ACCENT = '#ffc994';

/* ---------- Letter reveal ---------- */
function splitText(root: HTMLElement): Glyph[] {
  const out: Glyph[] = [];
  const walk = (node: Node, hl: boolean): void => {
    Array.from(node.childNodes).forEach((c) => {
      if (c.nodeType === Node.TEXT_NODE) {
        const frag = document.createDocumentFragment();
        (c.textContent ?? '').split(/(\s+)/).forEach((w) => {
          if (!w) return;
          if (/^\s+$/.test(w)) { frag.appendChild(document.createTextNode(w)); return; }
          const word = document.createElement('span');
          word.style.cssText = 'display:inline-block;white-space:nowrap';
          w.split('').forEach((ch) => {
            const s = document.createElement('span');
            s.textContent = ch;
            word.appendChild(s);
            out.push({ el: s, hl });
          });
          frag.appendChild(word);
        });
        c.parentNode?.replaceChild(frag, c);
      } else if (c.nodeName !== 'BR') {
        walk(c, hl || (c as HTMLElement).classList.contains('hl'));
      }
    });
  };
  walk(root, false);
  return out;
}

function paint(chars: Glyph[], p: number, spread: number, fin: string, acc: string, ghost: string): void {
  const n = chars.length, F = hex(fin), A = hex(acc), G = hex(ghost), H = hex(BRAND);
  chars.forEach((o, i) => {
    const t = clamp((p * (1 + spread) - i / n) / spread);
    const f = o.hl ? H : F;
    let op: number, c: RGB, b: number;
    if (t < 0.35) { op = t / 0.35; c = G; b = 8 - 6.5 * (t / 0.35); }
    else if (t < 0.7) { op = 1; c = mix(G, A, (t - 0.35) / 0.35); b = 1.5 * (1 - (t - 0.35) / 0.35); }
    else { op = 1; c = mix(A, f, (t - 0.7) / 0.3); b = 0; }
    o.el.style.opacity = String(op);
    o.el.style.color = `rgb(${c.map(Math.round).join(',')})`;
    o.el.style.filter = b > 0.05 ? `blur(${b.toFixed(2)}px)` : 'none';
  });
}

const h1 = splitText($('h1'));
const stmtChars = splitText($('stmt'));
const h2 = splitText($('h2'));
paint(h1, 0, 0.35, NAVY, REVEAL, '#ffffff');
paint(stmtChars, 0, 0.16, NAVY, REVEAL, '#ffffff');
paint(h2, 0, 0.35, '#ffffff', PANEL_ACCENT, PANEL_GHOST);

/* ---------- Bowl glow ---------- */
const KEYS = {
  q:    [0, .03, .08, .18, .40, .66, .87, 1.15, 1.43, 1.8],
  tip:  [.30, .45, .65, .80, .95, 1.05, 1.05, 1.10, 1.30, 2.40],
  half: [.34, .38, .38, .38, .38, .46, .66, .90, 1.60, 3.00],
  soft: [.22, .26, .22, .22, .19, .16, .13, .10, .10, .10],
} as const;

function lerpKey(arr: readonly number[], q: number): number {
  const Q = KEYS.q;
  if (q <= Q[0]) return arr[0];
  for (let i = 1; i < Q.length; i++) {
    if (q <= Q[i]) return arr[i - 1] + (arr[i] - arr[i - 1]) * (q - Q[i - 1]) / (Q[i] - Q[i - 1]);
  }
  return arr[arr.length - 1];
}

const target: Bowl = { tip: 0.3, half: 0.34, soft: 0.22 };
const cur: Bowl = { tip: -0.3, half: 0.3, soft: 0.1 };
let intro = true;

const canvas = $<HTMLCanvasElement>('bg');
const ctx = canvas.getContext('2d');
if (!ctx) throw new Error('2D context unavailable');
const W = 96, H = 60, N = 48;
const image = ctx.createImageData(W, H);
const C0 = hex('#ffffff'), C1 = hex('#ffe2c9'), C2 = hex('#ffb26b');

function drawBowl(t: number): void {
  const asp = innerWidth / innerHeight;
  const tip = cur.tip + Math.sin(t * 0.00033 + 1.3) * 0.02;
  const half = cur.half + Math.sin(t * 0.0005) * 0.015;
  const soft = cur.soft, d = image.data;
  const xs: number[] = [], ys: number[] = [];
  if (tip > 0.02) {
    for (let k = 0; k < N; k++) {
      const yy = -0.3 + (tip + 0.3) * k / (N - 1);
      xs.push(half * asp * Math.pow(Math.max(0, 1 - yy / tip), 0.72));
      ys.push(yy);
    }
  }
  for (let j = 0; j < H; j++) {
    for (let i = 0; i < W; i++) {
      let g = 0;
      if (xs.length) {
        const px = Math.abs((i + 0.5) / W - 0.5) * asp, py = (j + 0.5) / H;
        let m = 1e9;
        for (let k = 0; k < N - 1; k++) {
          const ax = xs[k], ay = ys[k], bx = xs[k + 1] - ax, by = ys[k + 1] - ay;
          const l = bx * bx + by * by;
          const u = l ? clamp(((px - ax) * bx + (py - ay) * by) / l) : 0;
          const dx = px - ax - u * bx, dy = py - ay - u * by;
          m = Math.min(m, dx * dx + dy * dy);
        }
        let sd = Math.sqrt(m);
        if (py < tip && px < half * asp * Math.pow(1 - py / tip, 0.72)) sd = -sd;
        sd -= 0.25;
        g = 1 - smooth((sd + soft) / (2 * soft));
      }
      const c = g < 0.38 ? mix(C0, C1, smooth(g / 0.38)) : mix(C1, C2, smooth((g - 0.38) / 0.62));
      const o = (j * W + i) * 4;
      d[o] = c[0]; d[o + 1] = c[1]; d[o + 2] = c[2]; d[o + 3] = 255;
    }
  }
  ctx.putImageData(image, 0, 0);
}

function loop(t: number): void {
  if (!intro) {
    const f = 0.12;
    cur.tip += (target.tip - cur.tip) * f;
    cur.half += (target.half - cur.half) * f;
    cur.soft += (target.soft - cur.soft) * f;
  }
  drawBowl(t);
  requestAnimationFrame(loop);
}

/* ---------- Scroll ---------- */
const nav = $('nav'), stmt = $('stmt'), splitEl = $('split'), row = $('row'), viz = $('viz');

function onScroll(): void {
  const vh = innerHeight, q = scrollY / vh;
  target.tip = lerpKey(KEYS.tip, q);
  target.half = lerpKey(KEYS.half, q);
  target.soft = lerpKey(KEYS.soft, q);

  const s = clamp((q - 0.69) / 0.74);
  stmt.style.transform = `translateY(${0.205 * (1 - s) * (1 - s) * vh}px)`;
  const p = clamp((q - 0.56) / 2.03);
  paint(stmtChars, p, 0.16, NAVY, REVEAL, '#ffffff');
  nav.classList.toggle('on', p > 0.4);

  const top = splitEl.getBoundingClientRect().top;
  const p2 = clamp((0.8 - top / vh) / 0.65);
  paint(h2, p2, 0.35, '#ffffff', PANEL_ACCENT, PANEL_GHOST);
  row.classList.toggle('in', p2 > 0.92);
  viz.style.transform = `scale(${1.08 - 0.08 * clamp(1 - top / vh)})`;
}
addEventListener('scroll', onScroll, { passive: true });
addEventListener('resize', onScroll);

/* ---------- Intro ---------- */
requestAnimationFrame((t0: number) => {
  document.body.classList.add('ready');
  let start: number | null = null;
  onScroll();
  const step = (t: number): void => {
    if (start === null) start = t;
    const e = (t - start) / 1000, hp = clamp(e / 1.25);
    paint(h1, hp, 0.35, NAVY, REVEAL, '#ffffff');
    if (e > 0.25) {
      const k = smooth((e - 0.25) / 1.05);
      cur.tip = -0.3 + (target.tip + 0.3) * k;
      cur.half = 0.3 + (target.half - 0.3) * k;
      cur.soft = 0.1 + (target.soft - 0.1) * k;
      if (e > 1.3) { intro = false; Object.assign(cur, target); }
    } else {
      cur.tip = -0.3; cur.half = 0.3; cur.soft = 0.1;
    }
    if (intro || hp < 1) requestAnimationFrame(step);
  };
  step(t0);
  requestAnimationFrame(loop);
});

/* ---------- Scroll-in fades ---------- */
const io = new IntersectionObserver((entries) => {
  entries.forEach((e) => {
    if (e.isIntersecting) { e.target.classList.add('in'); io.unobserve(e.target); }
  });
}, { threshold: 0.12 });
document.querySelectorAll('.rv').forEach((el) => io.observe(el));

/* ---------- Mobile menu ---------- */
const mobileMenuBtn = document.getElementById('mobileMenuBtn');
const mobileMenu = document.getElementById('mobileMenu');
if (mobileMenuBtn && mobileMenu) {
  mobileMenuBtn.addEventListener('click', (e) => {
    e.stopPropagation();
    mobileMenuBtn.classList.toggle('active');
    mobileMenu.classList.toggle('active');
  });

  mobileMenu.querySelectorAll('.mobile-link').forEach(link => {
    link.addEventListener('click', () => {
      mobileMenuBtn.classList.remove('active');
      mobileMenu.classList.remove('active');
    });
  });

  document.addEventListener('click', (e) => {
    if (!mobileMenu.contains(e.target as Node) && !mobileMenuBtn.contains(e.target as Node)) {
      mobileMenuBtn.classList.remove('active');
      mobileMenu.classList.remove('active');
    }
  });
}
