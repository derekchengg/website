"use client";
import React from "react";
import { useRouter } from "next/navigation";
import { words } from "@/components/data/typewriterData";
import { BackgroundLines } from "@/components/ui/background-lines";
import { TypewriterEffectSmooth } from "@/components/ui/typewriter-effect";

const Hero = () => {
  const router = useRouter();

  const navigateToAboutMe = () => {
    router.push('/about');
  };

  const navigateToProjects = () => {
    router.push('/projects');
  };

  return (
    <main className="h-screen w-full overflow-hidden">
      <section className="h-full w-full flex items-center justify-center relative">
        <BackgroundLines className="absolute inset-0 w-full h-full -z-10">
          <div />
        </BackgroundLines>
        <div className="flex flex-col items-center space-y-4">
          <div className="flex flex-col items-center justify-center">
            <p className="text-neutral-600 dark:text-neutral-200 text-xs sm:text-base mb-4">
              Computing Science Student @ Simon Fraser University.
            </p>
            <TypewriterEffectSmooth words={words} />
            <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 space-x-0 md:space-x-4 mt-6">
              <button
                className="w-40 h-10 rounded-xl bg-black border dark:border-white border-transparent text-white text-sm hover:bg-gray-800 transition-colors"
                onClick={navigateToAboutMe}
              >
                About Me
              </button>
              <button
                className="w-40 h-10 rounded-xl bg-white text-black border border-black text-sm hover:bg-gray-100 transition-colors"
                onClick={navigateToProjects}
              >
                Projects
              </button>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Hero;