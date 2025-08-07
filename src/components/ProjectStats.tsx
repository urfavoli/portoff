// src/components/ProjectStats.tsx
"use client";
import React from "react";
import { Code2, Layers } from "lucide-react";

// --- Type Definitions ---
// These types define the shape of the data the component expects.
// You can either define them here or import them from a central types file.
type Project = {
  id: string;
  Title: string;
  Description: string;
  Link: string;
  Github: string;
  Img: string;
  TechStack: string[];
  Features: string[];
};

interface ProjectStatsProps {
  project: Project;
}

const ProjectStats: React.FC<ProjectStatsProps> = ({ project }) => {
  // Use optional chaining and nullish coalescing to safely get the counts
  const techStackCount = project.TechStack?.length ?? 0;
  const featuresCount = project.Features?.length ?? 0;

  return (
    <div className="grid grid-cols-2 gap-4 p-4 md:p-6 bg-gray-900 rounded-xl overflow-hidden relative border border-gray-800 shadow-xl">
      {/* Subtle background glow effect */}
      <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/10 to-purple-500/10 opacity-70 blur-2xl z-0" />

      {/* Stats Card for Tech Stack */}
      <div className="relative z-10 flex items-center gap-3 p-3 rounded-lg border border-gray-700 bg-gray-800/50 transition-all duration-300 hover:scale-[1.03] hover:border-indigo-500 hover:shadow-lg hover:shadow-indigo-500/20">
        <div className="bg-indigo-500/20 p-2 rounded-full transition-all duration-300 group-hover:bg-indigo-500/30">
          <Code2 className="text-indigo-400 w-5 h-5 md:w-6 md:h-6" strokeWidth={1.5} />
        </div>
        <div className="flex-grow">
          <div className="text-xl md:text-2xl font-bold text-indigo-300">
            {techStackCount}
          </div>
          <div className="text-xs md:text-sm text-gray-400 font-medium">
            Technologies
          </div>
        </div>
      </div>

      {/* Stats Card for Features */}
      <div className="relative z-10 flex items-center gap-3 p-3 rounded-lg border border-gray-700 bg-gray-800/50 transition-all duration-300 hover:scale-[1.03] hover:border-purple-500 hover:shadow-lg hover:shadow-purple-500/20">
        <div className="bg-purple-500/20 p-2 rounded-full transition-all duration-300 group-hover:bg-purple-500/30">
          <Layers className="text-purple-400 w-5 h-5 md:w-6 md:h-6" strokeWidth={1.5} />
        </div>
        <div className="flex-grow">
          <div className="text-xl md:text-2xl font-bold text-purple-300">
            {featuresCount}
          </div>
          <div className="text-xs md:text-sm text-gray-400 font-medium">
            Features
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectStats;
