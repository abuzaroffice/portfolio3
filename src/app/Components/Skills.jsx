import React, { useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const skillsData = [
  { name: "HTML", level: 90, color: "bg-orange-500", icon: "🌐" }, // HTML (Orange)
  { name: "CSS", level: 85, color: "bg-blue-500", icon: "🎨" }, // CSS (Blue)
  { name: "JavaScript", level: 80, color: "bg-yellow-400", icon: "⚡" }, // JavaScript (Yellow)
  { name: "React.js", level: 75, color: "bg-cyan-400", icon: "⚛️" }, // React (Cyan)
  { name: "Next.js", level: 70, color: "bg-gray-800", icon: "🚀" }, // Next.js (Dark Gray)
  { name: "Tailwind CSS", level: 85, color: "bg-teal-400", icon: "💨" }, // Tailwind CSS (Teal)
];

const Skills = () => {
  useEffect(() => {
    gsap.utils.toArray(".progress-bar").forEach((bar) => {
      gsap.fromTo(
        bar,
        { width: "0%" },
        {
          width: `${bar.dataset.level}%`,
          duration: 2.5,
          ease: "power3.out",
          scrollTrigger: {
            trigger: bar,
            start: "top 90%",
            end: "top 60%",
            toggleActions: "play none none none",
          },
        }
      );
    });
  }, []);

  return (
    <div className="py-20 px-5 ">
      <h2 className="text-6xl text-center sm:text-6xl md:text-8xl font-Mazius text-amber-800 drop-shadow-lg mb-10">
        My Skills
      </h2>
      <div className="max-w-5xl mx-auto space-y-12">
        {skillsData.map((skill, index) => (
          <div key={index} className="w-full">
            <div className="flex items-center mb-3">
              <span className="text-2xl mr-3">{skill.icon}</span>
              <h3 className="text-xl font-bold text-gray-700 uppercase flex-1">
                {skill.name}
              </h3>
              <span className="text-gray-600 text-lg font-medium">
                {skill.level}%
              </span>
            </div>
            <div className="w-full bg-gray-300 rounded-full h-6 relative shadow-md">
              <div
                className={`progress-bar h-full rounded-full ${skill.color} shadow-lg`}
                data-level={skill.level}
              ></div>
              {/* Glow effect */}
              <div
                className={`absolute top-0 left-0 h-full rounded-full blur-md opacity-50 ${skill.color}`}
                style={{ width: `${skill.level}%` }}
              ></div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skills;
