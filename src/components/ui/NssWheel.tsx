"use client";

import React from "react";
import { cn } from "@/lib/utils";

interface NssWheelProps {
  className?: string;
  size?: number;
  animate?: boolean;
  reverse?: boolean;
  color?: "navy" | "red" | "white" | "gold" | "subtle";
  opacity?: number;
}

export function NssWheel({
  className,
  size = 400,
  animate = true,
  reverse = false,
  color = "subtle",
  opacity = 0.35,
}: NssWheelProps) {
  const colorMap = {
    navy: "text-nss-blue",
    red: "text-nss-red",
    white: "text-white",
    gold: "text-nss-gold",
    subtle: "text-nss-blue-light/40",
  };

  const strokeColor = colorMap[color];

  // 24 spokes representing 24 hours of relentless selfless service (Konark Sun Temple motif)
  const spokes = Array.from({ length: 24 }, (_, i) => i * 15);

  return (
    <div
      className={cn(
        "relative flex items-center justify-center pointer-events-none select-none",
        animate && (reverse ? "animate-spin-reverse-slow" : "animate-spin-slow"),
        className
      )}
      style={{ width: size, height: size, opacity }}
      aria-hidden="true"
    >
      <svg
        viewBox="0 0 400 400"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={cn("w-full h-full", strokeColor)}
      >
        {/* Outer beaded ring */}
        <circle
          cx="200"
          cy="200"
          r="190"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeDasharray="4 6"
        />

        {/* Outer main structural rim */}
        <circle
          cx="200"
          cy="200"
          r="178"
          stroke="currentColor"
          strokeWidth="2.5"
        />

        {/* Inner secondary rim */}
        <circle
          cx="200"
          cy="200"
          r="164"
          stroke="currentColor"
          strokeWidth="1.5"
        />

        {/* Middle decorative track */}
        <circle
          cx="200"
          cy="200"
          r="110"
          stroke="currentColor"
          strokeWidth="1"
          strokeDasharray="2 8"
        />

        {/* 24 Konark Sun Spokes */}
        {spokes.map((angle, idx) => {
          const isPrimarySpoke = idx % 3 === 0;
          return (
            <g key={angle} transform={`rotate(${angle} 200 200)`}>
              {/* Main radial spoke line */}
              <line
                x1="200"
                y1={isPrimarySpoke ? "42" : "55"}
                x2="200"
                y2="155"
                stroke="currentColor"
                strokeWidth={isPrimarySpoke ? "2.5" : "1.2"}
                strokeLinecap="round"
              />

              {/* Decorative medallion on primary spokes */}
              {isPrimarySpoke && (
                <circle
                  cx="200"
                  cy="95"
                  r="6"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  fill="none"
                />
              )}

              {/* Outer tip bead */}
              <circle
                cx="200"
                cy="32"
                r={isPrimarySpoke ? "3" : "1.5"}
                fill="currentColor"
              />
            </g>
          );
        })}

        {/* Center Hub Outer Rim */}
        <circle
          cx="200"
          cy="200"
          r="48"
          stroke="currentColor"
          strokeWidth="2.5"
        />

        {/* Center Hub Inner Rim */}
        <circle
          cx="200"
          cy="200"
          r="34"
          stroke="currentColor"
          strokeWidth="1.5"
        />

        {/* Center Hub Core */}
        <circle
          cx="200"
          cy="200"
          r="18"
          fill="currentColor"
          opacity="0.25"
          stroke="currentColor"
          strokeWidth="2"
        />

        {/* Center Pivot Point */}
        <circle cx="200" cy="200" r="6" fill="currentColor" />
      </svg>
    </div>
  );
}

export function NssBadgeIcon({ className = "w-10 h-10" }: { className?: string }) {
  return (
    <div className={cn("relative flex items-center justify-center rounded-full bg-gradient-to-br from-nss-blue to-nss-navy border-2 border-nss-red shadow-md overflow-hidden", className)}>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(214,40,40,0.35)_0%,_transparent_70%)]" />
      <svg
        viewBox="0 0 100 100"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-4/5 h-4/5 text-white"
      >
        <circle cx="50" cy="50" r="44" stroke="#D62828" strokeWidth="3" />
        <circle cx="50" cy="50" r="38" stroke="#FAFAF7" strokeWidth="1.5" />
        {/* 8 primary spokes for crisp icon rendering */}
        {[0, 45, 90, 135, 180, 225, 270, 315].map((ang) => (
          <line
            key={ang}
            x1="50"
            y1="16"
            x2="50"
            y2="38"
            stroke="#FAFAF7"
            strokeWidth="2"
            strokeLinecap="round"
            transform={`rotate(${ang} 50 50)`}
          />
        ))}
        <circle cx="50" cy="50" r="12" fill="#D62828" stroke="#FAFAF7" strokeWidth="2" />
        <circle cx="50" cy="50" r="4" fill="#FAFAF7" />
      </svg>
    </div>
  );
}
