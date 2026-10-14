import { Cpu, Home } from "lucide-react";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { Reveal } from "@/components/ui/Reveal";
import { ecosystem } from "@/lib/content";

const icons = [Home, Cpu];

export function EcosystemSection() {
  return (
    <section
      id="ecosystem"
      aria-labelledby="ecosystem-heading"
      className="scroll-mt-20 border-b border-zinc-900 py-24 sm:py-28"
    >
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeader
          index="04"
          kicker="Programs"
          title="Our Ecosystem"
          subtitle="We don't just build software; we build environments where other builders can thrive."
          titleId="ecosystem-heading"
        />

        <div className="mt-14 grid gap-6 lg:grid-cols-2">
          {ecosystem.map((item, index) => {
            const Icon = icons[index] ?? Home;
            return (
              <Reveal key={item.name} delay={index * 0.06} className="h-full">
                <article className="group flex h-full flex-col rounded-xl border border-zinc-800 bg-zinc-900/20 p-7 transition-[transform,border-color] duration-300 hover:-translate-y-0.5 hover:border-zinc-600 sm:p-9">
                  <span className="inline-flex h-10 w-10 items-center justify-center rounded-lg border border-zinc-800 bg-zinc-950 text-amber-400/80">
                    <Icon aria-hidden="true" className="h-4 w-4" />
                  </span>
                  <h3 className="mt-6 text-xl font-semibold tracking-tight text-zinc-100 sm:text-2xl">
                    {item.name}
                  </h3>
                  <p className="mt-2 font-mono text-[11px] uppercase tracking-[0.18em] text-zinc-500">
                    {item.meta}
                  </p>
                  <p className="mt-5 text-sm leading-relaxed text-zinc-400 sm:text-[15px]">
                    {item.description}
                  </p>
                </article>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
