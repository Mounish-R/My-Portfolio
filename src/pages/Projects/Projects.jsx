import React, { useState } from "react";
import { Github, ExternalLink } from "lucide-react";



const ProjectShowcase = () => {
  const [filter, setFilter] = useState("All");

  const projects = [
    {
      title: "Crisis Management System",
      description:
        "A comprehensive web-based platform designed to improve the detection, management, and response to natural disasters and emergencies.",
      tags: ["React.js", "Node.js", "MongoDB", "Express.js", "OpenWeatherMap API", "Map APIs"],
      category: "Full Stack",
      links: {
        github: "https://github.com/Mounish-R/Crisis-Management",
        demo: "#",
      },
      image: "/project2.png", 
      featured: true,
    },
    {
      title: "Assessment Portal",
      description:
        "An Angular 17 project. Includes authentication and assessment features.",
      tags: ["Angular 17", "Node.js", "Express.js", "MongoDB"],
      category: "Frontend",
      links: {
        github: "https://github.com/Mounish-R/Assessment-Portal",
        demo: "#",
      },
      image: "/project1.png", 
      featured: true,
    },
    {
      title: "Student Management System",
      description:
        "A MERN stack project for managing student data and communications in educational institutions.",
      tags: ["MongoDB", "Express.js", "React.js", "Node.js"],
      category: "Full Stack",
      links: {
        github: "https://github.com/Mounish-R/Student-Management-System",
        demo: "#",
      },
      image: "/project3.png",
      featured: true,
    },
  ];

  const categories = ["All", ...new Set(projects.map((project) => project.category))];
  const filteredProjects = filter === "All" ? projects : projects.filter((project) => project.category === filter);

  return (
    <div className="min-h-screen bg-[#04081A] py-32 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-2">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 via-purple-400 to-emerald-400">
              Projects
            </span>
          </h1>
          <p className="text-slate-300 max-w-2xl mx-auto text-lg">
            Explore my creative journey through code and design
          </p>
        </div>

        <div className="flex justify-center mb-12 flex-wrap gap-2">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setFilter(category)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                filter === category
                  ? "bg-gradient-to-r from-cyan-500 to-emerald-500 text-white shadow-lg"
                  : "bg-slate-800/50 text-slate-300 hover:bg-slate-700/70"
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 gap-8">
          {filteredProjects.map((project, index) => (
            <div
              key={index}
              className="group relative bg-[#0a1428]/60 backdrop-blur-lg rounded-xl overflow-hidden transition-all duration-300 hover:shadow-xl border border-slate-700/30 hover:border-slate-600/50"
            >
              <div className="flex flex-col md:flex-row">
                <div className="relative md:w-1/2 h-64 md:h-auto overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105 group-hover:brightness-90"
                  />
                </div>

                <div className="md:w-1/2 p-8 relative backdrop-blur-sm bg-[#0a1428]/30 group-hover:bg-[#081020]/50 transition-all duration-300">
                  {project.featured && (
                    <div className="absolute top-3 right-6 px-3 py-1 rounded-full text-xs font-medium bg-emerald-500/20 text-emerald-400 border border-emerald-500/30">
                      Featured Project
                    </div>
                  )}

                  <h3 className="text-3xl font-bold text-white mb-4 mt-2">
                    <span className="bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-emerald-400">
                      {project.title}
                    </span>
                  </h3>

                  <p className="text-slate-300 mb-6">{project.description}</p>

                  <div className="flex flex-wrap gap-3 mb-8">
                    {project.tags.map((tag, tagIndex) => (
                      <span
                        key={tagIndex}
                        className="px-3 py-1 text-xs rounded-full bg-slate-700/40 text-slate-300 border border-slate-600/30"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <div className="flex gap-4">
                    <a
                      href={project.links.github}
                      className="flex items-center justify-center w-10 h-10 rounded-full bg-slate-800/50 text-white hover:text-cyan-400 hover:bg-slate-900/70 border border-slate-700/50"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Github size={18} />
                    </a>
                    <a
                      href={project.links.demo}
                      className="flex items-center justify-center w-10 h-10 rounded-full bg-slate-800/50 text-white hover:text-emerald-400 hover:bg-slate-900/70 border border-slate-700/50"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <ExternalLink size={18} />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProjectShowcase;