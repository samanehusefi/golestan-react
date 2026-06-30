import type React from "react";
import Social from "../Social/Social";
import BackToTop from "../BackToTop/BackToTop";
import FooterCopyright from "../FooterCopyright/FooterCopyright";
interface FooterLink {
  id: number;
  title: string;
  url: string;
}

interface FooterSection {
  id: number;
  title: string;
  image: string;
  imageAlt: string;
  links: FooterLink[];
}
const Footer: React.FC = () => {
  const footerSections: FooterSection[] = [
    {
      id: 1,
      title: "چای گلستان",
      image:  `${import.meta.env.BASE_URL}assets/footer-icon1.png`,
      imageAlt: "چای گلستان",
      links: [
        { id: 1, title: "چای ممتاز هندوستان", url: "#" },
        { id: 2, title: "چای ممتاز ارل گری", url: "#" },
        { id: 3, title: "چای سیلان عطری", url: "#" },
        { id: 4, title: "چای ممتاز سیلان", url: "#" },
        { id: 5, title: "چای صبحانه گلستان", url: "#" },
      ],
    },
    {
      id: 2,
      title: "تی بگ گلستان",
      image:  `${import.meta.env.BASE_URL}assets/footer-icon4.png`,
      imageAlt: "تی بگ گلستان",
      links: [
        { id: 1, title: "تی بگ بلک لاین", url: "#" },
        { id: 2, title: "تی بگ ارل گری", url: "#" },
        { id: 3, title: "دمنوش نعناع", url: "#" },
        { id: 4, title: "دمنوش بابونه", url: "#" },
        { id: 5, title: "دمنوش چای سبز", url: "#" },
      ],
    },
    {
      id: 3,
      title: "ادویه گلستان",
      image:  `${import.meta.env.BASE_URL}assets/footer-icon3.png`,
      imageAlt: "ادویه گلستان",
      links: [
        { id: 1, title: "زعفران ممتاز خراسان", url: "#" },
        { id: 2, title: "ادویه کاری", url: "#" },
        { id: 3, title: "ادویه ماست و خیار", url: "#" },
        { id: 4, title: "فلفل سیاه خالص", url: "#" },
        { id: 5, title: "زردچوبه ممتاز", url: "#" },
      ],
    },
    {
      id: 4,
      title: "حبوبات گلستان",
      image:  `${import.meta.env.BASE_URL}assets/footer-icon2.png`,
      imageAlt: "حبوبات گلستان",
      links: [
        { id: 1, title: "لوبیا قرمز ممتاز", url: "#" },
        { id: 2, title: "لوبیا چیتی گلستان", url: "#" },
        { id: 3, title: "عدس کانادایی", url: "#" },
        { id: 4, title: "نخود زودپز کرمانشاه", url: "#" },
        { id: 5, title: "لوبیا سفید گلستان", url: "#" },
      ],
    },
  ];
  return (
    <>
      <Social />

      <footer className="bg-[#2b2b2b]">
        <div className="mx-auto max-w-4xl px-6 py-14">
          <div className="grid grid-cols-1 gap-10 text-justify md:grid-cols-4">
            {footerSections.map((section) => (
              <div key={section.id} className="flex flex-col items-center">
                <img
                  src={section.image}
                  alt={section.imageAlt}
                  className="h-24 w-auto"
                />

                <div className="my-4 w-full border-t border-gray-500" />

                <h3 className="text-sm text-white">{section.title}</h3>

                <div className="my-4 w-full border-t border-gray-500" />

                <ul className="space-y-3 text-xs text-gray-300">
                  {section.links.map((link) => (
                    <li key={link.id}>
                      <a
                        href={link.url}
                        className="transition hover:text-white"
                      >
                        {link.title}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <FooterCopyright />
        </div>

        <BackToTop />
      </footer>
    </>
  );
};

export default Footer;
