import type { MenuItemType } from "./MenuData";
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
    <li className="relative group px-4 py-4">
      <label className="flex items-center gap-1 cursor-pointer group-hover:text-white">
        {item.label}
        <ChevronDown />
      </label>

      <ul className="absolute right-0 top-full hidden group-hover:block bg-white text-gray-700 w-48 p-2 shadow-lg">
        {item.children.map((child) => (
          <li
            key={child.label}
            className="px-3 py-2 border-b border-gray-200 last:border-b-0 hover:bg-gray-100"
          >
            <a href={child.href ?? "#"}>{child.label}</a>
          </li>
        ))}
      </ul>
    </li>
  );
};
