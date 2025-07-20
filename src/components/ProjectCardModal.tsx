// src/components/ProjectCardModal.tsx
"use client"; // REQUIRED for client-side functionality (useState, useEffect)

import React, { useState, useEffect, useRef, useCallback } from 'react';
import { ArrowRight, ExternalLink, XCircle } from 'lucide-react';

interface ProjectCardModalProps {
  title: string;
  description: string;
  link?: string;
}

const ProjectCardModal: React.FC<ProjectCardModalProps> = ({ title, description, link }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [shouldRender, setShouldRender] = useState(false); // New state for animation control
  const modalRef = useRef<HTMLDivElement>(null); // Ref for modal content for focus management

  // Handle opening the modal and setting initial render state
  const handleOpen = useCallback(() => {
    setShouldRender(true); // Start rendering for entry animation
    setTimeout(() => setIsOpen(true), 10); // A small delay to ensure render before animation
  }, []);

  // Handle closing the modal with exit animation
  const handleClose = useCallback(() => {
    setIsOpen(false); // Start exit animation
    // After animation duration, unmount the component
    setTimeout(() => setShouldRender(false), 300); // Match animation duration
  }, []);

  // Effect for handling Escape key and focus management
  useEffect(() => {
    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        handleClose();
      }
    };

    
    return () => {
      document.removeEventListener('keydown', handleEscape);
    };
  }, [isOpen, handleClose]);


  return (
    <>
      <button
        className="inline-flex items-center space-x-1 px-4 py-2 rounded-lg bg-white/5 text-white/90 font-medium transition-all duration-300 group
                   hover:bg-white/10 hover:shadow-lg hover:shadow-blue-500/30 hover:border hover:border-blue-500
                   focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-gray-900"
        onClick={handleOpen} // Use the new handleOpen
      >
        <span className="text-base">View Details</span>
        <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-200" />
      </button>

      {shouldRender && ( // Render only when shouldRender is true
        <div
          className={`fixed inset-0 z-50 flex items-center justify-center transition-all duration-300 ease-in-out backdrop-blur-md
                      ${isOpen ? 'bg-black/70 opacity-100' : 'bg-black/0 opacity-0'}`}
          onClick={handleClose} // Click outside to close
          role="dialog"
          aria-modal="true"
          aria-labelledby="modal-title"
        >
          <div
            ref={modalRef} // Attach ref here
            className={`relative w-full max-w-lg mx-4 rounded-xl bg-gray-900 p-6 sm:p-8 text-white shadow-2xl
                        border border-blue-700/50 transform transition-all duration-300 ease-in-out
                        ${isOpen ? 'scale-100 opacity-100 translate-y-0' : 'scale-95 opacity-0 translate-y-4'}`}
            onClick={(e) => e.stopPropagation()} // Prevent closing when clicking inside modal
          >
            {/* Close Button */}
            <button
              className="absolute top-4 right-4 rounded-full p-2 text-gray-400 hover:bg-gray-800 hover:text-white transition-colors duration-200
                         focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2 focus:ring-offset-gray-900
                         hover:shadow-md hover:shadow-red-500/30 group" // Added group for potential inner hover effects
              onClick={handleClose} // Use the new handleClose
              aria-label="Close modal"
            >
              <XCircle className="h-7 w-7 transition-transform group-hover:rotate-90 duration-300" /> {/* Added subtle rotate on hover */}
            </button>

            {/* Title */}
            <h2 id="modal-title" className="mb-4 text-3xl sm:text-4xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-400">
              {title}
            </h2>

            {/* Description */}
            <p className="mb-6 text-gray-300 leading-relaxed text-base italic border-l-4 border-blue-600 pl-4 py-1">
              {description}
            </p>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row justify-end space-y-3 sm:space-y-0 sm:space-x-4 mt-6">
              {link && (
                <a
                  href={link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="relative rounded-md bg-blue-600 px-6 py-3 font-bold text-white shadow-lg transition-all duration-300 text-center
                             hover:bg-blue-700 hover:scale-105 transform
                             group overflow-hidden flex items-center justify-center"
                >
                  <span className="relative z-10 flex items-center gap-2">
                    Live Demo <ExternalLink className="h-5 w-5" />
                  </span>
                  {/* Inner glowing pulse effect */}
                  <span className="absolute inset-0 bg-blue-400 opacity-0 group-hover:opacity-20 transition-opacity duration-300 animate-pulse-light"></span>
                </a>
              )}
              <button
                className="rounded-md bg-gray-800 px-6 py-3 font-medium text-white shadow-md transition-colors duration-200 text-center
                           hover:bg-gray-700 hover:shadow-lg hover:shadow-gray-700/30"
                onClick={handleClose} // Use the new handleClose
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default ProjectCardModal;