"use client";
import React from "react";
import Image from "next/image";
import { GradientPinContainer } from "@/components/ui/gradient-3d-pin";
import { projects } from "@/components/data/projectData";

export default function ProjectsPage() {
    return (
        <main className="h-screen w-full overflow-hidden">
            <section id="portfolio-section" className="snap-start min-h-screen w-full flex items-center justify-center">
                <div className="w-full h-full flex items-center justify-center p-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
                        {projects.map((project) => (
                            <GradientPinContainer key={project.key} title={project.linkTitle} href={project.href}>
                                <div className="flex flex-col p-4 tracking-tight text-slate-100/50 w-[20rem] h-[20rem]">
                                    <h3 className="max-w-xs !pb-2 !m-0 font-bold text-base text-slate-100">
                                        {project.title}
                                    </h3>
                                    <div className="text-base !m-0 !p-0 font-normal max-h-24 overflow-hidden">
                                        <span className="text-slate-500">{project.description}</span>
                                    </div>
                                    <div className="relative w-full h-[180px] mt-4 rounded-lg overflow-hidden">
                                        <Image
                                            src={project.image}
                                            alt={`${project.title} Screenshot`}
                                            fill
                                            className="object-contain p-2"
                                            onError={(e) => {
                                                const target = e.target as HTMLImageElement;
                                                target.src = 'https://via.placeholder.com/400x320/1a1a1a/ffffff?text=Project+Image';
                                            }}
                                            priority={project.key === "1"}
                                        />
                                    </div>
                                </div>
                            </GradientPinContainer>
                        ))}
                    </div>
                </div>
            </section>
        </main>
    );
}