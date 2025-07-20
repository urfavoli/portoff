
import React from "react";
import { ExternalLink } from "lucide-react";

interface SocialLinkCardProps {
  name: string;
  displayName: string;
  subText: string;
  icon: React.ElementType; // Use React.ElementType for Lucide icons or SVG components
  url: string;
  color: string;
  gradient: string;
  isPrimary?: boolean;
  aosDelay: number;
}

const SocialLinkCard: React.FC<SocialLinkCardProps> = ({
  name,
  displayName,
  subText,
  icon: Icon, // Destructure as Icon to use as a component
  url,
  color,
  gradient,
  isPrimary = false,
  aosDelay,
}) => {
  const isDarkColor = (hexColor: string) => {
    if (!hexColor || hexColor.length < 7) return false; // Basic check for valid hex
    const r = parseInt(hexColor.substring(1, 3), 16);
    const g = parseInt(hexColor.substring(3, 5), 16);
    const b = parseInt(hexColor.substring(5, 7), 16);
    const luminance = (0.299 * r + 0.587 * g + 0.114 * b) / 255;
    return luminance < 0.5; // Return true if dark
  };

  const textColor = isDarkColor(color) ? 'text-white' : 'text-gray-800'; // Adjust icon color based on background
  const iconBgClass = isPrimary ? 'bg-white' : ''; // Primary might have specific bg color.

  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={`Visit ${displayName} profile`}
      className={`group relative flex items-center ${isPrimary ? 'justify-between' : 'gap-3'} p-4 rounded-xl
                  bg-white/5 border border-white/10 overflow-hidden
                  hover:border-white/20 transition-all duration-500
                  ${isPrimary ? 'hover:shadow-lg hover:shadow-indigo-500/30' : 'hover:shadow-md hover:shadow-gray-700/30'}
                  ${isPrimary ? 'animate-glowing-pulse' : ''} // Apply continuous glow to primary link
                  ${isPrimary ? 'hover:scale-[1.02]' : 'hover:scale-[1.03]'} transform`} // Subtle scale on hover
      data-aos="fade-up"
      data-aos-delay={aosDelay}
    >
      {/* Dynamic Hover Gradient Background */}
      <div
        className={`absolute inset-0 opacity-0 group-hover:opacity-20 transition-opacity duration-500
                    bg-gradient-to-r ${gradient}`}
      />

      {/* Content Container */}
      <div className="relative flex items-center ${isPrimary ? 'gap-4' : 'gap-3'}">
        {/* Icon Container with subtle inner glow */}
        <div className="relative flex items-center justify-center p-2 rounded-lg 
                        transition-all duration-300 group-hover:bg-opacity-30 
                        ${iconBgClass}"
             style={{ backgroundColor: isPrimary ? 'transparent' : color, border: isPrimary ? `2px solid ${color}` : 'none' }}>
          {/* Inner Glow Effect */}
          <div
            className="absolute inset-0 rounded-lg opacity-20 transition-all duration-500
                       group-hover:scale-125 group-hover:opacity-40"
            style={{ backgroundColor: color }}
          />
          <Icon
            className={`relative ${isPrimary ? 'w-8 h-8' : 'w-6 h-6'}
                       transition-all duration-500 group-hover:scale-110 group-hover:animate-jiggle-y`} // Jiggle on hover
            style={{ color: isPrimary ? color : textColor }} // Icon color from props, or inverse for dark backgrounds
          />
        </div>

        {/* Text Container */}
        <div className="flex flex-col">
          <span className={`text-lg font-bold text-gray-200 group-hover:text-white transition-colors duration-300
                            ${isPrimary ? 'text-2xl animate-text-glow' : 'text-base'} tracking-tight leading-none`}>
            {displayName}
          </span>
          <span className={`text-sm text-gray-400 group-hover:text-gray-300 transition-colors duration-300
                            ${isPrimary ? 'text-base' : 'text-xs'} truncate`}>
            {subText}
          </span>
        </div>
      </div>

      {/* External Link Icon */}
      <ExternalLink
        className="relative ${isPrimary ? 'w-6 h-6' : 'w-5 h-5'} text-gray-500 group-hover:text-white ml-auto
                   opacity-0 group-hover:opacity-100 transition-all duration-300
                   transform group-hover:translate-x-0 ${isPrimary ? '-translate-x-2' : '-translate-x-1'}"
      />

      {/* Shine Effect */}
      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 pointer-events-none overflow-hidden">
        <div
          className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent
                     w-full h-full transform translate-x-[-100%] group-hover:animate-shine-effect"
        />
      </div>
    </a>
  );
};

export default SocialLinkCard;