"use client";

import React, { useEffect, useRef } from "react";
import { DotLottieReact } from '@lottiefiles/dotlottie-react';
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const About = () => {
  const headingRef = useRef(null);
  const lottieRef = useRef(null);
  const paragraphRef = useRef(null);

  useEffect(() => {
    // Heading animation
    gsap.fromTo(
      headingRef.current,
      { opacity: 0, y: -50 },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: headingRef.current,
          start: "top 85%",
        },
      }
    );

    // Lottie animation
    gsap.fromTo(
      lottieRef.current,
      { opacity: 0, scale: 0.8 },
      {
        opacity: 1,
        scale: 1,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: lottieRef.current,
          start: "top 85%",
        },
      }
    );

    // Paragraph animation
    const words = paragraphRef.current.querySelectorAll("span");
    gsap.fromTo(
      words,
      { opacity: 0 },
      {
        opacity: 1,
        duration: 0.3,
        ease: "power3.out",
        stagger: 0.1,
        scrollTrigger: {
          trigger: paragraphRef.current,
          start: "top 85%",
        },
      }
    );
  }, []);

  const paragraphText = `Hello! I’m Abuzar Malik, a passionate front-end developer dedicated to crafting visually appealing and user-friendly web experiences. With a solid foundation in HTML, CSS, JavaScript, React.js, Next.js, and Tailwind, I specialize in building responsive, interactive, and dynamic websites that prioritize user engagement and functionality. Currently pursuing my bachelor's degree at Bhagwant Institute of Technology, I have honed my skills through hands-on projects and continuous learning. My expertise extends to modern tools like Tailwind CSS for streamlined designs and GSAP for captivating animations, ensuring every project stands out with creativity and precision. Beyond coding, I approach every project with a user-centric mindset. I believe design should be intuitive and accessible, blending aesthetics with practicality. My workflow involves understanding the client’s vision, creating designs tailored to their needs, and delivering high-quality, error-free solutions. When I’m not coding, I enjoy exploring the latest web trends and experimenting with innovative features to push the boundaries of what's possible. My goal is to merge technical expertise with creativity, turning ideas into impactful digital experiences. I’m excited to bring my skills and passion to new opportunities and challenges, transforming visions into reality, one line of code at a time.`;

  return (
    <section id="about-section" className="container mx-auto px-4 mt-28">
      <div className="">
        {/* Heading */}
        <div
          ref={headingRef}
          className="about-heading text-center  text-6xl sm:text-6xl md:text-8xl font-Mazius text-green-400 drop-shadow-lg"
        >
          <h1>About Me</h1>
        </div>

        {/* Lottie Animation */}
        <div
          ref={lottieRef}
          className="w-72 sm:w-80 md:w-96 max-w-full mx-auto mt-10"
        >
          <DotLottieReact
            src="https://lottie.host/f5019a77-e8f2-4cd5-97a4-bdb02ba24abc/eZVIe7V9UW.lottie"
            loop
            autoplay
          />
        </div>

        {/* Paragraph */}
        <div
          ref={paragraphRef}
          className="about-paragraph max-h-[400px] sm:max-h-[500px] overflow-y-auto text-sm sm:text-base md:text-lg lg:text-xl font-Cursive  w-full sm:w-11/12 md:w-10/12 lg:w-8/12 xl:w-7/12 text-justify mx-auto mt-6 px-4"
        >
          {paragraphText.split(" ").map((word, index) => (
            <span key={index} className="inline-block mr-1">
              {word}
            </span>
          ))}
        </div>

        {/* Download Resume Button */}
        <div className="mt-10 text-center">
          <a
            href="/Abuzar'sCV.docx"
            download
            className="inline-block px-6 py-3 text-sm sm:text-base md:text-lg font-Cursive font-semibold bg-green-500 rounded-lg shadow-lg hover:bg-green-600 transition-colors"
          >
            Download Resume
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;
