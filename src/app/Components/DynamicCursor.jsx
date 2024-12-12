"use client";

import React, { useEffect, useRef, useState } from 'react';

const DynamicCursor = () => {
  const outerCursorRef = useRef(null);
  const innerCursorRef = useRef(null);
  const [cursorColor, setCursorColor] = useState('255, 255, 255'); // Default color white
  const [isHovering, setIsHovering] = useState(false); // Hover state
  const [isSmallScreen, setIsSmallScreen] = useState(false); // Track small screen state

  useEffect(() => {
    // Detect small screen sizes
    const handleResize = () => {
      setIsSmallScreen(window.innerWidth <= 768); // You can adjust the 768px value to your preference
    };

    // Initial check
    handleResize();

    // Add resize event listener
    window.addEventListener('resize', handleResize);

    // Cleanup the resize event listener on component unmount
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  useEffect(() => {
    const handleMouseMove = (event) => {
      const { clientX: x, clientY: y } = event;

      outerCursorRef.current.style.transform = `translate(${x - 20}px, ${y - 20}px)`;
      innerCursorRef.current.style.transform = `translate(${x - 5}px, ${y - 5}px)`;
    };

    const handleMouseOver = (event) => {
      const elementUnderCursor = document.elementFromPoint(event.clientX, event.clientY);

      if (elementUnderCursor?.matches('a, button, input, textarea, select, label')) {
        setIsHovering(true);
      } else {
        setIsHovering(false);
      }

      const bgColor = window.getComputedStyle(elementUnderCursor).backgroundColor;

      const rgbMatch = bgColor.match(/rgba?\((\d+), (\d+), (\d+)/);
      if (rgbMatch) {
        const [_, r, g, b] = rgbMatch.map(Number);
        const brightness = r * 0.299 + g * 0.587 + b * 0.114;
        setCursorColor(brightness < 128 ? '255, 255, 255' : '0, 0, 0');
      }
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mousemove', handleMouseOver);

    // Cleanup event listeners on component unmount
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mousemove', handleMouseOver);
    };
  }, []);

  return (
    <>
      {!isSmallScreen && (
        <>
          {/* Outer Circle */}
          <div
            ref={outerCursorRef}
            style={{
              position: 'fixed',
              top: 0,
              left: 0,
              width: '40px',
              height: '40px',
              borderRadius: '50%',
              backgroundColor: `rgba(${cursorColor}, 0.2)`,
              pointerEvents: 'none',
              zIndex: 9999,
              transition: 'transform 0.4s cubic-bezier(0.25, 1, 0.5, 1), background-color 0.3s ease',
              transformOrigin: 'center',
              willChange: 'transform, background-color',
              ...(isHovering
                ? { transform: 'scale(1.7)', backgroundColor: `rgba(${cursorColor}, 0.4)` }
                : {}),
            }}
          ></div>

          {/* Inner Circle */}
          <div
            ref={innerCursorRef}
            style={{
              position: 'fixed',
              top: 0,
              left: 0,
              width: '12px',
              height: '12px',
              borderRadius: '50%',
              backgroundColor: `rgb(${cursorColor})`,
              pointerEvents: 'none',
              zIndex: 9999,
              transition: 'transform 0.25s cubic-bezier(0.25, 1, 0.5, 1), background-color 0.3s ease',
              willChange: 'transform, background-color',
              ...(isHovering ? { transform: 'scale(0.5)', backgroundColor: `rgba(${cursorColor}, 0.8)` } : {}),
            }}
          ></div>
        </>
      )}
    </>
  );
};

export default DynamicCursor;
