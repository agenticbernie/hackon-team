import Image from "next/image";
import { ContactEmail, LinkedInUrl, ecosystem, projects } from "@/lib/content";

export function Footer() {
  return (
    <footer className="border-t border-zinc-800">
      <div className="mx-auto max-w-6xl px-6 py-14">
        <div className="grid gap-10 lg:grid-cols-[minmax(0,1.2fr)_minmax(0,1fr)_minmax(0,1fr)]">
          <div>
            <Image
              src="/images/hackon-logo-full.png"
              alt="HackOn Team — Ignite. Work. Ship. Repeat. — Vietnam"
              width={1080}
              height={1080}
              className="h-28 w-auto object-contain mix-blend-screen"
            />
            <p className="mt-5 max-w-xs text-sm leading-relaxed text-zinc-400">
              Independent builder organization based in Vietnam.
            </p>
          </div>

          <nav aria-label="Projects">
            <h2 className="font-mono text-[11px] uppercase tracking-[0.22em] text-zinc-500">
              Projects
            </h2>
            <ul className="mt-4 space-y-2.5">
              {projects.map((project) => (
                <li key={project.id}>
                  <a
                    href="#build"
                    className="text-sm text-zinc-400 transition-colors hover:text-zinc-100"
                  >
                    {project.name}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <nav aria-label="Ecosystem and contact">
            <h2 className="font-mono text-[11px] uppercase tracking-[0.22em] text-zinc-500">
              Ecosystem
            </h2>
            <ul className="mt-4 space-y-2.5">
              {ecosystem.map((item) => (
                <li key={item.name}>
                  <a
                    href="#ecosystem"
                    className="text-sm text-zinc-400 transition-colors hover:text-zinc-100"
                  >
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>

            <h2 className="mt-8 font-mono text-[11px] uppercase tracking-[0.22em] text-zinc-500">
              Contact
            </h2>
            <ul className="mt-4 space-y-2.5">
              <li>
                <a
                  href={`mailto:${ContactEmail}`}
                  className="text-sm text-zinc-400 transition-colors hover:text-zinc-100"
                >
                  {ContactEmail}
                </a>
              </li>
              <li>
                <a
                  href={LinkedInUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="text-sm text-zinc-400 transition-colors hover:text-zinc-100"
                >
                  bernieweb3
                </a>
              </li>
            </ul>
          </nav>
        </div>

        <div className="mt-12 flex flex-col gap-3 border-t border-zinc-900 pt-6 sm:flex-row sm:items-center sm:justify-between">
          <p className="font-mono text-[11px] text-zinc-600">
            © 2026 HackOn Team. All rights reserved.
          </p>
          <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-zinc-600">
            Ignite. Work. Ship. Repeat.
          </p>
        </div>
      </div>
    </footer>
  );
}
