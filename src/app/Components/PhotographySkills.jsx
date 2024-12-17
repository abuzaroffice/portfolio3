import React, { useRef, useEffect, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useSwipeable } from 'react-swipeable';

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
  const carouselRef = useRef(null);
  const modalRef = useRef(null);
  const [selectedImage, setSelectedImage] = useState(null);
  const [isAnimating, setIsAnimating] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  // Auto-slide effect
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  // GSAP animations
  useEffect(() => {
    if (!carouselRef.current) return;

    const carouselItems = carouselRef.current.querySelectorAll('.carousel-item');
    carouselItems.forEach((item, index) => {
      gsap.fromTo(
        item,
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 1.2,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: item,
            start: 'top 80%',
            toggleActions: 'play none none none',
          },
        }
      );
    });
  }, []);

  // Open image in modal
  const openPopup = (image) => {
    if (isAnimating) return;
    setIsAnimating(true);
    setSelectedImage(image);

    document.body.style.overflow = 'hidden';

    gsap.fromTo(
      modalRef.current,
      { opacity: 0, scale: 0.95 },
      {
        opacity: 1,
        scale: 1,
        duration: 0.5,
        ease: 'power3.out',
        onComplete: () => setIsAnimating(false),
      }
    );
  };

  // Close image modal
  const closePopup = () => {
    if (isAnimating) return;
    setIsAnimating(true);

    document.body.style.overflow = 'auto';

    gsap.to(modalRef.current, {
      opacity: 0,
      scale: 0.95,
      duration: 0.5,
      ease: 'power3.in',
      onComplete: () => {
        setSelectedImage(null);
        setIsAnimating(false);
      },
    });
  };

  // Swipe functionality
  const handlers = useSwipeable({
    onSwipedLeft: () => setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length),
    onSwipedRight: () => setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length),
  });

  return (
    <div id='photo-section' className="max-w-screen-xl container mx-auto px-4 py-8">
      <h1 className="text-6xl text-center sm:text-6xl md:text-8xl font-Mazius text-amber-800 drop-shadow-lg mb-10">
        Photography Showcase
      </h1>

      {/* Carousel */}
      <div
        className="relative overflow-hidden rounded-lg shadow-xl"
        ref={carouselRef}
        {...handlers}
      >
        <div
          className="flex transition-transform duration-700 ease-in-out"
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          {images.map((image, index) => (
            <div
              key={index}
              className="carousel-item min-w-full flex items-center justify-center cursor-pointer relative group"
              onClick={() => openPopup(image)}
            >
              <div className="relative w-3/4 h-96 transform group-hover:scale-105 transition-transform duration-500">
                {/* Image with Gradient Border */}
                <div className="relative w-full h-full rounded-xl overflow-hidden group-hover:shadow-2xl transition-shadow duration-500">
                  <div className="absolute inset-0 p-[4px] bg-gradient-to-r from-amber-600 to-yellow-300 rounded-xl">
                    <div className="w-full h-full bg-white rounded-xl overflow-hidden">
                      <img
                        src={image.src}
                        alt={image.alt}
                        className="absolute inset-0 w-full h-full object-cover rounded-lg transform transition-transform duration-500 ease-in-out group-hover:scale-110"
                      />
                    </div>
                  </div>
                </div>
                {/* Caption */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent rounded-xl flex items-end p-4 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <span className="text-white font-Cursive text-xl font-medium">
                    {image.caption}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Carousel Indicators */}
        <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
          {images.map((_, index) => (
            <div
              key={index}
              className={`w-3 h-3 rounded-full ${index === currentIndex ? 'bg-amber-800' : 'bg-gray-300'} transition-all duration-300`}
            ></div>
          ))}
        </div>
      </div>

      {/* Popup Modal */}
      {selectedImage && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-75"
          ref={modalRef}
        >
          <div className="relative w-9/12 max-w-96 mx-auto bg-white rounded-xl shadow-xl overflow-hidden">
            <button
              onClick={closePopup}
              className="absolute top-4 right-4 bg-amber-800 text-white w-10 h-10 rounded-full flex items-center justify-center shadow-md hover:bg-amber-900 transition duration-300"
            >
              ✕
            </button>
            <div className="p-4">
              <img
                src={selectedImage.src}
                alt={selectedImage.alt}
                className="w-full h-auto rounded-lg border-4 border-amber-800"
              />
              <div className="mt-4 text-center">
                <h2 className="text-2xl font-Cursive font-semibold text-gray-800">
                  {selectedImage.caption}
                </h2>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ImageCarousel;
