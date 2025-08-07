"use client";

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { Mail, User, MessageSquare, Linkedin, Github, Instagram, Youtube, X, Fullscreen } from "lucide-react";
import AOS from "aos";
import "aos/dist/aos.css";

// --- DUMMY DATA FOR DEMONSTRATION ---
interface Project {
  id: string;
  imgSrc: string;
  title: string;
  description: string;
  liveDemoLink: string;
}

interface CertificateData {
  ImgSertif: string;
  title: string;
}

const dummyProjects: Project[] = [
  {
    id: "1",
    imgSrc: "https://placehold.co/600x400/8A2BE2/FFFFFF?text=Project+Alpha",
    title: "E-commerce Platform",
    description: "A full-stack web application built with Next.js, Stripe for payments, and a PostgreSQL database. Features include user authentication, product listings, shopping cart, and order management.",
    liveDemoLink: "https://example.com/ecommerce",
  },
  {
    id: "2",
    imgSrc: "https://placehold.co/600x400/4169E1/FFFFFF?text=Project+Beta",
    title: "Task Management App",
    description: "An intuitive task management application with drag-and-drop functionality, user collaboration, and real-time updates. Developed using React, Node.js, and WebSockets.",
    liveDemoLink: "https://example.com/tasks",
  },
  {
    id: "3",
    imgSrc: "https://placehold.co/600x400/DA70D6/FFFFFF?text=Project+Gamma",
    title: "Personal Blog & Portfolio",
    description: "A responsive and modern personal blog and portfolio site built with Next.js and Markdown for content management. Includes dynamic routing and SEO optimization.",
    liveDemoLink: "https://example.com/blog",
  },
  {
    id: "4",
    imgSrc: "https://placehold.co/600x400/6A5ACD/FFFFFF?text=Project+Delta",
    title: "Weather Dashboard",
    description: "An interactive weather dashboard providing real-time weather data, forecasts, and location-based weather updates using a third-party API (OpenWeatherMap).",
    liveDemoLink: "https://example.com/weather",
  },
];

const dummyCertificates: CertificateData[] = [
  {
    ImgSertif: "https://placehold.co/600x400/A020F0/FFFFFF?text=Web+Dev+Cert",
    title: "Full Stack Web Development - Coursera",
  },
  {
    ImgSertif: "https://placehold.co/600x400/FF69B4/FFFFFF?text=React+Cert",
    title: "Advanced React Development - Udemy",
  },
  {
    ImgSertif: "https://placehold.co/600x400/00CED1/FFFFFF?text=Cloud+Cert",
    title: "Cloud Computing Fundamentals - AWS Certified",
  },
];

// --- COMPONENT PROPS TYPES ---
interface SocialLinkProps {
  name: string;
  displayName: string;
  subText: string;
  icon: React.ReactNode;
  url: string;
  gradient: string;
  aosDelay?: number;
  isPrimary?: boolean;
}

interface ProjectModalProps {
  project: Project;
  onClose: () => void;
}

interface InputFieldProps {
  field: string;
  label: string;
  icon: React.ElementType;
  formData: {
    name: string;
    email: string;
    message: string;
  };
  handleChange: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
}

interface FormData {
  name: string;
  email: string;
  message: string;
}

// --- COMPONENTS ---

// Social Link Card
const SocialLinkCard: React.FC<SocialLinkProps> = ({ displayName, subText, icon, url, gradient, aosDelay }) => (
  <a
    href={url}
    target="_blank"
    rel="noopener noreferrer"
    className={`
      flex items-center gap-4 p-4 rounded-xl text-white transition-all duration-300
      hover:scale-[1.02] transform bg-gradient-to-r ${gradient}
      relative z-10 overflow-hidden shadow-lg
    `}
    data-aos="fade-up"
    data-aos-delay={aosDelay}
  >
    {icon}
    <div className="flex-1">
      <h4 className="font-semibold">{displayName}</h4>
      <p className="text-sm text-gray-200">{subText}</p>
    </div>
  </a>
);

