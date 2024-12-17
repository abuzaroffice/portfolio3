"use client";

import React, { useEffect, useRef } from "react";
import { BsMoonFill, BsSunFill } from "react-icons/bs";
import { useTheme } from "./ThemeContext"; // Import the useTheme hook
import { gsap } from "gsap";

const Dock = () => {
  const { theme, toggleTheme } = useTheme(); // Access theme and toggleTheme from context
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
      className={`fixed bottom-4 left-4 p-2 sm:p-4 rounded-full shadow-lg z-50
        ${theme === "dark" ? "bg-amber-800" : "bg-amber-800"} 
        transition-all`}
      style={{
        boxShadow: theme === "dark" ? "0px 10px 20px rgba(0,0,0,0.5)" : "0px 10px 20px rgba(0,0,0,0.2)",
      }}
    >
      <button
        onClick={toggleTheme}
        className={`flex items-center justify-center 
          w-10 h-10 sm:w-12 sm:h-12 
          rounded-full text-lg sm:text-xl transition-transform hover:scale-125 
          ${theme === "dark" ? "text-yellow-300 bg-amber-700" : "text-yellow-500 bg-white"}`}
        aria-label="Toggle Theme"
      >
        {theme === "dark" ? <BsSunFill size={20} /> : <BsMoonFill size={20} />}
      </button>
    </div>
  );
};

export default Dock;
