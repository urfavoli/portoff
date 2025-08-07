/* eslint-disable @next/next/no-img-element */
import React, { useEffect, useState } from "react";
import {
  ArrowLeft, ExternalLink, Github, Code2, Star,
  ChevronRight, Layers, Layout, Globe, Package, Cpu, Code,
} from "lucide-react";

// --- Type Definitions ---
// Defining the data structure for a Project.
type Project = {
  id: string;
  Title: string;
  Description: string;
  Link: string;
  Github: string;
  Img: string;
  TechStack: string[];
  Features: string[];
};

// --- Mock Project Data ---
// This data replaces the need for local storage for this demonstration.
const MOCK_PROJECTS: Project[] = [
  {
    id: "1",
    Title: "Real-time Chat Application",
    Description: "A modern real-time chat application built with React and Express. It features secure user authentication, private messaging, and a clean, responsive UI with Tailwind CSS. Users can create profiles, send and receive messages instantly, and share files. The backend uses websockets for efficient, low-latency communication.",
    Link: "https://chat-app.com",
    Github: "Private",
    Img: "https://placehold.co/1200x800/1e293b/d1d5db?text=Chat+App",
    TechStack: ["React", "Express", "Tailwind", "Socket.IO", "Node.js"],
    Features: [
      "Real-time messaging with websockets.",
      "User authentication and private profiles.",
      "Responsive design for all devices.",
      "File sharing capabilities.",
      "Emoji and rich text support."
    ]
  },
  {
    id: "2",
    Title: "E-commerce Platform",
    Description: "A full-stack e-commerce platform that allows users to browse products, add them to a cart, and complete purchases. The platform includes a robust product management system for administrators and a secure payment gateway integration. It's designed for scalability and high performance.",
    Link: "https://ecommerce-store.com",
    Github: "https://github.com/your-username/ecommerce-platform",
    Img: "https://placehold.co/1200x800/1e293b/d1d5db?text=E-commerce+Platform",
    TechStack: ["React", "Python", "Django", "Tailwind", "PostgreSQL"],
    Features: [
      "Secure user registration and login.",
      "Product filtering and search functionality.",
      "Integrated payment processing.",
      "Admin dashboard for product management.",
      "Responsive product gallery."
    ]
  },
];

// --- Icon Mapping for Technologies ---
const TECH_ICONS: { [key: string]: React.ElementType } = {
  React: Globe,
  Tailwind: Layout,
  Express: Cpu,
  Python: Code,
  Javascript: Code,
  HTML: Code,
  CSS: Code,
  "Node.js": Cpu,
  default: Package,
};

// --- Custom Modal Component (replaces SweetAlert2) ---
interface ModalProps {
  title: string;
  text: string;
  onClose: () => void;
}

const CustomModal: React.FC<ModalProps> = ({ title, text, onClose }) => {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-sm transition-all duration-300 animate-fadeIn">
      <div className="relative w-full max-w-sm p-6 bg-gray-900 rounded-xl border border-gray-700 shadow-2xl animate-scaleUp">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-xl font-bold text-white">{title}</h3>
          <button onClick={onClose} className="text-gray-400 hover:text-white transition-colors">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
        <p className="text-gray-400 mb-6">{text}</p>
        <button
          onClick={onClose}
          className="w-full px-4 py-2 text-white font-semibold rounded-lg bg-indigo-600 hover:bg-indigo-700 transition-colors"
        >
          Close
        </button>
      </div>
    </div>
  );
};

// --- TechBadge Component ---
interface TechBadgeProps {
  tech: string;
}

const TechBadge: React.FC<TechBadgeProps> = ({ tech }) => {
  const Icon = TECH_ICONS[tech as keyof typeof TECH_ICONS] || TECH_ICONS.default;
  return (
    <div className="group relative overflow-hidden px-3 py-2 md:px-4 md:py-2.5 bg-gray-700/20 rounded-xl border border-gray-600/50 hover:border-indigo-500/50 transition-all duration-300">
      <div className="relative flex items-center gap-2">
        <Icon className="w-4 h-4 text-indigo-400 group-hover:text-indigo-300 transition-colors" />
        <span className="text-sm font-medium text-gray-200 group-hover:text-white transition-colors">
          {tech}
        </span>
      </div>
    </div>
  );
};

// --- FeatureItem Component ---
interface FeatureItemProps {
  feature: string;
}

const FeatureItem: React.FC<FeatureItemProps> = ({ feature }) => {
  return (
    <li className="flex items-start gap-3 p-3 rounded-xl hover:bg-white/5 transition-all duration-300 border border-transparent hover:border-white/10">
      <div className="relative mt-2">
        <div className="w-2 h-2 rounded-full bg-indigo-400 group-hover:scale-125 transition-transform duration-300" />
      </div>
      <span className="text-sm text-gray-300 group-hover:text-white transition-colors">
        {feature}
      </span>
    </li>
  );
};

