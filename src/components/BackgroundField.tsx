import { useEffect, useRef } from 'react';

type FlowKey = 'dark' | 'mid' | 'light';
type FlowState = [number, number, number, number, number];

const COLORS: Record<FlowKey, { base: string; active: string }> = {
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

const FLOW_KEYS: FlowKey[] = ['dark', 'mid', 'light'];

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
    [0.0, 0.6, 0.72, 1.0, 4],
    [0.0, 0.6, 0.72, 1.0, 5],
  ],

  light: [
    [0.0, 0.5, 0.82, 1.0, 5],
    [0.0, 0.54, 0.86, 1.0, 4],
    [0.0, 0.5, 0.82, 1.0, 5],
    [0.0, 0.5, 0.82, 1.0, 5],
  ],
};

const VIRTUAL_SCALE = 1.1;

const ENERGY_RISE = 0.002;
const ENERGY_DECAY = 0.94;
const MAX_ENERGY = 1;

const COLOR_BLEND_SPEED = 0.035;

/*
 * Görsel arka plan için 30 FPS yeterli.
 */
const TARGET_FPS = 30;
const FRAME_INTERVAL = 1000 / TARGET_FPS;

/*
 * Eski yoğun geometri yerine daha hafif path.
 */
const PATH_STEPS = 72;

/*
 * Kullanıcı hareket ettikten sonra animasyonun
 * ne kadar süre aktif kalacağı.
 */
const ACTIVE_DURATION_MS = 700;

/*
 * Enerji bu seviyenin altına düştüğünde
 * animasyonun devam etmesine gerek yok.
 */
const MIN_ACTIVE_ENERGY = 0.002;

const lerp = (a: number, b: number, t: number) =>
  a + (b - a) * t;

function lerpColor(
  a: string,
  b: string,
  t: number,
) {
  const pa = parseInt(a.slice(1), 16);
  const pb = parseInt(b.slice(1), 16);

  const ar = (pa >> 16) & 255;
  const ag = (pa >> 8) & 255;
  const ab = pa & 255;

  const br = (pb >> 16) & 255;
  const bg = (pb >> 8) & 255;
  const bb = pb & 255;

  return `rgb(${Math.round(
    lerp(ar, br, t),
  )}, ${Math.round(
    lerp(ag, bg, t),
  )}, ${Math.round(
    lerp(ab, bb, t),
  )})`;
}

function buildPath(
  width: number,
  height: number,
  params: FlowState,
  phase: number,
) {
  const [x0s, y0s, x1s, y1s, periods] = params;

  const virtualWidth = width * VIRTUAL_SCALE;
  const virtualHeight = height * VIRTUAL_SCALE;

  const originX =
    -(virtualWidth - width) / 2;

  const originY =
    height + (virtualHeight - height) / 2;

  const x0 =
    originX + virtualWidth * x0s;

  const y0 =
    originY - virtualHeight * y0s;

  const x1 =
    originX + virtualWidth * x1s;

  const y1 =
    originY - virtualHeight * y1s;

  const points = new Array<string>(
    PATH_STEPS + 1,
  );

  points[0] =
    `M ${x0.toFixed(1)} ${y0.toFixed(1)}`;

  for (
    let i = 1;
    i <= PATH_STEPS;
    i++
  ) {
    const t = i / PATH_STEPS;

    const x = lerp(x0, x1, t);

    const yBase =
      lerp(y0, y1, t);

    const wave =
      Math.sin(
        t *
          Math.PI *
          2 *
          periods +
          phase,
      ) * 18;

    points[i] =
      `L ${x.toFixed(1)} ${(yBase + wave).toFixed(1)}`;
  }

  return points.join(' ');
}

