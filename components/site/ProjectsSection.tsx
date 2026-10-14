import { SectionHeader } from "@/components/ui/SectionHeader";
import { ProjectCard } from "@/components/ui/ProjectCard";
import { Reveal } from "@/components/ui/Reveal";
import { projects } from "@/lib/content";

export function ProjectsSection() {
  return (
    <section
      id="build"
      aria-labelledby="build-heading"
      className="scroll-mt-20 border-b border-zinc-900 py-24 sm:py-28"
    >
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeader
          index="01"
          kicker="Shipped Work"
          title="What We Build & Ship"
          subtitle="We turn specific technical gaps into working systems."
          titleId="build-heading"
        />

        <div className="mt-14 space-y-6 lg:space-y-8">
          {projects.map((project) => (
            <Reveal key={project.id}>
              <ProjectCard project={project} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
