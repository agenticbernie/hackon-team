import { ArrowUpRight, Linkedin, Mail } from "lucide-react";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { Reveal } from "@/components/ui/Reveal";
import { ContactEmail, LinkedInUrl } from "@/lib/content";

export function ContactSection() {
  return (
    <section
      id="contact"
      aria-labelledby="contact-heading"
      className="scroll-mt-20 border-b border-zinc-900 py-24 sm:py-28"
    >
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeader
          index="05"
          kicker="Build With Us"
          title="Let's Build Something"
          subtitle="We are always looking for people who enjoy solving difficult problems and shipping real systems. You don't need a perfect idea; you need the willingness to build."
          titleId="contact-heading"
        />

        <div className="mt-14 grid gap-6 lg:grid-cols-2">
          <Reveal className="h-full">
            <article className="flex h-full flex-col rounded-xl border border-zinc-800 bg-zinc-900/20 p-7 sm:p-9">
              <h3 className="text-base font-semibold tracking-tight text-zinc-100">
                For Partnerships &amp; Collaborations
              </h3>
              <p className="mt-4 text-sm leading-relaxed text-zinc-400 sm:text-[15px]">
                If you represent an accelerator, sponsor, or technical partner,
                reach out directly to our lead.
              </p>

              <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
                <a
                  href={`mailto:${ContactEmail}`}
                  className="inline-flex items-center justify-center gap-2 rounded-md border border-zinc-800 px-4 py-2.5 font-mono text-[12px] text-zinc-300 transition-colors duration-200 hover:border-zinc-600 hover:text-zinc-100"
                >
                  <Mail aria-hidden="true" className="h-3.5 w-3.5" />
                  {ContactEmail}
                </a>
                <a
                  href={LinkedInUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center justify-center gap-2 rounded-md border border-zinc-800 px-4 py-2.5 font-mono text-[12px] text-zinc-300 transition-colors duration-200 hover:border-zinc-600 hover:text-zinc-100"
                >
                  <Linkedin aria-hidden="true" className="h-3.5 w-3.5" />
                  bernieweb3
                </a>
              </div>
            </article>
          </Reveal>

          <Reveal delay={0.06} className="h-full">
            <article className="flex h-full flex-col rounded-xl border border-zinc-800 bg-zinc-900/20 p-7 sm:p-9">
              <h3 className="text-base font-semibold tracking-tight text-zinc-100">
                For Builders &amp; Developers
              </h3>
              <p className="mt-4 text-sm leading-relaxed text-zinc-400 sm:text-[15px]">
                If you want to code, learn, or ship with us, join our physical
                and technical programs.
              </p>

              <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
                <a
                  href={`mailto:${ContactEmail}?subject=HackerHome%20Application`}
                  className="inline-flex items-center justify-center gap-2 rounded-md bg-gradient-to-b from-amber-300 to-amber-500 px-4 py-2.5 text-sm font-medium text-zinc-950 transition-colors duration-200 hover:from-amber-200 hover:to-amber-400"
                >
                  Apply to join HackerHome
                  <ArrowUpRight aria-hidden="true" className="h-4 w-4" />
                </a>
                <a
                  href="#ecosystem"
                  className="inline-flex items-center justify-center rounded-md border border-zinc-800 px-4 py-2.5 text-sm font-medium text-zinc-300 transition-colors duration-200 hover:border-zinc-600 hover:text-zinc-100"
                >
                  Explore Build Things Program
                </a>
              </div>
            </article>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
