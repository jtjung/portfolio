"use client";

import React, { useRef } from "react";
import { motion, useTransform, useScroll, useMotionValueEvent } from "framer-motion";
import { SquareArrowDown, SquareArrowUp } from "lucide-react";
import { cn } from "@/lib/utils";

interface HorizontalScrollProps {
  children: React.ReactNode;
  className?: string;
}

/**
 * HorizontalScroll component that implements a scroll-driven horizontal carousel.
 * The content scrolls horizontally as the user scrolls vertically down the page.
 */
export function HorizontalScroll({
  children,
  className,
}: HorizontalScrollProps) {
  const targetRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
  });

  // State to track if we're at the beginning or end of the carousel
  const [isAtStart, setIsAtStart] = React.useState(true);
  const [isAtEnd, setIsAtEnd] = React.useState(false);

  // Transform scrollY progress (0-1) to horizontal position
  const x = useTransform(scrollYProgress, [0, 1], ["3.2%", "-75%"]);

  // Monitor scroll progress to update arrow visibility
  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    setIsAtStart(latest < 0.05); // Show down arrow when near start
    setIsAtEnd(latest > 0.95);   // Show up arrow when near end
  });

  // Function to scroll to a specific section
  const scrollToSection = (targetProgress: number) => {
    // Get the height of the entire section (300vh)
    const sectionHeight = targetRef.current?.offsetHeight || 0;
    // Calculate the target position based on the provided progress percentage
    const scrollTarget = targetProgress === 0
      ? targetRef.current?.offsetTop || 0 // Scroll to the top of the section
      : window.scrollY + (sectionHeight * targetProgress); // Scroll to a percentage of the section

    // Smooth scroll to that position
    window.scrollTo({
      top: scrollTarget,
      behavior: 'smooth'
    });
  };

  // Function to demonstrate vertical scrollability with a small bounce animation
  const demonstrateVerticalScroll = () => {
    // Create a small animation to show users they can scroll vertically
    const currentScroll = window.scrollY;

    // First scroll down a bit
    window.scrollTo({
      top: currentScroll + 100,
      behavior: 'smooth'
    });

    // Then scroll back to slightly past the original position after a delay
    setTimeout(() => {
      window.scrollTo({
        top: currentScroll + 200,
        behavior: 'smooth'
      });
    }, 400);
  };

  // Scroll to top function
  const scrollToTop = () => scrollToSection(0); // Scroll to the top of the section

  // Pulsing animation for arrows
  const pulseAnimation = {
    scale: [1, 1.1, 1],
    opacity: [0.7, 1, 0.7],
    transition: {
      duration: 2,
      repeat: Infinity,
      ease: "easeInOut" as const
    }
  };

  return (
    <section ref={targetRef} className={cn("relative h-[300vh]", className)}>
      <div className="px-8 pt-20 pb-8 sticky top-0 flex h-screen items-center overflow-hidden">
        {/* Left edge gradient blur */}
        <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-gray-200 via-gray-100 to-transparent z-10 pointer-events-none" />

        <motion.div style={{ x }} className="flex gap-8 px-0 relative z-0">
          {children}
        </motion.div>

        {/* Right edge gradient blur */}
        <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-gray-200 via-gray-100 to-transparent z-10 pointer-events-none" />

        {/* Down arrow at start */}
        {isAtStart && (
          <motion.div
            className="flex items-center gap-2 absolute bottom-8 left-1/2 -translate-x-1/2 bg-background/80 backdrop-blur-sm rounded-full p-3 shadow-md border border-border cursor-pointer hover:bg-background/90 transition-colors"
            animate={pulseAnimation}
            aria-label="Scroll down"
            onClick={demonstrateVerticalScroll}
          >
            <span className="text-sm font-medium">Scroll</span>
            <SquareArrowDown className="h-5 w-5" />
          </motion.div>
        )}

        {/* Up arrow at end */}
        {isAtEnd && (
          <motion.div
            className="flex items-center gap-2 absolute bottom-8 left-1/2 -translate-x-1/2 bg-background/80 backdrop-blur-sm rounded-full p-3 shadow-md border border-border cursor-pointer hover:bg-background/90 transition-colors"
            animate={pulseAnimation}
            aria-label="Scroll up"
            onClick={scrollToTop}
          >
            <span className="text-sm font-medium">Scroll</span>
            <SquareArrowUp className="h-5 w-5" />
          </motion.div>
        )}
      </div>
    </section>
  );
}

/**
 * HorizontalScrollItem component that wraps content to be displayed in the scroll carousel.
 */
export function HorizontalScrollItem({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div className={cn(
      "min-w-[90vw] w-[90vw] md:min-w-[80vw] md:w-[80vw] lg:min-w-[70vw] lg:w-[70vw] xl:min-w-[60vw] xl:w-[60vw]",
      "shadow-xl rounded-3xl h-[600px] flex flex-col justify-center p-8 overflow-y-auto",
      className
    )}>
      {children}
    </div>
  );
}
