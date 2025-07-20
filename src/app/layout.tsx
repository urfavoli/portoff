// app/layout.tsx
import type { Metadata } from "next";
import { Inter } from "next/font/google"; // You can choose your preferred font
import "./globals.css"; // Your global CSS file (Tailwind CSS will be here)
import ClientLayoutWrapper from "./ClientLayoutWrapper"; // For client-side setup like AOS

const inter = Inter({ subsets: ["latin"] }); // Initialize your font

export const metadata: Metadata = {
  title: "Soufiane  Portfolio", // SEO Title
  
  description: "A developer portfolio showcasing projects, skills, and contact information.", // SEO Description
  // Add more meta tags like keywords, openGraph, etc.
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {/*
          'ClientLayoutWrapper' is a critical wrapper. It's a Client Component
          that will handle global client-side logic, such as:
          - Initializing AOS (Animate On Scroll)
          - Rendering the Navbar (which uses client-side state/effects)
          - Any other client-side contexts or providers that wrap your app
        */}
        <ClientLayoutWrapper>
          {children} {/* This renders your pages (e.g., page.tsx, projects/[id]/page.tsx) */}
        </ClientLayoutWrapper>
      </body>
    </html>
  );
}