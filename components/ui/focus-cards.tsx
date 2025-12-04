"use client";
import { motion, AnimatePresence } from "framer-motion";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import { cn } from "@/lib/utils";

type Card = {
  title: string;
  src: string;
};

const Card = React.memo(
  ({
    card,
    index,
    cursorPosition,
  }: {
    card: Card;
    index: number;
    cursorPosition: { x: number; y: number };
  }) => (
    <div
      className={cn(
        "rounded-lg relative bg-gray-100 dark:bg-neutral-900 overflow-hidden transition-all duration-300 ease-out group",
        "h-8 w-8 sm:h-12 sm:w-12 md:h-16 md:w-16 lg:h-20 lg:w-20",
        "m-0.5 sm:m-1 md:m-1.5", 
      )}
    >
      <Image
        src={card.src}
        alt={card.title}
        fill
        className="object-cover absolute inset-0"
      />
      <div
        className={cn(
          "absolute inset-0 bg-black/50 flex items-end py-0.5 px-0.5 sm:py-1 sm:px-1 transition-opacity duration-300",
          "opacity-0"
        )}
      >
        <div className="text-xs sm:text-xs md:text-sm lg:text-base text-center font-small bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-200">
          {card.title}
        </div>
      </div>
      <AnimatePresence>
        {false && (
          <motion.div
            className="absolute top-0 left-0 bg-gray-200 dark:bg-neutral-800 rounded-full pointer-events-none"
            style={{
              width: "var(--cursor-size)",
              height: "var(--cursor-size)",
              translateX: cursorPosition.x - 20,
              translateY: cursorPosition.y - 20,
            }}
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 0.3 }}
            exit={{ scale: 0, opacity: 0 }}
            transition={{ duration: 0.2 }}
          />
        )}
      </AnimatePresence>
    </div>
  )
);

Card.displayName = "Card";

export function FocusCards({ cards }: { cards: Card[] }) {
  const [cursorPosition, setCursorPosition] = useState<{ x: number; y: number }>({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setCursorPosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <div 
      className="flex flex-wrap justify-center items-center gap-1 sm:gap-2 md:gap-3"
      style={{
        "--cursor-size": "clamp(40px, 8vw, 80px)"
      } as React.CSSProperties}
    >
      {cards.map((card, index) => (
        <Card
          key={card.title}
          card={card}
          index={index}
          cursorPosition={cursorPosition}
        />
      ))}
    </div>
  );
}