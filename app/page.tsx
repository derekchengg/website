import Link from "next/link";
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
    timeline: p.timeline,
    liveLink: (p as { liveLink?: string }).liveLink,
  }));

export default function Home() {
  return (
    <main className="min-h-screen w-full bg-background">

      {/* Hero */}
      <section className="flex flex-col max-w-5xl mx-auto px-6 md:px-12 lg:px-20 pt-20 pb-10">

        {/* Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_260px] xl:grid-cols-[1fr_300px] gap-10 lg:gap-16 py-6">

          {/* Left */}
          <div className="flex flex-col">

            <div>
              <p className="text-[10px] font-semibold text-blue-500 uppercase tracking-[0.22em] mb-5">
                Frontend Developer &amp; Designer
              </p>
              <h1 className="font-black tracking-tighter leading-[0.88] text-foreground text-[clamp(58px,9.5vw,120px)]">
                Derek<br />Cheng
              </h1>
            </div>

            <div className="mt-16 flex flex-col gap-5">
              <p className="font-semibold tracking-tight leading-snug text-foreground text-[clamp(20px,2.2vw,28px)]">
                A frontend developer<br />who thinks like a designer.
              </p>
              <p className="text-sm text-foreground/75 leading-relaxed max-w-lg">
                Computing Science major, Interactive Arts &amp; Technology minor @ SFU.
                Currently building the web presence for JitJots, a non-profit
                that makes science fun for kids through workshops and activity sheets.
              </p>

              <div className="flex gap-3 flex-wrap">
                <a
                  href="#work"
                  className="flex items-center gap-2 px-5 py-2.5 bg-primary text-primary-foreground rounded-full text-sm font-medium hover:opacity-90 active:scale-[0.97] transition-all duration-150"
                >
                  View Work <ArrowDown className="w-3.5 h-3.5" />
                </a>
                <a
                  href="/resume.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-5 py-2.5 border border-border rounded-full text-sm font-medium hover:bg-muted transition-colors"
                >
                  Resume <ArrowUpRight className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>
          </div>

          {/* Photo */}
          <div className="hidden lg:block rounded-3xl overflow-hidden ring-1 ring-border/10">
            <Image
              src="/images/icon.jpg"
              alt="Derek Cheng"
              width={400}
              height={600}
              priority
              className="w-full h-full object-cover object-center"
            />
          </div>
        </div>

        {/* Stack */}
        <div className="pt-6 border-t border-border/30 mt-12">
          <p className="text-[9px] font-semibold text-muted-foreground uppercase tracking-[0.22em] mb-3">
            Stack
          </p>
          <div className="flex flex-wrap gap-3">
            {cards.map((card) => (
              <div
                key={card.title}
                title={card.title}
                className="w-10 h-10"
              >
                <Image
                  src={card.src}
                  alt={card.title}
                  width={40}
                  height={40}
                  className="w-full h-full object-contain"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Work */}
      <section
        id="work"
        className="max-w-5xl mx-auto px-6 md:px-12 lg:px-20 py-24"
      >
        <div className="flex items-center justify-between mb-10">
          <p className="text-[9px] font-semibold text-muted-foreground uppercase tracking-[0.22em]">
            Selected Work
          </p>
          <Link
            href="/projects"
            className="flex items-center gap-1 text-[9px] font-semibold text-muted-foreground/60 uppercase tracking-[0.22em] hover:text-foreground transition-colors"
          >
            All Projects <ArrowUpRight className="w-3 h-3" />
          </Link>
        </div>

        <div className="flex flex-col divide-y divide-border/40">
          {featuredProjects.map((project, index) => (
            <article
              key={project.title}
              className="group relative py-10 lg:py-14"
            >
              <Link
                href={project.href}
                className="absolute inset-0 rounded-sm outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                aria-label={`View ${index === 0 ? "case study" : "project"}: ${project.title}`}
              />
              <div className="grid grid-cols-1 lg:grid-cols-[2fr_3fr] gap-8 lg:gap-16 items-center">
                <div className="flex flex-col gap-3">
                  <span className="text-xs font-mono text-muted-foreground/40 tracking-widest">
                    {String(index + 1).padStart(2, "0")}
                  </span>

                  <div className="flex items-center gap-2 flex-wrap">
                    <h3 className="text-2xl md:text-3xl font-bold tracking-tight leading-tight group-hover:text-blue-500 transition-colors duration-200">
                      {project.title}
                    </h3>
                    {index === 0 && project.liveLink && (
                      <span className="text-[10px] font-semibold px-2 py-0.5 rounded-full bg-blue-500/10 text-blue-500 border border-blue-500/20">
                        Live
                      </span>
                    )}
                  </div>

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

                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {project.description}
                  </p>

                  <div className="flex items-center gap-1.5 text-sm font-medium text-muted-foreground group-hover:text-blue-500 transition-colors duration-200 mt-1">
                    {index === 0 ? "View case study" : "View project"}
                    <ArrowUpRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-200" />
                  </div>
                </div>

                <div className="overflow-hidden rounded-2xl bg-muted aspect-video order-first lg:order-last">
                  <Image
                    src={project.image}
                    alt={project.title}
                    width={800}
                    height={450}
                    className="w-full h-full object-cover group-hover:scale-[1.04] transition-transform duration-700 ease-out"
                  />
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>


      {/* Footer */}
      <footer className="max-w-5xl mx-auto px-6 md:px-12 lg:px-20 pt-8 pb-16 border-t border-border/30">
        <div className="flex items-center justify-between flex-wrap gap-4">
          <p className="text-xs text-muted-foreground">
            © 2026 Derek Cheng
          </p>
          <div className="flex items-center gap-6">
            <a
              href="https://github.com/derekchengg"
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs text-muted-foreground hover:text-foreground transition-colors"
            >
              GitHub
            </a>
            <a
              href="https://www.linkedin.com/in/derek--cheng/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs text-muted-foreground hover:text-foreground transition-colors"
            >
              LinkedIn
            </a>
          </div>
        </div>
      </footer>

    </main>
  );
}
