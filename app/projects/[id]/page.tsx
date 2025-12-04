import { projectsData } from "@/components/data/projectsData"
import { notFound } from "next/navigation"
import ProjectDetailPageClient from "./client"

interface ProjectPageProps {
  params: Promise<{ id: string }>
}

export function generateStaticParams() {
  return projectsData.map((project) => ({
    id: project.id,
  }))
}

export default async function ProjectDetailPage({ params }: ProjectPageProps) {
  const { id } = await params
  const project = projectsData.find((p) => p.id === id)

  if (!project) {
    notFound()
  }

  return <ProjectDetailPageClient project={project} />
}