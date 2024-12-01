import React, { useEffect, useState } from "react";
import scrollImg from "../Assets/Arrow_top.png";

const ScrollToTop = () => {
  const handleScrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScrollBtnVisibility = () => {
      setIsVisible(window.scrollY > 500);
    };

    window.addEventListener("scroll", handleScrollBtnVisibility);

    return () => {
      window.removeEventListener("scroll", handleScrollBtnVisibility);
    };
  }, []);

  return (
    <>
      {isVisible && (
        <button className="scroll-to-top" onClick={handleScrollToTop}>
          <img src={scrollImg} loading="lazy" alt="scroll-to-top" />
        </button>
      )}
    </>
  );
};

export default ScrollToTop;
