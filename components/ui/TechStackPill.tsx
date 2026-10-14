import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

/** Monospace pill used for every tech-stack / badge-style label. */
export function TechStackPill({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <span
      className={cn(
        "rounded border border-zinc-800 bg-zinc-900/40 px-2 py-1 font-mono text-[11px] leading-none text-zinc-400 transition-colors duration-300 group-hover:border-zinc-700",
        className,
      )}
    >
      {children}
    </span>
  );
}
