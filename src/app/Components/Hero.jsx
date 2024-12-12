import React, { useEffect, useRef } from "react";
import gsap from "gsap";

const Hero = () => {
  const containerRef = useRef(null);
  const imageRef = useRef(null);
  const imageContainerRef = useRef(null); // Ref for the parent container
  const textRefs = useRef([]);

  useEffect(() => {
    // Create a GSAP timeline for Hero animation with a 5-second delay
    const tl = gsap.timeline({
      defaults: { duration: 1.5, ease: "power3.out" },
      delay: 5, // This adds a 5-second delay before the Hero animation starts
    });

    // Animate the image with a sliding effect and fading in
    tl.fromTo(
      imageRef.current,
      { x: -100, opacity: 0 },
      { x: 0, opacity: 1, duration: 1.8, ease: "power2.out" }
    );

    // Animate the text with a smooth vertical slide and fade-in effect
    tl.fromTo(
      textRefs.current,
      { y: 100, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        stagger: 0.2,
        duration: 1.4,
        ease: "power2.out",
      },
      "-=1"
    );

    // Apply a static glowing effect around the image container (not the image itself) after a delay
    gsap.fromTo(
      imageContainerRef.current,
      { boxShadow: "0 0 0px rgba(72, 187, 120, 0.7)" }, // Initial state (no glow)
      {
        boxShadow: "0 0 30px 10px rgba(72, 187, 120, 0.7)", // Green static glow
        duration: 2,
        ease: "power2.out",
        delay: 5, // Delay to start after 5 seconds (sync with other animations)
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
              src="/Abuzar.jpg"
              alt="Abuzar Malik"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Right - Text */}
          <div className="text-center text-6xl lg:text-9xl space-y-2 lg:space-y-4">
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