// Social Links Component (Enhanced Version)
const SocialLinks: React.FC = () => {
  useEffect(() => {
    AOS.init({
      offset: 50,
      duration: 800,
      easing: 'ease-out',
      once: true,
      mirror: false,
    });
  }, []);

  const rawSocialLinks = [
    {
      name: "LinkedIn",
      displayName: "Let's Connect",
      subText: "on LinkedIn",
      icon: <Linkedin className="w-8 h-8 flex-shrink-0" />,
      url: "https://www.linkedin.com/urfavoli/",
      gradient: "from-blue-600 to-blue-800",
      isPrimary: true,
    },
    {
      name: "Instagram",
      displayName: "Instagram",
      subText: "@urfavolli",
      icon: <Instagram className="w-8 h-8 flex-shrink-0" />,
      url: "https://www.instagram.com/urfavolli",
      gradient: "from-purple-600 via-pink-600 to-yellow-500",
    },
    {
      name: "YouTube",
      displayName: "YouTube",
      subText: "@eki zulfar",
      icon: <Youtube className="w-8 h-8 flex-shrink-0" />,
      url: "https://www.youtube.com/@picogrow",
      gradient: "from-red-600 to-red-800",
    },
    {
      name: "GitHub",
      displayName: "Github",
      subText: "@EkiZR",
      icon: <Github className="w-8 h-8 flex-shrink-0" />,
      url: "https://github.com/urfavoli",
      gradient: "from-gray-800 to-gray-900",
    },
    {
      name: "TikTok",
      displayName: "Tiktok",
      subText: "@gowupp",
      icon: (
        <svg
          width="24"
          height="24"
          viewBox="0 0 45 45"
          fill="currentColor"
          xmlns="http://www.w3.org/2000/svg"
          className="w-8 h-8 flex-shrink-0"
        >
          <path d="M29.5248 9.44576C28.0821 9.04609 26.7616 8.29376 25.6826 7.25638C25.5109 7.09719 25.3493 6.92821 25.1928 6.75433C23.9066 5.27833 23.2092 3.38038 23.2336 1.42291L17.3561 1.42291V23.7086C17.3561 27.7935 15.152 29.9535 12.4165 29.9535C11.694 29.9611 10.9789 29.8107 10.3214 29.5125C9.6636 29.2144 9.07952 28.7758 8.60956 28.2272C8.13984 27.6789 7.79552 27.0341 7.6018 26.3386C7.40784 25.6431 7.36891 24.9133 7.48744 24.2009C7.60597 23.4885 7.87903 22.8106 8.28752 22.2155C8.69625 21.6199 9.23038 21.1213 9.85242 20.7547C10.4747 20.3878 11.1695 20.1618 11.8883 20.0925C12.607 20.0232 13.3324 20.1123 14.013 20.3535V14.3584C13.4889 14.2431 12.9531 14.1863 12.4165 14.1894L12.3918 14.1894C10.2543 14.1943 8.16605 14.8325 6.39127 16.0235C4.6165 17.2149 3.23429 18.9052 2.41976 20.8813C1.60523 22.8578 1.39487 25.0311 1.81511 27.1269C2.23511 29.2227 3.26711 31.1469 4.78033 32.6565C6.2938 34.166 8.22066 35.1934 10.3175 35.6082C12.4143 36.0231 14.587 35.8073 16.5612 34.9879C18.5355 34.1682 20.2226 32.7821 21.4092 31.0041C22.5959 29.2264 23.229 27.1367 23.2285 24.9992V12.8156C25.5036 14.3927 28.2244 15.1345 31.1289 15.1886V9.68552C30.5869 9.66568 30.0492 9.58511 29.5248 9.44576Z" fill="#FE2C55"></path>
          <path d="M25.1951 6.75429C24.7947 6.4751 24.4149 6.16751 24.0588 5.83347C22.8211 4.66016 22.0063 3.1102 21.742 1.42531C21.6622 0.954367 21.622 0.477551 21.622 0L15.7445 0V22.6408C15.7445 27.5069 13.5404 28.5184 10.8049 28.5184C10.0829 28.5262 9.36784 28.3758 8.71029 28.0773C8.05249 27.7793 7.46792 27.3407 6.9982 26.7921C6.52824 26.2438 6.18441 25.5989 5.99045 24.9034C5.79649 24.2079 5.75755 23.4781 5.87584 22.7657C5.99461 22.0536 6.26767 21.3757 6.67641 20.7801C7.0849 20.1847 7.61902 19.6861 8.24106 19.3195C8.86335 18.9529 9.55788 18.7266 10.2769 18.6573C10.9959 18.588 11.7208 18.6774 12.4016 18.9184V12.9328C5.4049 11.8237 0 17.4784 0 23.5761C0.00465306 26.4426 1.14514 29.1899 3.17192 31.2169C5.19869 33.2434 7.94596 34.3839 10.8125 34.3886C16.7731 34.3886 21.622 30.7445 21.622 23.5761V11.3924C23.8996 12.9796 26.6204 13.7143 29.5249 13.7633L29.5249 8.26041C27.9659 8.18914 26.4617 7.66604 25.1951 6.75429Z" fill="#25F4EE"></path>
          <path d="M21.6221 23.5764V11.3928C23.8996 12.9794 26.6204 13.7141 29.5252 13.7634V9.44581C28.0822 9.04614 26.7617 8.29381 25.6825 7.25618C25.511 7.09724 25.3494 6.92826 25.1927 6.75438C24.7923 6.4752 24.4127 6.16736 24.0564 5.83357C22.8186 4.66026 22.0041 3.1103 21.7396 1.4254L17.3731 1.4254V23.7111C17.3731 27.7958 15.169 29.956 12.4335 29.956C11.6569 29.9538 10.8919 29.7682 10.2005 29.4143C9.50941 29.0602 8.91186 28.5476 8.45635 27.9182C7.49072 27.3946 6.72713 26.5637 6.28656 25.5572C5.84574 24.5509 5.75341 23.4261 6.02378 22.361C6.2939 21.2959 6.91178 20.3516 7.77896 19.6772C8.64639 19.0027 9.71366 18.6366 10.8123 18.6366C11.3564 18.6412 11.8962 18.7363 12.409 18.9182V14.1895C10.3044 14.1922 8.24647 14.8093 6.48786 15.9657C4.72925 17.1221 3.34704 18.7666 2.51047 20.6979C1.6739 22.6292 1.4197 24.7627 1.77896 26.8363C2.13823 28.9098 3.09553 30.8335 4.53309 32.3705C6.36272 33.6848 8.55945 34.3906 10.8123 34.3884C16.7731 34.3884 21.6221 30.7446 21.6221 23.5764Z" fill="#000000"></path>
        </svg>
      ),
      url: "https://tiktok.com/@eki_zulfar",
      gradient: "from-gray-900 via-teal-500 to-pink-500",
    },
  ];

  const primaryLink = rawSocialLinks.find((link) => link.isPrimary);
  const secondaryLinks = rawSocialLinks.filter((link) => !link.isPrimary);

  return (
    <div className="w-full bg-gray-800/50 rounded-2xl p-6 md:p-8 backdrop-blur-md relative overflow-hidden shadow-2xl border border-gray-700">
      <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-indigo-500/20 to-purple-500/10 blur-xl animate-pulse-slow"></div>
      <h3
        className="text-2xl font-semibold text-gray-100 mb-6 flex items-center gap-2 relative z-10"
        data-aos="fade-down"
      >
        <span className="inline-block w-8 h-1 bg-teal-500 rounded-full"></span>
        Connect With Me
      </h3>

      <div className="flex flex-col gap-4 relative z-10">
        {primaryLink && (
          <SocialLinkCard
            {...primaryLink}
            aosDelay={100}
          />
        )}
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

// CardProject Component
const CardProject: React.FC<Project & { onClick: () => void }> = ({ imgSrc, title, description, liveDemoLink, onClick }) => (
  <div
    className="bg-white/5 p-4 rounded-xl shadow-lg border border-white/10 flex flex-col items-center cursor-pointer hover:scale-105 transition-transform duration-300"
    data-aos="fade-up"
    data-aos-delay="200"
    onClick={onClick}
    role="button"
  >
    <div className="relative w-full h-48 mb-4">
      <Image
        src={imgSrc}
        alt={title}
        layout="fill"
        objectFit="cover"
        className="rounded-lg"
      />
    </div>
    <h3 className="text-xl font-bold mb-2 text-white">{title}</h3>
    <p className="text-gray-300 text-center mb-4">{description}</p>
    <a href={liveDemoLink} target="_blank" rel="noopener noreferrer" className="mt-auto inline-block px-4 py-2 rounded-full bg-gradient-to-r from-purple-600 to-indigo-600 text-white font-semibold hover:from-purple-700 hover:to-indigo-700 transition-colors">
      Live Demo
    </a>
  </div>
);

// ProjectCardModal Component
const ProjectCardModal: React.FC<ProjectModalProps> = ({ project, onClose }) => (
  <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-md">
    <div className="bg-gray-800 p-8 rounded-lg max-w-xl text-center relative">
      <button onClick={onClose} className="absolute top-4 right-4 text-white hover:text-gray-400">
        <X />
      </button>
      <h3 className="text-2xl font-bold text-white mb-4">{project.title}</h3>
      <p className="text-gray-300 mb-6">{project.description}</p>
      <a href={project.liveDemoLink} target="_blank" rel="noopener noreferrer" className="inline-block px-6 py-3 rounded-full bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold">
        Visit Website
      </a>
    </div>
  </div>
);

// BlurText Component (Simplified for demonstration)
const BlurText = ({ text, className }: { text: string; className: string }) => {
  return <h1 className={className}>{text}</h1>;
};

// --- Your Certificate Component from the previous turn ---
const Certificate: React.FC<CertificateData> = ({ ImgSertif, title = "Certificate" }) => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  return (
    <div className="w-full" data-aos="fade-up" data-aos-delay="100">
      <div
        className="relative overflow-hidden rounded-lg shadow-lg transition-all duration-300 ease-in-out hover:-translate-y-1 hover:shadow-2xl group cursor-pointer"
        onClick={handleOpen}
        role="button"
        tabIndex={0}
        aria-label={`View full certificate: ${title}`}
      >
        <Image
          src={ImgSertif}
          alt={`${title} Thumbnail`}
          layout="fill"
          objectFit="cover"
          className="block w-full h-auto object-cover filter contrast-[1.05] brightness-90 saturate-[1.1] transition-all duration-300 ease-out group-hover:contrast-[1.1] group-hover:brightness-100 group-hover:saturate-[1.2]"
          loading="lazy"
        />
        <div
          className="absolute inset-0 opacity-0 transition-opacity duration-300 ease-in-out bg-black/30 group-hover:opacity-100 flex items-center justify-center z-20"
        >
          <div
            className="text-white text-center opacity-0 translate-y-2 transition-all duration-400 ease-in-out group-hover:opacity-100 group-hover:translate-y-0"
          >
            <Fullscreen className="w-10 h-10 mb-2 drop-shadow-md" />
            <h6 className="font-semibold drop-shadow-lg text-lg">
              View Certificate
            </h6>
          </div>
        </div>
      </div>
      {open && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-md transition-all duration-300 animate-fadeIn">
          <div className="relative w-full h-full p-4 flex items-center justify-center">
            <button
              onClick={handleClose}
              className="absolute top-4 right-4 z-10 p-2.5 rounded-full bg-black/60 text-white transition-all duration-300 hover:bg-black/80 hover:scale-110 hover:rotate-90"
              aria-label="close modal"
            >
              <X className="w-7 h-7" />
            </button>
            <Image
              src={ImgSertif}
              alt={`${title} Full View`}
              layout="fill"
              objectFit="contain"
              className="block max-w-full max-h-[95vh] w-auto h-auto object-contain animate-scaleUp"
              loading="lazy"
            />
          </div>
        </div>
      )}
      <style>{`
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        @keyframes scaleUp {
          from { transform: scale(0.95); opacity: 0.9; }
          to { transform: scale(1); opacity: 1; }
        }
        .animate-fadeIn { animation: fadeIn 0.3s ease-out forwards; }
        .animate-scaleUp { animation: scaleUp 0.3s ease-out; }
      `}</style>
    </div>
  );
};

