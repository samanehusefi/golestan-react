import type React from "react";
import Button from "../Button/Button";
import Divider from "../Divider/Divider";
import Reveal from "../../animations/Reveal";

interface SliderData {
  id: number;
  title: string;
  Heading: string;
  priority: number;
  descriptin: string;
  src: string;
  alt: string;
  url: string;
}

const Slider: React.FC = () => {
  const slider: SliderData = {
    id: 1,
    priority: 1,
    title: "قرعه‌کشی مصرف‌کنندگان گلستان​",
    Heading: "قرعه‌کشی ویژه جام جهانی",
    descriptin:
      "با خرید محصولات چای و ناتس گلستان، کد روی بسته را به شماره 30007405 ارسال کنید و در قرعه‌کشی جام جهانی با جایزه پلی‌استیشن شرکت کنید.",
    src: "/assets/slider.png",
    alt: "گلستان",
    url: "#",
  };

  return (
    <>
      <div className="w-full min-h-125 bg-linear-to-l from-[#f2f2f2] via-[#dddddd] to-[#c8c8c8] mt-20">
        <div className="w-full lg:max-w-5xl mx-auto px-5 py-10 flex flex-col lg:flex-row justify-center lg:justify-between items-center gap-8">
          <div className="w-full lg:max-w-md text-center lg:text-right">
            <h2 className="text-red-500 text-2xl py-3">{slider.Heading} </h2>

            <h2 className="text-sm text-[#58595B] py-3">{slider.title} </h2>
            <Reveal direction="up">
              <p className="text-[#898989] leading-10 text-justify text-sm">
                {slider.descriptin}
              </p>
            </Reveal>

            <Button text="اطلاعات بیشتر" href={slider.url} />
          </div>

          <div>
            <img
              className="w-64 mx-auto lg:w-auto"
              src={slider.src}
              alt={slider.alt}
            />
          </div>
        </div>
      </div>
      <Divider />
    </>
  );
};

export default Slider;
