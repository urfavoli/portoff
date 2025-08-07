// src/components/SocialLinks.tsx
"use client";
import { useEffect } from "react";
import {
  Linkedin,
  Github,
  Instagram,
  Youtube,
} from "lucide-react";
import AOS from "aos";
import "aos/dist/aos.css";
// NOTE: This component depends on a 'SocialLinkCard' component.
// Please provide the code for 'SocialLinkCard' next so it can be enhanced to match this design.
import SocialLinkCard from "./SocialLinkCard";

// --- Mock Social Link Data ---
// This is the data that populates the component. Each object contains details for a social link.
const socialLinks = [
  {
    name: "LinkedIn",
    displayName: "Let's Connect",
    subText: "on LinkedIn",
    icon: Linkedin,
    url: "https://www.linkedin.com/urfavoli/",
    color: "#0A66C2",
    gradient: "from-blue-600 to-blue-800",
    isPrimary: true,
  },
  {
    name: "Instagram",
    displayName: "Instagram",
    subText: "@urfavolli",
    icon: Instagram,
    url: "https://www.instagram.com/urfavolli",
    color: "#E4405F",
    gradient: "from-purple-600 via-pink-600 to-yellow-500",
  },
  {
    name: "YouTube",
    displayName: "YouTube",
    subText: "@eki zulfar",
    icon: Youtube,
    url: "https://www.youtube.com/@picogrow",
    color: "#FF0000",
    gradient: "from-red-600 to-red-800",
  },
  {
    name: "GitHub",
    displayName: "Github",
    subText: "@EkiZR",
    icon: Github,
    url: "https://github.com/urfavoli",
    color: "#24292e",
    gradient: "from-gray-800 to-gray-900",
  },
  {
    name: "TikTok",
    displayName: "Tiktok",
    subText: "@gowupp",
    // This is an inline SVG for the TikTok icon.
    // It's a good approach for custom icons that aren't available in the icon library.
    icon: ({ className, ...props }: React.SVGProps<SVGSVGElement>) => (
      <svg
        width="24"
        height="24"
        viewBox="0 0 45 45"
        fill="currentColor" // Use currentColor to inherit text color from Tailwind
        xmlns="http://www.w3.org/2000/svg"
        className={className}
        {...props}
      >
        <path
          d="M29.5248 9.44576C28.0821 9.04609 26.7616 8.29376 25.6826 7.25638C25.5109 7.09719 25.3493 6.92821 25.1928 6.75433C23.9066 5.27833 23.2092 3.38038 23.2336 1.42291L17.3561 1.42291V23.7086C17.3561 27.7935 15.152 29.9535 12.4165 29.9535C11.694 29.9611 10.9789 29.8107 10.3214 29.5125C9.6636 29.2144 9.07952 28.7758 8.60956 28.2272C8.13984 27.6789 7.79552 27.0341 7.6018 26.3386C7.40784 25.6431 7.36891 24.9133 7.48744 24.2009C7.60597 23.4885 7.87903 22.8106 8.28752 22.2155C8.69625 21.6199 9.23038 21.1213 9.85242 20.7547C10.4747 20.3878 11.1695 20.1618 11.8883 20.0925C12.607 20.0232 13.3324 20.1123 14.013 20.3535V14.3584C13.4889 14.2431 12.9531 14.1863 12.4165 14.1894L12.3918 14.1894C10.2543 14.1943 8.16605 14.8325 6.39127 16.0235C4.6165 17.2149 3.23429 18.9052 2.41976 20.8813C1.60523 22.8578 1.39487 25.0311 1.81511 27.1269C2.23511 29.2227 3.26711 31.1469 4.78033 32.6565C6.2938 34.166 8.22066 35.1934 10.3175 35.6082C12.4143 36.0231 14.587 35.8073 16.5612 34.9879C18.5355 34.1682 20.2226 32.7821 21.4092 31.0041C22.5959 29.2264 23.229 27.1367 23.2285 24.9992V12.8156C25.5036 14.3927 28.2244 15.1345 31.1289 15.1886V9.68552C30.5869 9.66568 30.0492 9.58511 29.5248 9.44576Z"
          fill="#FE2C55"
        ></path>
        <path
          d="M25.1951 6.75429C24.7947 6.4751 24.4149 6.16751 24.0588 5.83347C22.8211 4.66016 22.0063 3.1102 21.742 1.42531C21.6622 0.954367 21.622 0.477551 21.622 0L15.7445 0V22.6408C15.7445 27.5069 13.5404 28.5184 10.8049 28.5184C10.0829 28.5262 9.36784 28.3758 8.71029 28.0773C8.05249 27.7793 7.46792 27.3407 6.9982 26.7921C6.52824 26.2438 6.18441 25.5989 5.99045 24.9034C5.79649 24.2079 5.75755 23.4781 5.87584 22.7657C5.99461 22.0536 6.26767 21.3757 6.67641 20.7801C7.0849 20.1847 7.61902 19.6861 8.24106 19.3195C8.86335 18.9529 9.55788 18.7266 10.2769 18.6573C10.9959 18.588 11.7208 18.6774 12.4016 18.9184V12.9328C5.4049 11.8237 0 17.4784 0 23.5761C0.00465306 26.4426 1.14514 29.1899 3.17192 31.2169C5.19869 33.2434 7.94596 34.3839 10.8125 34.3886C16.7731 34.3886 21.622 30.7445 21.622 23.5761V11.3924C23.8996 12.9796 26.6204 13.7143 29.5249 13.7633L29.5249 8.26041C27.9659 8.18914 26.4617 7.66604 25.1951 6.75429Z"
          fill="#25F4EE"
        ></path>
        <path
          d="M21.6221 23.5764V11.3928C23.8996 12.9794 26.6204 13.7141 29.5252 13.7634V9.44581C28.0822 9.04614 26.7617 8.29381 25.6825 7.25618C25.511 7.09724 25.3494 6.92826 25.1927 6.75438C24.7923 6.4752 24.4127 6.16736 24.0564 5.83357C22.8186 4.66026 22.0041 3.1103 21.7396 1.4254L17.3731 1.4254V23.7111C17.3731 27.7958 15.169 29.956 12.4335 29.956C11.6569 29.9538 10.8919 29.7682 10.2005 29.4143C9.50941 29.0602 8.91186 28.5476 8.45635 27.9182C7.49072 27.3946 6.72713 26.5637 6.28656 25.5572C5.84574 24.5509 5.75341 23.4261 6.02378 22.361C6.2939 21.2959 6.91178 20.3516 7.77896 19.6772C8.64639 19.0027 9.71366 18.6366 10.8123 18.6366C11.3564 18.6412 11.8962 18.7363 12.409 18.9182V14.1895C10.3044 14.1922 8.24647 14.8093 6.48786 15.9657C4.72925 17.1221 3.34704 18.7666 2.51047 20.6979C1.6739 22.6292 1.4197 24.7627 1.77896 26.8363C2.13823 28.9098 3.09553 30.8335 4.53309 32.3705C6.36272 33.6848 8.55945 34.3906 10.8123 34.3884C16.7731 34.3884 21.6221 30.7446 21.6221 23.5764Z"
          fill="#000000"
        ></path>
      </svg>
    ),
    url: "https://tiktok.com/@eki_zulfar",
    color: "black",
    gradient: "from-gray-900 via-teal-500 to-pink-500",
  },
];

