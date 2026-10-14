import { ArrowRight } from "lucide-react";
import { Reveal } from "@/components/ui/Reveal";

const domains = [
  "Intent-based Web3 payments",
  "AI-native applications",
  "Developer tooling",
];

export function Hero() {
  return (
    <section
      id="top"
      aria-labelledby="hero-heading"
      className="relative overflow-hidden border-b border-zinc-900"
    >
      <div
        aria-hidden="true"
        className="bg-technical-grid mask-fade-edges pointer-events-none absolute inset-0 opacity-60"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-40 left-1/2 h-[28rem] w-[48rem] -translate-x-1/2 rounded-full bg-amber-500/[0.07] blur-3xl"
      />

      <div className="relative mx-auto max-w-6xl px-6 pb-20 pt-24 sm:pt-32 lg:pt-40">
        <Reveal>
          <p className="font-mono text-xs uppercase tracking-[0.34em] text-zinc-500">
            Ignite. Work. Ship. Repeat.
          </p>
        </Reveal>

        <Reveal delay={0.06}>
          <h1
            id="hero-heading"
            className="mt-7 max-w-4xl text-balance text-4xl font-semibold leading-[1.06] tracking-tight text-zinc-100 sm:text-5xl lg:text-[3.75rem]"
          >
            We build the environments and the infrastructure where developers
            ship real products.
          </h1>
        </Reveal>

        <Reveal delay={0.12}>
          <p className="mt-7 max-w-2xl text-base leading-relaxed text-zinc-400 sm:text-lg">
            HackOn Team is an independent builder organization based in Vietnam.
            We operate physical hacker houses, run hands-on hardware programs,
            and develop software spanning intent-based Web3 payments, AI-native
            applications, and developer tooling.
          </p>
        </Reveal>

        <Reveal delay={0.18}>
          <div className="mt-10 flex flex-col gap-3 sm:flex-row sm:items-center">
            <a
              href="#build"
              className="inline-flex items-center justify-center gap-2 rounded-md bg-gradient-to-b from-amber-300 to-amber-500 px-5 py-3 text-sm font-medium text-zinc-950 transition-colors duration-200 hover:from-amber-200 hover:to-amber-400"
            >
              Explore What We Build
              <ArrowRight aria-hidden="true" className="h-4 w-4" />
            </a>
            <a
              href="#ecosystem"
              className="inline-flex items-center justify-center rounded-md border border-zinc-800 px-5 py-3 text-sm font-medium text-zinc-300 transition-colors duration-200 hover:border-zinc-600 hover:text-zinc-100"
            >
              Join Our Ecosystem
            </a>
          </div>
        </Reveal>

        <Reveal delay={0.24}>
          <ul className="mt-16 flex flex-wrap gap-x-8 gap-y-3 border-t border-zinc-900 pt-6">
            {domains.map((domain) => (
              <li
                key={domain}
                className="font-mono text-[11px] uppercase tracking-[0.18em] text-zinc-600"
              >
                {domain}
              </li>
            ))}
          </ul>
        </Reveal>
      </div>
    </section>
  );
}
