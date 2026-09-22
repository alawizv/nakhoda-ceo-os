import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

export function Badge({
  className,
  tone = "neutral",
  children,
}: {
  className?: string;
  tone?: "neutral" | "forest" | "warn" | "danger" | "success";
  children: ReactNode;
}) {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium tracking-wide",
        tone === "neutral" && "bg-surface-2 text-muted",
        tone === "forest" && "bg-forest text-forest-fg",
        tone === "warn" && "bg-warn/15 text-warn",
        tone === "danger" && "bg-danger/12 text-danger",
        tone === "success" && "bg-success/12 text-success",
        className,
      )}
    >
      {children}
    </span>
  );
}
