import React from 'react';
import { FaFacebook, FaWhatsapp, FaInstagram, FaLinkedin } from 'react-icons/fa';
import gsap from 'gsap';

const Footer = () => {
  // Animate footer on load
  React.useEffect(() => {
    gsap.fromTo(
      '.footer-content',
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        duration: 1.5,
        ease: 'power3.out',
        delay: 0.5,
      }
    );
  }, []);

  return (
    <footer className="font-Cursive py-10 px-6 bg-amber-800">
      <div className="max-w-screen-xl mx-auto text-center footer-content">
        {/* Footer Heading */}
        <h2 className="text-4xl sm:text-5xl md:text-6xl font-Mazius mb-6 text-amber-200 tracking-tight leading-tight">
          Let's Build Something Amazing Together!
        </h2>

        {/* Description */}
        <p className="text-lg sm:text-xl mb-8 text-white">
          Have questions or want to collaborate? Connect with us, and let's make magic happen!
        </p>

        {/* Social Media Icons */}
        <div className="flex justify-center space-x-8 mb-8">
          <a
            href="https://www.facebook.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-4xl text-white hover:text-blue-600 transition duration-300 ease-in-out transform hover:scale-110"
          >
            <FaFacebook />
          </a>
          <a
            href="https://wa.me/+916398594241?text=<Hello>"
            target="_blank"
            rel="noopener noreferrer"
            className="text-4xl text-white hover:text-green-400 transition duration-300 ease-in-out transform hover:scale-110"
          >
            <FaWhatsapp />
          </a>
          <a
            href="https://www.instagram.com/abyy_.22/profilecard/?igsh=c3MzZWFnNjFpOHVn"
            target="_blank"
            rel="noopener noreferrer"
            className="text-4xl text-white hover:text-pink-600 transition duration-300 ease-in-out transform hover:scale-110"
          >
            <FaInstagram />
          </a>
          <a
            href="https://www.linkedin.com/in/abuzar-malik-2b2464223/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-4xl text-white hover:text-blue-700 transition duration-300 ease-in-out transform hover:scale-110"
          >
            <FaLinkedin />
          </a>
        </div>

        {/* Footer Links */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-8 mb-8 text-lg text-white">
          <div>
            <h3 className="text-xl font-semibold mb-3 text-amber-200">Quick Links</h3>
            <ul>
              <li><a href="#about-section" className="hover:text-amber-400 transition duration-300 ease-in-out">About</a></li>
              <li><a href="#navbar" className="hover:text-amber-400 transition duration-300 ease-in-out">Home</a></li>
              <li><a href="#projects-section" className="hover:text-amber-400 transition duration-300 ease-in-out">Projects</a></li>
              <li><a href="#contact-section" className="hover:text-amber-400 transition duration-300 ease-in-out">Contact</a></li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-3 text-amber-200">Legal</h3>
            <ul>
              <li><a href="/privacy-policy" className="hover:text-amber-400 transition duration-300 ease-in-out">Privacy Policy</a></li>
              <li><a href="/terms-of-service" className="hover:text-amber-400 transition duration-300 ease-in-out">Terms of Service</a></li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-3 text-amber-200">Services</h3>
            <ul>
              <li><a href="#contact-section" className="hover:text-amber-400 transition duration-300 ease-in-out">Web Development</a></li>
              <li><a href="#contact-section" className="hover:text-amber-400 transition duration-300 ease-in-out">UI/UX Design</a></li>
              <li><a href="#contact-section" className="hover:text-amber-400 transition duration-300 ease-in-out">SEO Optimization</a></li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-3 text-amber-200">Contact</h3>
            <ul>
              <li><a href="mailto:abuzarmalik569@.com" className="hover:text-amber-400 transition duration-300 ease-in-out">Email</a></li>
              <li><a href="tel:+91 6398594241" className="hover:text-amber-400 transition duration-300 ease-in-out">Phone</a></li>
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="text-sm sm:text-base text-amber-200">
          &copy; 2024 Abuzar Malik. All rights reserved. Crafted with ❤️ and JavaScript.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
