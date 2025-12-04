"use client"
import Link from "next/link"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ArrowLeft } from "lucide-react"

interface Project {
  id: string
  title: string
  role: string
  timeline: string
  summary: string
  techStack: string[]
  problem: string
  research: string
  process: string
  solution: string
  reflection: string[]
}

interface ProjectDetailPageClientProps {
  project: Project
}

export default function ProjectDetailPageClient({ project }: ProjectDetailPageClientProps) {
  return (
    <main className="min-h-screen w-full bg-background">
      <section className="border-b border-border">
        <div className="container mx-auto px-4 py-16 md:py-24">
          <div className="max-w-4xl mx-auto space-y-8">
            {/* Project Title and Summary */}
            <div className="space-y-4">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-balance">
                {project.title}
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground leading-relaxed text-pretty">
                {project.summary}
              </p>
            </div>

            {/* Context Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pt-8 border-t border-border">
              <div>
                <p className="text-sm font-semibold text-muted-foreground mb-2">MY ROLE</p>
                <p className="text-base font-medium">{project.role}</p>
              </div>
              <div>
                <p className="text-sm font-semibold text-muted-foreground mb-2">TIMELINE</p>
                <p className="text-base font-medium">{project.timeline}</p>
              </div>
              <div>
                <p className="text-sm font-semibold text-muted-foreground mb-2">TECH STACK</p>
                <div className="flex flex-wrap gap-2">
                  {project.techStack.map((tech) => (
                    <Badge key={tech} variant="secondary" className="text-xs">
                      {tech}
                    </Badge>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="container mx-auto px-4 py-16 md:py-24">
        <div className="max-w-4xl mx-auto space-y-20">
          {/* The Problem */}
          <Section title="The Problem" content={project.problem} />

          {/* Research & Planning */}
          <Section title="Research & Planning" content={project.research} />

          {/* Design & Development */}
          <Section title="Design & Development" content={project.process} />

          {/* Results & Learning */}
          <Section title="Results & Impact" content={project.solution} />

          {/* Key Reflections */}
          {project.reflection && project.reflection.length > 0 && (
            <div className="pt-8 border-t border-border">
              <h2 className="text-3xl md:text-4xl font-bold mb-12">Key Reflections</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {project.reflection.map((item, index) => (
                  <div key={index} className="space-y-2">
                    <p className="text-sm font-semibold text-primary">0{index + 1}</p>
                    <p className="text-base leading-relaxed text-foreground">{item}</p>
                  </div>
                ))}
              </div>
            </div>
          )}

          <div className="pt-12 border-t border-border">
            <Link href="/">
              <Button size="lg" variant="outline" className="gap-2 bg-transparent">
                <ArrowLeft className="w-4 h-4" />
                Back to Home
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </main>
  )
}

function Section({ title, content }: { title: string; content: string }) {
  return (
    <div className="space-y-6">
      <h2 className="text-3xl md:text-4xl font-bold">{title}</h2>
      <div className="space-y-4">
        {content.split("\n\n").map((paragraph, index) => (
          <p key={index} className="text-base md:text-lg leading-relaxed text-foreground">
            {paragraph}
          </p>
        ))}
      </div>
    </div>
  )
}