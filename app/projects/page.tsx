"use client"
import Link from "next/link"
import { projectsData } from "@/components/data/projectsData"
import { Badge } from "@/components/ui/badge"
import { ArrowUpRight } from "lucide-react"

export default function ProjectsPage() {
  return (
    <main className="min-h-screen w-full bg-background">
      <div className="max-w-[1100px] mx-auto px-4 sm:px-6 md:px-8 pt-24 pb-32">

        {/* Header */}
        <div className="mb-12">
          <h1 className="text-3xl sm:text-4xl font-bold tracking-tight mb-2">
            All Work
          </h1>
          <p className="text-sm text-muted-foreground">
            Frontend, design, and machine learning — {projectsData.length} projects.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          {projectsData.map((project, index) => (
            <Link
              key={project.id}
              href={`/projects/${project.id}`}
              className={[
                "group overflow-hidden rounded-2xl border border-border/50 bg-card",
                "hover:border-border hover:shadow-2xl hover:shadow-black/[0.08] dark:hover:shadow-black/40",
                "transition-all duration-300 ease-out flex flex-col",
                // First project spans full width — the most complete case study
                index === 0 ? "sm:col-span-2" : "",
              ].join(" ")}
            >
              {/* Image */}
              <div
                className={[
                  "overflow-hidden bg-muted flex-shrink-0",
                  index === 0 ? "h-52 sm:h-72" : "h-48 sm:h-56",
                ].join(" ")}
              >
                <img
                  src={project.cardImage}
                  alt={`${project.title} preview`}
                  className="w-full h-full object-cover group-hover:scale-[1.03] transition-transform duration-500 ease-out"
                />
              </div>

              {/* Content */}
              <div className="p-5 sm:p-6 flex flex-col gap-3 flex-1">
                <div className="flex items-start justify-between gap-3">
                  <div>
                    <h3
                      className={[
                        "font-semibold leading-snug",
                        index === 0 ? "text-lg" : "text-base",
                      ].join(" ")}
                    >
                      {project.title}
                    </h3>
                    {project.role && (
                      <p className="text-xs text-muted-foreground mt-0.5">
                        {project.role}
                      </p>
                    )}
                  </div>
                  <ArrowUpRight className="w-4 h-4 flex-shrink-0 mt-0.5 text-muted-foreground/30 group-hover:text-blue-500 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all duration-200" />
                </div>

                <p className="text-sm text-muted-foreground leading-relaxed line-clamp-2 flex-1">
                  {project.summary}
                </p>

                <div className="flex flex-wrap gap-1.5">
                  {project.techStack.slice(0, 4).map((tech) => (
                    <Badge
                      key={tech}
                      variant="secondary"
                      className="text-[10px] px-2 py-0.5"
                    >
                      {tech}
                    </Badge>
                  ))}
                  {project.techStack.length > 4 && (
                    <Badge variant="outline" className="text-[10px] px-2 py-0.5">
                      +{project.techStack.length - 4}
                    </Badge>
                  )}
                </div>
              </div>
            </Link>
          ))}
        </div>

      </div>
    </main>
  )
}
