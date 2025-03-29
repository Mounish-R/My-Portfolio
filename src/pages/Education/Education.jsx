import React, { useState } from "react";
import EducationLoader from "@/components/ui/EducationLoader";
import {
  Star,
  Award,
  Calendar,
  BookOpen,
  GraduationCap,
  Trophy,
} from "lucide-react";
import { motion } from "framer-motion";

const EducationSection = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  const educationData = [
    {
      degree: "LKG - SSC - HSC",
      school: "SVV Matriculation Higher Secondary School - Gobi",
      logo: "/public/svv-logo.jpeg",
      year: "2007-2022",
      achievements: ["Percentage: 81.8"],
      skills: ["Computer Science","Mathematics", "Physics", "Chemistry", "Biology","Social Science","English","Tamil"],
      description:
        "Focused on core science subjects with emphasis on practical laboratory work and scientific research methodologies.",
    },
    {
      "degree": "BE - CSE",
      "school": "Bannari Amman Institute of Technology - Sathy",
      logo: "/public/clg-logo.png",
      "year": "2022-2026",
      "achievements": ["GPA: 7.8"],
      "skills": ["Python", "Linux", "DevOps", "Problem-Solving", "SAP IBP"],
      "description": "Developed strong analytical and technical skills through hands-on experience in Python, Linux, and DevOps."
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const cardVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  return (
    <section className="min-h-screen relative overflow-hidden py-40 bg-[#04081A]">

      <div className="max-w-6xl mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-teal-400 to-blue-500 bg-clip-text text-transparent mb-6">
            Educational Journey
          </h2>
          <p className="text-gray-300 max-w-2xl mx-auto text-lg">
            Discover how academic excellence shapes innovative thinking and
            professional growth.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
        >
          {educationData.map((edu, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              className={`relative border rounded-xl p-8 transition-all duration-300 bg-gray-900/50 backdrop-blur-sm ${
                hoveredIndex === index
                  ? "border-teal-500 scale-[1.02]"
                  : "border-blue-400/20"
              }`}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              <div className="space-y-7">
                <div className="space-y-5">
                  <div className="flex items-center gap-100">
                    <span className="text-3xl">{edu.mascot}</span>
                      
                    <h3 className="text-2xl font-bold text-white">
                      {edu.degree}
                    </h3>
                  </div>
                  <p className="text-lg text-gray-300 flex items-center gap-4">
                      {edu.logo && (
                        <img src={edu.logo} alt="School Logo" className="w-20 h-20 rounded-md object-contain" />
                      )}
                    {edu.school}
                  </p>
                  <p className="text-green-400 flex items-center gap-1">
                    <Calendar className="w-9 h-5" />
                    {edu.year}
                  </p>
                </div>

                <div className="space-y-3">
                  <h4 className="text-sm font-semibold text-white flex items-center gap-2">
                    <Trophy className="w-4 h-4 text-yellow-500" />
                    Key Achievements
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    
                  <p className="text-gray-200 text-lg italic border-l-2 border-teal-500 pl-3">
                    {edu.description}
                  </p>

                    {edu.achievements.map((achievement, i) => (
                      <div
                        key={i}
                        className="px-3 py-1 rounded-full bg-teal-500/10 text-teal-400 flex items-center gap-2 text-sm"
                      >
                        <Award className="w-4 h-9" />
                        <span>{achievement}</span>
                      </div>
                    ))}
                    
                  </div>
                  
                </div>
                 

                <div className="flex flex-wrap gap-2">
                  {edu.skills.map((skill, i) => (
                    <span
                      key={i}
                      className="px-2 py-1 text-base rounded bg-blue-500/10 text-blue-300"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default EducationSection;
