import React, { useEffect, useState } from "react";
import { FiArrowUp } from "react-icons/fi";

const BackToTop = () => {
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 500) {
        setShowButton(true);
      } else {
        setShowButton(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <button
      type="button"
      onClick={scrollToTop}
      aria-label="Back to top"
      className={`fixed bottom-5 right-5 z-[100] flex h-12 w-12 items-center justify-center rounded-full bg-[#BE2229] text-white shadow-xl transition-all duration-500 hover:bg-[#EE627D] hover:-translate-y-1 sm:bottom-7 sm:right-7 sm:h-14 sm:w-14 ${
        showButton
          ? "translate-y-0 scale-100 opacity-100"
          : "pointer-events-none translate-y-5 scale-75 opacity-0"
      }`}
    >
      <FiArrowUp
        size={21}
        className="transition-transform duration-300"
      />
    </button>
  );
};

export default BackToTop;