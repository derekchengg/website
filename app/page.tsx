"use client";
import React from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import { cards } from "@/components/data/languageData";
import { projectsData } from "@/components/data/projectsData";
import { Badge } from "@/components/ui/badge";
import { ArrowUpRight, ArrowDown } from "lucide-react";

const featuredProjects = projectsData
  .filter((p) => p.featured)
  .map((p) => ({
    title: p.title,
    description: p.summary,
    tags: p.techStack,
    image: p.cardImage,
    href: `/projects/${p.id}`,
  }));

export default function Home() {
  const router = useRouter();

  return (
    <main className="min-h-screen w-full bg-background">

      {/* ── Hero ─────────────────────────────────────────────── */}
      <section className="min-h-[100svh] flex flex-col max-w-7xl mx-auto px-6 md:px-12 lg:px-20 pt-20 pb-10">

        {/* Two-col grid: text left, photo right */}
        <div className="flex-1 grid grid-cols-1 lg:grid-cols-[1fr_340px] xl:grid-cols-[1fr_400px] gap-10 lg:gap-16 min-h-0 py-6">

          {/* ── Left: all text ── */}
          <div className="flex flex-col">

            {/* Top: label + name */}
            <div>
              <p className="text-[10px] font-semibold text-blue-500 uppercase tracking-[0.22em] mb-5">
                Frontend Developer &amp; Designer
              </p>
              <h1
                className="font-black tracking-tighter leading-[0.88] text-foreground"
                style={{ fontSize: "clamp(58px, 9.5vw, 120px)" }}
              >
                Derek<br />Cheng
              </h1>
            </div>

            {/* Bottom: tagline + bio + CTAs — pushed to bottom */}
            <div className="mt-auto pt-10 flex flex-col gap-5">
              <p
                className="font-semibold tracking-tight leading-snug text-foreground/70"
                style={{ fontSize: "clamp(20px, 2.2vw, 28px)" }}
              >
                I design it.<br />I build it.
              </p>
              <p className="text-sm text-muted-foreground leading-relaxed max-w-lg">
                Aspiring frontend developer studying Computing Science and
                Interactive Arts &amp; Technology at SFU. Picking up design
                alongside code wasn&apos;t an accident. I wanted to understand both
                sides so I could take something from a Figma frame to a real,
                working interface without losing anything in between. My most
                recent work, JitJots, is a live science education site bringing
                science workshops to kids.
              </p>
              <div className="flex gap-3 flex-wrap">
                <button
                  onClick={() =>
                    document
                      .getElementById("work")
                      ?.scrollIntoView({ behavior: "smooth" })
                  }
                  className="flex items-center gap-2 px-5 py-2.5 bg-primary text-primary-foreground rounded-full text-sm font-medium hover:opacity-90 transition-opacity"
                >
                  View Work <ArrowDown className="w-3.5 h-3.5" />
                </button>
                <a
                  href="/resume.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-5 py-2.5 border border-border rounded-full text-sm font-medium hover:bg-muted transition-colors"
                >
                  Resume
                </a>
              </div>
            </div>
          </div>

          {/* ── Right: photo fills the column ── */}
          <div className="hidden lg:block rounded-3xl overflow-hidden ring-1 ring-border/10 min-h-0">
            <Image
              src="/images/icon.jpg"
              alt="Derek Cheng"
              width={400}
              height={600}
              className="w-full h-full object-cover object-center"
            />
          </div>
        </div>

        {/* Stack strip — anchored to bottom of section */}
        <div className="flex items-center gap-5 pt-6 border-t border-border/30 mt-6">
          <p className="text-[9px] font-semibold text-muted-foreground/40 uppercase tracking-[0.22em] shrink-0">
            Stack
          </p>
          <div className="flex items-center gap-4 flex-wrap">
            {cards.map((card) => (
              <div
                key={card.title}
                title={card.title}
                className="w-7 h-7 opacity-50 hover:opacity-100 transition-opacity duration-200"
              >
                <Image
                  src={card.src}
                  alt={card.title}
                  width={28}
                  height={28}
                  className="w-full h-full object-contain"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Selected Work ─────────────────────────────────────── */}
      <section
        id="work"
        className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20 py-24"
      >
        <div className="flex items-center justify-between mb-2">
          <p className="text-[9px] font-semibold text-muted-foreground/35 uppercase tracking-[0.22em]">
            Selected Work
          </p>
          <button
            onClick={() => router.push("/projects")}
            className="flex items-center gap-1 text-[9px] font-semibold text-muted-foreground/35 uppercase tracking-[0.22em] hover:text-foreground transition-colors"
          >
            All Projects <ArrowUpRight className="w-3 h-3" />
          </button>
        </div>

        <div className="flex flex-col divide-y divide-border/40">
          {featuredProjects.map((project, index) => (
            <article
              key={project.title}
              onClick={() => router.push(project.href)}
              onKeyDown={(e) => {
                if (e.key === "Enter" || e.key === " ") {
                  e.preventDefault();
                  router.push(project.href);
                }
              }}
              tabIndex={0}
              role="link"
              aria-label={`View case study: ${project.title}`}
              className="group py-10 lg:py-14 cursor-pointer outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 rounded-sm"
            >
              <div className="grid grid-cols-1 lg:grid-cols-[2fr_3fr] gap-8 lg:gap-16 items-center">
                <div className="flex flex-col gap-4">
                  <span className="text-[9px] font-mono text-muted-foreground/20 tracking-widest">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <h3 className="text-2xl md:text-3xl font-bold tracking-tight leading-tight group-hover:text-blue-500 transition-colors duration-200">
                    {project.title}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-1.5">
                    {project.tags.slice(0, 4).map((tag) => (
                      <Badge
                        key={tag}
                        variant="secondary"
                        className="text-[10px] px-2 py-0.5"
                      >
                        {tag}
                      </Badge>
                    ))}
                  </div>
                  <div className="flex items-center gap-1.5 text-xs font-medium text-muted-foreground/35 group-hover:text-blue-500 transition-colors duration-200">
                    View case study
                    <ArrowUpRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-200" />
                  </div>
                </div>

                <div className="overflow-hidden rounded-2xl bg-muted aspect-video">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-[1.04] transition-transform duration-700 ease-out"
                  />
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}
