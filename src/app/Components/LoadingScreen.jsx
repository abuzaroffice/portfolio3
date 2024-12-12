import React, { useEffect, useRef } from "react";
import gsap from "gsap";

const LoadingScreen = () => {
  const loadingScreenRef = useRef(null);
  const textRef = useRef([]);

  useEffect(() => {
  
    gsap.fromTo(
      textRef.current,
      { y: "100%", opacity: 0 },
      {
        y: "0%",
        opacity: 1,
        duration: 0.6,
        stagger: 0.3,
        delay: 0.5,
        ease: "power2.out",
      }
    );

    gsap.to(textRef.current, {
      y: "-100%",
      opacity: 0,
      duration: 0.6,
      delay: 3,
      stagger: 0.3,
      ease: "power2.in",
    });

    gsap.to(loadingScreenRef.current, {
      y: "-100%",
      duration: 1,
      delay: 4.5,
      ease: "power2.inOut",
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
