"use client";
import React from "react";
import { useRouter } from "next/navigation";
import { words } from "@/components/data/typewriterData";
import { BackgroundLines } from "@/components/ui/background-lines";
import { TypewriterEffectSmooth } from "@/components/ui/typewriter-effect";
import Image from "next/image";
import { FocusCards } from "@/components/ui/focus-cards";
import { cards } from "@/components/data/languageData";

const Hero = () => {
  const router = useRouter();

  const navigateToProjects = () => {
    router.push('/projects');
  };

  return (
    <main className="min-h-screen w-full overflow-hidden">
      <section className="min-h-screen w-full flex items-center justify-center relative py-20">
        <BackgroundLines className="absolute inset-0 w-full h-full -z-10">
          <div />
        </BackgroundLines>
        <div className="flex flex-col items-center space-y-8 max-w-4xl px-4">
          <div className="flex flex-col items-center justify-center text-center">
            <div className="w-[150px] h-[150px] rounded-full overflow-hidden">
              <Image
                src="/images/icon.jpg"
                alt="Derek Cheng"
                width={300}
                height={300}
                className="aspect-square w-full h-full object-cover"
                onError={(e) => {
                  const target = e.target as HTMLImageElement;
                  target.src = 'https://images.unsplash.com/photo-1599566150163-29194dcaad36?w=300&h=300&fit=crop&crop=face';
                }}
              />
            </div>
            <TypewriterEffectSmooth words={words} />
            <p className="text-neutral-600 dark:text-neutral-200 text-xs sm:text-base mb-4">
              Computing Science Student @ Simon Fraser University
            </p>
            <p className="text-muted-foreground">
                Aspiring full-stack developer.
              </p>
          </div>

          <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 space-x-0 md:space-x-4 mt-8">
            <button
              className="w-40 h-10 rounded-xl bg-black border dark:border-white border-transparent text-white text-sm hover:bg-gray-800 transition-colors"
              onClick={navigateToProjects}
            >
              View Projects
            </button>
            
          </div>
          <div className="flex flex-col items-center space-y-4">
            <FocusCards cards={cards} />
          </div>
        </div>
      </section>
    </main>
  );
};

export default Hero;