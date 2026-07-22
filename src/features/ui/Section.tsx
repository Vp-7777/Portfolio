import { forwardRef } from "react";
import { cn } from "@/lib/utils";

interface SectionProps extends React.HTMLAttributes<HTMLElement> {
  children: React.ReactNode;
  chapter?: string;
  className?: string;
}

export const Section = forwardRef<HTMLElement, SectionProps>(
  ({ children, chapter, className, ...props }, ref) => {
    return (
      <section
        ref={ref}
        data-chapter={chapter}
        className={cn("w-full relative px-6 md:px-12 lg:px-24 py-32", className)}
        {...props}
      >
        {children}
      </section>
    );
  }
);

Section.displayName = "Section";
