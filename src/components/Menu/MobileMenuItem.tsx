import type { MenuItemType } from "./MenuData";
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
        <summary className="active:bg-transparent active:text-inherit focus:bg-transparent focus:text-inherit">
          {item.label}
        </summary>
        <ul>
          {item.children.map((child) => (
            <li key={child.label}>
              <a
                className="active:bg-transparent active:text-inherit focus:bg-transparent focus:text-inherit"
                href={child.href ?? "#"}
              >
                {child.label}
              </a>
            </li>
          ))}
        </ul>
      </details>
    </li>
  );
};
