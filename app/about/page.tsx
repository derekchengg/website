import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import { SkillsList } from "@/components/skills-list";
import { ArrowRight, ArrowUpRight } from "lucide-react";

export const metadata: Metadata = {
  title: "About — Derek Cheng",
  description:
    "Frontend developer and Computing Science student at SFU who thinks like a designer. Building the web presence for JitJots, a science education non-profit.",
};

const focusAreas = [
  {
    title: "Frontend Development",
    description: "Next.js, TypeScript, React, and Tailwind CSS for fast, maintainable interfaces.",
  },
  {
    title: "Product Design",
    description: "Figma, design systems, and interaction details that make a layout feel obvious.",
  },
  {
    title: "Real-World Impact",
    description: "Volunteering with JitJots, where every shipped change reaches real schools and families.",
  },
];

export default function AboutPage() {
  return (
    <main className="min-h-screen w-full bg-background">
      <section className="max-w-4xl mx-auto px-6 md:px-12 lg:px-20 pt-28 pb-10">
        <div className="grid grid-cols-1 sm:grid-cols-[1fr_180px] gap-10 sm:gap-14 items-start">
          <div>
            <p className="text-[10px] font-semibold text-blue-500 uppercase tracking-[0.22em] mb-5">
              About
            </p>
            <h1 className="font-black tracking-tighter leading-[0.95] text-foreground text-[clamp(36px,6vw,56px)] mb-8">
              Hi, I&apos;m Derek.
            </h1>
            <div className="flex flex-col gap-5 text-sm sm:text-base text-foreground/80 leading-relaxed">
              <p>
                I&apos;m a frontend developer who thinks like a designer —
                I care as much about how an interface feels as how it&apos;s
                built. I&apos;m a Computing Science major with an Interactive
                Arts &amp; Technology minor at SFU, and I like sitting at the
                point where design decisions and engineering trade-offs meet.
              </p>
              <p>
                Most of my recent work has been building and maintaining the
                website for{" "}
                <a
                  href="https://jitjots.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-foreground font-medium underline underline-offset-2 hover:text-blue-500 transition-colors"
                >
                  JitJots
                </a>
                , a non-profit that runs hands-on science workshops for K-12
                students. It&apos;s the main way schools and community
                centers discover and book programs, which means every layout
                and content decision has a real audience behind it.
              </p>
              <p>
                I&apos;m drawn to projects where craft shows up in the
                details — type hierarchy, motion, the small states most
                people never notice. Outside of frontend work, I&apos;ve also
                explored the other side of computing science through a
                machine learning project on medical image classification.
              </p>
            </div>
          </div>

          <div className="w-32 h-32 sm:w-full sm:h-auto sm:aspect-square mx-auto sm:mx-0 rounded-full sm:rounded-3xl overflow-hidden ring-1 ring-border/10">
            <Image
              src="/images/icon.jpg"
              alt="Derek Cheng"
              width={360}
              height={360}
              className="w-full h-full object-cover object-center"
            />
          </div>
        </div>
      </section>

      {/* Focus areas */}
      <section className="max-w-4xl mx-auto px-6 md:px-12 lg:px-20 py-14 border-t border-border/30">
        <p className="text-[9px] font-semibold text-muted-foreground uppercase tracking-[0.22em] mb-6">
          Focus Areas
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          {focusAreas.map((area) => (
            <div
              key={area.title}
              className="rounded-2xl border border-border/50 bg-card p-5 flex flex-col gap-2"
            >
              <h3 className="text-sm font-semibold text-foreground">
                {area.title}
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {area.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Education */}
      <section className="max-w-4xl mx-auto px-6 md:px-12 lg:px-20 py-14 border-t border-border/30">
        <p className="text-[9px] font-semibold text-muted-foreground uppercase tracking-[0.22em] mb-6">
          Education
        </p>
        <div className="flex flex-col gap-1">
          <p className="text-base font-semibold text-foreground">
            Simon Fraser University
          </p>
          <p className="text-sm text-muted-foreground">
            BSc, Computing Science (Major) — Interactive Arts &amp; Technology (Minor)
          </p>
        </div>
      </section>

      {/* Skills */}
      <section className="max-w-4xl mx-auto px-6 md:px-12 lg:px-20 py-14 border-t border-border/30">
        <p className="text-[9px] font-semibold text-muted-foreground uppercase tracking-[0.22em] mb-6">
          Skills
        </p>
        <SkillsList />
      </section>

      {/* CTA */}
      <section className="max-w-4xl mx-auto px-6 md:px-12 lg:px-20 py-14 border-t border-border/30">
        <div className="flex gap-3 flex-wrap">
          <Link
            href="/projects"
            className="flex items-center gap-2 px-5 py-2.5 bg-primary text-primary-foreground rounded-full text-sm font-medium hover:opacity-90 active:scale-[0.97] transition-all duration-150"
          >
            View My Work <ArrowUpRight className="w-3.5 h-3.5" />
          </Link>
          <Link
            href="/contact"
            className="flex items-center gap-2 px-5 py-2.5 border border-border rounded-full text-sm font-medium hover:bg-muted transition-colors"
          >
            Get in Touch <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>
      </section>
    </main>
  );
}
