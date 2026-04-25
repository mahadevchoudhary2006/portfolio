"use client";

import { motion } from "framer-motion";
import { Mail, ExternalLink, Code2, Smartphone, Database } from "lucide-react";
import Image from "next/image";

const GithubIcon = ({ className }: { className?: string }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.02c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A4.8 4.8 0 0 0 8 18v4"></path>
  </svg>
);

const LinkedinIcon = ({ className }: { className?: string }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
    <rect x="2" y="9" width="4" height="12"></rect>
    <circle cx="4" cy="4" r="2"></circle>
  </svg>
);

const projects = [
  {
    title: "TechieHelp",
    description: "A comprehensive Flutter application for tech support and job listings, featuring Firebase authentication, real-time Firestore database, and Google Sign-In integration.",
    icon: <Smartphone className="w-6 h-6 text-blue-400" />,
    tags: ["Flutter", "Firebase", "Dart"],
  },
  {
    title: "Teen Patti Game",
    description: "Multiplayer card game with real-time UI updates, robust game engine, showdown mechanics, and winner-declaration logic.",
    icon: <Code2 className="w-6 h-6 text-purple-400" />,
    tags: ["Flutter", "Game Engine", "Multiplayer"],
  },
  {
    title: "Attendance Manager",
    description: "Native Android application for tracking student attendance. Built with Material Design, Coroutines, and modern Android architecture.",
    icon: <Smartphone className="w-6 h-6 text-green-400" />,
    tags: ["Android", "Kotlin", "Material Design"],
  },
  {
    title: "MERN Stack E-Commerce",
    description: "Full-stack web application featuring MongoDB database connection, secure routing, and responsive frontend UI.",
    icon: <Database className="w-6 h-6 text-emerald-400" />,
    tags: ["MongoDB", "Express", "React", "Node.js"],
  }
];

export default function Portfolio() {
  return (
    <div className="min-h-screen bg-[#0a0a0a] text-[#ededed] font-sans selection:bg-purple-500/30 overflow-x-hidden">
      {/* Background gradients */}
      <div className="fixed inset-0 z-0 overflow-hidden pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] rounded-full bg-purple-900/20 blur-[120px]" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] rounded-full bg-blue-900/20 blur-[120px]" />
      </div>

      <main className="relative z-10 max-w-5xl mx-auto px-6 py-20 md:py-32 flex flex-col gap-32">
        {/* Hero Section */}
        <section className="flex flex-col gap-8 items-start">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-sm text-purple-300"
          >
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-purple-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-purple-500"></span>
            </span>
            Available for new opportunities
          </motion.div>
          
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-5xl md:text-7xl font-bold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-white via-white/90 to-white/50"
          >
            Hi, I'm Mahadev Choudhary.<br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-500">
              Full Stack & Mobile Developer.
            </span>
          </motion.h1>

          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="max-w-2xl text-lg md:text-xl text-zinc-400 leading-relaxed"
          >
            I build elegant, high-performance applications across web and mobile platforms. 
            Specializing in Flutter, React, and modern backend architectures to deliver seamless digital experiences.
          </motion.p>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="flex flex-wrap gap-4 pt-4"
          >
            <a href="mailto:contact@example.com" className="px-6 py-3 rounded-full bg-white text-black font-medium hover:bg-zinc-200 transition-colors flex items-center gap-2">
              <Mail className="w-4 h-4" />
              Get in touch
            </a>
            <div className="flex items-center gap-4 px-4">
              <a href="https://github.com/mahadevchoudhary2006" target="_blank" rel="noreferrer" className="p-3 rounded-full bg-white/5 hover:bg-white/10 transition-colors text-zinc-400 hover:text-white">
                <GithubIcon className="w-5 h-5" />
              </a>
              <a href="#" target="_blank" rel="noreferrer" className="p-3 rounded-full bg-white/5 hover:bg-white/10 transition-colors text-zinc-400 hover:text-white">
                <LinkedinIcon className="w-5 h-5" />
              </a>
            </div>
          </motion.div>
        </section>

        {/* Projects Section */}
        <section className="flex flex-col gap-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl font-bold mb-4">Featured Projects</h2>
            <p className="text-zinc-400">A selection of my recent work across mobile and web.</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {projects.map((project, index) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group p-6 rounded-2xl bg-white/[0.02] border border-white/5 hover:bg-white/[0.04] hover:border-white/10 transition-all cursor-pointer flex flex-col gap-4"
              >
                <div className="w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center border border-white/5 group-hover:scale-110 transition-transform duration-300">
                  {project.icon}
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2 flex items-center justify-between">
                    {project.title}
                    <ExternalLink className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity text-zinc-400" />
                  </h3>
                  <p className="text-zinc-400 leading-relaxed text-sm">
                    {project.description}
                  </p>
                </div>
                <div className="flex flex-wrap gap-2 mt-auto pt-4">
                  {project.tags.map(tag => (
                    <span key={tag} className="text-xs font-medium px-2.5 py-1 rounded-full bg-white/5 text-zinc-300 border border-white/5">
                      {tag}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Footer */}
        <footer className="pt-20 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4 text-zinc-500 text-sm">
          <p>© {new Date().getFullYear()} Mahadev Choudhary. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-zinc-300 transition-colors">Twitter</a>
            <a href="#" className="hover:text-zinc-300 transition-colors">GitHub</a>
            <a href="#" className="hover:text-zinc-300 transition-colors">LinkedIn</a>
          </div>
        </footer>
      </main>
    </div>
  );
}
