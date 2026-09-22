import * as React from "react";
import { cn } from "@/lib/utils";

export const Input = React.forwardRef<HTMLInputElement, React.ComponentProps<"input">>(
  ({ className, type, ...props }, ref) => (
    <input
      type={type}
      ref={ref}
      className={cn(
        "flex h-11 w-full rounded-md border border-border bg-surface px-3 text-sm text-ink",
        "placeholder:text-subtle transition-[border-color,box-shadow] duration-150",
        "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring/30 focus-visible:border-forest",
        "disabled:opacity-40",
        className,
      )}
      {...props}
    />
  ),
);
Input.displayName = "Input";

export const Textarea = React.forwardRef<HTMLTextAreaElement, React.ComponentProps<"textarea">>(
  ({ className, ...props }, ref) => (
    <textarea
      ref={ref}
      className={cn(
        "flex min-h-28 w-full rounded-md border border-border bg-surface px-3 py-2.5 text-sm text-ink",
        "placeholder:text-subtle transition-[border-color,box-shadow] duration-150",
        "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring/30 focus-visible:border-forest",
        "disabled:opacity-40 resize-y",
        className,
      )}
      {...props}
    />
  ),
);
Textarea.displayName = "Textarea";
