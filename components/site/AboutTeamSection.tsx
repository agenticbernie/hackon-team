import { SectionHeader } from "@/components/ui/SectionHeader";
import { Reveal, RevealGroup, RevealItem } from "@/components/ui/Reveal";
import { TeamCard } from "@/components/ui/TeamCard";
import { team } from "@/lib/content";

export function AboutTeamSection() {
  return (
    <section
      id="team"
      aria-labelledby="team-heading"
      className="scroll-mt-20 border-b border-zinc-900 py-24 sm:py-28"
    >
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeader index="03" kicker="Who We Are" title="About & Core Team" titleId="team-heading" />

        <Reveal className="mt-12 max-w-3xl">
          <div className="space-y-5 border-l border-zinc-800 pl-6 text-sm leading-relaxed text-zinc-400 sm:text-[15px]">
            <p>
              HackOn Team was born from the trenches of hackathons. It started on
              October 8, 2024, as DevBros, a trio of UTC2 students competing in
              the Algorand Vietnam Hackathon. We evolved into DevPros, a 29+
              member remote/hybrid hackerhouse. On December 15, 2025, we spun up
              HackOn Team to focus on international technical competitions. By
              August 8, 2026, DevPros and HackOn Team officially merged into a
              single, unified independent builder organization.
            </p>
            <p className="font-mono text-[13px] uppercase tracking-[0.14em] text-zinc-300">
              We are still early. That&apos;s intentional.
            </p>
          </div>
        </Reveal>

        <RevealGroup className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {team.map((member) => (
            <RevealItem key={member.name} className="h-full">
              <TeamCard member={member} />
            </RevealItem>
          ))}
        </RevealGroup>
      </div>
    </section>
  );
}
