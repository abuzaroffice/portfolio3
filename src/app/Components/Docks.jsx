"use client";

import React, { useEffect, useRef } from "react";
import { BsMoonFill, BsSunFill } from "react-icons/bs";
import { useTheme } from "./ThemeContext";
import { gsap } from "gsap";

const Dock = () => {
  const { theme, toggleTheme } = useTheme();
  const dockRef = useRef(null);

  useEffect(() => {
    // GSAP animation for entrance
    gsap.fromTo(
      dockRef.current,
      { scale: 0.8, opacity: 0 },
      { scale: 1, opacity: 1, duration: 1, ease: "elastic.out(1, 0.5)" }
    );
  }, []);

  return (
    <div
      ref={dockRef}
      className={`fixed 
        bottom-4 left-4  // Positioned on the bottom-left corner
        p-4 rounded-full shadow-lg z-50
        ${theme === "dark" ? "bg-gray-900" : "bg-gray-100"}
        transition-all`}
      style={{
        boxShadow: theme === "dark" ? "0px 10px 20px rgba(0,0,0,0.5)" : "0px 10px 20px rgba(0,0,0,0.2)",
      }}
    >
      <button
        onClick={toggleTheme}
        className={`flex items-center justify-center w-12 h-12 rounded-full text-xl transition-transform hover:scale-125 ${
          theme === "dark" ? "text-yellow-300 bg-green-500" : "text-yellow-500 bg-white"
        }`}
        aria-label="Toggle Theme"
      >
        {theme === "dark" ? <BsSunFill size={24} /> : <BsMoonFill size={24} />}
      </button>
    </div>
  );
};

export default Dock;
