"use client"
import Link from "next/link"
import { projectsData } from "@/components/data/projectsData"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ArrowRight } from "lucide-react"

export default function ProjectsPage() {
  return (
    <main className="min-h-screen w-full pt-20 pb-16">
      <section className="container mx-auto px-4 py-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">Projects</h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Welcome to my projects portfolio!
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projectsData.map((project) => (
            <Link key={project.id} href={`/projects/${project.id}`}>
              <Card className="h-full hover:shadow-lg hover:border-primary transition-all duration-300 cursor-pointer hover:-translate-y-1">
                <CardHeader>
                  <div className="flex items-start justify-between gap-2">
                    <div className="flex-1">
                      <img
                        src="/images/project1/hero.png"
                        alt="Design & Development Process"
                        className="w-full rounded-lg shadow-md py-8"
                      />
                      <CardTitle className="text-xl line-clamp-2">{project.title}</CardTitle>
                      <CardDescription className="mt-2">{project.role}</CardDescription>
                    </div>
                  </div>
                </CardHeader>

                <CardContent className="space-y-4">
                  <p className="text-sm text-foreground line-clamp-3">{project.summary}</p>

                  <div className="flex flex-wrap gap-2">
                    {project.techStack.slice(0, 3).map((tech) => (
                      <Badge key={tech} variant="secondary">
                        {tech}
                      </Badge>
                    ))}
                    {project.techStack.length > 3 && (
                      <Badge variant="outline">+{project.techStack.length - 3}</Badge>
                    )}
                  </div>

                  <div className="flex items-center gap-2 text-primary font-medium text-sm pt-2">
                    Read Case Study
                    <ArrowRight className="w-4 h-4" />
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