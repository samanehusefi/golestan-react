import type React from "react";
import SpaceCard from "../SpaceCard/SpaceCard";

const Parallax: React.FC = () => {
  const image =
    "https://www.golestan.com/wp-content/uploads/2023/01/recipe-baner-1.png";

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
