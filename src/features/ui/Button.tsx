import { forwardRef } from "react";
import { cn } from "@/lib/utils";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
}

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ children, className, ...props }, ref) => {
    return (
      <button
        ref={ref}
        className={cn(
          "px-6 py-3 rounded-none border border-border bg-transparent text-sm font-mono tracking-widest uppercase transition-all duration-150 ease-out",
          "hover:bg-foreground hover:text-background",
          "active:scale-[0.98]",
          className
        )}
        {...props}
      >
        {children}
      </button>
    );
  }
);

Button.displayName = "Button";
