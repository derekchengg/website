"use client";
import React from "react";
import { Products } from "@/components/products";

export default function ProjectsPage() {
  return (
    <main className="min-h-screen w-full pt-20">
      <section className="container mx-auto px-4 py-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">Projects</h1>
        </div>
        <Products />
      </section>
    </main>
  );
}