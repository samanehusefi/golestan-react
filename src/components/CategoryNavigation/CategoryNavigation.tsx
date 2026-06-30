import type React from "react";
interface NavigationItem {
  id: number;
  title: string;
  url: string;
}
const CategoryNavigation: React.FC = () => {
  const navigationItems: NavigationItem[] = [
    {
      id: 1,
      title: "سرمایه انسانی",
      url: "#",
    },
    {
      id: 2,
      title: "مراکز فروش",
      url: "#",
    },
    {
      id: 3,
      title: "محصولات گلستان",
      url: "#",
    },
    {
      id: 4,
      title: "مشتریان گلستان",
      url: "#",
    },
  ];
  return (
    <section className="hidden lg:block lg:bg-white lg:py-16">
      <div className="mx-auto max-w-5xl px-6">
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {navigationItems.map((item) => (
            <a
              key={item.id}
              href={item.url}
              className="group flex flex-col items-center border-b border-gray-300 pb-5 transition"
            >
              <h3 className="text-sm text-[#7a7a7a] transition group-hover:text-red-600">
                {item.title}
              </h3>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CategoryNavigation;
