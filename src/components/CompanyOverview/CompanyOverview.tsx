import type React from "react";
import Button from "../Button/Button";
import Divider from "../Divider/Divider";
interface CompanyData {
  id: number;
  title: string;
  description: string;
  url: string;
  priority: number;
}

const CompanyOverview: React.FC = () => {
  const company: CompanyData[] = [
    {
      id: 1,
      title: "معرفی گلستان",
      description: `
      <p>
        آنچه که امروز با نام مجموعه
        <span style="color:#ff0000;">گلستان</span>
        می‌شناسیم در سال ۱۳۲۹ بنیان نهاده شد. زمانی که شرکت گلستان فعالیت خود را با
        بسته‌بندی و توزیع چای پاکتی آغاز کرد. با گذر زمان و رشد اقتصاد کشور، نهال
        «گلستان» به تدریج تقویت شد و شاخ و برگ گرفت. فعالیت‌های «گلستان» با تهیه،
        تولید و بسته‌بندی بهترین محصولات غذایی گسترش پیدا کرد.
        <span style="color:#ff0000;">گلستان</span>
        پس از سال‌ها تلاش همچنان می‌کوشد تا به کمک تجربه‌های اندوخته شده در این
        سال‌ها کالاهایی قابل اعتماد و با کیفیت تولید نماید.
      </p>

      <p>
        هدفمندی و برنامه‌ریزی موثر، ایمان و عزم راسخ برای دستیابی به اهداف تعیین شده،
        به کار گیری همکاران مجرب و دلسوز، استفاده از روش‌های نوین بازاریابی و مشتری
        محوری از جمله عوامل مهم در استراتژی
        <span style="color:#ff0000;">شرکت گلستان</span>
        است.
      </p>
    `,
      url: "#",
      priority: 1,
    },
    {
      id: 2,
      title: "محصولات گلستان",
      description: `
      <p>
        <span style="color:#ff0000;">نام تجاری گلستان</span>
        قدمتی به اندازه عمر شرکت گلستان دارد. گلستان ممتازترین محصولات خود را با این
        نام تجاری عرضه می‌کند. مصرف‌کنندگان محصولات گلستان همواره از این نام تجاری
        خاطره محصولاتی ممتاز و منحصر بفرد دارند و با اطمینان از نهایت کیفیت این نام
        تجاری حمایت می‌کنند.
      </p>
    `,
      url: "#",
      priority: 2,
    },
  ];
  return (
    <>
      <section className="mx-auto mt-12 max-w-3xl overflow-hidden">
        {company.map((item) => (
          <div key={item.id} className="mb-10 text-right">
            <h2 className="inline-block px-3 py-2 text-xl text-[#FF0000]">
              {item.title}
            </h2>

            <div
              className="mt-8 px-3 text-sm leading-9 text-justify text-[#7A7A7A]"
              dangerouslySetInnerHTML={{ __html: item.description }}
            />

            <div className="my-2 px-3">
              <Button text="اطلاعات بیشتر" href={item.url} />
            </div>

            <Divider />
          </div>
        ))}
      </section>
    </>
  );
};

export default CompanyOverview;
