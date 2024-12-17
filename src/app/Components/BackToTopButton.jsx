import { useEffect, useState } from "react";

const BackToTopButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  // Function to show/hide button based on scroll position
  const checkScrollPosition = () => {
    if (window.scrollY > 20) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  // Event listener to handle scroll
  useEffect(() => {
    window.addEventListener("scroll", checkScrollPosition);

    // Cleanup listener on component unmount
    return () => {
      window.removeEventListener("scroll", checkScrollPosition);
    };
  }, []);

  // Scroll to top functionality
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <button
      onClick={scrollToTop}
      className={`fixed 
        bottom-4 right-4 md:bottom-6 md:right-6 lg:bottom-8 lg:right-8
        px-3 py-3 md:px-4 md:py-4 lg:px-5 lg:py-5 
        rounded-full bg-amber-600 text-white 
        text-xl md:text-2xl lg:text-3xl 
        shadow-lg transition-opacity duration-300 ease-in-out 
        ${isVisible ? "opacity-100" : "opacity-0"} 
        hover:bg-amber-700`}
      style={{ display: isVisible ? "block" : "none" }}
      aria-label="Back to top"
    >
      ↑
    </button>
  );
};

export default BackToTopButton;
