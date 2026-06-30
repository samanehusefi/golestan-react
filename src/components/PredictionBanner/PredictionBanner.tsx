import type React from "react";
import Button from "../Button/Button";
import Divider from "../Divider/Divider";

interface PredictionBannerData {
  id: number;
  title: string;
  descriptin: string;
  src: string;
  alt: string;
  priority: number;
  url: string;
}

const PredictionBanner: React.FC = () => {
  const Prediction: PredictionBannerData = {
    id: 1,
    title: "مسابقه پیش‌ بینی جام جهانی",
    descriptin:
      "جام جهانی ۲۰۲۶ فرصتی است تا در کنار هیجان بزرگ‌ترین رویداد فوتبال جهان، شانس خود را امتحان کنید. شما می‌توانید پیش‌بینی‌هایتان را ثبت کنید و در هر مرحله از بازی‌های جام جهانی، برنده جوایز ارزشمند شوید. برای ثبت نتیجه اولین بازی تیم ایران در جام جهانی فقط تا سوت شروع بازی در روز سه شنبه 26 خرداد، ساعت 4:30 بامداد فرصت باقی است.",
    priority: 1,
    src: "/assets/WCup_Banner.jpg",
    alt: "مسابقه پیش‌ بینی جام جهانی",
    url: "#",
  };

  return (
    <>
      <section className="mx-auto max-w-3xl overflow-hidden mt-12 ">
        <img
          src={Prediction.src}
          alt={Prediction.alt}
          className="w-full object-cover"
        />

        <div className=" text-right">
          <h2 className="px-3 inline-block  py-2 text-xl  text-[#FF0000]">
            {Prediction.title}
          </h2>

          <p className="mt-8 px-3 text-sm leading-9 text-justify text-[#7A7A7A]">
            {Prediction.descriptin}
          </p>
          <div className="my-2 px-3">
            <Button text="اطلاعات بیشتر" href={Prediction.url} />
            <Divider />
          </div>
        </div>
      </section>
    </>
  );
};

export default PredictionBanner;
