import type React from "react";
import SpaceCard from "../SpaceCard/SpaceCard";

const Parallax: React.FC = () => {
  const image = `${import.meta.env.BASE_URL}assets/recipe-baner-1.png`;

  return (
    <>
      <SpaceCard />

      <section
        className="w-full h-64 bg-cover bg-center md:bg-fixed"
        style={{
          backgroundImage: `url(${image})`,
        }}
      />

      <SpaceCard />
    </>
  );
};

export default Parallax;