// --- ProjectStats Component ---
interface ProjectStatsProps {
  project: Project;
}

const ProjectStats: React.FC<ProjectStatsProps> = ({ project }) => {
  const techStackCount = project.TechStack?.length ?? 0;
  const featuresCount = project.Features?.length ?? 0;

  return (
    <div className="grid grid-cols-2 gap-4 p-4 bg-gray-900 rounded-xl border border-gray-800 shadow-xl">
      <div className="flex items-center gap-3 p-3 rounded-lg border border-gray-700 bg-gray-800/50 transition-all duration-300 hover:scale-[1.03] hover:border-indigo-500 hover:shadow-lg hover:shadow-indigo-500/20">
        <div className="bg-indigo-500/20 p-2 rounded-full">
          <Code2 className="text-indigo-400 w-6 h-6" strokeWidth={1.5} />
        </div>
        <div>
          <div className="text-xl md:text-2xl font-bold text-indigo-300">{techStackCount}</div>
          <div className="text-xs md:text-sm text-gray-400 font-medium">Technologies</div>
        </div>
      </div>
      <div className="flex items-center gap-3 p-3 rounded-lg border border-gray-700 bg-gray-800/50 transition-all duration-300 hover:scale-[1.03] hover:border-purple-500 hover:shadow-lg hover:shadow-purple-500/20">
        <div className="bg-purple-500/20 p-2 rounded-full">
          <Layers className="text-purple-400 w-6 h-6" strokeWidth={1.5} />
        </div>
        <div>
          <div className="text-xl md:text-2xl font-bold text-purple-300">{featuresCount}</div>
          <div className="text-xs md:text-sm text-gray-400 font-medium">Features</div>
        </div>
      </div>
    </div>
  );
};

