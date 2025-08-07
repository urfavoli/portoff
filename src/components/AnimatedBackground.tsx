"use client";

import React, { useEffect, useRef, useCallback } from "react";

type Position = { x: number; y: number };

const AnimatedBackground = () => {
  const blobRefs = useRef<(HTMLDivElement | null)[]>([]);
  const animationFrameId = useRef<number | undefined>(undefined);
  const lastScrollY = useRef<number>(0);

  // Memoize initial positions
  const initialPositions = useRef<Position[]>([
    { x: -4, y: 0 },
    { x: -4, y: 0 },
    { x: 20, y: -8 },
    { x: 20, y: -8 },
  ]).current;

  // Memoize the animation logic
  const updateBlobsPosition = useCallback(() => {
    const scrollY = window.scrollY;
    const time = performance.now() * 0.001; // Convert to seconds
    
    blobRefs.current.forEach((blob, index) => {
      if (!blob) return;

      // Calculate smooth movement with both scroll and time-based animation
      const scrollFactor = scrollY * 0.05;
      const timeFactor = time * 0.5;
      
      const xOffset = Math.sin(scrollFactor + timeFactor + index * 0.5) * 340;
      const yOffset = Math.cos(scrollFactor + timeFactor + index * 0.5) * 40;

      const x = initialPositions[index].x + xOffset;
      const y = initialPositions[index].y + yOffset;

      // Use transform3d for hardware acceleration
      blob.style.transform = `translate3d(${x}px, ${y}px, 0)`;
    });

    animationFrameId.current = requestAnimationFrame(updateBlobsPosition);
  }, [initialPositions]);

  // Handle scroll and animation lifecycle
  useEffect(() => {
    const handleScroll = () => {
      lastScrollY.current = window.scrollY;
      
      // Start the animation if not already running
      if (!animationFrameId.current) {
        animationFrameId.current = requestAnimationFrame(updateBlobsPosition);
      }
    };

    // Start initial animation
    animationFrameId.current = requestAnimationFrame(updateBlobsPosition);
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
      if (animationFrameId.current) {
        cancelAnimationFrame(animationFrameId.current);
      }
    };
  }, [updateBlobsPosition]);

  return (
    <div className="fixed inset-0 pointer-events-none -z-10">
      <div className="absolute inset-0">
        {/* Blob 1 */}
        <div
          ref={(ref) => { blobRefs.current[0] = ref; }}
          className="absolute top-0 -left-4 md:w-96 md:h-96 w-72 h-72 bg-purple-500 rounded-full mix-blend-multiply filter blur-[128px] opacity-40 md:opacity-20 will-change-transform"
        />
        
        {/* Blob 2 (hidden on mobile) */}
        <div
          ref={(ref) => { blobRefs.current[1] = ref; }}
          className="absolute top-0 -right-4 w-96 h-96 bg-cyan-500 rounded-full mix-blend-multiply filter blur-[128px] opacity-40 md:opacity-20 hidden sm:block will-change-transform"
        />
        
        {/* Blob 3 */}
        <div
          ref={(ref) => { blobRefs.current[2] = ref; }}
          className="absolute -bottom-8 left-[-40%] md:left-20 w-96 h-96 bg-blue-500 rounded-full mix-blend-multiply filter blur-[128px] opacity-40 md:opacity-20 will-change-transform"
        />
        
        {/* Blob 4 (hidden on mobile) */}
        <div
          ref={(ref) => { blobRefs.current[3] = ref; }}
          className="absolute -bottom-10 right-20 w-96 h-96 bg-blue-500 rounded-full mix-blend-multiply filter blur-[128px] opacity-20 md:opacity-10 hidden sm:block will-change-transform"
        />
      </div>

      {/* Grid overlay */}
      <div
        className="absolute inset-0 bg-[linear-gradient(to_right,#4f4f4f10_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f10_1px,transparent_1px)] bg-[size:24px_24px]"
        aria-hidden="true"
      />
    </div>
  );
};

export default AnimatedBackground;