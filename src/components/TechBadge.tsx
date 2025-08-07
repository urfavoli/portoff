// src/components/TechBadge.tsx
import React from "react";
import { Globe, Layout, Cpu, Code, Package } from "lucide-react";

// --- Icon Mapping for Technologies ---
// This object maps the technology name (string) to its corresponding Lucide icon component.
// This is an efficient way to render dynamic icons without a large 'if-else' block.
const TECH_ICONS = {
  React: Globe,
  Tailwind: Layout,
  Express: Cpu,
  Python: Code,
  Javascript: Code,
  HTML: Code,
  CSS: Code,
  default: Package, // A fallback icon for any technology not explicitly listed.
};

// --- Props for the component ---
// The component is strongly typed with TypeScript for better development.
type TechBadgeProps = {
  tech: string;
};

/**
 * A responsive and stylish badge component for displaying a technology name with an icon.
 * Features:
 * - Uses `lucide-react` for high-quality, scalable SVG icons.
 * - Applies a modern, subtle gradient and hover effect with Tailwind CSS.
 * - Provides a fallback icon for technologies not in the mapping.
 * @param {string} tech - The name of the technology to display.
 */
const TechBadge: React.FC<TechBadgeProps> = ({ tech }) => {
  // Select the appropriate icon component from the map, falling back to 'default'.
  const Icon = TECH_ICONS[tech as keyof typeof TECH_ICONS] || TECH_ICONS["default"];

  return (
    // The main container with responsive padding, rounded corners, and a gradient background.
    // The hover effects create an engaging visual feedback.
    <div className="group relative overflow-hidden px-3 py-2 md:px-4 md:py-2.5 bg-gradient-to-r from-teal-600/10 to-blue-600/10 rounded-xl border border-teal-500/10 hover:border-teal-500/30 transition-all duration-300 cursor-default">
      {/* A dynamic overlay for the hover effect */}
      <div className="absolute inset-0 bg-gradient-to-r from-teal-500/0 to-blue-500/0 group-hover:from-teal-500/10 group-hover:to-blue-500/10 transition-all duration-500" />
      <div className="relative flex items-center gap-1.5 md:gap-2">
        {/* The icon component, with responsive sizing and hover colors */}
        <Icon className="w-3.5 h-3.5 md:w-4 md:h-4 text-teal-400 group-hover:text-teal-300 transition-colors" />
        {/* The text, with responsive sizing and hover colors */}
        <span className="text-xs md:text-sm font-medium text-teal-300/90 group-hover:text-teal-200 transition-colors">
          {tech}
        </span>
      </div>
    </div>
  );
};

export default TechBadge;