// --- The main App Component (replaces ProjectDetails) ---
const App = () => {
  const [projectId, setProjectId] = useState<string | null>("1");
  const [project, setProject] = useState<Project | null>(null);
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    if (projectId) {
      const selectedProject = MOCK_PROJECTS.find(p => p.id === projectId);
      setProject(selectedProject || null);
    }
  }, [projectId]);

  const handleBack = () => {
    // A simple way to simulate navigating back to a list of projects.
    setProjectId(null);
  };

  const handleGithubClick = (githubLink: string, e: React.MouseEvent) => {
    if (githubLink === 'Private') {
      e.preventDefault();
      setShowModal(true);
    }
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  // The landing page that shows the list of projects
  if (!project) {
    return (
      <div className="min-h-screen bg-gray-950 text-white p-8 md:p-16">
        <h1 className="text-4xl md:text-6xl font-bold mb-8 text-center bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
          My Projects
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {MOCK_PROJECTS.map((p) => (
            <div
              key={p.id}
              onClick={() => setProjectId(p.id)}
              className="group relative cursor-pointer overflow-hidden rounded-xl border border-gray-800 shadow-xl transition-all duration-300 hover:scale-105"
            >
              <img
                src={p.Img}
                alt={p.Title}
                className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-transparent to-transparent" />
              <div className="absolute bottom-0 p-4 w-full">
                <h2 className="text-2xl font-bold">{p.Title}</h2>
                <p className="text-sm text-gray-400">{p.Description.substring(0, 70)}...</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }

  // The main project details page
  return (
    <div className="min-h-screen bg-gray-950 text-white relative overflow-hidden font-sans">
      {/* Background animations */}
      <div className="fixed inset-0 z-0">
        <div className="absolute top-0 -left-1/4 w-3/4 h-3/4 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob" />
        <div className="absolute bottom-0 -right-1/4 w-3/4 h-3/4 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-4000" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 md:px-6 py-8 md:py-16">
        <div className="flex items-center gap-4 mb-8 md:mb-12">
          <button
            onClick={handleBack}
            className="group inline-flex items-center gap-2 px-4 py-2 bg-gray-800/70 backdrop-blur-xl rounded-xl text-white/90 hover:bg-gray-700/70 transition-all duration-300 border border-gray-700 hover:border-gray-600 text-sm md:text-base"
          >
            <ArrowLeft className="w-4 h-4 md:w-5 md:h-5 group-hover:-translate-x-1 transition-transform" />
            <span>Back</span>
          </button>
          <div className="flex items-center gap-2 text-sm md:text-base text-gray-400">
            <span>Projects</span>
            <ChevronRight className="w-3 h-3 md:w-4 md:h-4" />
            <span className="text-white/90 truncate max-w-[150px] md:max-w-none">{project.Title}</span>
          </div>
        </div>

        <div className="grid lg:grid-cols-2 gap-10 md:gap-16">
          <div className="space-y-6 md:space-y-10 animate-slideInLeft">
            <div className="space-y-4">
              <h1 className="text-3xl md:text-6xl font-bold bg-gradient-to-r from-blue-200 via-purple-200 to-pink-200 bg-clip-text text-transparent leading-tight">
                {project.Title}
              </h1>
              <div className="relative h-1 w-16 md:w-24">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full animate-pulse" />
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full blur-sm" />
              </div>
            </div>

            <p className="text-base md:text-lg text-gray-300/90 leading-relaxed">
              {project.Description}
            </p>

            <ProjectStats project={project} />

            <div className="flex flex-wrap gap-3 md:gap-4">
              <a
                href={project.Link}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative inline-flex items-center gap-2 px-4 md:px-8 py-2.5 md:py-4 bg-gray-800/50 hover:bg-gray-700/50 text-blue-300 rounded-xl transition-all duration-300 border border-blue-500/20 hover:border-blue-500/40 backdrop-blur-xl overflow-hidden text-sm md:text-base"
              >
                <ExternalLink className="relative w-4 h-4 md:w-5 md:h-5 group-hover:rotate-12 transition-transform" />
                <span className="relative font-medium">Live Demo</span>
              </a>

              <a
                href={project.Github}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative inline-flex items-center gap-2 px-4 md:px-8 py-2.5 md:py-4 bg-gray-800/50 hover:bg-gray-700/50 text-purple-300 rounded-xl transition-all duration-300 border border-purple-500/20 hover:border-purple-500/40 backdrop-blur-xl overflow-hidden text-sm md:text-base"
                onClick={(e) => handleGithubClick(project.Github, e)}
              >
                <Github className="relative w-4 h-4 md:w-5 md:h-5 group-hover:rotate-12 transition-transform" />
                <span className="relative font-medium">Github</span>
              </a>
            </div>

            <div className="space-y-4 md:space-y-6">
              <h3 className="text-lg md:text-xl font-semibold text-white/90 flex items-center gap-3">
                <Code2 className="w-5 h-5 text-indigo-400" />
                Technologies Used
              </h3>
              {project.TechStack.length > 0 ? (
                <div className="flex flex-wrap gap-2">
                  {project.TechStack.map((tech, index) => (
                    <TechBadge key={index} tech={tech} />
                  ))}
                </div>
              ) : (
                <p className="text-sm md:text-base text-gray-400 opacity-50">No technologies added.</p>
              )}
            </div>
          </div>

          <div className="space-y-6 md:space-y-10 animate-slideInRight">
            <div className="relative rounded-2xl overflow-hidden border border-white/10 shadow-2xl group">
              <img
                src={project.Img}
                alt={project.Title}
                className="w-full h-auto object-cover transform transition-transform duration-700 will-change-transform group-hover:scale-105"
              />
            </div>
            
            <div className="bg-white/5 backdrop-blur-xl rounded-2xl p-6 md:p-8 border border-white/10 space-y-6 hover:border-white/20 transition-colors duration-300 group">
              <h3 className="text-xl font-semibold text-white/90 flex items-center gap-3">
                <Star className="w-5 h-5 text-yellow-400 group-hover:rotate-[20deg] transition-transform duration-300" />
                Key Features
              </h3>
              {project.Features.length > 0 ? (
                <ul className="list-none space-y-2">
                  {project.Features.map((feature, index) => (
                    <FeatureItem key={index} feature={feature} />
                  ))}
                </ul>
              ) : (
                <p className="text-gray-400 opacity-50">No features added.</p>
              )}
            </div>
          </div>
        </div>
      </div>
      
      {showModal && (
        <CustomModal
          title="Source Code Private"
          text="Apologies, the source code for this project is private and not available to the public."
          onClose={handleCloseModal}
        />
      )}
      
      {/* Embedded CSS for animations */}
      <style>{`
        @keyframes blob {
          0% { transform: translate(0, 0) scale(1); }
          33% { transform: translate(30px, -50px) scale(1.1); }
          66% { transform: translate(-20px, 20px) scale(0.9); }
          100% { transform: translate(0, 0) scale(1); }
        }
        .animate-blob { animation: blob 10s infinite; }
        .animation-delay-4000 { animation-delay: 4s; }
        .animate-fadeIn { animation: fadeIn 0.7s ease-out; }
        .animate-slideInLeft { animation: slideInLeft 0.7s ease-out; }
        .animate-slideInRight { animation: slideInRight 0.7s ease-out; }
        .animate-scaleUp { animation: scaleUp 0.3s ease-out; }
        
        @keyframes fadeIn { from { opacity: 0; } to { opacity: 1; } }
        @keyframes slideInLeft { from { opacity: 0; transform: translateX(-30px); } to { opacity: 1; transform: translateX(0); } }
        @keyframes slideInRight { from { opacity: 0; transform: translateX(30px); } to { opacity: 1; transform: translateX(0); } }
        @keyframes scaleUp { from { opacity: 0; transform: scale(0.9); } to { opacity: 1; transform: scale(1); } }
      `}</style>
    </div>
  );
};

export default App;
