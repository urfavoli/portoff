/* eslint-disable @next/next/no-img-element */
"use client";

import React, { useState } from "react";
import { X, Fullscreen } from "lucide-react";

// --- Props Type Definition ---
type CertificateProps = {
  ImgSertif: string; // URL of the certificate image
  title?: string; // Optional title for accessibility
};

// --- Main Certificate Component ---
const Certificate: React.FC<CertificateProps> = ({ ImgSertif, title = "Certificate" }) => {
  const [open, setOpen] = useState(false);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div className="w-full">
      {/* Thumbnail Container */}
      <div
        className="relative overflow-hidden rounded-lg shadow-lg
                   transition-all duration-300 ease-in-out
                   hover:-translate-y-1 hover:shadow-2xl
                   group cursor-pointer"
        onClick={handleOpen}
        role="button"
        tabIndex={0}
        aria-label={`View full certificate: ${title}`}
      >
        {/* Certificate Image Thumbnail */}
        <img
          src={ImgSertif}
          alt={`${title} Thumbnail`}
          className="block w-full h-auto object-cover
                     filter contrast-[1.05] brightness-90 saturate-[1.1]
                     transition-all duration-300 ease-out
                     group-hover:contrast-[1.1] group-hover:brightness-100 group-hover:saturate-[1.2]"
        />

        {/* Hover Overlay */}
        <div
          className="absolute inset-0 opacity-0 transition-opacity duration-300 ease-in-out
                     bg-black/30 group-hover:opacity-100 flex items-center justify-center z-20"
        >
          {/* Hover Content */}
          <div
            className="text-white text-center opacity-0 translate-y-2
                       transition-all duration-400 ease-in-out
                       group-hover:opacity-100 group-hover:translate-y-0"
          >
            <Fullscreen className="w-10 h-10 mb-2 drop-shadow-md" />
            <h6 className="font-semibold drop-shadow-lg text-lg">
              View Certificate
            </h6>
          </div>
        </div>
      </div>

      {/* Custom Modal for Full View */}
      {open && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-md transition-all duration-300 animate-fadeIn">
          <div className="relative w-full h-full p-4 flex items-center justify-center">
            {/* Close Button */}
            <button
              onClick={handleClose}
              className="absolute top-4 right-4 z-10 p-2.5 rounded-full bg-black/60 text-white transition-all duration-300
                         hover:bg-black/80 hover:scale-110 hover:rotate-90"
              aria-label="close modal"
            >
              <X className="w-7 h-7" />
            </button>

            {/* Modal Image */}
            <img
              src={ImgSertif}
              alt={`${title} Full View`}
              className="block max-w-full max-h-[95vh] w-auto h-auto object-contain animate-scaleUp"
            />
          </div>
        </div>
      )}

      {/* Embedded CSS for custom animations */}
      <style>{`
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        @keyframes scaleUp {
          from { transform: scale(0.95); opacity: 0.9; }
          to { transform: scale(1); opacity: 1; }
        }
        .animate-fadeIn {
          animation: fadeIn 0.3s ease-out forwards;
        }
        .animate-scaleUp {
          animation: scaleUp 0.3s ease-out;
        }
      `}</style>
    </div>
  );
};

export default Certificate;
