import { ChevronDown } from "./ChevronDown";
import type { MenuItemType } from "./menuData";
import React from "react";

type Props = {
  item: MenuItemType;
};

export const MobileMenuItem: React.FC<Props> = ({ item }) => {
  if (!item.children) {
    return (
      <li>
        <a href={item.href ?? "#"}>{item.label}</a>
      </li>
    );
  }

  return (
    <li>
      <details>
        <summary>{item.label}</summary>
        <ul>
          {item.children.map((child) => (
            <li key={child.label}>
              <a href={child.href ?? "#"}>{child.label}</a>
            </li>
          ))}
        </ul>
      </details>
    </li>
  );
};
