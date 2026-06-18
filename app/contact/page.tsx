import Link from "next/link";
import type { Metadata } from "next";
import { IconBrandGithub, IconBrandLinkedin } from "@tabler/icons-react";
import { ArrowUpRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Contact — Derek Cheng",
  description:
    "Get in touch with Derek Cheng about frontend development, design, or JitJots.",
};

export default function ContactPage() {
  return (
    <main className="min-h-screen w-full bg-background">
      <section className="max-w-3xl mx-auto px-6 md:px-12 lg:px-20 pt-28 pb-24">
        <p className="text-[10px] font-semibold text-blue-500 uppercase tracking-[0.22em] mb-5">
          Contact
        </p>
        <h1 className="font-black tracking-tighter leading-[0.95] text-foreground text-[clamp(36px,6vw,56px)] mb-6">
          Let&apos;s connect.
        </h1>
        <p className="text-sm sm:text-base text-foreground/80 leading-relaxed max-w-lg mb-12">
          Whether it&apos;s frontend development, design, or JitJots&apos;
          mission of getting more kids excited about science — I&apos;m
          always up for a conversation. Reach out on GitHub or LinkedIn.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-lg">
          <a
            href="https://github.com/derekchengg"
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center justify-between gap-3 rounded-2xl border border-border/50 bg-card p-5 hover:border-border hover:shadow-lg transition-all duration-200"
          >
            <span className="flex items-center gap-3">
              <IconBrandGithub className="w-5 h-5 text-foreground" />
              <span className="text-sm font-semibold text-foreground">
                GitHub
              </span>
            </span>
            <ArrowUpRight className="w-4 h-4 text-muted-foreground/40 group-hover:text-blue-500 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all duration-200" />
          </a>

          <a
            href="https://www.linkedin.com/in/derek--cheng/"
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center justify-between gap-3 rounded-2xl border border-border/50 bg-card p-5 hover:border-border hover:shadow-lg transition-all duration-200"
          >
            <span className="flex items-center gap-3">
              <IconBrandLinkedin className="w-5 h-5 text-foreground" />
              <span className="text-sm font-semibold text-foreground">
                LinkedIn
              </span>
            </span>
            <ArrowUpRight className="w-4 h-4 text-muted-foreground/40 group-hover:text-blue-500 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all duration-200" />
          </a>
        </div>

        <p className="text-sm text-muted-foreground mt-14">
          Prefer to see the work first?{" "}
          <Link
            href="/projects"
            className="text-foreground font-medium underline underline-offset-2 hover:text-blue-500 transition-colors"
          >
            Check out my projects
          </Link>
          .
        </p>
      </section>
    </main>
  );
}
