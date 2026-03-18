import React from "react";
import { cn } from "@/lib/utils"; // I will need to create lib/utils.ts

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "outline" | "ghost";
  size?: "sm" | "md" | "lg";
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = "primary", size = "md", ...props }, ref) => {
    const baseClass =
      "inline-flex items-center justify-center rounded-lg font-medium transition-all duration-300 active:scale-[0.98] outline-none disabled:opacity-50";

    const variants = {
      primary:
        "bg-electric text-black shadow-[0_0_15px_rgba(0,194,255,0.4)] hover:shadow-[0_0_25px_rgba(0,194,255,0.6)] hover:bg-white",
      secondary:
        "bg-panel text-white hover:bg-[#1a2530] border border-white/5",
      outline:
        "border border-electric text-electric hover:bg-electric/10 shadow-[0_0_10px_rgba(0,194,255,0.2)_inset]",
      ghost: "text-muted hover:text-white hover:bg-white/5",
    };

    const sizes = {
      sm: "h-9 px-4 text-sm",
      md: "h-11 px-6 text-base",
      lg: "h-14 px-8 text-lg font-semibold",
    };

    return (
      <button
        ref={ref}
        className={cn(baseClass, variants[variant], sizes[size], className)}
        {...props}
      />
    );
  }
);
Button.displayName = "Button";
