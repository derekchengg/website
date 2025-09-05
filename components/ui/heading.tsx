import React from "react";
import { cn } from "@/lib/utils";

interface HeadingProps {
  as?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
  className?: string;
  children: React.ReactNode;
}

export const Heading: React.FC<HeadingProps> = ({ 
  as: Tag = "h2", 
  className, 
  children 
}) => {
  return (
    <Tag className={cn("text-2xl font-bold text-foreground", className)}>
      {children}
    </Tag>
  );
};