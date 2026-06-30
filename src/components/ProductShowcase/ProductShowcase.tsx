import type React from "react";
import Button from "../Button/Button";
import Divider from "../Divider/Divider";
import SpaceCard from "../SpaceCard/SpaceCard";

interface ProductData {
  id: number;
  Title: string;
  heading: string;
  btnUrltxt: string;
  btnLinktext: string;
  description: string;
  priority: number;
  url: string;
  link: string;
  src: string;
  alt: string;
}

const ProductShowcase: React.FC = () => {
  const product: ProductData[] = [
    {
      id: 1,
      Title: "رکن اول غذای ایرانی",
      heading: "برنج گلستان",
      description: `مرغوب‌ترین برنج دنیا، برنج ایران است و بهترین نوع برنج ایرانی،‌ طارم و هاشمی. این برنج‌ها از بهترین شالیزارهای مازندران برداشت شده، پس از كنترل كیفیت در آزمایشگاه‌های تخصصی گلستان وارد چرخه بسته‌بندی و در وزن‌های مختلف به بازار عرضه می‌شوند. عطر و طعم بی‌نظیر برنج گلستان با هیچ برنج دیگری قابل مقایسه نیست. با گلستان،‌ كیفیت زندگی بالاتر از همیشه است چرا كه مشتریان گلستان؛‌ لایق بهترین‌ها هستند.`,
      priority: 1,
      url: "https://www.golestan.com/%D8%A8%D8%B1%D9%86%D8%AC-%DA%AF%D9%84%D8%B3%D8%AA%D8%A7%D9%86/",
      link: "https://www.golestan.com/%D9%85%D8%AC%D9%84%D9%87-%DA%AF%D9%84%D8%B3%D8%AA%D8%A7%D9%86/",
      src:  `${import.meta.env.BASE_URL}assets/image2-new-1.jpg`,
      alt: "برنج گلستان",
      btnLinktext: "آشپزخانه گلستان",
      btnUrltxt: "محصولات برنج",
    },
    {
      id: 2,
      Title: "سابقه‌ای به قدمت یک عمر",
      heading: "چای گلستان",
      description: `
<p>
چای تنها یك نوشیدنی گرم نیست.‌ یک گفتمان است؛‌ گرمابخش وجود و بهانه‌ای برای آغاز یك معاشرت دل‌چسب. بی‌دلیل نیست كه نام «محبوب‌ترین نوشیدنی دنیا» را با خود یدک می‌كشد. نوشیدنش خستگی‌ها را فراری داده،‌ حس خوب آرامش را به همراه دارد.
</p>

<p>
برای مردمان ایران زمین نام
<span style="color:#ff0000;">گلستان</span>
با چای پیوند خورده است؛‌ قدیمی‌ترین محصول مجموعه گلستان،‌ با مدرن‌ترین و بهداشتی‌ترین دستگاه‌های روز دنیا تهیه و بسته‌بندی می‌شود. چیزی كه باعث شده مشتریانش یك عمر به نام گلستان اعتماد كنند، كیفیت، عطر و طعم به یادماندنی آن است.
</p>
`,
      priority: 2,
      url: "https://www.golestan.com/%DA%86%D8%A7%DB%8C-%DA%AF%D9%84%D8%B3%D8%AA%D8%A7%D9%86-%D9%85%D8%AD%D8%B5%D9%88%D9%84%D8%A7%D8%AA/",
      link: "#",
      src:  `${import.meta.env.BASE_URL}assets/image3-new.jpg`,
      alt: "چای گلستان",
      btnLinktext: "",
      btnUrltxt: "محصولات چای",
    },
    {
      id: 3,
      Title: "آجيل‌های خوش خنده",
      heading: "پسته گلستان",
      description: `خواص فوق‌العاده پسته بر كسی پوشیده نیست. پسته را منبع ویتامین و مواد معدنی می‌نامند، یك پمپ خون‌ساز قوی و تسكین دهنده قلب و اعصاب.<span style="color: red;">پسته گلستان</span>&nbsp;اما حسابش از دیگر پسته&zwnj;های بازار جداست. مرغوب&zwnj;ترین پسته خام از بهترین باغ&zwnj;های پسته ایران دستچین می&zwnj;شود.&zwnj; پس از كنترل كیفیت در آزمایشگاه و اطمینان از سلامت محصول،&zwnj; با زعفران درجه یک و نمک، بوداده و برشته شده و&zwnj; پسته گلستان را با طعم و رنگ و عطری بی&zwnj;نظیر به ارمغان می&zwnj;آورد.`,
      priority: 3,
      url: "https://www.golestan.com/%d9%be%d8%b3%d8%aa%d9%87-%da%af%d9%84%d8%b3%d8%aa%d8%a7%d9%86-%d9%85%d8%ad%d8%b5%d9%88%d9%84%d8%a7%d8%aa/",
      link: "#",
      src:  `${import.meta.env.BASE_URL}assets/image4-new.jpg`,
      alt: "پسته گلستان",
      btnLinktext: "",
      btnUrltxt: "ناتس گلستان",
    },
  ];

  return (
    <>
      {product.map((item) => (
        <section key={item.id} className="w-full border-t border-gray-200">
          <div className="relative border-b-18 border-[#e9d69f]">
            <img
              src={item.src}
              alt={item.alt}
              className="h-[420px] w-full object-cover"
            />

            <div className="absolute bottom-[-35px] right-[12%] w-[280px] bg-[#ed1c24] px-10 py-7 text-white shadow-lg">
              <h3 className="text-[25px]  leading-none">{item.heading}</h3>

              <span className="mt-3 block text-[18px]">معرفی محصول</span>
            </div>
          </div>
          <SpaceCard />
          <SpaceCard />
          <Divider />
          <div className="mx-auto max-w-3xl px-6 py-20 text-right">
            <h2 className="mb-8 text-lg font-bold text-red-600">
              {item.Title}
            </h2>

            <div
              className="space-y-6 leading-9 text-[#7A7A7A] text-justify text-sm"
              dangerouslySetInnerHTML={{
                __html: item.description,
              }}
            />

            <div className="mt-10 flex gap-4">
              {item.link !== "#" && (
                <Button text="ادامه مطلب" href={item.btnLinktext} />
              )}

              <Button text={` ${item.btnUrltxt}`} href={item.url} />
            </div>
          </div>
        </section>
      ))}
    </>
  );
};

export default ProductShowcase;
