// src/components/Certificate.tsx
"use client"; // REQUIRED for client-side functionality (useState, MUI components)

import React, { useState } from "react";
import Image from "next/image"; // Import Next.js Image component for optimization
import { Modal, Backdrop, Box, IconButton, Typography } from "@mui/material"; // Keep necessary MUI components
import CloseIcon from "@mui/icons-material/Close";
import FullscreenIcon from "@mui/icons-material/Fullscreen";

// Define the style for the Modal content as a constant to keep JSX cleaner
const modalContentStyle = {
  position: "relative", // For positioning the close button
  width: "auto",
  maxWidth: "90vw",
  maxHeight: "90vh",
  outline: "none", // Remove default focus outline
  display: "flex", // Center image within Box
  alignItems: "center",
  justifyContent: "center",
  "&:focus": {
    outline: "none",
  },
};

// Define the style for the Modal Backdrop
const modalBackdropStyle = {
  backgroundColor: "rgba(0, 0, 0, 0.9)", // Darker, slightly transparent background
  backdropFilter: "blur(8px)", // Stronger blur for modern look
  transition: "backdrop-filter 0.3s ease-in-out", // Smooth transition for blur
};

type CertificateProps = {
  ImgSertif: string; // URL of the certificate image
  title?: string; // Optional title for accessibility and future use
};

const Certificate: React.FC<CertificateProps> = ({ ImgSertif, title = "Certificate" }) => {
  const [open, setOpen] = useState(false);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div className="w-full">
      {/* Thumbnail Container - Using Tailwind classes where possible */}
      <div
        className="relative overflow-hidden rounded-lg shadow-lg
                   transition-all duration-300 ease-in-out
                   hover:translate-y-[-5px] hover:shadow-2xl
                   group" // Added group for group-hover utilities
      >
        {/* Certificate Image Thumbnail */}
        <div className="relative before:content-[''] before:absolute before:inset-0 before:bg-black/20 before:z-10">
          <Image
            src={ImgSertif}
            alt={`${title} Thumbnail`}
            onClick={handleOpen}
            width={500} // Set a reasonable width for the thumbnail
            height={300} // Set a reasonable height for the thumbnail
            quality={75} // Adjust image quality for better performance (0-100)
            layout="responsive" // Make image responsive within its parent
            className="certificate-image
                       block w-full h-auto object-cover
                       filter contrast-[1.05] brightness-90 saturate-[1.1]
                       transition-all duration-300 ease-out
                       group-hover:contrast-[1.1] group-hover:brightness-100 group-hover:saturate-[1.2]
                       cursor-pointer"
          />
        </div>

        {/* Hover Overlay */}
        <div
          className="absolute inset-0 opacity-0 transition-opacity duration-300 ease-in-out
                     cursor-pointer bg-black/30 group-hover:opacity-100 flex items-center justify-center z-20"
          onClick={handleOpen}
          role="button" // Make it explicitly a button for screen readers
          tabIndex={0} // Make it focusable
          aria-label={`View full certificate: ${title}`} // Accessibility
        >
          {/* Hover Content */}
          <div
            className="text-white text-center opacity-0 translate-y-2
                       transition-all duration-400 ease-in-out
                       group-hover:opacity-100 group-hover:translate-y-0"
          >
            <FullscreenIcon className="text-4xl mb-2 drop-shadow-md" /> {/* Tailwind `text-4xl` for font-size */}
            <Typography variant="h6" className="font-semibold drop-shadow-lg">
              View Certificate
            </Typography>
          </div>
        </div>
      </div>

      {/* Modal for Full View */}
      <Modal
        open={open}
        onClose={handleClose}
        closeAfterTransition // Helps with animation
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 300,
          sx: modalBackdropStyle, // Use the defined style object
        }}
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          p: 2, // Add some padding for small screens
        }}
      >
        <Box sx={modalContentStyle}>
          {/* Close Button */}
          <IconButton
            onClick={handleClose}
            sx={{
              position: "absolute",
              right: 16,
              top: 16,
              color: "white",
              bgcolor: "rgba(0,0,0,0.6)",
              zIndex: 1,
              p: 1.5, // Slightly larger padding
              "&:hover": {
                bgcolor: "rgba(0,0,0,0.8)",
                transform: "scale(1.1) rotate(90deg)", // Added rotate for a nice effect
                transition: "transform 0.3s ease-out, background-color 0.3s",
              },
              transition: "transform 0.3s ease-out, background-color 0.3s", // Ensure transition on initial hover
            }}
            size="medium" // Adjust size prop
            aria-label="close modal"
          >
            <CloseIcon sx={{ fontSize: 28 }} /> {/* Larger icon */}
          </IconButton>

          {/* Modal Image - Use Next.js Image component here too */}
          <Image
            src={ImgSertif}
            alt={`${title} Full View`}
            width={1200} // Set a large max width for the full image
            height={800} // Set a large max height for the full image
            layout="intrinsic" // Or 'responsive' if you want it to fill the modal width
            objectFit="contain" // Ensures the image fits within the bounds without cropping
            quality={90} // Higher quality for full view
            className="block max-w-full max-h-[90vh] w-auto h-auto object-contain" // Tailwind for sizing
          />
        </Box>
      </Modal>
    </div>
  );
};

export default Certificate;