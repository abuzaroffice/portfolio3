import React, { useEffect } from 'react';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';

// Register GSAP plugins
gsap.registerPlugin(ScrollTrigger);

const Skills = () => {
  useEffect(() => {
    // GSAP scroll-triggered animations for each progress bar with different percentages
    gsap.fromTo(
      '.html-progress', 
      { width: '0%' },
      {
        width: '90%', // Set HTML progress bar width to 90%
        duration: 2,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: '.html-progress',
          start: 'top 80%', // Start animation when top of the skill section reaches 80% of the viewport
          end: 'bottom top',
          scrub: true,
        },
      }
    );

    gsap.fromTo(
      '.css-progress',
      { width: '0%' },
      {
        width: '85%', // Set CSS progress bar width to 85%
        duration: 2,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: '.css-progress',
          start: 'top 80%', // Start animation when top of the skill section reaches 80% of the viewport
          end: 'bottom top',
          scrub: true,
        },
      }
    );

    gsap.fromTo(
      '.js-progress',
      { width: '0%' },
      {
        width: '80%', // Set JavaScript progress bar width to 80%
        duration: 0.5,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: '.js-progress',
          start: 'top 80%', // Start animation when top of the skill section reaches 80% of the viewport
          end: 'bottom top',
          scrub: true,
        },
      }
    );

    gsap.fromTo(
      '.react-progress',
      { width: '0%' },
      {
        width: '75%', // Set React.js progress bar width to 75%
        duration: 0.5,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: '.react-progress',
          start: 'top 80%', // Start animation when top of the skill section reaches 80% of the viewport
          end: 'bottom top',
          scrub: true,
        },
      }
    );

    gsap.fromTo(
      '.next-progress',
      { width: '0%' },
      {
        width: '70%', // Set Next.js progress bar width to 70%
        duration: 0.5,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: '.next-progress',
          start: 'top 80%', // Start animation when top of the skill section reaches 80% of the viewport
          end: 'bottom top',
          scrub: true,
        },
      }
    );

    gsap.fromTo(
      '.tailwind-progress',
      { width: '0%' },
      {
        width: '80%', // Set Tailwind CSS progress bar width to 80%
        duration: 2,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: '.tailwind-progress',
          start: 'top 80%', 
          end: 'bottom top',
          scrub: true,
        },
      }
    );
  }, []);

  return (
    <section className="py-8">
      <div id="skills-section" className="text-center">
        <h1 className="font-Mazius text-green-400 text-4xl sm:text-5xl md:text-6xl">Skills</h1>
      </div>

      {/* Skills List */}
      <div className="skills-container mt-4 text-center sm:px-6 md:px-8">
        {/* HTML Skill */}
        <div className="skill mb-4 sm:mb-6">
          <h1 className="font-Cursive text-lg sm:text-xl md:text-2xl">HTML</h1>
          <div className="w-full sm:w-3/4 mx-auto mt-2 sm:mt-4">
            <div className="progress-bar html-progress h-4 sm:h-6 rounded-full bg-green-500"></div>
          </div>
        </div>

        {/* CSS Skill */}
        <div className="skill mb-4 sm:mb-6">
          <h1 className="font-Cursive text-lg sm:text-xl md:text-2xl">CSS</h1>
          <div className="w-full sm:w-3/4 mx-auto mt-2 sm:mt-4">
            <div className="progress-bar css-progress h-4 sm:h-6 rounded-full bg-blue-500"></div>
          </div>
        </div>

        {/* JavaScript Skill */}
        <div className="skill mb-4 sm:mb-6">
          <h1 className="font-Cursive text-lg sm:text-xl md:text-2xl">JavaScript</h1>
          <div className="w-full sm:w-3/4 mx-auto mt-2 sm:mt-4">
            <div className="progress-bar js-progress h-4 sm:h-6 rounded-full bg-yellow-500"></div>
          </div>
        </div>

        {/* React.js Skill */}
        <div className="skill mb-4 sm:mb-6">
          <h1 className="font-Cursive text-lg sm:text-xl md:text-2xl">React.js</h1>
          <div className="w-full sm:w-3/4 mx-auto mt-2 sm:mt-4">
            <div className="progress-bar react-progress h-4 sm:h-6 rounded-full bg-blue-600"></div>
          </div>
        </div>

        {/* Next.js Skill */}
        <div className="skill mb-4 sm:mb-6">
          <h1 className="font-Cursive text-lg sm:text-xl md:text-2xl">Next.js</h1>
          <div className="w-full sm:w-3/4 mx-auto mt-2 sm:mt-4">
            <div className="progress-bar next-progress h-4 sm:h-6 rounded-full bg-gray-800"></div>
          </div>
        </div>

        {/* Tailwind CSS Skill */}
        <div className="skill mb-4 sm:mb-6">
          <h1 className="font-Cursive text-lg sm:text-xl md:text-2xl">Tailwind CSS</h1>
          <div className="w-full sm:w-3/4 mx-auto mt-2 sm:mt-4">
            <div className="progress-bar tailwind-progress h-4 sm:h-6 rounded-full bg-teal-400"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
