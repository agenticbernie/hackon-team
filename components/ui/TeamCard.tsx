import Image from "next/image";
import { Linkedin } from "lucide-react";
import type { TeamMember } from "@/lib/content";

export function TeamCard({ member }: { member: TeamMember }) {
  return (
    <article className="group flex h-full flex-col overflow-hidden rounded-xl border border-zinc-800 bg-zinc-900/20 transition-[transform,border-color] duration-300 hover:-translate-y-0.5 hover:border-zinc-600">
      <div className="relative aspect-square overflow-hidden border-b border-zinc-800 bg-zinc-900">
        <Image
          src={member.image}
          alt={`Portrait of ${member.name}`}
          fill
          sizes="(min-width: 1024px) 360px, (min-width: 640px) 50vw, 100vw"
          className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
        />
      </div>

      <div className="flex flex-1 flex-col p-5">
        <div className="flex items-start justify-between gap-3">
          <div>
            <h3 className="text-base font-semibold tracking-tight text-zinc-100">
              {member.name}
            </h3>
            <p className="mt-1.5 font-mono text-[11px] uppercase leading-none tracking-[0.14em] text-amber-400/80">
              {member.role}
            </p>
          </div>
          {member.linkedin ? (
            <a
              href={member.linkedin}
              target="_blank"
              rel="noreferrer"
              aria-label={`${member.name} on LinkedIn`}
              className="rounded-md border border-zinc-800 p-1.5 text-zinc-500 transition-colors hover:border-zinc-600 hover:text-zinc-200"
            >
              <Linkedin aria-hidden="true" className="h-3.5 w-3.5" />
            </a>
          ) : null}
        </div>
        <p className="mt-4 text-[13px] leading-relaxed text-zinc-400">
          {member.bio}
        </p>
      </div>
    </article>
  );
}
