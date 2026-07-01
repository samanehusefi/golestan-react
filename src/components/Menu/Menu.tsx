import React, { useState } from "react";
import { menuData } from "./MenuData";
import { DesktopMenuItem } from "./DesktopMenuItem";
import { MobileMenuItem } from "./MobileMenuItem";
import MenuSvg from "./MenuSvg";
import Logo from "../Logo/Logo";

const Menu: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="bg-[#272727] h-22 fixed w-full max-w-[1660px] mx-auto z-[999]">
      <div className="max-w-7xl mx-auto h-full flex flex-row-reverse lg:flex-row items-center justify-between lg:justify-center px-4">
        {/* Logo */}
        <a href="/" className="shrink-0">
          <Logo />
        </a>
        {/* Desktop Menu */}
        <ul className="hidden lg:flex items-center text-gray-300 text-xs">
          {menuData.map((item, index) => (
            <div key={item.id} className="flex items-center">
              <DesktopMenuItem item={item} />

              {index !== menuData.length - 1 && (
                <span className="text-gray-600 mx-2">|</span>
              )}
            </div>
          ))}
        </ul>

        {/* Mobile Button */}
        <button
          onClick={() => setMobileMenuOpen(true)}
          className="lg:hidden btn btn-ghost btn-circle text-white"
        >
          <MenuSvg />
        </button>
        <div
          onClick={() => setMobileMenuOpen(false)}
          className={`fixed inset-0 bg-black/50 z-40 lg:hidden transition-opacity duration-300 ${
            mobileMenuOpen ? "opacity-100 visible" : "opacity-0 invisible"
          }`}
        />

        <div
          className={`fixed top-0 right-0 h-screen w-80 bg-[#494343] z-50 transform transition-transform duration-300 lg:hidden ${
            mobileMenuOpen ? "translate-x-0" : "translate-x-full"
          }`}
        >
          <div className="flex flex-row items-center justify-between p-4 border-b border-gray-200">
            <Logo />

            <button
              onClick={() => setMobileMenuOpen(false)}
              className="text-white text-2xl"
            >
              ✕
            </button>
          </div>
          <div className="max-h-[80vh] overflow-y-auto">
            <ul className="menu p-3 text-gray-300 ">
              {menuData.map((item) => (
                <MobileMenuItem key={item.id} item={item} />
              ))}
            </ul>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Menu;
