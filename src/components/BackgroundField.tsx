import { useEffect, useRef } from 'react';

type FlowKey = 'dark' | 'mid' | 'light';
type FlowState = [number, number, number, number, number];

const COLORS: Record<
  FlowKey,
  { base: string; active: string }
> = {
  dark: {
    base: '#1F3F66',
    active: '#2F5F6A',
  },
  mid: {
    base: '#3F7FBF',
    active: '#4F8FA6',
  },
  light: {
    base: '#7FB7D8',
    active: '#8FBFD0',
  },
};

const FLOW_CONFIG: Record<FlowKey, FlowState[]> = {
  dark: [
    [0.0, 0.66, 0.62, 1.0, 4],
    [0.0, 0.58, 0.58, 1.0, 5],
    [0.0, 0.64, 0.62, 1.0, 4],
    [0.0, 0.64, 0.62, 1.0, 5],
  ],
  mid: [
    [0.0, 0.56, 0.74, 1.0, 5],
    [0.0, 0.56, 0.78, 1.0, 4],
    [0.0, 0.60, 0.72, 1.0, 4],
    [0.0, 0.60, 0.72, 1.0, 5],
  ],
  light: [
    [0.0, 0.50, 0.82, 1.0, 5],
    [0.0, 0.54, 0.86, 1.0, 4],
    [0.0, 0.50, 0.82, 1.0, 5],
    [0.0, 0.50, 0.82, 1.0, 5],
  ],
};

const lerp = (a: number, b: number, t: number) =>
  a + (b - a) * t;

const VIRTUAL_SCALE = 1.1;

/* =============================
   ENERGY / COLOR PARAMS
============================= */
const ENERGY_RISE = 0.002; // ⬅️ yavaş parlıyor
const ENERGY_DECAY = 0.94;
const MAX_ENERGY = 1.0;

const COLOR_BLEND_SPEED = 0.035;

/* =============================
   COLOR UTILS
============================= */
function lerpColor(a: string, b: string, t: number) {
  const pa = parseInt(a.slice(1), 16);
  const pb = parseInt(b.slice(1), 16);

  const ar = (pa >> 16) & 255;
  const ag = (pa >> 8) & 255;
  const ab = pa & 255;

  const br = (pb >> 16) & 255;
  const bg = (pb >> 8) & 255;
  const bb = pb & 255;

  return `rgb(
    ${Math.round(lerp(ar, br, t))},
    ${Math.round(lerp(ag, bg, t))},
    ${Math.round(lerp(ab, bb, t))}
  )`;
}

function buildPath(
  w: number,
  h: number,
  params: FlowState,
  phase: number
) {
  const [x0s, y0s, x1s, y1s, periods] = params;

  const vW = w * VIRTUAL_SCALE;
  const vH = h * VIRTUAL_SCALE;

  const originX = -(vW - w) / 2;
  const originY = h + (vH - h) / 2;

  const x0 = originX + vW * x0s;
  const y0 = originY - vH * y0s;
  const x1 = originX + vW * x1s;
  const y1 = originY - vH * y1s;

  const steps = 140;
  let d = `M ${x0} ${y0}`;

  for (let i = 1; i <= steps; i++) {
    const t = i / steps;
    const x = lerp(x0, x1, t);
    const yBase = lerp(y0, y1, t);
    const wave =
      Math.sin(
        t * Math.PI * 2 * periods + phase
      ) * 18;

    d += ` L ${x} ${yBase + wave}`;
  }

  return d;
}

export function BackgroundField() {
  const svgRef = useRef<SVGSVGElement | null>(null);
  const phaseRef = useRef<Record<FlowKey, number>>({
    dark: 0,
    mid: 1.3,
    light: 2.6,
  });

  const energy = useRef(0);
  const colorEnergy = useRef(0);

  const lastScroll = useRef(0);
  const lastMouse = useRef<{ x: number; y: number } | null>(
    null
  );

  useEffect(() => {
    const onMouseMove = (e: MouseEvent) => {
      if (lastMouse.current) {
        const dx = Math.abs(
          e.clientX - lastMouse.current.x
        );
        const dy = Math.abs(
          e.clientY - lastMouse.current.y
        );

        energy.current = Math.min(
          MAX_ENERGY,
          energy.current + dx * ENERGY_RISE
        );

        colorEnergy.current = Math.min(
          1,
          colorEnergy.current + dy * 0.0018
        );
      }

      lastMouse.current = {
        x: e.clientX,
        y: e.clientY,
      };
    };

    const onScroll = () => {
      const dy = Math.abs(
        window.scrollY - lastScroll.current
      );
      energy.current = Math.min(
        MAX_ENERGY,
        energy.current + dy * ENERGY_RISE * 0.5
      );
      lastScroll.current = window.scrollY;
    };

    window.addEventListener('mousemove', onMouseMove);
    window.addEventListener('scroll', onScroll, {
      passive: true,
    });

    return () => {
      window.removeEventListener(
        'mousemove',
        onMouseMove
      );
      window.removeEventListener(
        'scroll',
        onScroll
      );
    };
  }, []);

  useEffect(() => {
    const svg = svgRef.current;
    if (!svg) return;

    let raf = 0;

    const render = () => {
      const w = window.innerWidth;
      const h = window.innerHeight;

      svg.setAttribute('viewBox', `0 0 ${w} ${h}`);

      energy.current *= ENERGY_DECAY;
      colorEnergy.current = lerp(
        colorEnergy.current,
        0,
        COLOR_BLEND_SPEED
      );

      (Object.keys(FLOW_CONFIG) as FlowKey[]).forEach(
        (key) => {
          const states = FLOW_CONFIG[key];
          const segments = states.length - 1;

          const scrollMax =
            document.body.scrollHeight - h;
          const s =
            scrollMax > 0
              ? window.scrollY / scrollMax
              : 0;

          const scrollP = Math.min(
            Math.max(s, 0),
            0.999999
          );

          const seg = Math.floor(
            scrollP * segments
          );
          const t =
            scrollP * segments - seg;

          const a = states[seg];
          const b = states[seg + 1];

          const interp: FlowState = [
            lerp(a[0], b[0], t),
            lerp(a[1], b[1], t),
            lerp(a[2], b[2], t),
            lerp(a[3], b[3], t),
            lerp(a[4], b[4], t),
          ];

          phaseRef.current[key] += 0.01;

          const path = svg.querySelector(
            `[data-line="${key}"]`
          ) as SVGPathElement | null;

          const alpha =
            0.26 + energy.current * 0.32;

          path?.setAttribute(
            'd',
            buildPath(
              w,
              h,
              interp,
              phaseRef.current[key]
            )
          );
          path?.setAttribute(
            'stroke-opacity',
            alpha.toFixed(3)
          );
          path?.setAttribute(
            'stroke',
            lerpColor(
              COLORS[key].base,
              COLORS[key].active,
              colorEnergy.current
            )
          );
        }
      );

      raf = requestAnimationFrame(render);
    };

    raf = requestAnimationFrame(render);
    return () => cancelAnimationFrame(raf);
  }, []);

  return (
    <div
      aria-hidden
      className="pointer-events-none fixed inset-0 z-0 overflow-hidden"
    >
      <svg
        ref={svgRef}
        className="absolute inset-0"
        fill="none"
      >
        {(Object.keys(FLOW_CONFIG) as FlowKey[]).map(
          (key) => (
            <path
              key={key}
              data-line={key}
              stroke={COLORS[key].base}
              strokeWidth={2.3}
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          )
        )}
      </svg>
    </div>
  );
}