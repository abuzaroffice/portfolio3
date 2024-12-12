import React, { useEffect, useRef, useState } from "react";
import gsap from "gsap";

const Navbar = () => {
  const logoRef = useRef(null);
  const linksRef = useRef([]);
  const contactRef = useRef(null);
  const menuRef = useRef(null);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    // Initial animations for desktop view
    const tl = gsap.timeline({ defaults: { duration: 1, ease: "power3.out" }, delay: 5 });

    // Animate the logo
    tl.fromTo(
      logoRef.current,
      { y: -50, opacity: 0 },
      { y: 0, opacity: 1 }
    );

    // Animate the links with a stagger effect
    tl.fromTo(
      linksRef.current,
      { y: -50, opacity: 0 },
      { y: 0, opacity: 1, stagger: 0.2 },
      "-=0.5"
    );

    // Animate the contact section
    tl.fromTo(
      contactRef.current,
      { y: -50, opacity: 0 },
      { y: 0, opacity: 1 },
      "-=0.5"
    );
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);

    if (!isMenuOpen) {
      // Open menu animation
      gsap.fromTo(
        menuRef.current,
        { x: "-100%", opacity: 0 },
        { x: "0%", opacity: 1, duration: 0.8, ease: "power3.out" }
      );

      // Animate links in the menu sequentially
      gsap.fromTo(
        linksRef.current,
        { x: -100, opacity: 0 },
        { x: 0, opacity: 1, stagger: 0.2, duration: 0.8, ease: "power3.out" }
      );
    } else {
      // Close menu animation
      gsap.to(menuRef.current, {
        x: "-100%",
        opacity: 0,
        duration: 0.5,
        ease: "power3.inOut",
      });
    }
  };

  return (
    <div >
      {/* Navbar */}
      <div id="navbar" className="flex justify-between items-center container mx-auto px-6 py-4 lg:px-10 lg:py-6 ">
        {/* Logo */}
        <div ref={logoRef}>
          <a href="#" className=" font-Mazius text-4xl lg:text-4xl text-green-400">Abuzar's Portfolio</a>
        </div>

        {/* Links for large screens */}
        <div className="hidden lg:flex font-Cursive gap-10 text-lg lg:text-xl">
          <a href="#about-section" ref={(el) => (linksRef.current[0] = el)}>About</a>
          <a href="#projects-section" ref={(el) => (linksRef.current[1] = el)}>Projects</a>
          <a href="#skills-section" ref={(el) => (linksRef.current[2] = el)}>Skills</a>
          <a href="#testimonials-section" ref={(el) => (linksRef.current[3] = el)}>Testimonial</a>
        </div>

        {/* Contact */}
        <div ref={contactRef} className="hidden lg:block font-Cursive text-lg lg:text-xl text-green-400">
          <a href="#contact-section">Contact Us</a>
        </div>

        {/* Hamburger Menu */}
        <div
          className="lg:hidden text-4xl cursor-pointer"
          onClick={toggleMenu}
        >
          ☰
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div
          ref={menuRef}
          className="fixed top-0 left-0 w-full h-screen bg-black z-50 flex flex-col items-center justify-center"
        >
          <div
            className="absolute top-4 right-6 font-Cursive text-white text-3xl cursor-pointer"
            onClick={toggleMenu}
          >
            ✕
          </div>
          <div className="font-Cursive text-xl text-white flex flex-col gap-6">
            <a href="#about-section" ref={(el) => (linksRef.current[0] = el)}>About</a>
            <a href="#projects-section" ref={(el) => (linksRef.current[1] = el)}>Projects</a>
            <a href="#skills-section" ref={(el) => (linksRef.current[2] = el)}>Skills</a>
            <a href="#testimonials-section" ref={(el) => (linksRef.current[3] = el)}>Testimonial</a>
            <a href="#contact-section" ref={(el) => (linksRef.current[4] = el)}>Contact Us</a>
          </div>
        </div>
      )}
    </div>
  );
};

export default Navbar;
