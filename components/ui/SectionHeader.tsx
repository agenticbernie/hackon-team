import { cn } from "@/lib/utils";

interface SectionHeaderProps {
  index: string;
  kicker: string;
  title: string;
  subtitle?: string;
  /** Rendered on the <h2> so the parent <section> can reference it. */
  titleId?: string;
  className?: string;
}

export function SectionHeader({
  index,
  kicker,
  title,
  subtitle,
  titleId,
  className,
}: SectionHeaderProps) {
  return (
    <div className={cn("max-w-3xl", className)}>
      <p className="font-mono text-[11px] uppercase tracking-[0.28em]">
        <span className="text-amber-400/70">{index}</span>
        <span className="px-2 text-zinc-700">·</span>
        <span className="text-zinc-500">{kicker}</span>
      </p>
      <h2
        id={titleId}
        className="mt-4 text-3xl font-semibold tracking-tight text-zinc-100 sm:text-4xl"
      >
        {title}
      </h2>
      {subtitle ? (
        <p className="mt-4 max-w-2xl text-base leading-relaxed text-zinc-400">
          {subtitle}
        </p>
      ) : null}
    </div>
  );
}
