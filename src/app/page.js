"use client";

import React, { useState, useEffect } from "react";
import Navbar from "./Components/Navbar";
import Hero from "./Components/Hero";
import DynamicCursor from "./Components/DynamicCursor";
import About from "./Components/About";
import LoadingScreen from "./Components/LoadingScreen";
import BackToTopButton from "./Components/BackToTopButton";
import PhotographySkills from "./Components/PhotographySkills";
import Projects from "./Components/Projects";
import Testimonial from "./Components/Testimonial";
import Contact from "./Components/Contact";
import Footer from "./Components/Footer";
import SoundEffects from "./Components/SoundEffect"; 
import Skills from "./Components/Skills";


// Dock Component
const Dock = ({ toggleTheme, theme }) => {
  return (
    <div
    className={`fixed bottom-4 left-4 flex items-center 
      p-2 sm:p-3 
      bg-amber-800 dark:bg-amber-800  // Updated to amber-800 for both themes
      rounded-full shadow-lg transition-all`}
  >
    {/* Theme Toggle */}
    <button
      onClick={toggleTheme}
      className={`flex items-center justify-center 
        w-8 h-8 sm:w-10 sm:h-10 
        bg-amber-700 dark:bg-amber-600 // Button background now amber
        text-white dark:text-amber-200  // Light text on dark theme
        rounded-full shadow-md 
        hover:bg-amber-600 dark:hover:bg-amber-500  // Hover effects with darker amber
        transition-transform hover:scale-110`}
      aria-label="Toggle Theme"
    >
      {theme === "light" ? "🌙" : "☀️"}
    </button>
  </div>
  
  
  
  );
};

export default function Home() {
  const [theme, setTheme] = useState("dark");

  useEffect(() => {
    // Apply the selected theme to the document
    document.documentElement.className = theme;
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
  };

  return (
    <div
    className={`relative ${theme === "light" ? "bg-black text-white" : "bg-white text-black"}`} 
    >
 
      <LoadingScreen />
     
      {/* <SoundEffects />  */}

      {/* Main Components */}
      <Navbar />
      <Hero />
      <DynamicCursor />
      <About />
      <Skills />
      <PhotographySkills />
      <Projects />
      <Testimonial />
      <Contact />
      <Footer />
      <Dock toggleTheme={toggleTheme} theme={theme} />
      <BackToTopButton />
    </div>
  );
}
