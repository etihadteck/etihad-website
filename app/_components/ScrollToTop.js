'use client';

import { useState, useEffect } from 'react';
import { HiArrowUp } from 'react-icons/hi2';

function ScrollToTop() {
  const [isVisible, setIsVisible] = useState(false);

  // Show button when page is scrolled up to given distance
  const toggleVisibility = () => {
    if (window.pageYOffset > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  // Set the scroll event listener
  useEffect(() => {
    window.addEventListener('scroll', toggleVisibility);
    return () => {
      window.removeEventListener('scroll', toggleVisibility);
    };
  }, []);

  // Scroll to top smoothly
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <>
      {isVisible && (
        <button
          onClick={scrollToTop}
          className="bg-accent-500 hover:bg-accent-700 fixed bottom-8 left-8 z-50 rounded-full p-4 text-white shadow-lg transition-all duration-300 hover:shadow-xl"
          aria-label="Scroll to top"
        >
          <HiArrowUp className="h-6 w-6 font-bold" />
        </button>
      )}
    </>
  );
}

export default ScrollToTop;
