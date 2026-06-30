import type React from "react";

interface ButtonProps {
  text: string;
  href?: string;
}

const Button: React.FC<ButtonProps> = ({ text = "ادامه مطلب", href = "#" }) => {
  return (
    <a
      href={href}
      className="bg-white hover:bg-red-600 text-[#7C7D7E] hover:text-white text-xs py-2 px-4 border
       border-[#C8C8C8] hover:border-transparent rounded-md mx-auto lg:mx-0 inline-block mt-6"
    >
      {text}
    </a>
  );
};

export default Button;
