import { PILLARS } from "@/lib/ceo/pillars";
import type { PillarId } from "@/lib/ceo/types";

const CX = 160;
const CY = 160;
const R = 96;

function polar(index: number, total: number, radius: number) {
  const angle = -Math.PI / 2 + (index / total) * Math.PI * 2;
  return {
    x: CX + radius * Math.cos(angle),
    y: CY + radius * Math.sin(angle),
  };
}

function ringPath(level: number) {
  const pts = PILLARS.map((_, i) => polar(i, PILLARS.length, (R * level) / 5));
  return pts.map((p, i) => `${i === 0 ? "M" : "L"} ${p.x.toFixed(1)} ${p.y.toFixed(1)}`).join(" ") + " Z";
}

export function Radar({
  scores,
  size = 300,
}: {
  scores: { id: PillarId; score: number }[];
  size?: number;
}) {
  const map = Object.fromEntries(scores.map((s) => [s.id, s.score])) as Record<PillarId, number>;
  const dataPts = PILLARS.map((p, i) => polar(i, PILLARS.length, (R * (map[p.id] || 0)) / 5));
  const dataPath =
    dataPts.map((p, i) => `${i === 0 ? "M" : "L"} ${p.x.toFixed(1)} ${p.y.toFixed(1)}`).join(" ") + " Z";
  const hasData = scores.some((s) => s.score > 0);

  return (
    <svg
      viewBox="0 0 320 320"
      width={size}
      height={size}
      className="mx-auto max-w-full"
      role="img"
      aria-label="Radar delapan pilar"
    >
      {[1, 2, 3, 4, 5].map((lvl) => (
        <path
          key={lvl}
          d={ringPath(lvl)}
          className="fill-none stroke-border"
          strokeWidth={lvl === 5 ? 1.25 : 0.75}
        />
      ))}
      {PILLARS.map((_, i) => {
        const end = polar(i, PILLARS.length, R);
        return (
          <line
            key={i}
            x1={CX}
            y1={CY}
            x2={end.x}
            y2={end.y}
            className="stroke-border"
            strokeWidth={0.75}
          />
        );
      })}
      {hasData && (
        <path d={dataPath} className="fill-forest/20 stroke-forest" strokeWidth={1.75} />
      )}
      {hasData &&
        dataPts.map((p, i) => {
          const pillar = PILLARS[i];
          if (!pillar || (map[pillar.id] || 0) <= 0) return null;
          return <circle key={pillar.id} cx={p.x} cy={p.y} r={3.2} className="fill-forest" />;
        })}
      {PILLARS.map((p, i) => {
        const pos = polar(i, PILLARS.length, R + 28);
        return (
          <text
            key={p.id}
            x={pos.x}
            y={pos.y}
            textAnchor="middle"
            dominantBaseline="middle"
            className="fill-muted"
            style={{ fontSize: "11px", fontFamily: "var(--font-sans)" }}
          >
            {p.short}
          </text>
        );
      })}
    </svg>
  );
}
