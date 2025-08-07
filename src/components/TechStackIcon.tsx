import React from 'react';
import Image from 'next/image';

// The TypeScript interface remains the same, ensuring type safety.
interface TechStackIconProps {
  TechStackIcon: string;
  Language: string;
}

/**
 * A responsive and performant component for displaying a technology stack icon.
 * Features:
 * - Uses Next.js Image component for automatic image optimization and lazy loading.
 * - Dynamic styling with Tailwind CSS for hover effects and a clean aesthetic.
 * - Responsive sizing for icons and text.
 * - Optimized for performance with specific 'sizes' prop on the Image component.
 * @param {string} TechStackIcon - The URL or path to the icon image.
 * @param {string} Language - The name of the technology.
 */
const TechStackIcon = ({ TechStackIcon, Language }: TechStackIconProps) => {
  return (
    // The parent div is a 'group' for dynamic hover effects on child elements.
    // The styling is updated for a more cohesive, modern dark theme.
    <div className="group p-4 sm:p-6 rounded-2xl bg-gray-800 transition-all duration-300 ease-in-out flex flex-col items-center justify-center gap-2 sm:gap-3 cursor-pointer transform hover:scale-105 hover:bg-gray-700 shadow-xl hover:shadow-2xl hover:shadow-teal-500/30">
      <div className="relative w-16 h-16 sm:w-20 sm:h-20 flex items-center justify-center">
        {/*
          The Next.js Image component is crucial for performance.
          It automatically optimizes, lazy-loads, and serves images in modern formats.
          The 'fill' prop is used here to make the image fill its parent container.
          The 'sizes' prop is a best practice that tells the browser which image
          to load based on screen size, which is a major performance boost.
        */}
        <Image
          src={TechStackIcon}
          alt={`${Language} icon`}
          fill
          sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, 33vw"
          className="relative object-contain transform transition-transform duration-300 group-hover:rotate-6"
        />
      </div>
      {/* The text also updates on hover for a more polished effect. */}
      <span className="text-gray-300 font-semibold text-sm sm:text-base tracking-wide group-hover:text-teal-400 transition-colors duration-300">
        {Language}
      </span>
    </div>
  );
};

export default TechStackIcon;
