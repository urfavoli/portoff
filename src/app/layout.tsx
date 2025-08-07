// app/layout.tsx
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import ClientLayoutWrapper from "./ClientLayoutWrapper";

// Initialize the Inter font and make it available as a CSS variable for Tailwind
const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

/**
 * Root Metadata for SEO
 * This is crucial for how your site appears on search engines and social media.
 * You should customize these values for your own portfolio.
 */
export const metadata: Metadata = {
  // Main SEO Information
  title: {
    default: "Soufiane's Portfolio",
    template: "%s | Soufiane's Portfolio",
  },
  description: "Soufiane is a passionate developer building dynamic and responsive web applications. Explore his projects, skills, and contact information.",
  keywords: ["Soufiane", "Developer", "Web Development", "Portfolio", "Next.js", "React", "Frontend", "Full-stack"],
  authors: [{ name: "Soufiane" }],

  // Social Media & Open Graph (for Facebook, LinkedIn, etc.)
  openGraph: {
    title: "Soufiane's Portfolio",
    description: "Soufiane is a passionate developer building dynamic and responsive web applications. Explore his projects, skills, and contact information.",
    url: "https://your-portfolio-url.com", // Replace with your actual domain
    siteName: "Soufiane's Portfolio",
    images: [
      {
        url: "https://placehold.co/1200x630/8A2BE2/FFFFFF?text=Soufiane's+Portfolio", // Replace with a compelling image URL (e.g., a banner of your work)
        width: 1200,
        height: 630,
        alt: "Soufiane's Portfolio Banner",
      },
    ],
    locale: "en_US",
    type: "website",
  },

  // Twitter Card (for Twitter/X)
  twitter: {
    card: "summary_large_image",
    title: "Soufiane's Portfolio",
    description: "Soufiane is a passionate developer building dynamic and responsive web applications. Explore his projects, skills, and contact information.",
    creator: "@yourtwitterhandle", // Replace with your Twitter handle
    images: ["https://placehold.co/1200x675/8A2BE2/FFFFFF?text=Soufiane's+Portfolio"], // Replace with a compelling image URL
  },
};

/**
 * The main root layout for the entire application.
 * It wraps every page in the app, providing a consistent structure.
 * This is a Server Component by default.
 */
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable}`}>
      <body className="font-sans">
        {/* ClientLayoutWrapper is a Client Component that handles all client-side logic
          like the Navbar, Footer, and any global state or animation libraries (e.g., AOS).
          This separation keeps the root layout (a Server Component) clean and performant.
        */}
        <ClientLayoutWrapper>
          {children} {/* This renders your page components */}
        </ClientLayoutWrapper>
      </body>
    </html>
  );
}
