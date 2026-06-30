import type React from "react";
import {
  FaFacebookF,
  FaLinkedinIn,
  FaInstagram,
  FaTelegramPlane,
  FaGlobe,
} from "react-icons/fa";
import { SiAparat } from "react-icons/si";

interface SocialData {
  id: number;
  title: string;
  priority: number;
  icon: React.ReactNode;
  alt: string;
  url: string;
  hoverColor: string;
}
const Social: React.FC = () => {
  const social: SocialData[] = [
    {
      id: 1,
      priority: 1,
      title: "facebook",
      alt: "facebook",
      icon: <FaFacebookF />,
      url: "#",
      hoverColor: "hover:bg-[#1877F2]",
    },
    {
      id: 2,
      priority: 2,
      title: "linkedin",
      alt: "linkedin",
      icon: <FaLinkedinIn />,
      url: "#",
      hoverColor: "hover:bg-[#0077B5]",
    },
    {
      id: 3,
      priority: 3,
      title: "instagram",
      alt: "instagram",
      icon: <FaInstagram />,
      url: "#",
      hoverColor:
        "hover:bg-gradient-to-tr hover:from-[#feda75] hover:via-[#d62976] hover:to-[#4f5bd5]",
    },
    {
      id: 4,
      priority: 4,
      title: "telegram",
      alt: "telegram",
      icon: <FaTelegramPlane />,
      url: "#",
      hoverColor: "hover:bg-[#24A1DE]",
    },
    {
      id: 5,
      priority: 5,
      title: "aparat",
      alt: "aparat",
      icon: <SiAparat />,
      url: "#",
      hoverColor: "hover:bg-[#ea1d5d]",
    },
    {
      id: 6,
      priority: 6,
      title: "blog",
      alt: "blog",
      icon: <FaGlobe />,
      url: "#",
      hoverColor: "hover:bg-green-500",
    },
  ];
  return (
    <div className="h-28 bg-[#EEEFEF] flex flex-wrap justify-center items-center gap-1 mt-5 border-b-[25px] border-b-red-500">
      {social.map((item) => (
        <a
          key={item.id}
          href={item.url}
          className={`
  w-10 h-10 md:w-12 md:h-12 bg-[#b8b8b8] text-white
  rounded-full flex items-center justify-center
  text-2xl transition-all duration-300 
  ${item.hoverColor}
`}
          aria-label={item.title}
        >
          {item.icon}
        </a>
      ))}
    </div>
  );
};
export default Social;
