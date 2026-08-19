import React from "react";
import { cn } from "@/lib/utils";

interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: "default" | "glass" | "glass-dark" | "outline" | "elevated";
  hoverEffect?: boolean;
}

export function Card({
  children,
  className,
  variant = "default",
  hoverEffect = true,
  ...props
}: CardProps) {
  const variantStyles = {
    default:
      "bg-white border border-slate-100/90 shadow-[0_4px_20px_-4px_rgba(11,31,58,0.06)] rounded-2xl",
    glass:
      "bg-white/80 backdrop-blur-md border border-white/60 shadow-glass rounded-2xl",
    "glass-dark":
      "bg-nss-navy-light/40 backdrop-blur-md border border-white/10 shadow-glass-lg rounded-2xl text-white",
    outline:
      "bg-transparent border border-slate-200 rounded-2xl",
    elevated:
      "bg-white border border-slate-100 shadow-[0_12px_36px_-6px_rgba(11,31,58,0.1)] rounded-2xl",
  };

  return (
    <div
      className={cn(
        "relative overflow-hidden transition-all duration-300",
        variantStyles[variant],
        hoverEffect && "hover:-translate-y-1 hover:shadow-card-hover",
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
}
