import React, { useRef, useEffect, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const images = [
  { src: '/Metro.JPG', alt: 'Metro', caption: 'Beautiful Metro Station' },
  { src: '/Mosque.jpg', alt: 'Mosque', caption: 'Majestic Mosque View' },
  { src: '/Park.JPG', alt: 'Park', caption: 'Serene Park Landscape' },
  { src: '/Peacelilly.jpg', alt: 'Pod 1', caption: 'Innovative Pod Architecture' },
  { src: '/MG.JPG', alt: 'Pod 2', caption: 'Winter is here' },
  { src: '/Road.JPG', alt: 'Road', caption: 'Scenic Road View' },
  { src: '/Tree.jpg', alt: 'Tree', caption: 'Tall and Majestic Tree' },
];

const ImageCarousel = () => {
  const carouselRef = useRef();
  const modalRef = useRef();
  const [selectedImage, setSelectedImage] = useState(null);
  const [isAnimating, setIsAnimating] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const carouselItems = carouselRef.current.querySelectorAll('.carousel-item');
    gsap.fromTo(
      carouselItems,
      { opacity: 0, x: 50 },
      {
        opacity: 1,
        x: 0,
        duration: 1,
        ease: 'power3.out',
        stagger: 0.2,
        scrollTrigger: {
          trigger: carouselRef.current,
          start: 'top 85%',
          toggleActions: 'play none none none',
        },
      }
    );
  }, []);

  const openPopup = (image) => {
    if (isAnimating) return;
    setIsAnimating(true);
    setSelectedImage(image);

    // Disable background scrolling
    document.body.style.overflow = 'hidden';

    gsap.fromTo(
      modalRef.current,
      { opacity: 0, scale: 0.9 },
      {
        opacity: 1,
        scale: 1,
        duration: 0.4,
        ease: 'power3.out',
        onComplete: () => setIsAnimating(false),
      }
    );
  };

  const closePopup = () => {
    if (isAnimating) return;
    setIsAnimating(true);

    // Enable background scrolling again
    document.body.style.overflow = 'auto';

    gsap.to(modalRef.current, {
      opacity: 0,
      scale: 0.9,
      duration: 0.4,
      ease: 'power3.in',
      onComplete: () => {
        setSelectedImage(null);
        setIsAnimating(false);
      },
    });
  };

  return (
    <div className="max-w-screen-xl container mx-auto px-4 py-8">
      <h1 className="text-6xl sm:text-6xl md:text-8xl font-Mazius text-green-400 text-center">
        Photography
      </h1>

      {/* Carousel */}
      <div className="relative mt-16 overflow-hidden" ref={carouselRef}>
        <div
          className="flex transition-transform duration-700 ease-in-out"
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          {images.map((image, index) => (
            <div
              key={index}
              className="carousel-item min-w-full flex items-center justify-center cursor-pointer relative"
              onClick={() => openPopup(image)}
            >
              <img
                src={image.src}
                alt={image.alt}
                className="w-3/4 h-64 object-cover rounded-lg shadow-lg hover:scale-105 transition-transform duration-300 ease-out"
              />
              <div className="absolute bottom-4 bg-black bg-opacity-50 text-white text-center px-4 py-2 rounded">
                {image.caption}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Popup Modal */}
      {selectedImage && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-75 px-4"
          ref={modalRef}
        >
          <div className="relative w-full max-w-screen-md mx-auto bg-white rounded-lg shadow-lg overflow-hidden">
            <button
              onClick={closePopup}
              className="absolute top-2 right-2 bg-green-400 text-white px-3 py-2 rounded-full hover:bg-green-600 transition duration-200"
            >
              ✕
            </button>
            <div className="p-4">
              <img
                src={selectedImage.src}
                alt={selectedImage.alt}
                className="w-full max-h-[70vh] object-contain rounded-lg"
              />
              <p className="text-gray-900 text-center mt-4 text-lg">
                {selectedImage.caption}
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ImageCarousel;
