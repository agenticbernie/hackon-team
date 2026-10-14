import Image from "next/image";
import { ArrowUpRight, Github, Trophy } from "lucide-react";
import { TechStackPill } from "@/components/ui/TechStackPill";
import { cn } from "@/lib/utils";
import type { Project, ProjectMedia, ProjectStatus } from "@/lib/content";

const statusStyles: Record<
  ProjectStatus,
  { dot: string; chip: string; text: string }
> = {
  active: {
    dot: "bg-emerald-400",
    chip: "border-emerald-400/20 bg-emerald-400/[0.06]",
    text: "text-emerald-300/90",
  },
  concept: {
    dot: "bg-amber-400",
    chip: "border-amber-400/20 bg-amber-400/[0.06]",
    text: "text-amber-300/90",
  },
  past: {
    dot: "bg-zinc-500",
    chip: "border-zinc-700 bg-zinc-800/40",
    text: "text-zinc-300",
  },
};

export function ProjectCard({ project }: { project: Project }) {
  const status = statusStyles[project.status];

  return (
    <article className="group rounded-xl border border-zinc-800 bg-gradient-to-b from-zinc-900/30 to-zinc-950 p-6 transition-[transform,border-color] duration-300 hover:-translate-y-0.5 hover:border-zinc-600 sm:p-8">
      <div className="grid gap-8 lg:grid-cols-[minmax(0,1.05fr)_minmax(0,1fr)] lg:gap-10">
        <div className="min-w-0">
          <span
            className={cn(
              "inline-flex items-center gap-2 rounded-full border px-2.5 py-1 font-mono text-[11px] uppercase leading-none tracking-[0.14em]",
              status.chip,
              status.text,
            )}
          >
            <span className={cn("h-1.5 w-1.5 rounded-full", status.dot)} />
            {project.statusLabel}
          </span>

          <h3 className="mt-6 text-2xl font-semibold tracking-tight text-zinc-100 sm:text-[1.75rem]">
            {project.name}
          </h3>
          <p className="mt-2 font-mono text-[13px] text-zinc-500">
            {project.subtitle}
          </p>
          {project.description ? (
            <p className="mt-5 text-sm leading-relaxed text-zinc-400 sm:text-[15px]">
              {project.description}
            </p>
          ) : null}

          {project.achievement ? (
            <p className="mt-6 inline-flex items-start gap-2 rounded-md border border-zinc-800 bg-zinc-900/40 px-3 py-2 font-mono text-[11px] uppercase leading-relaxed tracking-[0.1em] text-zinc-400">
              <Trophy
                aria-hidden="true"
                className="mt-px h-3.5 w-3.5 shrink-0 text-amber-400/80"
              />
              {project.achievement}
            </p>
          ) : null}

          {project.stack ? (
            <div className="mt-6 flex flex-wrap gap-2">
              {project.stack.map((tech) => (
                <TechStackPill key={tech}>{tech}</TechStackPill>
              ))}
            </div>
          ) : null}

          {project.deployments ? (
            <div className="mt-6">
              <p className="font-mono text-[10px] uppercase tracking-[0.24em] text-zinc-600">
                Target deployments
              </p>
              <div className="mt-3 flex flex-wrap gap-2">
                {project.deployments.map((target) => (
                  <TechStackPill key={target}>{target}</TechStackPill>
                ))}
              </div>
            </div>
          ) : null}

          {project.repo ? (
            <a
              href={project.repo}
              target="_blank"
              rel="noreferrer"
              className="mt-7 inline-flex items-center gap-2 font-mono text-[11px] uppercase tracking-[0.18em] text-zinc-500 transition-colors hover:text-zinc-200"
            >
              <Github aria-hidden="true" className="h-3.5 w-3.5" />
              Source
              <ArrowUpRight aria-hidden="true" className="h-3 w-3" />
            </a>
          ) : null}
        </div>

        <div className="space-y-4">
          {project.media.map((item, index) => (
            <ProjectMediaBlock
              key={`${project.id}-${index}`}
              media={item}
              projectName={project.name}
            />
          ))}
        </div>
      </div>
    </article>
  );
}

function ProjectMediaBlock({
  media,
  projectName,
}: {
  media: ProjectMedia;
  projectName: string;
}) {
  if (media.kind === "placeholder") {
    return (
      <div className="flex aspect-video items-center justify-center rounded-lg border border-dashed border-zinc-800 bg-zinc-900/20 px-6 text-center">
        <span className="font-mono text-[11px] uppercase tracking-[0.18em] text-zinc-600">
          {media.label}
        </span>
      </div>
    );
  }

  if (media.kind === "video") {
    return (
      <figure className="overflow-hidden rounded-lg border border-zinc-800 bg-zinc-950">
        <div className="aspect-video">
          <iframe
            src={`https://www.youtube.com/embed/${media.src}`}
            title={`${projectName} — ${media.alt}`}
            loading="lazy"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
            className="h-full w-full"
          />
        </div>
        {media.caption ? <MediaCaption>{media.caption}</MediaCaption> : null}
      </figure>
    );
  }

  return (
    <figure className="overflow-hidden rounded-lg border border-zinc-800 bg-zinc-950">
      <Image
        src={media.src}
        alt={media.alt}
        width={media.width}
        height={media.height}
        sizes="(min-width: 1024px) 480px, 100vw"
        className="h-auto w-full"
      />
      {media.caption ? <MediaCaption>{media.caption}</MediaCaption> : null}
    </figure>
  );
}

function MediaCaption({ children }: { children: React.ReactNode }) {
  return (
    <figcaption className="border-t border-zinc-800 px-4 py-3 font-mono text-[11px] text-zinc-500">
      {children}
    </figcaption>
  );
}
