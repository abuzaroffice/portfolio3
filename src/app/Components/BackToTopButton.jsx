import { useEffect, useState } from 'react';

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
    window.addEventListener('scroll', checkScrollPosition);
    
    // Cleanup listener on component unmount
    return () => {
      window.removeEventListener('scroll', checkScrollPosition);
    };
  }, []);

  // Scroll to top functionality
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <button
      onClick={scrollToTop}
      className={`fixed bottom-5 right-5 px-3 py-3 rounded-full bg-green-400 text-white text-2xl shadow-lg transition-opacity ${isVisible ? 'opacity-100' : 'opacity-0'} hover:bg-green-700`}
      style={{ display: isVisible ? 'block' : 'none' }}
    >
      ↑
    </button>
  );
};

export default BackToTopButton;
