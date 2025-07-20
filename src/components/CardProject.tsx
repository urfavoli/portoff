// src/components/CardProject.tsx
'use client'; // This component requires client-side interactivity for Next.js Link and potential future client-side effects

import React from 'react';
import Link from 'next/link'; // Use next/link for client-side navigation in Next.js
import Image from 'next/image'; // Use next/image for optimized image loading
import { ExternalLink, ArrowRight } from 'lucide-react'; // Assuming lucide-react is installed

// Define the types for the component's props for better type checking
interface CardProjectProps {
  imgSrc: string; // Renamed from 'Img' for clarity and consistency
  title: string; // Renamed from 'Title'
  description: string; // Renamed from 'Description'
  liveDemoLink?: string; // Renamed from 'Link' to avoid conflict, made optional
  id?: string; // Made optional, as it might not always be available for every project
}

const CardProject: React.FC<CardProjectProps> = ({
  imgSrc,
  title,
  description,
  liveDemoLink, // Now liveDemoLink
  id,
}) => {
  // No need for handleLiveDemo or handleDetails functions with alert()
  // The conditional rendering below already handles the availability of links gracefully.

  return (
    <div className="group relative w-full h-full flex flex-col"> {/* Added h-full flex-col for consistent height */}
      <div className="relative overflow-hidden rounded-xl bg-gradient-to-br from-slate-900/90 to-slate-800/90 backdrop-blur-lg border border-white/10 shadow-2xl transition-all duration-300 hover:shadow-purple-500/20 flex flex-col h-full"> {/* Added flex flex-col h-full */}
        {/* Decorative overlay for hover effect */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 via-purple-500/10 to-pink-500/10 opacity-50 group-hover:opacity-70 transition-opacity duration-300"></div>

        <div className="relative p-5 z-10 flex flex-col h-full"> {/* Added flex flex-col h-full */}
          {/* Project Image */}
          <div className="relative overflow-hidden rounded-lg w-full aspect-video bg-gray-700 flex items-center justify-center"> {/* Added aspect-video for consistent image ratio */}
            <Image
              src={imgSrc}
              alt={title}
              fill // Fill the parent div
              style={{ objectFit: 'cover' }} // Ensure the image covers the area
              className="transform group-hover:scale-105 transition-transform duration-500"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" // Responsive image sizing
              placeholder="blur" // Optional: add blurDataURL for a blur effect during loading
              blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII=" // Tiny transparent image for placeholder
              onError={(e) => {
                // Fallback for broken images
                e.currentTarget.srcset = ''; // Clear srcset to prevent infinite loop
                e.currentTarget.src = 'https://placehold.co/400x225/cccccc/333333?text=Image+Error';
              }}
            />
          </div>

          <div className="mt-4 space-y-3 flex-grow"> {/* flex-grow to push footer to bottom */}
            <h3 className="text-xl font-semibold bg-gradient-to-r from-blue-200 via-purple-200 to-pink-200 bg-clip-text text-transparent">
              {title}
            </h3>

            <p className="text-gray-300/80 text-sm leading-relaxed line-clamp-3"> {/* Increased line-clamp for more description */}
              {description}
            </p>
          </div>

          <div className="pt-4 flex items-center justify-between mt-auto"> {/* mt-auto to push to bottom */}
            {/* Live Demo Link */}
            {liveDemoLink ? (
              <a
                href={liveDemoLink}
                target="_blank"
                rel="noopener noreferrer" // Essential for security when using target="_blank"
                className="inline-flex items-center space-x-2 text-blue-400 hover:text-blue-300 transition-colors duration-200"
                aria-label={`View live demo of ${title}`} // Accessibility
              >
                <span className="text-sm font-medium">Live Demo</span>
                <ExternalLink className="w-4 h-4" />
              </a>
            ) : (
              <span className="text-gray-500 text-sm" aria-label="Live demo not available">Demo Not Available</span>
            )}

            {/* Project Details Link */}
            {id ? (
              <Link
                href={`/project/${id}`} // Use href for next/link
                className="inline-flex items-center space-x-2 px-4 py-2 rounded-lg bg-white/5 hover:bg-white/10 text-white/90 transition-all duration-200 hover:scale-105 active:scale-95 focus:outline-none focus:ring-2 focus:ring-purple-500/50"
                aria-label={`View details for ${title}`} // Accessibility
              >
                <span className="text-sm font-medium">Details</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            ) : (
              <span className="text-gray-500 text-sm" aria-label="Project details not available">Details Not Available</span>
            )}
          </div>
        </div>

        {/* Decorative border on hover */}
        <div className="absolute inset-0 border border-white/0 group-hover:border-purple-500/50 rounded-xl transition-colors duration-300 -z-50"></div>
      </div>
    </div>
  );
};

export default CardProject;
