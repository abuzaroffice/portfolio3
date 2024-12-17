"use client";

import React, { useEffect, useRef, useState } from "react";

const DynamicCursor = () => {
  const outerCursorRef = useRef(null);
  const innerCursorRef = useRef(null);
  const trailRef = useRef([]); // To create the trailing tail effect
  const [isHovering, setIsHovering] = useState(false); // For hover states
  const [isSmallScreen, setIsSmallScreen] = useState(false); // Responsive behavior

  useEffect(() => {
    // Handle screen resizing to detect small screens
    const handleResize = () => {
      setIsSmallScreen(window.innerWidth <= 768); // Adjust breakpoint if needed
    };

    // Initial check and listener
    handleResize();
    window.addEventListener("resize", handleResize);

    // Cleanup
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    const handleMouseMove = (event) => {
      const { clientX: x, clientY: y } = event;

      // Move the outer cursor
      outerCursorRef.current.style.transform = `translate(${x - 25}px, ${y - 25}px)`;

      // Move the inner cursor
      innerCursorRef.current.style.transform = `translate(${x - 5}px, ${y - 5}px)`;

      // Add a trailing tail effect
      if (trailRef.current.length < 15) {
        const trailElement = document.createElement("div");
        trailElement.className = "cursor-trail";
        trailElement.style.left = `${x}px`;
        trailElement.style.top = `${y}px`;
        document.body.appendChild(trailElement);
        trailRef.current.push(trailElement);

        // Remove tail after animation completes
        setTimeout(() => {
          trailElement.remove();
          trailRef.current.shift();
        }, 700); // Duration matches animation timing
      }
    };

    const handleMouseOver = (event) => {
      const elementUnderCursor = document.elementFromPoint(event.clientX, event.clientY);

      if (elementUnderCursor?.matches("a, button, input, textarea, select, label")) {
        setIsHovering(true);
      } else {
        setIsHovering(false);
      }
    };

    // Add mousemove listeners
    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("mousemove", handleMouseOver);

    // Cleanup on unmount
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mousemove", handleMouseOver);
    };
  }, []);

  return (
    <>
      {!isSmallScreen && (
        <>
          {/* Outer Cursor */}
          <div
            ref={outerCursorRef}
            style={{
              position: "fixed",
              top: 0,
              left: 0,
              width: "50px",
              height: "50px",
              borderRadius: "50%",
              background: isHovering
                ? "rgba(255, 165, 0, 0.6)" // Tailwind amber-800 (with opacity)
                : "rgba(255, 165, 0, 0.3)", // Tailwind amber-800 (with opacity)
              pointerEvents: "none",
              zIndex: 9999,
              transition: "transform 0.2s ease, background 0.3s ease",
              willChange: "transform, background",
              filter: "blur(8px)",
            }}
          ></div>

          {/* Inner Cursor */}
          <div
            ref={innerCursorRef}
            style={{
              position: "fixed",
              top: 0,
              left: 0,
              width: "15px",
              height: "15px",
              borderRadius: "50%",
              background: "rgb(255, 165, 0)", // Tailwind amber-800
              pointerEvents: "none",
              zIndex: 9999,
              boxShadow: "0 0 20px rgba(255, 165, 0, 1), 0 0 40px rgba(255, 165, 0, 0.8)",
              transition: "transform 0.2s ease",
              willChange: "transform",
              transform: isHovering ? "scale(1.2)" : "scale(1)",
            }}
          ></div>
        </>
      )}

      {/* Tail effect */}
      <style jsx>{`
        .cursor-trail {
          position: fixed;
          width: 12px;
          height: 12px;
          border-radius: 50%;
          background: rgba(255, 165, 0, 0.4); /* Tailwind amber-800 with opacity */
          pointer-events: none;
          z-index: 9998;
          animation: trail-fade 0.7s ease-out forwards;
          transform: translate(-50%, -50%);
        }

        @keyframes trail-fade {
          0% {
            opacity: 1;
            transform: scale(1);
          }
          100% {
            opacity: 0;
            transform: scale(0.5);
          }
        }
      `}</style>
    </>
  );
};

export default DynamicCursor;
