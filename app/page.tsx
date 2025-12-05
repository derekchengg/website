"use client";
import React from "react";
import { useRouter } from "next/navigation";
import { words } from "@/components/data/typewriterData";
import { TypewriterEffectSmooth } from "@/components/ui/typewriter-effect";
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
      <div className="relative w-full max-w-[1400px] mx-auto px-8 md:px-16">
        
        {/* Two-Column Layout */}
        <div className="grid lg:grid-cols-[320px_1fr] gap-20 lg:gap-32 items-start">
          
          {/* Left Side */}
          <div className="lg:sticky lg:top-24 space-y-8 flex flex-col">
            
            {/* Profile Header */}
            <div className="space-y-6">
              <div className="w-28 h-28 rounded-full overflow-hidden ring-1 ring-border/30">
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
              
              <div className="space-y-1">
                <TypewriterEffectSmooth words={words} />
                <p className="text-sm text-muted-foreground/70">
                  Computing Science Student @ SFU
                </p>
              </div>
            </div>

            {/* Bio */}
            <div className="space-y-3">
              <h1 className="text-2xl font-bold text-foreground leading-tight">
                Frontend Developer
              </h1>
              <div className="text-sm text-muted-foreground/80 leading-relaxed space-y-3">
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

            {/* Tech Stack Cards */}
            <div className="space-y-3">
              <h2 className="text-xs font-semibold text-muted-foreground/60 uppercase tracking-wider">
                Tech Stack
              </h2>
              <div className="grid grid-cols-4 gap-3 max-w-[200px]">
                {cards.map((card, index) => (
                  <div key={index} className="w-10 h-10 flex items-center justify-center">
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

            {/* View All Projects */}
            <div className="flex justify-center pt-4">
              <button
                onClick={navigateToProjects}
                className="w-full px-5 py-2.5 bg-primary text-primary-foreground rounded-lg text-sm font-medium hover:bg-primary/90 transition-all"
              >
                View All Projects
              </button>
            </div>
          </div>

          {/* Featured Work/Right Side */}
          <div className="space-y-16">
            
            <div className="space-y-3">
              <h2 className="text-3xl font-bold text-foreground">Featured Work</h2>
              <p className="text-muted-foreground/70 text-base">
                Here are some of my recent projects.
              </p>
            </div>

            <div className="grid gap-12">
              
              {/* Project 1 */}
              <article className="group space-y-4 cursor-pointer" onClick={() => router.push('/projects/peaked-bouldering-website')}>
                <div className="flex items-start justify-between">
                  <h3 className="text-xl font-semibold text-foreground group-hover:text-primary transition-colors">
                    PEAKED Bouldering Website
                  </h3>
                  <svg className="w-5 h-5 text-muted-foreground/40 group-hover:text-primary group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                </div>
                <p className="text-muted-foreground/80 leading-relaxed max-w-2xl">
                  A responsive bouldering gym website with a complete membership purchase flow, built from scratch using vanilla HTML, CSS, and JavaScript.
                </p>
                <div className="flex flex-wrap gap-2 pt-2">
                  <span className="px-2.5 py-1 text-xs bg-secondary/50 rounded-md border border-border/30">HTML</span>
                  <span className="px-2.5 py-1 text-xs bg-secondary/50 rounded-md border border-border/30">CSS</span>
                  <span className="px-2.5 py-1 text-xs bg-secondary/50 rounded-md border border-border/30">JavaScript</span>
                  <span className="px-2.5 py-1 text-xs bg-secondary/50 rounded-md border border-border/30">Figma</span>
                  <span className="px-2.5 py-1 text-xs bg-secondary/50 rounded-md border border-border/30">Git</span>
                </div>
              </article>

              {/* Project 2 */}
              <article className="group space-y-4">
                <a href="https://github.com/derekchengg/Predicting-Stock-Volatility" target="_blank" rel="noopener noreferrer" className="block">
                  <div className="flex items-start justify-between">
                    <h3 className="text-xl font-semibold text-foreground group-hover:text-primary transition-colors">
                      Stock Volatility via Reddit Sentiment Analysis
                    </h3>
                    <svg className="w-5 h-5 text-muted-foreground/40 group-hover:text-primary group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                  </div>
                  <p className="text-muted-foreground/80 leading-relaxed max-w-2xl">
                    This project analyzes whether Reddit sentiment which is analyzed from VADER sentiment API to see whether a post or comment is positive or negative from r/wallstreetbets and using that information as well as activity (posts/comments) on a stock if it can predict stock volatility.
                  </p>
                  <div className="flex flex-wrap gap-2 pt-2">
                    <span className="px-2.5 py-1 text-xs bg-secondary/50 rounded-md border border-border/30">Python</span>
                    <span className="px-2.5 py-1 text-xs bg-secondary/50 rounded-md border border-border/30">praw API</span>
                    <span className="px-2.5 py-1 text-xs bg-secondary/50 rounded-md border border-border/30">yfinance API</span>
                    <span className="px-2.5 py-1 text-xs bg-secondary/50 rounded-md border border-border/30">VADER Sentiment</span>
                  </div>
                </a>
              </article>

              {/* Project 3 */}
              <article className="group space-y-4">
                <a href="https://github.com/derekchengg/SIAT-Issues-App" target="_blank" rel="noopener noreferrer" className="block">
                  <div className="flex items-start justify-between">
                    <h3 className="text-xl font-semibold text-foreground group-hover:text-primary transition-colors">
                      SFU SIAT Issue Tracker
                    </h3>
                    <svg className="w-5 h-5 text-muted-foreground/40 group-hover:text-primary group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                  </div>
                  <p className="text-muted-foreground/80 leading-relaxed max-w-2xl">
                    A prototype issue tracker web application for SFU's School of Interactive Arts and Technology (SIAT) to help students and faculty report and manage technical issues within the department.
                  </p>
                  <div className="flex flex-wrap gap-2 pt-2">
                    <span className="px-2.5 py-1 text-xs bg-secondary/50 rounded-md border border-border/30">HTML</span>
                    <span className="px-2.5 py-1 text-xs bg-secondary/50 rounded-md border border-border/30">CSS</span>
                    <span className="px-2.5 py-1 text-xs bg-secondary/50 rounded-md border border-border/30">Javascript</span>
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