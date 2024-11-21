"use client";
import React from "react";
import Image from "next/image";
import { ModeToggle } from "./ui/ModeToggle";
import { FocusCards } from "./ui/focus-cards";
import { GradientPinContainer } from "./ui/gradient-3d-pin";
import { cards } from "@/components/data/languageData";
import { projects } from "@/components/data/projectData";
import { words } from "@/components/data/typewriterData";
import { BackgroundLines } from "./ui/background-lines";
import { TypewriterEffectSmooth } from "./ui/typewriter-effect";
import { Compare } from "./ui/compare";

const Hero = () => {
  return (
    <main className="h-screen w-screen overflow-y-scroll overflow-x-hidden snap-y snap-mandatory">
      {/* Canvas 1 */}
      <section id="landing-section" className="snap-start min-h-screen w-full flex items-center justify-center relative">
        <BackgroundLines className="absolute inset-0 w-full h-full">
          <div className="flex flex-col items-center space-y-4">
            <div className="flex flex-col items-center justify-center min-h-screen">
              <p className="text-neutral-600 dark:text-neutral-200 text-xs sm:text-base  ">
                Computing Science Student @ Simon Fraser University.
              </p>
              <TypewriterEffectSmooth words={words} />
              <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 space-x-0 md:space-x-4">
                <button className="w-40 h-10 rounded-xl bg-black border dark:border-white border-transparent text-white text-sm">
                  <a href="#aboutme-section"> About Me </a>
                </button>
                <button className="w-40 h-10 rounded-xl bg-white text-black border border-black  text-sm">
                  Portfolio
                </button>
              </div>
            </div>
          </div>
        </BackgroundLines>
        <div className="absolute top-4 right-4 z-50">
          <div className="fixed">
            <ModeToggle />
          </div>
        </div>
      </section>

      {/* Canvas 2 */}
      <section id="aboutme-section" className="snap-start min-h-screen w-full flex items-center justify-center">
        <div className="flex flex-col items-center justify-center px-4 space-y-6">
          <div className="w-48 h-48 rounded-full overflow-hidden">
            <Compare
              firstImage="./images/icon.jpg"
              secondImage="./images/bitmoji.png"
              firstImageClassName="w-full h-full object-cover"
              secondImageClassname="object-cover object-left-top"
              className="w-full h-full object-cover"
              slideMode="hover"
            />
          </div>
          <div className="py-5 text-center max-w-2xl">
            <p>
              As a Computing Science student at SFU, I&apos;m passionate about exploring both low-level systems programming
              and modern web development. I enjoy tackling diverse projects that challenge me to learn and grow,
              from optimizing C programs to building responsive web applications.
            </p>

            <p className="mt-4">
              When I&apos;m not coding, you&apos;ll find me bouldering, hiking, playing badminton,
              or enjoying Riot Games&apos; titles and dramas.
            </p>
          </div>
          <FocusCards cards={cards} />
        </div>
      </section>


      {/* Canvas 3 */}
      <section id="portfolio-section" className="snap-start min-h-screen w-full flex items-center justify-center ">
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
                        target.src = './api/placeholder/400/320';
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
};

export default Hero;