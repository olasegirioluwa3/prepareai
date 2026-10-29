import { useEffect, useRef, useState } from 'react';

export function useLetterReveal(
  elementRef: React.RefObject<HTMLElement>,
  options: {
    duration?: number;
    spread?: number;
    finalColor?: string;
    accentColor?: string;
    ghostColor?: string;
    autoPlay?: boolean;
  } = {}
) {
  const [isReady, setIsReady] = useState(false);
  const {
    duration = 1250,
    spread = 0.35,
    finalColor = '#0b1d3a',
    accentColor = '#5b7cf0',
    ghostColor = '#ffffff',
    autoPlay = true
  } = options;

  useEffect(() => {
    const element = elementRef.current;
    if (!element) return;

    // Get the text content
    const text = element.textContent || '';
    element.innerHTML = '';

    // Split text into character spans
    const frag = document.createDocumentFragment();
    let wordSpan: HTMLSpanElement | null = null;
    let i = 0;

    for (const char of text) {
      if (char === '\n' || char === '\r') {
        if (wordSpan) { frag.appendChild(wordSpan); wordSpan = null; }
        frag.appendChild(document.createElement('br'));
        continue;
      }
      if (char === ' ') {
        if (wordSpan) { frag.appendChild(wordSpan); wordSpan = null; }
        frag.appendChild(document.createTextNode(' '));
        i++;
        continue;
      }
      if (!wordSpan) {
        wordSpan = document.createElement('span');
        wordSpan.style.display = 'inline-block';
        wordSpan.style.whiteSpace = 'nowrap';
      }
      const span = document.createElement('span');
      span.textContent = char;
      span.dataset.i = i.toString();
      wordSpan.appendChild(span);
    }
    if (wordSpan) frag.appendChild(wordSpan);
    element.appendChild(frag);

    const chars = Array.from(element.querySelectorAll('span[data-i]'));
    const n = chars.length;

    function lerp(a: number, b: number, t: number) { return a + (b - a) * t; }

    function mixColor(c1: string, c2: string, t: number) {
      const r1 = parseInt(c1.slice(1, 3), 16), g1 = parseInt(c1.slice(3, 5), 16), b1 = parseInt(c1.slice(5, 7), 16);
      const r2 = parseInt(c2.slice(1, 3), 16), g2 = parseInt(c2.slice(3, 5), 16), b2 = parseInt(c2.slice(5, 7), 16);
      const r = Math.round(lerp(r1, r2, t)), g = Math.round(lerp(g1, g2, t)), b = Math.round(lerp(b1, b2, t));
      return `rgb(${r},${g},${b})`;
    }

    function paint(p: number) {
      chars.forEach(span => {
        const i = parseFloat((span as HTMLElement).dataset.i || '0');
        const t = Math.max(0, Math.min(1, (p * (1 + spread) - i / n) / spread));
        let opacity, color, blur;

        if (t === 0) {
          opacity = 0;
          color = ghostColor;
          blur = 8;
        } else if (t < 0.35) {
          const tr = t / 0.35;
          opacity = tr;
          color = ghostColor;
          blur = 8 - 6.5 * tr;
        } else if (t < 0.70) {
          const tr = (t - 0.35) / 0.35;
          opacity = 1;
          color = mixColor(ghostColor, accentColor, tr);
          blur = 1.5 * (1 - tr);
        } else {
          const tr = (t - 0.70) / 0.30;
          opacity = 1;
          const base = (span as HTMLElement).dataset.accent ? finalColor : accentColor;
          color = mixColor(accentColor, base, tr);
          blur = 0;
        }

        (span as HTMLElement).style.opacity = opacity.toString();
        (span as HTMLElement).style.color = color;
        (span as HTMLElement).style.filter = `blur(${blur}px)`;
      });
    }

    if (autoPlay) {
      setIsReady(true);
      const startTime = performance.now();

      function animate(time: number) {
        const elapsed = time - startTime;
        const p = Math.min(1, elapsed / duration);
        paint(p);
        if (p < 1) {
          requestAnimationFrame(animate);
        }
      }

      requestAnimationFrame(animate);
    }

    return () => {
      // Cleanup if needed
    };
  }, [elementRef, duration, spread, finalColor, accentColor, ghostColor, autoPlay]);

  return { isReady, paint: (p: number) => {
    const element = elementRef.current;
    if (!element) return;
    const chars = Array.from(element.querySelectorAll('span[data-i]'));
    const n = chars.length;

    function lerp(a: number, b: number, t: number) { return a + (b - a) * t; }
    function mixColor(c1: string, c2: string, t: number) {
      const r1 = parseInt(c1.slice(1, 3), 16), g1 = parseInt(c1.slice(3, 5), 16), b1 = parseInt(c1.slice(5, 7), 16);
      const r2 = parseInt(c2.slice(1, 3), 16), g2 = parseInt(c2.slice(3, 5), 16), b2 = parseInt(c2.slice(5, 7), 16);
      const r = Math.round(lerp(r1, r2, t)), g = Math.round(lerp(g1, g2, t)), b = Math.round(lerp(b1, b2, t));
      return `rgb(${r},${g},${b})`;
    }

    chars.forEach(span => {
      const i = parseFloat((span as HTMLElement).dataset.i || '0');
      const t = Math.max(0, Math.min(1, (p * (1 + spread) - i / n) / spread));
      let opacity, color, blur;

      if (t === 0) {
        opacity = 0;
        color = ghostColor;
        blur = 8;
      } else if (t < 0.35) {
        const tr = t / 0.35;
        opacity = tr;
        color = ghostColor;
        blur = 8 - 6.5 * tr;
      } else if (t < 0.70) {
        const tr = (t - 0.35) / 0.35;
        opacity = 1;
        color = mixColor(ghostColor, accentColor, tr);
        blur = 1.5 * (1 - tr);
      } else {
        const tr = (t - 0.70) / 0.30;
        opacity = 1;
        const base = (span as HTMLElement).dataset.accent ? finalColor : accentColor;
        color = mixColor(accentColor, base, tr);
        blur = 0;
      }

      (span as HTMLElement).style.opacity = opacity.toString();
      (span as HTMLElement).style.color = color;
      (span as HTMLElement).style.filter = `blur(${blur}px)`;
    });
  }};
}
