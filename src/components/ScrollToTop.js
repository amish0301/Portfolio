import React, { useEffect } from "react";
import scrollImg from "../Assets/Arrow_top.png";

const ScrollToTop = () => {
  const handleScrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  useEffect(() => {
    const handleScrollBtnVisibility = () => {
      window.scrollY > 300
        ? (document.querySelector(".scroll-to-top").style.display = "block")
        : (document.querySelector(".scroll-to-top").style.display = "none");
    };

    window.addEventListener("scroll", handleScrollBtnVisibility);

    return () => {
      window.removeEventListener("scroll", handleScrollBtnVisibility);
    };
  }, []);

  return (
    <>
      <button className="scroll-to-top" onClick={handleScrollToTop}>
        <img src={scrollImg} alt="scroll-to-top" />
      </button>
    </>
  );
};

export default ScrollToTop;
