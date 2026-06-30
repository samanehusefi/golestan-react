import type React from "react";
import Button from "../Button/Button";
import Divider from "../Divider/Divider";

interface ResponsibilityData {
  id: number;
  title: string;
  EnTitle: string;
  EnTitle2: string;
  Heading: string;
  priority: number;
  descriptin1: string;
  brand: string;
  descriptin2: string;
  src: string;
  alt: string;
  url: string;
}

const Responsibility: React.FC = () => {
  const responsibility: ResponsibilityData = {
    id: 1,
    title: "مسئوليت‌های اجتماعی گلستان",
    EnTitle: "Golestan Social Responsibility",
    EnTitle2: "Mahdi Hospital",
    Heading: "مسئوليت‌های اجتماعی شركت گلستان",
    priority: 1,
    descriptin1:
      "كسب‌وكارها اجزای قدرتمند جامعه به شمار می‌آیند و موفق‌ترین، قابل‌احترام‌ترین و مطلوب‌ترین كسب‌وكارها آنهایی هستند كه كاری فراتر از درآمدزایی ایجاد كنند؛‌ آنهایی كه آمده‌اند تا از تجربه و امکاناتشان برای حل مشكلات جامعه و محیط زندگی خود استفاده كنند.",
    brand: "گلستان",
    descriptin2:
      "در فعالیت‌های‌ اجتماعی خود،‌ گسترده وسیعی از فعالیت‌های عام‌المنفعه را در دستوركار خود قرار داده است.",
    src: "https://www.golestan.com/wp-content/uploads/2023/01/csr-pic1.jpg",
    alt: "Mahdi Hospital",
    url: "#",
  };
  return (
    <section className="w-full">
      <div className="relative h-130 bg-[#105153] border-b-18 border-[#e9d69f] ">
        <div className="absolute top-36 left-0 right-0 z-20">
          <div className="relative border-t border-[#2b6a6a]">
            <span
              className="absolute left-1/2 whitespace-nowrap -translate-x-1/2 -top-14 md:-top-8
            text-lg  bg-[#105153] md:px-6 text-white z-20"
            >
              {responsibility.Heading}
            </span>
          </div>

          <div className="mt-6 text-center z-20 relative">
            <h2 className="text-[#00c7d8] text-[24px] font-light font-['Times_New_Roman'] ">
              {responsibility.EnTitle}
            </h2>

            <p className="mt-1 text-[#c7c7c7] text-[18px] tracking-[3px] font-['Times_New_Roman'] ">
              {responsibility.EnTitle2}
            </p>
          </div>
        </div>
        <img
          src={responsibility.src}
          alt={responsibility.alt}
          className="absolute left-1/2 -translate-x-1/2 -bottom-24 w-96 z-10"
        />
      </div>
      <Divider />
      <div className="h-24" />
      <div className=" max-w-full md:max-w-[50%] mx-auto px-6 mb-20  pt-2">
        <h2 className="text-[#ed1c24] text-lg mb-8">{responsibility.title}</h2>

        <p className="text-[#818588] leading-9  text-justify">
          {responsibility.descriptin1}
          <span className="text-[#ed1c24] ">{responsibility.brand}</span>{" "}
          {responsibility.descriptin2}
        </p>
        <Button text="اطلاعات بیشتر" href={responsibility.url} />
      </div>
    </section>
  );
};

export default Responsibility;