export function BackgroundField() {
  const svgRef =
    useRef<SVGSVGElement | null>(null);

  const pathRefs = useRef<
    Partial<Record<FlowKey, SVGPathElement>>
  >({});

  const phaseRef = useRef<
    Record<FlowKey, number>
  >({
    dark: 0,
    mid: 1.3,
    light: 2.6,
  });

  const viewport = useRef({
    width: 0,
    height: 0,
  });

  const scrollProgress = useRef(0);

  const energy = useRef(0);

  const colorEnergy = useRef(0);

  const lastScroll = useRef(0);

  const lastMouse = useRef<{
    x: number;
    y: number;
  } | null>(null);

  /*
   * RAF yalnızca ihtiyaç olduğunda çalışacak.
   */
  const rafRef = useRef<number | null>(
    null,
  );

  const previousFrame =
    useRef(0);

  const lastActivityTime =
    useRef(0);

  const isRunning =
    useRef(false);

  /*
   * DOM ölçümleri event sırasında güncelleniyor.
   */
  useEffect(() => {
    const updateViewport = () => {
      viewport.current.width =
        window.innerWidth;

      viewport.current.height =
        window.innerHeight;

      const svg = svgRef.current;

      if (!svg) return;

      svg.setAttribute(
        'viewBox',
        `0 0 ${viewport.current.width} ${viewport.current.height}`,
      );
    };

    const updateScrollProgress = () => {
      const scrollMax =
        document.documentElement
          .scrollHeight -
        viewport.current.height;

      scrollProgress.current =
        scrollMax > 0
          ? Math.min(
              Math.max(
                window.scrollY /
                  scrollMax,
                0,
              ),
              0.999999,
            )
          : 0;
    };

    updateViewport();
    updateScrollProgress();

    const onResize = () => {
      updateViewport();
      updateScrollProgress();
    };

    window.addEventListener(
      'resize',
      onResize,
      {
        passive: true,
      },
    );

    return () => {
      window.removeEventListener(
        'resize',
        onResize,
      );
    };
  }, []);

  useEffect(() => {
    const svg = svgRef.current;

    if (!svg) return;

    /*
     * Path elementlerini yalnızca bir kez buluyoruz.
     */
    for (const key of FLOW_KEYS) {
      const path =
        svg.querySelector<SVGPathElement>(
          `[data-line="${key}"]`,
        );

      if (path) {
        pathRefs.current[key] = path;
      }
    }

    const renderFrame = (
      timestamp: number,
    ) => {
      /*
       * RAF queue artık render başında otomatik
       * tekrar kurulmayacak.
       */
      rafRef.current = null;

      if (
        timestamp -
          previousFrame.current <
        FRAME_INTERVAL
      ) {
        rafRef.current =
          requestAnimationFrame(
            renderFrame,
          );

        return;
      }

      previousFrame.current =
        timestamp -
        ((timestamp -
          previousFrame.current) %
          FRAME_INTERVAL);

      const { width, height } =
        viewport.current;

      if (
        width <= 0 ||
        height <= 0
      ) {
        isRunning.current = false;

        return;
      }

      energy.current *=
        ENERGY_DECAY;

      colorEnergy.current =
        lerp(
          colorEnergy.current,
          0,
          COLOR_BLEND_SPEED,
        );

      const progress =
        scrollProgress.current;

      for (const key of FLOW_KEYS) {
        const states =
          FLOW_CONFIG[key];

        const segments =
          states.length - 1;

        const segmentIndex =
          Math.min(
            Math.floor(
              progress * segments,
            ),
            segments - 1,
          );

        const segmentProgress =
          progress * segments -
          segmentIndex;

        const from =
          states[segmentIndex];

        const to =
          states[segmentIndex + 1];

        if (!from || !to) {
          continue;
        }

        const interpolated: FlowState =
          [
            lerp(
              from[0],
              to[0],
              segmentProgress,
            ),

            lerp(
              from[1],
              to[1],
              segmentProgress,
            ),

            lerp(
              from[2],
              to[2],
              segmentProgress,
            ),

            lerp(
              from[3],
              to[3],
              segmentProgress,
            ),

            lerp(
              from[4],
              to[4],
              segmentProgress,
            ),
          ];

        /*
         * Phase sadece aktif animasyonda ilerliyor.
         */
        phaseRef.current[key] +=
          0.016;

        const path =
          pathRefs.current[key];

        if (!path) continue;

        const alpha =
          0.26 +
          energy.current * 0.32;

        path.setAttribute(
          'd',
          buildPath(
            width,
            height,
            interpolated,
            phaseRef.current[key],
          ),
        );

        path.setAttribute(
          'stroke-opacity',
          alpha.toFixed(3),
        );

        path.setAttribute(
          'stroke',
          lerpColor(
            COLORS[key].base,
            COLORS[key].active,
            colorEnergy.current,
          ),
        );
      }

      const recentlyActive =
        timestamp -
          lastActivityTime.current <
        ACTIVE_DURATION_MS;

      const hasEnergy =
        energy.current >
          MIN_ACTIVE_ENERGY ||
        colorEnergy.current >
          MIN_ACTIVE_ENERGY;

      /*
       * Kullanıcı hâlâ hareket ediyorsa veya
       * enerji decay devam ediyorsa yeni frame iste.
       *
       * Aksi halde loop burada tamamen durur.
       */
      if (
        recentlyActive ||
        hasEnergy
      ) {
        rafRef.current =
          requestAnimationFrame(
            renderFrame,
          );

        return;
      }

      isRunning.current = false;
    };

    const startAnimation = () => {
      lastActivityTime.current =
        performance.now();

      if (isRunning.current) {
        return;
      }

      isRunning.current = true;

      rafRef.current =
        requestAnimationFrame(
          renderFrame,
        );
    };

    const renderStaticFrame = () => {
      /*
       * İlk yüklemede çizgilerin görünmesi için
       * yalnızca tek bir frame çalıştırıyoruz.
       */
      lastActivityTime.current =
        performance.now() -
        ACTIVE_DURATION_MS;

      isRunning.current = true;

      rafRef.current =
        requestAnimationFrame(
          renderFrame,
        );
    };

    const updateScrollProgress = () => {
      const scrollMax =
        document.documentElement
          .scrollHeight -
        viewport.current.height;

      scrollProgress.current =
        scrollMax > 0
          ? Math.min(
              Math.max(
                window.scrollY /
                  scrollMax,
                0,
              ),
              0.999999,
            )
          : 0;
    };

    const onMouseMove = (
      event: MouseEvent,
    ) => {
      const previous =
        lastMouse.current;

      if (previous) {
        const dx =
          Math.abs(
            event.clientX -
              previous.x,
          );

        const dy =
          Math.abs(
            event.clientY -
              previous.y,
          );

        /*
         * Çok küçük mouse jitter'larını yok say.
         */
        if (
          dx < 1 &&
          dy < 1
        ) {
          return;
        }

        energy.current =
          Math.min(
            MAX_ENERGY,
            energy.current +
              dx * ENERGY_RISE,
          );

        colorEnergy.current =
          Math.min(
            1,
            colorEnergy.current +
              dy * 0.0018,
          );
      }

      lastMouse.current = {
        x: event.clientX,
        y: event.clientY,
      };

      startAnimation();
    };

    const onScroll = () => {
      const currentScroll =
        window.scrollY;

      const dy =
        Math.abs(
          currentScroll -
            lastScroll.current,
        );

      lastScroll.current =
        currentScroll;

      updateScrollProgress();

      if (dy <= 0) {
        return;
      }

      energy.current =
        Math.min(
          MAX_ENERGY,
          energy.current +
            dy *
              ENERGY_RISE *
              0.5,
        );

      startAnimation();
    };

    const onResize = () => {
      viewport.current.width =
        window.innerWidth;

      viewport.current.height =
        window.innerHeight;

      svg.setAttribute(
        'viewBox',
        `0 0 ${viewport.current.width} ${viewport.current.height}`,
      );

      updateScrollProgress();

      startAnimation();
    };

    /*
     * Sekme görünür değilken animation çalışmasın.
     */
    const onVisibilityChange = () => {
      if (
        document.visibilityState ===
        'hidden'
      ) {
        if (
          rafRef.current !== null
        ) {
          cancelAnimationFrame(
            rafRef.current,
          );

          rafRef.current = null;
        }

        isRunning.current = false;

        return;
      }

      startAnimation();
    };

    window.addEventListener(
      'mousemove',
      onMouseMove,
      {
        passive: true,
      },
    );

    window.addEventListener(
      'scroll',
      onScroll,
      {
        passive: true,
      },
    );

    window.addEventListener(
      'resize',
      onResize,
      {
        passive: true,
      },
    );

    document.addEventListener(
      'visibilitychange',
      onVisibilityChange,
    );

    /*
     * İlk çizimi yap.
     * Bundan sonra etkileşim yoksa loop duracak.
     */
    renderStaticFrame();

    return () => {
      window.removeEventListener(
        'mousemove',
        onMouseMove,
      );

      window.removeEventListener(
        'scroll',
        onScroll,
      );

      window.removeEventListener(
        'resize',
        onResize,
      );

      document.removeEventListener(
        'visibilitychange',
        onVisibilityChange,
      );

      if (
        rafRef.current !== null
      ) {
        cancelAnimationFrame(
          rafRef.current,
        );
      }

      rafRef.current = null;
      isRunning.current = false;
    };
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
        {FLOW_KEYS.map((key) => (
          <path
            key={key}
            data-line={key}
            stroke={COLORS[key].base}
            strokeWidth={2.3}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        ))}
      </svg>
    </div>
  );
}