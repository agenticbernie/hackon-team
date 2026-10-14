import { SectionHeader } from "@/components/ui/SectionHeader";
import { Reveal } from "@/components/ui/Reveal";
import { stackGroups } from "@/lib/content";

export function TechStackSection() {
  return (
    <section
      id="stack"
      aria-labelledby="stack-heading"
      className="scroll-mt-20 border-b border-zinc-900 py-24 sm:py-28"
    >
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeader
          index="02"
          kicker="Capabilities"
          title="Our Technical Stack"
          subtitle="We choose tools based on reliability, developer experience, and production readiness."
          titleId="stack-heading"
        />

        <div className="mt-14 grid gap-px overflow-hidden rounded-xl border border-zinc-800 bg-zinc-800 sm:grid-cols-2 lg:grid-cols-3">
          {stackGroups.map((group, index) => {
            const Icon = group.icon;
            return (
              <Reveal
                key={group.title}
                delay={index * 0.04}
                className="bg-zinc-950 p-6 transition-colors duration-300 hover:bg-zinc-900/40 sm:p-7"
              >
                <div className="flex items-center gap-2.5">
                  <Icon
                    aria-hidden="true"
                    className="h-4 w-4 text-amber-400/70"
                  />
                  <h3 className="font-mono text-[11px] uppercase tracking-[0.2em] text-zinc-500">
                    {group.title}
                  </h3>
                </div>

                <ul className="mt-6 space-y-3">
                  {group.items.map((item) => (
                    <li
                      key={item.name}
                      className="flex flex-wrap items-baseline gap-x-2 gap-y-0.5"
                    >
                      <span className="font-mono text-[13px] text-zinc-200">
                        {item.name}
                      </span>
                      {item.note ? (
                        <span className="font-mono text-[11px] text-zinc-600">
                          {item.note}
                        </span>
                      ) : null}
                    </li>
                  ))}
                </ul>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
