"use client";
import React, { useState, useEffect } from 'react';

interface LoadingScreenProps {
  progress?: number; // Optional: 0-100
}

const LoadingScreen: React.FC<LoadingScreenProps> = ({ progress = 0 }) => {
  const [displayProgress, setDisplayProgress] = useState(0);

  useEffect(() => {
    // Smoothly animate the progress bar
    const interval = setInterval(() => {
      if (displayProgress < progress) {
        setDisplayProgress(prev => Math.min(prev + 1, progress));
      } else if (displayProgress > progress) {
        // Handle cases where progress might decrease or reset
        setDisplayProgress(prev => Math.max(prev - 1, progress));
      }
    }, 10); // Adjust speed of animation

    return () => clearInterval(interval);
  }, [progress, displayProgress]);

  return (
    <div className="min-h-screen bg-[#030014] flex items-center justify-center">
      <div className="relative">
        <div className="absolute -inset-4 bg-gradient-to-r from-[#6366f1] to-[#a855f7] rounded-full opacity-20 blur-2xl animate-pulse"></div>
        <div className="relative flex flex-col items-center gap-4 p-8">
          {/* Spinner */}
          <div className="w-16 h-16 rounded-full border-4 border-t-transparent border-[#6366f1] animate-spin"></div>

          {/* Progress Bar (New Element) */}
          <div className="w-48 h-2 bg-gray-700 rounded-full overflow-hidden mt-4">
            <div
              className="h-full bg-gradient-to-r from-[#6366f1] to-[#a855f7] transition-all duration-100 ease-out"
              style={{ width: `${displayProgress}%` }}
            ></div>
          </div>

          <div className="relative mt-2">
            <div className="absolute -inset-1 bg-gradient-to-r from-[#6366f1] to-[#a855f7] rounded blur opacity-20"></div>
            <span className="relative text-gray-200 text-sm font-semibold">
              Loading {displayProgress}%...
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoadingScreen;