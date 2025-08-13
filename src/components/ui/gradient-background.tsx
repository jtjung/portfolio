import React from "react";
import { cn } from "@/lib/utils";

interface GradientBackgroundProps {
  className?: string;
  children?: React.ReactNode;
  variant?: "default" | "subtle" | "radial";
  intensity?: "light" | "medium" | "strong";
}

/**
 * A customizable white gradient background component
 * 
 * @param className - Additional classes to apply to the component
 * @param children - Content to render inside the gradient background
 * @param variant - Style variant of the gradient (default, subtle, radial)
 * @param intensity - Intensity of the gradient effect (light, medium, strong)
 */
export function GradientBackground({
  className,
  children,
  variant = "default",
  intensity = "medium",
}: GradientBackgroundProps) {
  // Define gradient styles based on variant and intensity
  const gradientStyles = {
    default: {
      light: "bg-gradient-to-b from-white via-white to-gray-100",
      medium: "bg-gradient-to-b from-white via-gray-50 to-gray-100",
      strong: "bg-gradient-to-b from-white via-gray-100 to-gray-200",
    },
    subtle: {
      light: "bg-gradient-to-br from-white via-white to-gray-50",
      medium: "bg-gradient-to-br from-white via-gray-50 to-gray-100",
      strong: "bg-gradient-to-br from-white via-gray-100 to-gray-200",
    },
    radial: {
      light: "bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-white via-white to-gray-50",
      medium: "bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-white via-gray-50 to-gray-100",
      strong: "bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-white via-gray-100 to-gray-200",
    },
  };

  // Dark mode gradient styles
  const darkGradientStyles = {
    default: {
      light: "dark:bg-gradient-to-b dark:from-gray-900 dark:via-gray-900 dark:to-gray-950",
      medium: "dark:bg-gradient-to-b dark:from-gray-800 dark:via-gray-900 dark:to-gray-950",
      strong: "dark:bg-gradient-to-b dark:from-gray-800 dark:via-gray-900 dark:to-black",
    },
    subtle: {
      light: "dark:bg-gradient-to-br dark:from-gray-900 dark:via-gray-900 dark:to-gray-950",
      medium: "dark:bg-gradient-to-br dark:from-gray-800 dark:via-gray-900 dark:to-gray-950",
      strong: "dark:bg-gradient-to-br dark:from-gray-800 dark:via-gray-900 dark:to-black",
    },
    radial: {
      light: "dark:bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] dark:from-gray-900 dark:via-gray-900 dark:to-gray-950",
      medium: "dark:bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] dark:from-gray-800 dark:via-gray-900 dark:to-gray-950",
      strong: "dark:bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] dark:from-gray-800 dark:via-gray-900 dark:to-black",
    },
  };

  return (
    <div
      className={cn(
        "w-full h-full",
        gradientStyles[variant][intensity],
        darkGradientStyles[variant][intensity],
        className
      )}
    >
      {children}
    </div>
  );
}
