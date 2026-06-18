import Link from "next/link";
import Image from "next/image";
import { projectsData } from "@/components/data/projectsData";
import { Badge } from "@/components/ui/badge";
import { SkillsList } from "@/components/skills-list";
import { ArrowUpRight, ArrowRight, ArrowDown } from "lucide-react";

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
                <Link
                  href="/contact"
                  className="flex items-center gap-2 px-5 py-2.5 border border-border rounded-full text-sm font-medium hover:bg-muted transition-colors"
                >
                  Get in Touch <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>
          </div>

          {/* Photo */}
          <div className="order-first lg:order-last w-32 h-32 sm:w-40 sm:h-40 mx-auto lg:mx-0 lg:w-full lg:h-full rounded-full lg:rounded-3xl overflow-hidden ring-1 ring-border/10">
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
          <p className="text-[9px] font-semibold text-muted-foreground uppercase tracking-[0.22em] mb-4">
            Skills
          </p>
          <SkillsList />
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

      {/* CTA */}
      <section className="max-w-5xl mx-auto px-6 md:px-12 lg:px-20 pb-24">
        <div className="rounded-3xl border border-border/50 bg-muted/30 px-8 py-14 sm:px-14 sm:py-16 text-center flex flex-col items-center gap-5">
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight">
            Want to know more?
          </h2>
          <p className="text-sm text-muted-foreground max-w-md">
            I&apos;m always happy to talk frontend, design, or JitJots&apos;
            mission of getting more kids excited about science.
          </p>
          <div className="flex gap-3 flex-wrap justify-center">
            <Link
              href="/about"
              className="flex items-center gap-2 px-5 py-2.5 bg-primary text-primary-foreground rounded-full text-sm font-medium hover:opacity-90 active:scale-[0.97] transition-all duration-150"
            >
              About Me
            </Link>
            <Link
              href="/contact"
              className="flex items-center gap-2 px-5 py-2.5 border border-border rounded-full text-sm font-medium hover:bg-muted transition-colors"
            >
              Get in Touch <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </div>
      </section>

    </main>
  );
}
