import React, { useEffect, useRef } from "react";
import gsap from "gsap";

const LoadingScreen = () => {
  const loadingScreenRef = useRef(null);
  const textRef = useRef([]);

  useEffect(() => {
   
    document.body.style.overflow = "hidden";

    // Faster animations
    gsap.fromTo(
      textRef.current,
      { y: "100%", opacity: 0 },
      {
        y: "0%",
        opacity: 1,
        duration: 0.4, 
        stagger: 0.2,  // Faster stagger
        delay: 0.3,    // Reduced delay
        ease: "power2.out",
      }
    );

    gsap.to(textRef.current, {
      y: "-100%",
      opacity: 0,
      duration: 0.4,  // Reduced duration for faster animation
      delay: 2,      // Reduced delay
      stagger: 0.2,
      ease: "power2.in",
    });

    gsap.to(loadingScreenRef.current, {
      y: "-100%",
      duration: 0.6,  // Reduced duration for faster exit
      delay: 2.5,    // Adjusted delay
      ease: "power2.inOut",
      onComplete: () => {
        // Re-enable scrolling after the loading screen animation completes
        document.body.style.overflow = "auto";
      },
    });
  }, []);

  return (
    <div
      ref={loadingScreenRef}
      className="fixed inset-0 z-50 flex items-center justify-center bg-black h-screen"
    >
      <div className="text-center">
        <div className="text-4xl font-Cursive font-bold text-white">
          {"Welcome to".split(" ").map((word, index) => (
            <span
              key={index}
              ref={(el) => (textRef.current[index] = el)}
              className="block overflow-hidden"
            >
              <span className="inline-block">{word}</span>
            </span>
          ))}
        </div>
        <div className="text-5xl font-Mazius font-bold text-green-400">
          {"Abuzar's Portfolio".split(" ").map((word, index) => (
            <span
              key={index + 2}
              ref={(el) => (textRef.current[index + 2] = el)}
              className="block overflow-hidden"
            >
              <span className="inline-block">{word}</span>
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default LoadingScreen;