const SocialLinks = () => {
  // useEffect is used here to initialize AOS, as it's a client-side library.
  // The empty dependency array ensures this only runs once on component mount.
  useEffect(() => {
    AOS.init({
      offset: 50,
      duration: 800,
      easing: 'ease-out',
      once: true,
      mirror: false,
    });
  }, []);

  // Filter links for clearer rendering logic
  const primaryLink = socialLinks.find((link) => link.isPrimary);
  const secondaryLinks = socialLinks.filter((link) => !link.isPrimary);

  return (
    <div className="w-full bg-gray-800/50 rounded-2xl p-6 md:p-8 backdrop-blur-md relative overflow-hidden shadow-2xl border border-gray-700">
      {/* Background radial glow */}
      <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-indigo-500/20 to-purple-500/10 blur-xl animate-pulse-slow"></div>

      <h3
        className="text-2xl font-semibold text-gray-100 mb-6 flex items-center gap-2 relative z-10"
        data-aos="fade-down"
      >
        <span className="inline-block w-8 h-1 bg-teal-500 rounded-full"></span>
        Connect With Me
      </h3>

      <div className="flex flex-col gap-4 relative z-10">
        {/* LinkedIn - Primary Row */}
        {primaryLink && (
          <SocialLinkCard
            {...primaryLink}
            aosDelay={100}
          />
        )}

        {/* Other Links in a Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {secondaryLinks.map((link, index) => (
            <SocialLinkCard
              key={link.name}
              {...link}
              aosDelay={200 + index * 100}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default SocialLinks;
