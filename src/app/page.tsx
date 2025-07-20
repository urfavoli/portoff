// src/app/(main)/page.tsx
"use client"; // This page uses client-side hooks and interactive components

import React, { useState } from 'react';
import { Linkedin, Github, Instagram, Youtube, Mail, Phone, MapPin } from "lucide-react"; // Icons for SocialLinkCard and InputField
import CardProject from "../components/CardProject"; // Your project card component
import Certificate from "../components/Certificate"; // Your certificate component
import InputField from "../components/InputField"; // Your input field component
import SocialLinks from "../components/SocialLinks"; // Your social links section component
import ProjectCardModal from "../components/ProjectCardModal"; // Your project card modal component
import BlurText from "../components/Blurtext";
import SplashCursor from "../components/SplashCursor"


// --- DUMMY DATA FOR DEMONSTRATION ---
// In a real app, this data would come from a CMS, API, or local JSON/Markdown files (fetched server-side).

const dummyProjects = [
  {
    id: "1",
    imgSrc: "https://placehold.co/600x400/8A2BE2/FFFFFF?text=Project+Alpha",
    title: "E-commerce Platform",
    description: "A full-stack web app",
    liveDemoLink: "https://example.com/ecommerce",
  },
  {
    id: "2",
    imgSrc: "https://placehold.co/600x400/4169E1/FFFFFF?text=Project+Beta",
    title: "Task Management App",
    description: "An intuitive task management to do app.",
    liveDemoLink: "https://example.com/tasks",
  },
  {
    id: "3",
    imgSrc: "https://placehold.co/600x400/DA70D6/FFFFFF?text=Project+Gamma",
    title: "",
    description: "A responsive ",
    liveDemoLink: "https://example.com/blog",
  },
  {
    id: "4",
    imgSrc: "https://placehold.co/600x400/6A5ACD/FFFFFF?text=Project+Delta",
    title: "Weather Dashboard",
    description: "An interactive weather dashboard providing real-time weather data, forecasts, and location-based weather updates using a third-party API.",
    liveDemoLink: "https://example.com/weather",
  },
];
<BlurText
  text="Isn't my portfolio dope ?!"
  delay={150}
  animateBy="words"
  direction="top"
  onAnimationComplete={dummyProjects.length > 0 ? () => console.log("Animation complete!") : undefined}
  className="text-2xl mb-8"
/>
const dummyCertificates = [
  {
    ImgSertif: "https://placehold.co/600x400/A020F0/FFFFFF?text=Web+Dev+Cert",
    title: "Full Stack Web Development",
  },
  {
    ImgSertif: "https://placehold.co/600x400/FF69B4/FFFFFF?text=React+Cert",
    title: "Advanced React Development",
  },
  {
    ImgSertif: "https://placehold.co/600x400/00CED1/FFFFFF?text=Cloud+Cert",
    title: "Cloud Computing Fundamentals",
  },
];

export default function HomePage() {
  // State for the contact form
  
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    alert("Thank you for your message! (Check console for data)");
    setFormData({ name: '', email: '', message: '' }); // Reset form
  };

  // State for the ProjectCardModal (if used directly on this page for a quick view)
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedProjectForModal, setSelectedProjectForModal] = useState<typeof dummyProjects[0] | null>(null);

  const openProjectModal = (project: typeof dummyProjects[0]) => {
    setSelectedProjectForModal(project);
    setModalOpen(true);
  };

  const closeProjectModal = () => {
    setModalOpen(false);
    setSelectedProjectForModal(null);
  };
