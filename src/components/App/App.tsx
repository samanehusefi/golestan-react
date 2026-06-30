import type React from "react";
import Menu from "../Menu/Menu";
import Slider from "../Slider/Slider";
import Parallax from "../Parallax/Parallax";
import Blog from "../Blog/Blog";
import Video from "../Video/Video";
import Footer from "../Footer/Footer";
import Responsibility from "../Responsibility/Responsibility";
import ProductShowcase from "../ProductShowcase/ProductShowcase";
import PredictionBanner from "../PredictionBanner/PredictionBanner";
import CompanyOverview from "../CompanyOverview/CompanyOverview";
import CategoryNavigation from "../CategoryNavigation/CategoryNavigation";

const App: React.FC = () => {
  return (
    <>
      <Menu />

      <Slider />

      <PredictionBanner />

      <CompanyOverview />
      <CategoryNavigation />

      <ProductShowcase />

      <Parallax />

      <Blog />

      <Video />

      <Responsibility />

      <Footer />
    </>
  );
};
export default App;
