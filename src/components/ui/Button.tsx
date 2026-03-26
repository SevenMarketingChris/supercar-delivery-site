"use client";

import { cn } from "@/lib/utils";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "outline";
  size?: "sm" | "md" | "lg";
  children: React.ReactNode;
}

export default function Button({
  variant = "primary",
  size = "md",
  className,
  children,
  ...props
}: ButtonProps) {
  return (
    <button
      className={cn(
        "inline-flex items-center justify-center font-semibold tracking-wide uppercase transition-all duration-300 cursor-pointer",
        variant === "primary" &&
          "bg-gradient-to-r from-gold-dark via-gold to-gold-light text-surface hover:brightness-110 hover:shadow-lg hover:shadow-gold/20",
        variant === "secondary" &&
          "bg-surface-elevated text-text-heading border border-border-subtle hover:border-gold/50 hover:text-gold",
        variant === "outline" &&
          "bg-transparent text-gold border border-gold/50 hover:bg-gold/10",
        size === "sm" && "px-4 py-2 text-xs rounded",
        size === "md" && "px-6 py-3 text-sm rounded-md",
        size === "lg" && "px-8 py-4 text-base rounded-md",
        className
      )}
      {...props}
    >
      {children}
    </button>
  );
}