const handleAnimationComplete = () => {
  console.log('Animation completed!');
};
  return (
    
    <main className="min-h-screen bg-[#030014] text-white">
      {/* SECTION 1: Hero Section */}
      <section id="Home" className="min-h-screen flex items-center justify-center pt-20 px-4 sm:px-6 lg:px-8">
        <SplashCursor />
        
        <div className="text-center max-w-4xl mx-auto py-20">
         
                 <BlurText
                    text="Welcome to My Portfolio!"
                    delay={100}
                    animateBy="words"
                    direction="top"
                    onAnimationComplete={handleAnimationComplete}
                    className="text-5xl md:text-7xl lg:text-8xl font-bold    from-blue-400 to-purple-600 leading-tight"
                  />
         
          <p className="mt-6 text-lg md:text-xl lg:text-2xl text-gray-300 max-w-2xl mx-auto animate-slideInLeft">
            I'm soufiane, a passionate Developer building digital usefull apps. 
          </p>
          <a
            href="#Portofolio" // Link to your projects section
            className="mt-10 inline-block px-8 py-4 rounded-full bg-gradient-to-r from-purple-600 to-indigo-600 text-white text-lg font-semibold
                       hover:from-purple-700 hover:to-indigo-700 transition-all duration-300 hover:shadow-glow animate-slide-up-custom"
          >
            Explore My Work
          </a>
        </div>
      </section>

      {/* SECTION 2: About Me & Social Links */}
      <section id="About" className="py-20 bg-[#06061a] border-t border-white/5 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-12 animate-slideInRight">About Me</h2>
          <div className="flex flex-col lg:flex-row items-center gap-12">
            <div className="lg:w-1/2 text-left space-y-6 animate-fadeIn" data-aos="fade-right">
              <p className="text-lg text-gray-300 leading-relaxed">
                Hello! I'm soufiane, a dedicated web developer with a passion for creating dynamic and responsive web applications. evolving into a drive to build intuitive and efficient user experiences.
              </p>
              <p className="text-lg text-gray-300 leading-relaxed">
                I specialize in front-end and backend development with a strong foundation in React and Next.js, complemented by modern CSS frameworks like Tailwind CSS. I'm always eager to learn new technologies and solve complex problems, turning ideas into reality one line of code at a time.
              </p>
            </div>
            <div className="lg:w-1/2 w-full animate-fadeIn" data-aos="fade-left">
              {/* Your SocialLinks component goes here */}
              <SocialLinks />
              <BlurText
                 text="Isn't my portfolio dope ?!"
                   delay={150}
                    animateBy="words"
                      direction="top"
                      onAnimationComplete={dummyCertificates.length > 0 ? () => console.log("Animation complete!") : undefined}
                      className="text-2xl mb-8"
/>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 3: Projects Overview */}
      <section id="Portofolio" className="py-20 bg-[#030014] border-t border-white/5 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-12 animate-fadeIn">My Projects</h2>
          <p className="text-lg text-gray-300 mb-16">
            Here are some of the projects I've worked on, showcasing my skills and passion for web development.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {dummyProjects.map((project, index) => (
              <CardProject
                key={project.id}
                imgSrc={project.imgSrc}
                title={project.title}
                description={project.description}
                liveDemoLink={project.liveDemoLink}
                id={project.id}
                // You can add data-aos here if you want individual card animations
                // data-aos="fade-up" data-aos-delay={index * 100}
              />
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 4: Certificates */}
      <section id="Certificates" className="py-20 bg-[#06061a] border-t border-white/5 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
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
                // data-aos="fade-up" data-aos-delay={index * 100}
              />
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 5: Contact Me */}
      <section id="Contact" className="py-20 bg-[#030014] border-t border-white/5 px-4 sm:px-6 lg:px-8">
        <div className="max-w-xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-12 animate-slideInLeft">Get In Touch</h2>
          <p className="text-lg text-gray-300 mb-12">
            Have a project in mind or just want to say hello? Feel free to reach out using the form below!
          </p>
          <form onSubmit={handleSubmit} className="space-y-6 bg-white/5 p-8 rounded-xl shadow-lg border border-white/10 animate-fadeIn" data-aos="fade-up">
            <BlurText
  text="Isn't my portfolio dope ?!"
  delay={150}
  animateBy="words"
  direction="top"
  onAnimationComplete={dummyProjects.length > 0 ? () => console.log("Animation complete!") : undefined}
  className="text-2xl mb-8"
/>
            <InputField
              field="name"
              label="Your Name"
              icon={Mail} // Using Mail icon for name, adjust as needed
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
              icon={Phone} // Using Phone icon for message, adjust as needed
              formData={formData}
              handleChange={handleChange}
            />
            <button
              type="submit"
              className="w-full py-3 px-6 rounded-lg bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold shadow-md
                         hover:from-blue-700 hover:to-purple-700 transition-all duration-300 hover:scale-[1.02] transform"
            >
              Send Message
            </button>
          </form>
        </div>
      </section>

      {/* Project Card Modal (Rendered conditionally when a project is selected) */}
      {selectedProjectForModal && (
        <ProjectCardModal
          title={selectedProjectForModal.title}
          description={selectedProjectForModal.description}
          link={selectedProjectForModal.liveDemoLink}
        />
      )}
    </main>
  );
}