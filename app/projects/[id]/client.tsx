"use client"
import Link from "next/link"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ArrowLeft, ExternalLink } from "lucide-react"

interface Project {
  id: string
  title: string
  role: string
  timeline: string
  summary: string
  techStack: string[]
  link: string
  problem: string
  research: string
  process: string
  solution: string
  reflection: string[]
  images?: {
    process?: string
    solution?: string
  }
}

interface ProjectDetailPageClientProps {
  project: Project
}

export default function ProjectDetailPageClient({ project }: ProjectDetailPageClientProps) {
  return (
    <main className="min-h-screen w-full bg-background">
      {/* Hero Section */}
      <section className="border-b border-border">
        <div className="container mx-auto pt-16 pb-8 sm:px-6 md:px-8 px-4 md:py-16 lg:py-20">
          <div className="max-w-4xl mx-auto space-y-6 sm:space-y-8">
            {/* Project Hero Image */}
            <img
              src="/images/project1/hero.png"
              alt="Design & Development Process"
              className="w-full rounded-lg shadow-md py-4 sm:py-6 md:py-8"
            />
            
            {/* Project Title and Summary */}
            <div className="space-y-3 sm:space-y-4">
              <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-balance leading-tight">
                {project.title}
              </h1>
              <p className="text-sm sm:text-base md:text-lg lg:text-xl text-muted-foreground leading-relaxed text-pretty">
                {project.summary}
              </p>
            </div>

            {/* Context Grid */}
            <div className="grid grid-cols-1 xs:grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8 pt-6 sm:pt-8 border-t border-border">
              <div>
                <p className="text-xs sm:text-sm font-semibold text-muted-foreground mb-1.5 sm:mb-2">
                  MY ROLE
                </p>
                <p className="text-sm sm:text-base font-medium">{project.role}</p>
              </div>
              <div>
                <p className="text-xs sm:text-sm font-semibold text-muted-foreground mb-1.5 sm:mb-2">
                  TIMELINE
                </p>
                <p className="text-sm sm:text-base font-medium">{project.timeline}</p>
              </div>
              <div>
                <p className="text-xs sm:text-sm font-semibold text-muted-foreground mb-1.5 sm:mb-2">
                  TECH STACK
                </p>
                <div className="flex flex-wrap gap-1.5 sm:gap-2">
                  {project.techStack.map((tech) => (
                    <Badge key={tech} variant="secondary" className="text-[10px] sm:text-xs">
                      {tech}
                    </Badge>
                  ))}
                </div>
              </div>
              <div>
                <p className="text-xs sm:text-sm font-semibold text-muted-foreground mb-1.5 sm:mb-2">
                  LINK
                </p>
                <Button asChild variant="outline" size="sm" className="w-full sm:w-auto text-xs sm:text-sm">
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2"
                  >
                    <ExternalLink className="h-3 w-3 sm:h-4 sm:w-4" />
                    Visit Website
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section className="container mx-auto px-4 sm:px-6 md:px-8 pb-24 pt-8 sm:py-16 md:py-20 lg:py-24">
        <div className="max-w-4xl mx-auto space-y-12 sm:space-y-16 md:space-y-20">
          
          {/* The Problem */}
          <Section title="The Problem" content={project.problem} />

          {/* Research & Planning */}
          <Section title="Research & Planning" content={project.research} />

          {/* Design & Development */}
          <Section title="Design & Development" content={project.process} />

          {/* Process Images */}
          <img
            src="/images/project1/process1.png"
            alt="Design & Development Process"
            className="w-full rounded-lg shadow-md"
          />
          <img
            src="/images/project1/process2.png"
            alt="Design & Development Process"
            className="w-full rounded-lg shadow-md"
          />

          {/* Results & Learning */}
          <Section title="Results & Learning" content={project.solution} />

          {/* Solution Images */}
          <img
            src="/images/project1/solution1.png"
            alt="Final Solution"
            className="w-full rounded-lg shadow-md"
          />
          <img
            src="/images/project1/solution2.png"
            alt="Final Solution"
            className="w-full rounded-lg shadow-md"
          />
          <img
            src="/images/project1/solution3.png"
            alt="Final Solution"
            className="w-full rounded-lg shadow-md"
          />

          {/* Key Reflections */}
          {project.reflection && project.reflection.length > 0 && (
            <div className="pt-6 sm:pt-8 border-t border-border">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-8 sm:mb-10 md:mb-12">
                Key Reflections
              </h2>
              <div className="grid grid-cols-1 gap-4 sm:gap-5 md:gap-6">
                {project.reflection.map((takeaway, index) => (
                  <div key={index} className="space-y-2">
                    <p className="text-sm sm:text-base leading-relaxed text-foreground">
                      {index + 1}) {takeaway}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Back Button */}
          <div className="pt-8 sm:pt-10 md:pt-12 border-t border-border">
            <Link href="/projects">
              <Button 
                size="lg" 
                variant="outline" 
                className="gap-2 bg-transparent text-sm sm:text-base w-full sm:w-auto"
              >
                <ArrowLeft className="w-3 h-3 sm:w-4 sm:h-4" />
                View All Projects
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
    <div className="space-y-4 sm:space-y-5 md:space-y-6">
      <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold">{title}</h2>
      <div className="space-y-3 sm:space-y-4">
        {content.split("\n\n").map((paragraph, index) => (
          <p key={index} className="text-sm sm:text-base md:text-lg leading-relaxed text-foreground">
            {paragraph}
          </p>
        ))}
      </div>
    </div>
  )
}