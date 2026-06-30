import React, { useState } from "react";

const ChevronDown = () => (
  <svg
    className="h-3 w-3"
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 320 512"
    fill="currentColor"
  >
    <path d="M31.3 192h257.3c28.4 0 42.8 34.5 22.6 54.6L182.6 375.3c-12.5 12.5-32.8 12.5-45.3 0L8.7 246.6C-11.5 226.5 2.8 192 31.3 192z" />
  </svg>
);

const Menu: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="bg-[#272727] h-22">
      <div
        className="max-w-7xl mx-auto h-full flex flex-row-reverse lg:flex-row items-center 
      justify-between lg:justify-center px-4"
      >
        <a href="/" className="shrink-0">
          <img
            src="https://www.golestan.com/wp-content/uploads/2023/01/logo-golestan-web-1.webp"
            alt="Golestan"
            className="w-28 ml-5"
          />
        </a>

        <ul className="hidden lg:flex items-center text-gray-300 text-xs">
          <li className="px-6 hover:text-white cursor-pointer">
            <a>صفحه اصلی</a>
          </li>

          <span className="text-gray-600">|</span>

          <li className="dropdown dropdown-hover px-4">
            <label
              tabIndex={0}
              className="flex items-center gap-1 cursor-pointer hover:text-white"
            >
              شرکت گلستان
              <ChevronDown />
            </label>

            <ul
              tabIndex={0}
              className="dropdown-content menu bg-white text-gray-700 rounded-none w-48 p-2 shadow-lg mt-2"
            >
              <li>
                <a>معرفی شرکت</a>
              </li>
              <li>
                <a>تاریخچه</a>
              </li>
            </ul>
          </li>

          <span className="text-gray-600">|</span>

          <li className="dropdown dropdown-hover px-4">
            <label
              tabIndex={0}
              className="flex items-center gap-1 cursor-pointer hover:text-white"
            >
              محصولات
              <ChevronDown />
            </label>

            <ul
              tabIndex={0}
              className="dropdown-content menu bg-white text-gray-700 rounded-none w-48 p-2 shadow-lg mt-2"
            >
              <li>
                <a>چای</a>
              </li>
              <li>
                <a>برنج</a>
              </li>
              <li>
                <a>ادویه</a>
              </li>
            </ul>
          </li>

          <span className="text-gray-600">|</span>

          <li className="px-4 hover:text-white cursor-pointer">
            <a>وبلاگ</a>
          </li>

          <span className="text-gray-600">|</span>

          <li className="px-4 hover:text-white cursor-pointer">
            <a>قرعه کشی</a>
          </li>

          <span className="text-gray-600">|</span>

          <li className="px-4 hover:text-white cursor-pointer">
            <a>استخدام</a>
          </li>

          <span className="text-gray-600">|</span>

          <li className="dropdown dropdown-hover px-4">
            <label
              tabIndex={0}
              className="flex items-center gap-1 cursor-pointer hover:text-white"
            >
              تماس با ما
              <ChevronDown />
            </label>

            <ul
              tabIndex={0}
              className="dropdown-content menu bg-white text-gray-700 rounded-none w-52 p-2 shadow-lg mt-2"
            >
              <li>
                <a>دفتر مرکزی</a>
              </li>
              <li>
                <a>صدای مصرف‌کنندگان</a>
              </li>
              <li>
                <a>ارتباط با مشترکین</a>
              </li>
            </ul>
          </li>
        </ul>

        <button
          onClick={() => setMobileMenuOpen(true)}
          className="lg:hidden btn btn-ghost btn-circle text-white"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-7 w-7"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>

        {/* Overlay */}
        <div
          onClick={() => setMobileMenuOpen(false)}
          className={`fixed inset-0 bg-black/50 z-40 lg:hidden transition-opacity duration-300 ${
            mobileMenuOpen ? "opacity-100 visible" : "opacity-0 invisible"
          }`}
        />

        {/* Mobile Drawer */}
        <div
          className={`fixed top-0 right-0 h-screen w-72 bg-[#222] z-50 transform transition-transform duration-300 lg:hidden ${
            mobileMenuOpen ? "translate-x-0" : "translate-x-full"
          }`}
        >
          <div className="flex items-center justify-between p-4 border-b border-gray-700">
            <img
              src="https://www.golestan.com/wp-content/uploads/2023/01/logo-golestan-web-1.webp"
              alt="Golestan"
              className="w-28"
            />

            <button
              onClick={() => setMobileMenuOpen(false)}
              className="text-white text-2xl"
            >
              ✕
            </button>
          </div>

          <ul className="menu p-4 text-gray-300">
            <li>
              <a>صفحه اصلی</a>
            </li>

            <li>
              <details>
                <summary>شرکت گلستان</summary>
                <ul>
                  <li>
                    <a>معرفی شرکت</a>
                  </li>
                  <li>
                    <a>تاریخچه</a>
                  </li>
                </ul>
              </details>
            </li>

            <li>
              <details>
                <summary>محصولات</summary>
                <ul>
                  <li>
                    <a>چای</a>
                  </li>
                  <li>
                    <a>برنج</a>
                  </li>
                  <li>
                    <a>ادویه</a>
                  </li>
                </ul>
              </details>
            </li>

            <li>
              <a>وبلاگ</a>
            </li>

            <li>
              <a>قرعه کشی</a>
            </li>

            <li>
              <a>استخدام</a>
            </li>

            <li>
              <details>
                <summary>تماس با ما</summary>
                <ul>
                  <li>
                    <a>دفتر مرکزی</a>
                  </li>
                  <li>
                    <a>صدای مصرف‌کنندگان</a>
                  </li>
                  <li>
                    <a>ارتباط با مشترکین</a>
                  </li>
                </ul>
              </details>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
};

export default Menu;
