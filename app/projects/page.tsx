"use client"
import Link from "next/link"
import { projectsData } from "@/components/data/projectsData"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ArrowRight } from "lucide-react"

export default function ProjectsPage() {
  return (
    <main className="min-h-screen w-full pt-16 sm:pt-20 pb-12 sm:pb-16">
      <section className="container mx-auto px-4 sm:px-6 md:px-8 py-6 sm:py-8">
        <div className="text-center mb-8 sm:mb-10 md:mb-12">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-3 sm:mb-4">
            Projects
          </h1>
          <p className="text-sm sm:text-base md:text-lg text-muted-foreground max-w-2xl mx-auto px-4">
            Welcome to my projects portfolio!
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 md:gap-6">
          {projectsData.map((project) => (
            <Link key={project.id} href={`/projects/${project.id}`}>
              <Card className="h-full hover:shadow-lg hover:border-primary transition-all duration-300 cursor-pointer hover:-translate-y-1">
                <CardHeader className="p-4 sm:p-6">
                  <div className="flex items-start justify-between gap-2">
                    <div className="flex-1">
                      {/* Project Hero Image */}
                      <img
                        src="/images/project1/hero.png"
                        alt="Project preview"
                        className="w-full rounded-lg shadow-md py-4 sm:py-6 md:py-8"
                      />
                      <CardTitle className="text-base sm:text-lg md:text-xl line-clamp-2">
                        {project.title}
                      </CardTitle>
                      <CardDescription className="mt-1.5 sm:mt-2 text-xs sm:text-sm">
                        {project.role}
                      </CardDescription>
                    </div>
                  </div>
                </CardHeader>

                <CardContent className="space-y-3 sm:space-y-4 p-4 sm:p-6 pt-0 sm:pt-0">
                  <p className="text-xs sm:text-sm text-foreground line-clamp-3 leading-relaxed">
                    {project.summary}
                  </p>

                  {/* Tech badges */}
                  <div className="flex flex-wrap gap-1.5 sm:gap-2">
                    {project.techStack.slice(0, 3).map((tech) => (
                      <Badge key={tech} variant="secondary" className="text-[10px] sm:text-xs">
                        {tech}
                      </Badge>
                    ))}
                    {project.techStack.length > 3 && (
                      <Badge variant="outline" className="text-[10px] sm:text-xs">
                        +{project.techStack.length - 3}
                      </Badge>
                    )}
                  </div>

                  <div className="flex items-center gap-2 text-primary font-medium text-xs sm:text-sm pt-1 sm:pt-2">
                    Read Case Study
                    <ArrowRight className="w-3 h-3 sm:w-4 sm:h-4" />
                  </div>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>
      </section>
    </main>
  )
}