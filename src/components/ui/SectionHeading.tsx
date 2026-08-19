import React from "react";
import { cn } from "@/lib/utils";

interface SectionHeadingProps {
  badge?: string;
  title: string;
  subtitle?: string;
  align?: "left" | "center" | "right";
  theme?: "dark" | "light";
  className?: string;
}

export function SectionHeading({
  badge,
  title,
  subtitle,
  align = "center",
  theme = "light",
  className,
}: SectionHeadingProps) {
  const isCenter = align === "center";
  const isRight = align === "right";

  return (
    <div
      className={cn(
        "flex flex-col mb-12 sm:mb-16",
        isCenter && "items-center text-center max-w-3xl mx-auto",
        isRight && "items-end text-right",
        !isCenter && !isRight && "items-start text-left max-w-3xl",
        className
      )}
    >
      {badge && (
        <div className="inline-flex items-center gap-2 px-3 py-1 mb-4 rounded-full text-xs font-semibold uppercase tracking-widest border transition-all">
          <span className="w-1.5 h-1.5 rounded-full bg-nss-red animate-pulse" />
          <span
            className={cn(
              theme === "dark"
                ? "text-red-300 border-red-900/40 bg-red-950/40"
                : "text-nss-red border-red-200 bg-red-50/80"
            )}
          >
            {badge}
          </span>
        </div>
      )}

      <h2
        className={cn(
          "text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight font-heading leading-tight",
          theme === "dark" ? "text-white" : "text-nss-navy"
        )}
      >
        {title}
      </h2>

      {subtitle && (
        <p
          className={cn(
            "mt-4 text-base sm:text-lg leading-relaxed font-body",
            theme === "dark" ? "text-slate-300/90" : "text-nss-text-muted"
          )}
        >
          {subtitle}
        </p>
      )}

      <div
        className={cn(
          "h-1 w-16 bg-gradient-to-r from-nss-red to-nss-red-bright rounded-full mt-5",
          isCenter && "mx-auto"
        )}
      />
    </div>
  );
}
