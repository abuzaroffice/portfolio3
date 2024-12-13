import React, { useEffect, useRef } from "react";
import gsap from "gsap";

const Hero = () => {
  const containerRef = useRef(null);
  const imageRef = useRef(null);
  const imageContainerRef = useRef(null); // Ref for the parent container
  const textRefs = useRef([]);

  useEffect(() => {
    // Reduce the delay to sync with the loading screen animation
    const delayAfterLanding = 2; // Reduced delay to sync with loading screen

    // Create a GSAP timeline for Hero animation
    const tl = gsap.timeline({
      defaults: { duration: 0.8, ease: "power3.out" }, // Reduced duration
      delay: delayAfterLanding, // Start after landing animation completes
    });

    // Animate the image with a fade-up effect
    tl.fromTo(
      imageRef.current,
      { y: 100, opacity: 0 }, // Start position: below with 0 opacity
      { y: 0, opacity: 1, duration: 1.0, ease: "power2.out" } // Reduced duration
    );

    // Animate the text with a smooth vertical slide and fade-in effect
    tl.fromTo(
      textRefs.current,
      { y: 100, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        stagger: 0.15, // Faster stagger
        duration: 0.8, // Reduced duration
        ease: "power2.out",
      },
      "-=0.8"
    );

    // Apply a static glowing effect around the image container
    gsap.fromTo(
      imageContainerRef.current,
      { boxShadow: "0 0 0px rgba(72, 187, 120, 0.7)" }, // Initial state (no glow)
      {
        boxShadow: "0 0 30px 10px rgba(72, 187, 120, 0.7)", // Green static glow
        duration: 1.0, // Reduced duration
        ease: "power2.out",
        delay: delayAfterLanding + 0.8, // Start after image and text animations
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
            className="rounded-full overflow-hidden w-72 h-72 lg:w-96 lg:h-96 relative"
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
              ref={(el) => { if (el) textRefs.current[0] = el }}
              className="font-Cursive text-green-400"
            >
              Creative
            </h1>
            <h1
              ref={(el) => { if (el) textRefs.current[1] = el }}
              className="font-Mazius"
            >
              Designer
            </h1>
            <h1
              ref={(el) => { if (el) textRefs.current[2] = el }}
              className="font-Cursive text-green-400"
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
