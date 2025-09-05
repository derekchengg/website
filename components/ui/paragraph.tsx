import React from "react";
import { cn } from "@/lib/utils";

interface ParagraphProps {
  className?: string;
  children: React.ReactNode;
}

export const Paragraph: React.FC<ParagraphProps> = ({ className, children }) => {
  return (
    <p className={cn("text-muted-foreground", className)}>
      {children}
    </p>
  );
};