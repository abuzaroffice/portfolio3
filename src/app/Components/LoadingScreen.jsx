import React, { useEffect, useRef, useState } from "react";
import gsap from "gsap";

const LoadingScreen = () => {
  const loadingScreenRef = useRef(null);
  const textRef = useRef([]);
  const [isOffline, setIsOffline] = useState(!navigator.onLine);

  useEffect(() => {
    // Network status listeners
    const handleOnline = () => setIsOffline(false);
    const handleOffline = () => setIsOffline(true);

    window.addEventListener("online", handleOnline);
    window.addEventListener("offline", handleOffline);

    document.body.style.overflow = "hidden";

    // Text entry animation
    gsap.fromTo(
      textRef.current,
      {
        y: "100%",
        opacity: 0,
        scale: 0.9,
        rotation: 10,
      },
      {
        y: "0%",
        opacity: 1,
        scale: 1,
        rotation: 0,
        duration: 1.5, // Faster duration
        stagger: 0.2, // Faster stagger
        delay: 0.3,
        ease: "power2.out", // Smooth easing for entry
      }
    );

    // Text exit animation
    gsap.to(textRef.current, {
      y: "-100%",
      opacity: 0,
      scale: 0.95,
      rotation: -10,
      duration: 1, // Faster duration
      delay: 2, // Shorter delay
      stagger: 0.2, // Faster stagger
      ease: "power2.in", // Smooth easing for exit
    });

    // Loading screen exit animation
    gsap.to(loadingScreenRef.current, {
      y: "-100%",
      opacity: 0,
      duration: 1.5, // Faster duration
      delay: 2, // Matches text exit
      ease: "power2.inOut", // Smooth combined easing
      onComplete: () => {
        document.body.style.overflow = "auto";
      },
    });

    return () => {
      window.removeEventListener("online", handleOnline);
      window.removeEventListener("offline", handleOffline);
    };
  }, []);

  return (
    <div
      ref={loadingScreenRef}
      className="fixed inset-0 z-50 flex items-center justify-center bg-white h-screen"
    >
      <div className="text-center">
        <div className="text-4xl font-Cursive font-bold text-black">
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

        {/* Conditionally render the name only if offline */}
        {!isOffline && (
          <div className="text-5xl font-Mazius font-bold text-amber-800">
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
        )}
      </div>
    </div>
  );
};

export default LoadingScreen;
