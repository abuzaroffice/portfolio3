import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Projects = () => {
  const containerRef = useRef(null);
  const cardRefs = useRef([]);

  useEffect(() => {
    // Scroll-triggered animation for the cards
    gsap.fromTo(
      cardRefs.current,
      { opacity: 0, y: 100 },
      {
        opacity: 1,
        y: 0,
        stagger: 0.3,
        duration: 1.5,
        ease: "power3.out",
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 80%",
          end: "bottom 20%",
          toggleActions: "play none none reverse",
        },
      }
    );

    // Add smooth hover scale animation to the cards
    cardRefs.current.forEach((card, index) => {
      gsap.to(card, {
        scale: 1.05,
        duration: 0.4,
        ease: "power1.inOut",
        paused: true,
        onStart: () => gsap.set(card, { zIndex: 10 }),
        onReverseComplete: () => gsap.set(card, { zIndex: 1 }),
      });
    });
  }, []);

  const projects = [
    {
      title: "Park Trendy Fita",
      description: "An innovative platform for urban fashion trends.",
      image: "/Trendyfits.png",
      link: "https://trendyfits.netlify.app/",
    },
    {
      title: "Food Villa",
      description: "A fast-food website with a unique animated UI.",
      image: "/Foodvilla.png",
      link: "https://ffoodvilla.netlify.app/",
    },
    {
      title: "Gaming Mania",
      description: "Explore the ultimate gaming universe.",
      image: "/Gamingmania.png",
      link: "https://gamingmaniaa.netlify.app/",
    },
    {
      title: "Pixel Quest",
      description: "A wallpaper search platform for all enthusiasts.",
      image: "/Pixlequest.png",
      link: "https://pixlequest.netlify.app/",
    },
    {
      title: "El-Interio",
      description: "Creative interior design solutions with animations.",
      image: "/El-interio.png",
      link: "https://interior-design--mu.vercel.app/",
    },
  ];

  return (
    <section id="projects-section" className="py-20 px-4">
      <div ref={containerRef} className="max-w-6xl mx-auto text-center">
        <h2 className="text-6xl sm:text-6xl md:text-8xl font-Mazius text-amber-800 drop-shadow-lg">
          My Projects
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-20">
          {projects.map((project, index) => (
            <div
              key={index}
              ref={(el) => (cardRefs.current[index] = el)}
              className="p-6 rounded-lg shadow-xl transform transition-transform duration-300 ease-in-out"
              onMouseEnter={() => gsap.to(cardRefs.current[index], { scale: 1.1, duration: 0.3, ease: "power1.inOut" })}
              onMouseLeave={() => gsap.to(cardRefs.current[index], { scale: 1, duration: 0.3, ease: "power1.inOut" })}
            >
              <div className="relative h-52 rounded-lg overflow-hidden mb-4">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-700 ease-in-out hover:scale-110"
                />
              </div>
              <h3 className="text-2xl font-Cursive font-semibold mb-2 transition-all ease-in-out duration-300 hover:text-amber-800">
                {project.title}
              </h3>
              <p className="font-Cursive  mb-4">{project.description}</p>
              <a
                href={project.link}
                className="inline-block px-6 py-2 font-Cursive bg-amber-800 text-white font-semibold rounded-md shadow-md hover:bg-amber-600 transition-all ease-in-out duration-300"
              >
                View Project
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
