// src/components/SocialLinkCard.tsx
import React from "react";
import { ExternalLink } from "lucide-react";

interface SocialLinkCardProps {
  name: string;
  displayName: string;
  subText: string;
  icon: React.ElementType;
  url: string;
  color: string;
  gradient: string;
  isPrimary?: boolean;
  aosDelay: number;
}

// Custom animations (keyframes) for the shine, glow, and jiggle effects.
// These are defined here to make the component self-contained and ready to use.
const customAnimations = `
@keyframes jiggle-y {
  0%, 100% {
    transform: translateY(0);
  }
  25% {
    transform: translateY(-2px);
  }
  50% {
    transform: translateY(0);
  }
  75% {
    transform: translateY(2px);
  }
}

@keyframes glowing-pulse {
  0% {
    box-shadow: 0 0 5px rgba(255, 255, 255, 0.2), 0 0 10px rgba(79, 70, 229, 0.4);
    transform: scale(1);
  }
  50% {
    box-shadow: 0 0 10px rgba(255, 255, 255, 0.4), 0 0 20px rgba(79, 70, 229, 0.8);
    transform: scale(1.01);
  }
  100% {
    box-shadow: 0 0 5px rgba(255, 255, 255, 0.2), 0 0 10px rgba(79, 70, 229, 0.4);
    transform: scale(1);
  }
}

@keyframes shine-effect {
  0% {
    transform: translateX(-100%) rotate(25deg);
  }
  100% {
    transform: translateX(200%) rotate(25deg);
  }
}
`;

const SocialLinkCard: React.FC<SocialLinkCardProps> = ({
  displayName,
  subText,
  icon: Icon,
  url,
  color,
  gradient,
  isPrimary = false,
  aosDelay,
}) => {
  return (
    <>
      <style>{customAnimations}</style>
      <a
        href={url}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={`Visit ${displayName} profile`}
        className={`
          group relative flex items-center p-4 md:p-6 rounded-2xl
          bg-gray-800/50 border border-gray-700 overflow-hidden
          hover:border-indigo-500 transition-all duration-500
          ${isPrimary ? 'hover:shadow-lg hover:shadow-indigo-500/50' : 'hover:shadow-md hover:shadow-gray-700/50'}
          ${isPrimary ? 'animate-[glowing-pulse_3s_ease-in-out_infinite]' : ''}
          ${isPrimary ? 'hover:scale-[1.02]' : 'hover:scale-[1.03]'} transform
        `}
        data-aos="fade-up"
        data-aos-delay={aosDelay}
      >
        {/* Dynamic Hover Gradient Background */}
        <div
          className={`absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity duration-500
                    bg-gradient-to-r ${gradient}`}
        />

        {/* Content Container */}
        <div className={`relative flex items-center ${isPrimary ? 'gap-4' : 'gap-3'}`}>
          {/* Icon Container with subtle inner glow */}
          <div className="relative flex items-center justify-center p-2 rounded-xl transition-all duration-300 group-hover:scale-110"
            style={{ backgroundColor: isPrimary ? 'transparent' : color, border: isPrimary ? `2px solid ${color}` : 'none' }}>
            <div
              className="absolute inset-0 rounded-xl opacity-20 transition-all duration-500
                         group-hover:scale-150 group-hover:opacity-40"
              style={{ backgroundColor: color }}
            />
            <Icon
              className={`relative ${isPrimary ? 'w-8 h-8 md:w-10 md:h-10' : 'w-6 h-6 md:w-8 md:h-8'}
                         text-white transition-all duration-500 group-hover:scale-110`}
            />
          </div>

          {/* Text Container */}
          <div className="flex flex-col">
            <span className={`text-gray-100 font-bold group-hover:text-white transition-colors duration-300
                            ${isPrimary ? 'text-xl md:text-2xl' : 'text-base md:text-lg'} tracking-tight leading-none`}>
              {displayName}
            </span>
            <span className={`text-gray-400 group-hover:text-gray-300 transition-colors duration-300
                            ${isPrimary ? 'text-base md:text-lg' : 'text-sm md:text-base'} truncate`}>
              {subText}
            </span>
          </div>
        </div>

        {/* External Link Icon */}
        <ExternalLink
          className="relative w-5 h-5 md:w-6 md:h-6 text-gray-500 group-hover:text-white ml-auto
                     opacity-0 group-hover:opacity-100 transition-all duration-300
                     transform group-hover:translate-x-0 -translate-x-1"
        />

        {/* Shine Effect */}
        <div className="absolute inset-0 opacity-0 group-hover:opacity-100 pointer-events-none overflow-hidden">
          <div
            className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent
                       w-full h-full transform translate-x-[-100%] animate-[shine-effect_1s_ease-in-out_forwards]"
            style={{ animationDelay: `${aosDelay + 500}ms` }}
          />
        </div>
      </a>
    </>
  );
};

export default SocialLinkCard;
