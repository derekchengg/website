"use client";
import React from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import { cards } from "@/components/data/languageData";

const Hero = () => {
  const router = useRouter();

  const navigateToProjects = () => {
    router.push('/projects');
  };

  return (
    <main className="min-h-screen w-full bg-background flex items-center justify-center relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-primary/5 via-background to-background pointer-events-none" />
      <div className="relative w-full max-w-[1400px] mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 py-8 sm:py-12 md:py-16 lg:py-0">

        {/* Two-Column Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-[320px_1fr] gap-8 sm:gap-12 md:gap-16 lg:gap-20 xl:gap-32 items-start">

          {/* Left Sidebar */}
          <div className="lg:sticky lg:top-24 space-y-6 sm:space-y-7 md:space-y-8 flex flex-col">

            {/* Profile Header */}
            <div className="space-y-4 sm:space-y-5 md:space-y-6">
              {/* Profile Image */}
              <div className="w-20 h-20 sm:w-24 sm:h-24 md:w-28 md:h-28 rounded-full overflow-hidden ring-1 ring-border/30 mx-auto lg:mx-0">
                <Image
                  src="/images/icon.jpg"
                  alt="Derek Cheng"
                  width={112}
                  height={112}
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    target.src = 'https://images.unsplash.com/photo-1599566150163-29194dcaad36?w=112&h=112&fit=crop&crop=face';
                  }}
                />
              </div>

              <div className="space-y-1 text-center lg:text-left">
                <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold">
                  <span className="text-blue-500 dark:text-blue-400">Derek</span> Cheng
                </h1>
                <p className="text-xs sm:text-sm text-muted-foreground/70">
                  Computing Science Student @ SFU
                </p>
              </div>
            </div>

            {/* Role and Bio */}
            <div className="space-y-3 sm:space-y-4 text-center lg:text-left">
              <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-foreground">
                Frontend Developer
              </h2>
              <div className="text-xs sm:text-sm text-muted-foreground/80 leading-relaxed space-y-2 sm:space-y-3">
                <p>
                  I'm a computer science student and IT Technician at Simon Fraser University.
                  I've recently discovered my passion for web technologies and frontend development.
                </p>
                <p>
                  I typically work with HTML, CSS, JavaScript, and React, but I'm always
                  eager to learn new tools and frameworks. Most recently, I have been
                  learning more about SQL, React, and Next.js.
                </p>
              </div>
            </div>

            {/* Tech Stack */}
            <div className="space-y-3">
              <h3 className="text-xs font-semibold text-muted-foreground/60 uppercase tracking-wider text-center lg:text-left">
                Tech Stack
              </h3>
              <div className="grid grid-cols-4 gap-2 sm:gap-3 max-w-[180px] sm:max-w-[200px] mx-auto lg:mx-0">
                {cards.map((card, index) => (
                  <div key={index} className="w-8 h-8 sm:w-10 sm:h-10 flex items-center justify-center">
                    <Image
                      src={card.src}
                      alt={card.title}
                      width={40}
                      height={40}
                      className="w-full h-full object-contain"
                    />
                  </div>
                ))}
              </div>
            </div>

            {/* View All Projects Button */}
            <div className="flex justify-center lg:justify-start pt-2 sm:pt-4">
              <button
                onClick={navigateToProjects}
                className="w-full max-w-xs lg:max-w-none px-4 sm:px-5 py-2 sm:py-2.5 bg-primary text-primary-foreground rounded-lg text-xs sm:text-sm font-medium hover:bg-black/90 transition-all touch-manipulation"
              >
                View All Projects
              </button>
            </div>
          </div>

          {/* Featured Work - Right Side */}
          <div className="space-y-8 sm:space-y-10 md:space-y-12">

            {/* Section Header */}
            <div className="space-y-2 sm:space-y-3 text-center lg:text-left">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-foreground">
                Featured Work
              </h2>
              <p className="text-muted-foreground/70 text-sm sm:text-base">
                Here are some of my recent projects.
              </p>
            </div>

            {/* Projects Grid */}
            <div className="grid gap-6 sm:gap-8 md:gap-10">

              {/* Project 1 */}
              <article className="group space-y-3 sm:space-y-4 cursor-pointer">
                <div onClick={() => router.push('/projects/peaked-bouldering-website')} className="block">
                  <div className="flex items-start justify-between gap-3">
                    <h3 className="text-base sm:text-lg md:text-xl font-semibold text-foreground group-hover:text-primary transition-colors flex-1">
                      PEAKED Bouldering Website
                    </h3>
                    <svg className="w-4 h-4 sm:w-5 sm:h-5 flex-shrink-0 text-muted-foreground/40 group-hover:text-primary group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                  </div>

                  <p className="text-xs sm:text-sm md:text-base text-muted-foreground/80 leading-relaxed">
                    A responsive bouldering gym website with a complete membership purchase flow…
                  </p>

                  <div className="flex flex-wrap gap-1.5 sm:gap-2 pt-1 sm:pt-2">
                    {/* badges… */}
                  </div>
                </div>
              </article>

              {/* Project 2 */}
              <article className="group space-y-3 sm:space-y-4">
                <a href="https://github.com/derekchengg/Predicting-Stock-Volatility" target="_blank" rel="noopener noreferrer" className="block">
                  <div className="flex items-start justify-between gap-3">
                    <h3 className="text-base sm:text-lg md:text-xl font-semibold text-foreground group-hover:text-primary transition-colors flex-1">
                      Stock Volatility via Reddit Sentiment Analysis
                    </h3>
                    <svg className="w-4 h-4 sm:w-5 sm:h-5 flex-shrink-0 text-muted-foreground/40 group-hover:text-primary group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                  </div>
                  <p className="text-xs pt-4 sm:text-sm md:text-base text-muted-foreground/80 leading-relaxed">
                    This project analyzes whether Reddit sentiment which is analyzed from VADER sentiment API to see whether a post or comment is positive or negative from r/wallstreetbets and using that information as well as activity (posts/comments) on a stock if it can predict stock volatility.
                  </p>
                  <div className="flex flex-wrap gap-1.5 sm:gap-2 pt-1 sm:pt-2">
                    <span className="px-2 py-0.5 sm:px-2.5 sm:py-1 text-[10px] sm:text-xs bg-secondary/50 rounded-md border border-border/30">Python</span>
                    <span className="px-2 py-0.5 sm:px-2.5 sm:py-1 text-[10px] sm:text-xs bg-secondary/50 rounded-md border border-border/30">praw API</span>
                    <span className="px-2 py-0.5 sm:px-2.5 sm:py-1 text-[10px] sm:text-xs bg-secondary/50 rounded-md border border-border/30">yfinance API</span>
                    <span className="px-2 py-0.5 sm:px-2.5 sm:py-1 text-[10px] sm:text-xs bg-secondary/50 rounded-md border border-border/30">VADER Sentiment</span>
                  </div>
                </a>
              </article>

              {/* Project 3 */}
              <article className="group space-y-3 sm:space-y-4">
                <a href="https://github.com/derekchengg/SIAT-Issues-App" target="_blank" rel="noopener noreferrer" className="block">
                  <div className="flex items-start justify-between gap-3">
                    <h3 className="text-base sm:text-lg md:text-xl font-semibold text-foreground group-hover:text-primary transition-colors flex-1">
                      SFU SIAT Issue Tracker
                    </h3>
                    <svg className="w-4 h-4 sm:w-5 sm:h-5 flex-shrink-0 text-muted-foreground/40 group-hover:text-primary group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                  </div>
                  <p className="text-xs pt-4 sm:text-sm md:text-base text-muted-foreground/80 leading-relaxed">
                    A prototype issue tracker web application for SFU's School of Interactive Arts and Technology (SIAT) to help students and faculty report and manage technical issues within the department.
                  </p>
                  <div className="flex flex-wrap gap-1.5 sm:gap-2 pt-1 sm:pt-2">
                    <span className="px-2 py-0.5 sm:px-2.5 sm:py-1 text-[10px] sm:text-xs bg-secondary/50 rounded-md border border-border/30">HTML</span>
                    <span className="px-2 py-0.5 sm:px-2.5 sm:py-1 text-[10px] sm:text-xs bg-secondary/50 rounded-md border border-border/30">CSS</span>
                    <span className="px-2 py-0.5 sm:px-2.5 sm:py-1 text-[10px] sm:text-xs bg-secondary/50 rounded-md border border-border/30">Javascript</span>
                  </div>
                </a>
              </article>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Hero;