import React, { useEffect, useState } from "react";
import { FaAngleUp } from "react-icons/fa";

const BackToTop: React.FC = () => {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShow(window.scrollY > 300);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleClick = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <button
      onClick={handleClick}
      className={`fixed bottom-6 left-2 z-50 flex h-8 w-8 items-center justify-center bg-[#1f1f1f] text-white transition-all duration-300 hover:bg-red-600 ${
        show
          ? "translate-y-0 opacity-100"
          : "pointer-events-none translate-y-4 opacity-0"
      }`}
    >
      <FaAngleUp className="h-5 w-5" />
    </button>
  );
};

export default BackToTop;