// --- Your InputField Component from the previous turn ---
const InputField: React.FC<InputFieldProps> = ({ field, label, icon: Icon, formData, handleChange }) => {
  const renderInput = () => {
    const baseClasses =
      "w-full p-4 rounded-xl bg-gray-800 text-white placeholder-transparent " +
      "focus:outline-none focus:ring-2 focus:ring-indigo-500 " +
      "focus:border-indigo-500 transition-all duration-300 peer " +
      "shadow-sm hover:shadow-md ";
    const inputClasses = `${baseClasses} pl-12 border border-gray-700 hover:border-gray-600`;
    const textareaClasses = `${baseClasses} pt-12 h-52 border border-gray-700 hover:border-gray-600 resize-none`;
    if (field === "message") {
      return (
        <textarea
          id={field}
          name={field}
          placeholder={label}
          value={formData[field as keyof FormData]}
          onChange={handleChange}
          className={textareaClasses}
          required
        />
      );
    }
    return (
      <input
        id={field}
        type={field === "email" ? "email" : "text"}
        name={field}
        placeholder={label}
        value={formData[field as keyof FormData]}
        onChange={handleChange}
        className={inputClasses}
        required
      />
    );
  };

  return (
    <div className="relative w-full group" data-aos="fade-up" data-aos-delay="200">
      <Icon className="absolute left-4 top-4 w-5 h-5 text-gray-400 group-hover:text-indigo-400 peer-focus:text-indigo-400 transition-colors duration-300 z-10" />
      {renderInput()}
      <label
        htmlFor={field}
        className={`
          absolute left-12 top-4 transform -translate-y-1/2 text-gray-400 text-sm transition-all duration-300
          peer-placeholder-shown:top-1/2 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:text-base 
          peer-focus:top-4 peer-focus:-translate-y-1/2 peer-focus:text-indigo-400 peer-focus:text-sm
        `}
      >
        {label}
      </label>
    </div>
  );
};

