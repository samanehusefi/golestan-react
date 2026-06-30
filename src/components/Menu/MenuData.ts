export interface MenuItemType {
  id: string;
  label: string;
  href?: string;
  children?: MenuItemType[];
}

export const menuData: MenuItemType[] = [
  { id: "home", label: "صفحه اصلی", href: "/" },

  {
    id: "golestan",
    label: "شرکت گلستان",
    children: [
      { id: "about-company", label: "معرفی شرکت" },
      { id: "history", label: "تاریخچه" },
    ],
  },

  {
    id: "products",
    label: "محصولات",
    children: [
      { id: "tea", label: "چای" },
      { id: "rice", label: "برنج" },
      { id: "spices", label: "ادویه" },
    ],
  },

  { id: "blog", label: "وبلاگ" },
  { id: "lottery", label: "قرعه کشی" },
  { id: "jobs", label: "استخدام" },

  {
    id: "contact",
    label: "تماس با ما",
    children: [
      { id: "head-office", label: "دفتر مرکزی" },
      { id: "consumer-voice", label: "صدای مصرف‌کنندگان" },
      { id: "subscribers", label: "ارتباط با مشترکین" },
    ],
  },
];
