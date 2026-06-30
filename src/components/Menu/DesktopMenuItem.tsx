import type { MenuItemType } from "./menuData";
import { ChevronDown } from "./ChevronDown";
import React from "react";

type Props = {
  item: MenuItemType;
};

export const DesktopMenuItem: React.FC<Props> = ({ item }) => {
  if (!item.children) {
    return (
      <li className="px-4 hover:text-white cursor-pointer">
        <a href={item.href ?? "#"}>{item.label}</a>
      </li>
    );
  }

  return (
    <li className="dropdown dropdown-hover px-4">
      <label className="flex items-center gap-1 cursor-pointer hover:text-white">
        {item.label}
        <ChevronDown />
      </label>

      <ul className="dropdown-content menu bg-white text-gray-700 rounded-none w-48 p-2 shadow-lg mt-2">
        {item.children.map((child) => (
          <li key={child.label}>
            <a href={child.href ?? "#"}>{child.label}</a>
          </li>
        ))}
      </ul>
    </li>
  );
};
