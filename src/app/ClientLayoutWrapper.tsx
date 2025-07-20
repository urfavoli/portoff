// src/app/ClientLayoutWrapper.tsx
"use client";

import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css"; // AOS CSS is crucial for animations

// --- FIX IS HERE ---
import Navbar from "../components/Navbar"; // Corrected path: up to src/, then into components/

export default function ClientLayoutWrapper({
  children,
}: {
  children: React.ReactNode;
}) {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
      offset: 50,
    });
    AOS.refresh();
  }, []);

  return (
    <>
      <Navbar />
      {children}
    </>
  );
}