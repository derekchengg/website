"use client";
import React from "react";
import { Heading } from "./ui/heading";
import { Product } from "@/types/products";
import { products } from "@/components/data/productData";
import { Paragraph } from "./ui/paragraph";
import { motion } from "framer-motion";

export const Products = () => {
  return (
    <div>
      <div className="grid grid-cols-1 gap-6">
        {products.map((product: Product, idx: number) => (
          <motion.div
            key={product.href}
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.2, delay: idx * 0.1 }}
          >
            <a
              href={product.href}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex flex-col space-y-4 hover:bg-secondary/50 rounded-2xl transition duration-200 p-4 border border-border"
            >
              <div>
                <Heading
                  as="h4"
                  className="font-black text-lg md:text-xl group-hover:text-primary transition-colors"
                >
                  {product.title}
                </Heading>
                <Paragraph className="text-sm md:text-base mt-2">
                  {product.description}
                </Paragraph>
              </div>
              <div className="flex flex-wrap gap-2">
                {product.stack.map((tech: string) => (
                  <span
                    key={tech}
                    className="text-xs bg-secondary px-2 py-1 rounded-sm text-secondary-foreground"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </a>
          </motion.div>
        ))}
      </div>
    </div>
  );
};