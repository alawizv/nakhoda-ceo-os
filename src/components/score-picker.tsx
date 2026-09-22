import { cn } from "@/lib/utils";
import { SCORE_LABELS } from "@/lib/ceo/pillars";

export function ScorePicker({
  value,
  onChange,
}: {
  value: number;
  onChange: (n: number) => void;
}) {
  return (
    <div className="flex flex-col gap-2">
      <div className="grid grid-cols-5 gap-1.5">
        {[1, 2, 3, 4, 5].map((n) => (
          <button
            key={n}
            type="button"
            onClick={() => onChange(n)}
            className={cn(
              "h-11 rounded-sm text-sm font-medium tabular-nums transition-[background-color,color,transform] duration-150",
              "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring/40",
              value === n
                ? "bg-forest text-forest-fg"
                : "bg-surface-2 text-muted hover:bg-border hover:text-ink",
            )}
            aria-pressed={value === n}
            aria-label={SCORE_LABELS[n]}
          >
            {n}
          </button>
        ))}
      </div>
      <p className="text-xs text-subtle">
        {value ? SCORE_LABELS[value] : "Belum dinilai"}
      </p>
    </div>
  );
}
