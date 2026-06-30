import type React from "react";
import Button from "../Button/Button";

interface PostData {
  id: number;
  title: string;
  priority: number;
  descriptin: string;
  src: string;
  alt: string;
  url: string;
}

const Blog: React.FC = () => {
  const posts: PostData[] = [
    {
      id: 1,
      title: "ماکارونی با سبزیجات",
      descriptin:
        "ابتدا ماکارانی‌ها را در ظرفی‌ به‌ همراه‌ آب‌، روغن‌ مایع‌ و نمک‌ می‌ریزیم‌ تا کمی‌ بپزد. در این‌ حین‌ پیازها را خرد کرده‌ و روی‌ روغن‌ تفت‌ می‌دهیم‌ تا طلایی‌ شود…",
      priority: 1,
      url: "#",
      src: "/assets/recipe-pic2.jpg",
      alt: "recipe-pic-2",
    },
    {
      id: 2,
      title: "سوپ مکزیکی",
      descriptin:
        "گوشت بوقلمون را در یک ماهیتابه بزرگ ریخته، آب روی آن بریزید تا روی آن را بپوشاند و به مدت نیم ساعت آن را بپزید. گوشت را از مایع آن بیرون آورده…",
      priority: 2,
      url: "#",
      src: "/assets/recipe-pic3.jpg",
      alt: "recipe-pic3",
    },
    {
      id: 3,
      title: "چیلاکیله ",
      descriptin:
        "احتمالا نام چیلا کیله را نشنیده باشید ولی اگر یکبار این غذای فوق‌العاده خوشمزه را تهیه کنید و نوش جان کنید جزئی جدانشدنی از فهرست",
      priority: 2,
      url: "#",
      src: "/assets/recipe-pic-Chilakile-1401.jpg",
      alt: "recipe-pic4",
    },
  ];
  return (
    <>
      <div className="h-36 w-full">
        <h2 className="text-red-600 text-xl max-w-5xl mx-auto px-5 flex items-center h-full leading-36">
          مجله گلستان
        </h2>
      </div>
      <div className="bg-[#CDE4B0]   w-full ">
        <div className="max-w-7xl mx-auto flex flex-wrap justify-center gap-8 py-5">
          {posts.map((item) => {
            return (
              <div
                key={item.id}
                className="w-[320px] bg-white border border-gray-200 shadow-md overflow-hidden"
              >
                <figure>
                  <img
                    src={item.src}
                    alt={item.alt}
                    className="w-full h-80 object-cover"
                  />
                </figure>

                <div className="p-6 flex flex-col gap-4">
                  <h2 className="text-red-600 text-lg">{item.title}</h2>

                  <p className="text-[#7C7D7E] leading-8 text-sm h-24 text-justify">
                    {item.descriptin}
                  </p>

                  <div>
                    <Button text="ادامه مطلب" href={item.url} />
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Blog;
