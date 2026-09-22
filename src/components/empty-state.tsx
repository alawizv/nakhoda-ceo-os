import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

export function EmptyState({
  title,
  body,
  action,
  className,
}: {
  title: string;
  body: string;
  action?: ReactNode;
  className?: string;
}) {
  return (
    <div
      className={cn(
        "rounded-xl border border-dashed border-border-strong bg-surface px-6 py-10 text-center",
        className,
      )}
    >
      <h3 className="font-display text-xl text-ink">{title}</h3>
      <p className="mx-auto mt-2 max-w-prose text-sm text-muted">{body}</p>
      {action ? <div className="mt-5 flex justify-center">{action}</div> : null}
    </div>
  );
}

export function Panel({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <section
      className={cn(
        "rounded-xl border border-border bg-surface p-5 shadow-soft md:p-6",
        className,
      )}
    >
      {children}
    </section>
  );
}

export function SectionKicker({ children }: { children: ReactNode }) {
  return (
    <p className="text-xs font-medium uppercase tracking-[0.16em] text-subtle">{children}</p>
  );
}
