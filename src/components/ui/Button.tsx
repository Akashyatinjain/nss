"use client";

import React from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { ArrowRight } from "lucide-react";

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "outline" | "ghost" | "glass" | "white";
  size?: "sm" | "md" | "lg" | "xl";
  href?: string;
  showArrow?: boolean;
  icon?: React.ReactNode;
}

export function Button({
  children,
  className,
  variant = "primary",
  size = "md",
  href,
  showArrow = false,
  icon,
  ...props
}: ButtonProps) {
  const baseStyles =
    "inline-flex items-center justify-center font-medium rounded-xl transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 active:scale-[0.98] group select-none";

  const sizeStyles = {
    sm: "text-xs px-3.5 py-2 gap-1.5",
    md: "text-sm px-5 py-2.5 gap-2",
    lg: "text-base px-6 py-3.5 gap-2.5 font-semibold",
    xl: "text-lg px-8 py-4 gap-3 font-semibold shadow-lg",
  };

  const variantStyles = {
    primary:
      "bg-gradient-to-r from-nss-red to-nss-red-bright text-white shadow-md hover:shadow-glow-red hover:brightness-110 focus:ring-nss-red border border-red-500/30",
    secondary:
      "bg-nss-navy text-white hover:bg-nss-navy-light focus:ring-nss-navy border border-nss-blue/40 shadow-sm",
    outline:
      "border-2 border-nss-navy text-nss-navy hover:bg-nss-navy hover:text-white focus:ring-nss-navy",
    ghost:
      "text-nss-navy hover:bg-nss-soft-gray focus:ring-slate-300",
    glass:
      "bg-white/10 backdrop-blur-md text-white border border-white/20 hover:bg-white/20 hover:border-white/40 focus:ring-white/50 shadow-glass",
    white:
      "bg-white text-nss-navy hover:bg-nss-warm-white hover:text-nss-red shadow-md focus:ring-white",
  };

  const combinedClasses = cn(
    baseStyles,
    sizeStyles[size],
    variantStyles[variant],
    className
  );

  const content = (
    <>
      {icon && <span className="transition-transform group-hover:scale-110">{icon}</span>}
      <span>{children}</span>
      {showArrow && (
        <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
      )}
    </>
  );

  if (href) {
    return (
      <Link href={href} className={combinedClasses}>
        {content}
      </Link>
    );
  }

  return (
    <button className={combinedClasses} {...props}>
      {content}
    </button>
  );
}
