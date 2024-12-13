import React, { useEffect, useRef, useState } from "react";
import gsap from "gsap";

const Navbar = () => {
  const logoRef = useRef(null);
  const linksRef = useRef([]);
  const contactRef = useRef(null);
  const menuRef = useRef(null);
  const toggleRef = useRef(null);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    // Initial animations for the navbar elements
    const tl = gsap.timeline({ defaults: { duration: 1, ease: "power3.out" }, delay: 1.5 });

    // Animate the logo
    tl.fromTo(logoRef.current, { y: -30, opacity: 0 }, { y: 0, opacity: 1 });

    // Animate the links with a stagger effect
    tl.fromTo(
      linksRef.current,
      { y: -30, opacity: 0 },
      { y: 0, opacity: 1, stagger: 0.15 },
      "-=0.5"
    );

    // Animate the contact section
    tl.fromTo(contactRef.current, { y: -30, opacity: 0 }, { y: 0, opacity: 1 }, "-=0.5");
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);

    if (!isMenuOpen) {
      // Disable scrolling when menu is open
      document.body.style.overflow = "hidden";

      // Open menu animation
      gsap.fromTo(
        menuRef.current,
        { x: "100%", opacity: 0 },
        { x: "0%", opacity: 1, duration: 0.3, ease: "power2.out" }
      );

      // Animate links in the menu sequentially
      gsap.fromTo(
        linksRef.current,
        { x: 30, opacity: 0 },
        { x: 0, opacity: 1, stagger: 0.1, duration: 0.4, ease: "power2.out" }
      );

      // Animate the toggle button to rotate
      gsap.to(toggleRef.current, { rotation: 90, duration: 0.3, ease: "power2.out" });
    } else {
      // Enable scrolling when menu is closed
      document.body.style.overflow = "auto";

      // Close menu animation
      gsap.to(linksRef.current, {
        x: 30,
        opacity: 0,
        stagger: 0.05,
        duration: 0.4,
        ease: "power2.inOut",
        onComplete: () => {
          gsap.to(menuRef.current, {
            x: "100%",
            opacity: 0,
            duration: 0.5,
            ease: "power2.inOut",
          });
        },
      });

      // Animate toggle button back to original position
      gsap.to(toggleRef.current, { rotation: 0, duration: 0.3, ease: "power2.out" });
    }
  };

  const handleLinkClick = () => {
    setIsMenuOpen(false); // Close the menu
    document.body.style.overflow = "auto"; // Re-enable scrolling when a link is clicked
  };

  return (
    <div>
      {/* Navbar */}
      <div id="navbar" className="flex justify-between items-center container mx-auto px-6 py-4 lg:px-10 lg:py-6">
        {/* Logo */}
        <div ref={logoRef}>
          <a href="#" className="font-Mazius text-4xl lg:text-4xl text-green-400">Abuzar's Portfolio</a>
        </div>

        {/* Links for large screens */}
        <div className="hidden lg:flex font-Cursive gap-10 text-lg lg:text-xl">
          <a className="hover:text-green-400" href="#about-section" ref={(el) => (linksRef.current[0] = el)}>About</a>
          <a className="hover:text-green-400" href="#skills-section" ref={(el) => (linksRef.current[1] = el)}>Skills</a>
          <a className="hover:text-green-400" href="#photo-section" ref={(el) => (linksRef.current[2] = el)}>Photography</a>
          <a className="hover:text-green-400" href="#projects-section" ref={(el) => (linksRef.current[3] = el)}>Projects</a>
          <a className="hover:text-green-400" href="#testimonials-section" ref={(el) => (linksRef.current[4] = el)}>Testimonial</a>
        </div>

        {/* Contact */}
        <div ref={contactRef} className="hidden lg:block font-Cursive text-lg hover:text-white lg:text-xl text-green-400">
          <a href="#contact-section">Contact Us</a>
        </div>

        {/* Hamburger Menu */}
        <div
          className="lg:hidden text-4xl cursor-pointer"
          ref={toggleRef}
          onClick={toggleMenu}
        >
          ☰
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        ref={menuRef}
        className={`fixed top-0 right-0 w-full h-screen bg-black z-50 flex flex-col items-center justify-center transition-transform duration-500 ${isMenuOpen ? "block" : "hidden"}`}
      >
        <div
          className="absolute top-4 right-6 font-Cursive text-white text-3xl cursor-pointer"
          onClick={toggleMenu}
        >
          ✕
        </div>
        <div className="font-Cursive text-xl text-white flex flex-col gap-6">
          <a href="#about-section" onClick={handleLinkClick} ref={(el) => (linksRef.current[0] = el)}>About</a>
          <a href="#skills-section" onClick={handleLinkClick} ref={(el) => (linksRef.current[1] = el)}>Skills</a>
          <a href="#photo-section" onClick={handleLinkClick} ref={(el) => (linksRef.current[2] = el)}>Photography</a>
          <a href="#projects-section" onClick={handleLinkClick} ref={(el) => (linksRef.current[3] = el)}>Projects</a>
          <a href="#testimonials-section" onClick={handleLinkClick} ref={(el) => (linksRef.current[4] = el)}>Testimonial</a>
          <a href="#contact-section" onClick={handleLinkClick} ref={(el) => (linksRef.current[5] = el)}>Contact Us</a>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
