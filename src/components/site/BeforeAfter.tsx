import { useCallback, useRef, useState } from "react";

export function BeforeAfter({
  before,
  after,
  beforeAlt,
  afterAlt,
}: {
  before: string;
  after: string;
  beforeAlt: string;
  afterAlt: string;
}) {
  const [pos, setPos] = useState(52);
  const wrap = useRef<HTMLDivElement | null>(null);
  const dragging = useRef(false);

  const move = useCallback((clientX: number) => {
    const el = wrap.current;
    if (!el) return;
    const r = el.getBoundingClientRect();
    const next = ((clientX - r.left) / r.width) * 100;
    setPos(Math.min(98, Math.max(2, next)));
  }, []);

  return (
    <div
      ref={wrap}
      className="group relative aspect-16/11 w-full select-none overflow-hidden rounded-xl border border-border shadow-panel"
      onPointerDown={(e) => {
        dragging.current = true;
        (e.target as HTMLElement).setPointerCapture?.(e.pointerId);
        move(e.clientX);
      }}
      onPointerMove={(e) => dragging.current && move(e.clientX)}
      onPointerUp={() => (dragging.current = false)}
      onPointerLeave={() => (dragging.current = false)}
    >
      <img
        src={after}
        alt={afterAlt}
        loading="lazy"
        className="absolute inset-0 h-full w-full object-cover"
      />
      <div
        className="absolute inset-0 overflow-hidden"
        style={{ clipPath: `inset(0 ${100 - pos}% 0 0)` }}
      >
        <img
          src={before}
          alt={beforeAlt}
          loading="lazy"
          className="h-full w-full object-cover"
        />
      </div>

      <span className="pointer-events-none absolute left-4 top-4 rounded-full bg-background/70 px-3 py-1 text-xs font-bold tracking-[0.2em] text-muted-foreground backdrop-blur">
        BEFORE
      </span>
      <span className="pointer-events-none absolute right-4 top-4 rounded-full bg-primary px-3 py-1 text-xs font-bold tracking-[0.2em] text-primary-foreground">
        AFTER
      </span>

      <div
        className="pointer-events-none absolute inset-y-0 w-px bg-primary"
        style={{ left: `${pos}%` }}
      >
        <div className="absolute top-1/2 left-1/2 flex h-11 w-11 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-primary text-primary-foreground shadow-glow">
          <span className="text-sm font-bold">⇆</span>
        </div>
      </div>

      <input
        aria-label="Compare before and after roof restoration"
        type="range"
        min={2}
        max={98}
        value={pos}
        onChange={(e) => setPos(Number(e.target.value))}
        className="absolute inset-x-0 bottom-3 mx-auto w-2/3 cursor-ew-resize opacity-0"
      />
    </div>
  );
}
