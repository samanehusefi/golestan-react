import type React from "react";
import Button from "../Button/Button";

interface videoData {
  id: number;
  title: string;
  priority: number;
  descriptin: string;
  source: string;
  btnText: string;
  url: string;
}

const Video: React.FC = () => {
  const video: videoData[] = [
    {
      id: 1,
      title: "سالاد نودل",
      descriptin:
        "نودل هاتی کارا یك میان‌وعده‌ی مغذی، در هر موقعیتی كه باشید با كمی آب جوش و یك نودل هاتی‌كارا می‌توانید از یك غذای سالم و خوشمزه لذت ببرید.",
      priority: 1,
      source:
        "https://www.aparat.com/video/video/embed/videohash/cQ0yF/vt/frame",
      btnText: "ویدئو های بیشتر",
      url: "#",
    },
    {
      id: 2,
      title: "اینستاگرام هاتی نودل",
      descriptin:
        "نودل‌های هاتی كارا را می‌توان جایگزین سالمی برای غذاهای فست‌فودی دانست. طعم عالی،‌ ارزش غذایی بالا و قیمت مناسب از این محصول غذای سالم و كاملی ساخته است.",
      priority: 2,
      source:
        "https://www.aparat.com/video/video/embed/videohash/Ysaot/vt/frame",
      btnText: "ادامه مطلب",
      url: "#",
    },
    {
      id: 3,
      title: "برنج گلستان",
      descriptin:
        "عطر و طعم بی‌نظیر برنج گلستان با هیچ برنج دیگری قابل مقایسه نیست. با گلستان،‌ كیفیت زندگی بالاتر از همیشه است. چرا كه مشتریان گلستان؛‌ لایق بهترین ها هستند.",
      priority: 3,
      source:
        "https://www.aparat.com/video/video/embed/videohash/Mwp4H/vt/frame",
      btnText: "مشاهده محصولات",
      url: "#",
    },
  ];
  return (
    <div className="flex flex-wrap  w-full my-10 ">
      <div className="max-w-7xl mx-auto flex flex-wrap justify-center gap-8 py-5">
        {video.map((item) => {
          return (
            <div
              key={item.id}
              className="w-[320px] bg-white border border-gray-200 shadow-md overflow-hidden"
            >
              <figure className="aspect-video">
                <iframe
                  src={item.source}
                  className="w-full h-full"
                  allowFullScreen
                  title={item.title}
                />
              </figure>

              <div className="p-6 flex flex-col gap-4">
                <h2 className="text-red-600 text-lg">{item.title}</h2>

                <p className="text-[#7C7D7E] leading-8 text-sm h-24 text-justify">
                  {item.descriptin}
                </p>

                <div>
                  <Button text={item.btnText} href={item.url} />
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Video;
