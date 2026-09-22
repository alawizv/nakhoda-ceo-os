import { cn } from "@/lib/utils";

export function Mark({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 32 32"
      className={cn("size-8", className)}
      aria-hidden
    >
      <rect width="32" height="32" rx="8" className="fill-forest" />
      <polygon
        points="16,4 18.2,13.8 28,16 18.2,18.2 16,28 13.8,18.2 4,16 13.8,13.8"
        className="fill-forest-fg"
      />
      <circle cx="16" cy="16" r="2.4" className="fill-forest" />
    </svg>
  );
}
