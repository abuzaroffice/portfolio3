import React, { useEffect, useRef } from "react";
import gsap from "gsap";

const Hero = () => {
  const containerRef = useRef(null);
  const imageRef = useRef(null);
  const imageContainerRef = useRef(null); // Ref for the parent container
  const textRefs = useRef([]);

  useEffect(() => {
    const delayAfterLanding = 2.6; // Delay for the animation to start

    // Create a GSAP timeline for Hero animation
    const tl = gsap.timeline({
      defaults: { duration: 1.0, ease: "power3.out" }, // Adjusted duration
      delay: delayAfterLanding, // Start after landing animation completes
    });

    // Animate the image with a fade-up effect
    tl.fromTo(
      imageRef.current,
      { y: 100, opacity: 0 }, 
      { y: 0, opacity: 1, duration: 1.0, ease: "power2.out" } 
    );

   
    tl.fromTo(
      textRefs.current,
      { y: 100, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        stagger: 0.2, // Adjusted stagger for a smoother flow
        duration: 1.0, // Duration for text animation
        ease: "power2.out",
      },
      "-=0.8" // Ensures the text starts before the image finishes
    );

    // Apply a glowing effect around the image container
    // Apply a glowing effect around the image container
gsap.fromTo(
  imageContainerRef.current,
  { boxShadow: "0 0 0px rgba(146, 64, 14, 0.7)" }, // amber-800 (no glow)
  {
    boxShadow: "0 0 30px 10px rgba(146, 64, 14, 0.7)", // amber-800 glow
    duration: 1.0, // Glowing effect duration
    ease: "power2.out",
    delay: delayAfterLanding + 1.0, // Delay to match the other animations
  }
);

  }, []);

  return (
    <section id="home-section">
      <div ref={containerRef} className="container mx-auto mt-16 px-4">
        {/* Main Container */}
        <div className="flex flex-col lg:flex-row items-center justify-center lg:justify-evenly gap-8 relative">
          {/* Left - Image */}
          <div
            ref={imageContainerRef}
            className="rounded-full overflow-hidden w-72 h-72 lg:w-96 lg:h-96 relative shadow-lg hover:shadow-xl transition-shadow duration-300 ease-in-out"
          >
            <img
              ref={imageRef}
              src="/Abuzar.JPG"
              alt="Abuzar Malik"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Right - Text */}
          <div className="text-center text-6xl mt-5 lg:text-9xl space-y-2 lg:space-y-4">
            <h1
              ref={(el) => {
                if (el) textRefs.current[0] = el;
              }}
              className="font-Cursive text-amber-800"
            >
              Creative
            </h1>
            <h1
              ref={(el) => {
                if (el) textRefs.current[1] = el;
              }}
              className="font-Mazius"
            >
              Designer
            </h1>
            <h1
              ref={(el) => {
                if (el) textRefs.current[2] = el;
              }}
              className="font-Cursive text-amber-800"
            >
              Developer
            </h1>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