// --- Main HomePage Component ---
const HomePage = () => {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    message: '',
  });

  const [submitStatus, setSubmitStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name as keyof FormData]: value }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitStatus('submitting');
    try {
      await new Promise(resolve => setTimeout(resolve, 1500));
      console.log("Form submitted:", formData);
      setSubmitStatus('success');
      setFormData({ name: '', email: '', message: '' });
    } catch (error) {
      console.error("Form submission error:", error);
      setSubmitStatus('error');
    } finally {
      setTimeout(() => setSubmitStatus('idle'), 3000);
    }
  };

  const [modalOpen, setModalOpen] = useState(false);
  const [selectedProjectForModal, setSelectedProjectForModal] = useState<Project | null>(null);

  const handleOpenModal = (project: Project) => {
    setSelectedProjectForModal(project);
    setModalOpen(true);
  };

  const handleCloseModal = () => {
    setModalOpen(false);
    setSelectedProjectForModal(null);
  };

  return (
    <main className="min-h-screen bg-[#030014] text-white font-sans">
      <style>
        {`
        body { font-family: 'Inter', sans-serif; }
        .animate-slideInLeft { animation: slideInLeft 0.8s ease-out forwards; }
        .animate-slideInRight { animation: slideInRight 0.8s ease-out forwards; }
        .animate-fadeIn { animation: fadeIn 0.8s ease-out forwards; }
        .animate-slide-up-custom { animation: slideUp 0.6s ease-out forwards; }
        @keyframes slideInLeft { from { opacity: 0; transform: translateX(-50px); } to { opacity: 1; transform: translateX(0); } }
        @keyframes slideInRight { from { opacity: 0; transform: translateX(50px); } to { opacity: 1; transform: translateX(0); } }
        @keyframes fadeIn { from { opacity: 0; } to { opacity: 1; } }
        @keyframes slideUp { from { opacity: 0; transform: translateY(20px); } to { opacity: 1; transform: translateY(0); } }
        .hover\\:shadow-glow:hover { box-shadow: 0 0 15px rgba(124, 58, 237, 0.6); }
        `}
      </style>
      <section id="Home" className="min-h-screen flex items-center justify-center pt-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
        <div className="text-center max-w-4xl mx-auto py-20 z-10" data-aos="fade-up">
          <BlurText
            text="Welcome to My Portfolio!"
            className="text-5xl md:text-7xl lg:text-8xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-600 leading-tight"
          />
          <p className="mt-6 text-lg md:text-xl lg:text-2xl text-gray-300 max-w-2xl mx-auto animate-slideInLeft">
            im Soufiane, a passionate Developer building digital useful apps.
          </p>
          <a
            href="#Portofolio"
            className="mt-10 inline-block px-8 py-4 rounded-full bg-gradient-to-r from-purple-600 to-indigo-600 text-white text-lg font-semibold hover:from-purple-700 hover:to-indigo-700 transition-all duration-300 hover:shadow-glow animate-slide-up-custom"
          >
            Explore My Work
          </a>
        </div>
      </section>

      <section id="About" className="py-20 bg-[#06061a] border-t border-white/5 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto text-center" data-aos="fade-up">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-12 animate-slideInRight">About Me</h2>
          <div className="flex flex-col lg:flex-row items-center gap-12">
            <div className="lg:w-1/2 text-left space-y-6 animate-fadeIn">
              <p className="text-lg text-gray-300 leading-relaxed">
                Hello! im **Soufiane**, a dedicated web developer with a passion for creating dynamic and responsive web applications. My journey into development started with a curiosity for how websites work, evolving into a drive to build intuitive and efficient user experiences.
              </p>
              <p className="text-lg text-gray-300 leading-relaxed">
                I specialize in front-end and back-end development with a strong foundation in React and Next.js, complemented by modern CSS frameworks like Tailwind CSS. im always eager to learn new technologies and solve complex problems, turning ideas into reality one line of code at a time.
              </p>
            </div>
            <div className="lg:w-1/2 w-full animate-fadeIn">
              <SocialLinks />
            </div>
          </div>
        </div>
      </section>

      <section id="Portofolio" className="py-20 bg-[#030014] border-t border-white/5 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center" data-aos="fade-up">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-12 animate-fadeIn">My Projects</h2>
          <p className="text-lg text-gray-300 mb-16">
            Here are some of the projects ive worked on, showcasing my skills and passion for web development.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {dummyProjects.map((project) => (
              <CardProject
                key={project.id}
                imgSrc={project.imgSrc}
                title={project.title}
                description={project.description}
                liveDemoLink={project.liveDemoLink}
                id={project.id}
                onClick={() => handleOpenModal(project)}
              />
            ))}
          </div>
        </div>
      </section>

      <section id="Certificates" className="py-20 bg-[#06061a] border-t border-white/5 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center" data-aos="fade-up">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-12 animate-fadeIn">My Certificates</h2>
          <p className="text-lg text-gray-300 mb-16">
            Proof of my continuous learning and dedication to mastering web technologies.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {dummyCertificates.map((cert, index) => (
              <Certificate
                key={index}
                ImgSertif={cert.ImgSertif}
                title={cert.title}
              />
            ))}
          </div>
        </div>
      </section>

      <section id="Contact" className="py-20 bg-[#030014] border-t border-white/5 px-4 sm:px-6 lg:px-8">
        <div className="max-w-xl mx-auto text-center" data-aos="fade-up">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-12 animate-slideInLeft">Get In Touch</h2>
          <p className="text-lg text-gray-300 mb-12">
            Have a project in mind or just want to say hello? Feel free to reach out using the form below!
          </p>
          <form onSubmit={handleSubmit} className="space-y-6 bg-white/5 p-8 rounded-xl shadow-lg border border-white/10 animate-fadeIn" data-aos="fade-up" data-aos-delay="200">
            {submitStatus === 'submitting' && (
              <p className="text-blue-400">Sending your message...</p>
            )}
            {submitStatus === 'success' && (
              <p className="text-green-400">Message sent successfully! 🎉</p>
            )}
            {submitStatus === 'error' && (
              <p className="text-red-400">Failed to send message. Please try again. 😢</p>
            )}
            <InputField
              field="name"
              label="Your Name"
              icon={User}
              formData={formData}
              handleChange={handleChange}
            />
            <InputField
              field="email"
              label="Your Email"
              icon={Mail}
              formData={formData}
              handleChange={handleChange}
            />
            <InputField
              field="message"
              label="Your Message"
              icon={MessageSquare}
              formData={formData}
              handleChange={handleChange}
            />
            <button
              type="submit"
              disabled={submitStatus === 'submitting'}
              className="w-full py-3 px-6 rounded-lg bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold shadow-md
                         hover:from-blue-700 hover:to-purple-700 transition-all duration-300 hover:scale-[1.02] transform
                         disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {submitStatus === 'submitting' ? 'Sending...' : 'Send Message'}
            </button>
          </form>
        </div>
      </section>
      {selectedProjectForModal && modalOpen && (
        <ProjectCardModal
          project={selectedProjectForModal}
          onClose={handleCloseModal}
        />
      )}
    </main>
  );
};

export default function App() {
  return <HomePage />;
}
