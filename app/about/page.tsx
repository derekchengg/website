"use client";
import React from "react";
import Image from "next/image";
import { FocusCards } from "@/components/ui/focus-cards";
import { cards } from "@/components/data/languageData";

export default function AboutPage() {
    return (
        <main className="h-screen w-full overflow-hidden">
            <section id="aboutme-section" className="snap-start min-h-screen w-full flex items-center justify-center">
                <div className="flex flex-col items-center justify-center px-4 space-y-6">
                    <div className="w-[200px] h-[200px] rounded-full overflow-hidden block mx-auto">
                        <Image
                            src="/images/icon.jpg"
                            alt="Derek Cheng"
                            width={400}
                            height={400}
                            className="aspect-square w-full h-full object-cover"
                            onError={(e) => {
                                const target = e.target as HTMLImageElement;
                                target.src = 'https://images.unsplash.com/photo-1599566150163-29194dcaad36?w=400&h=400&fit=crop&crop=face';
                            }}
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
        </main>
    );
}