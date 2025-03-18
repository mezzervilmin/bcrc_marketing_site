import Link from "next/link";
import { MenuItems } from "./config";

export default function DesktopMenu({ items }: { items: MenuItems }) {
  return (
    <div className="navbar-center hidden lg:flex">
      <ul className="menu menu-horizontal px-1">
        {items.menu.map((item) => {
          return !item.children ? (
            <li key={item.title}>
              <Link href={item.link ?? "/"}>{item.title}</Link>
            </li>
          ) : (
            <li key={item.title}>
              <details>
                <summary>{item.title}</summary>
                <ul className="p-2">
                  {item.children.map((child) => {
                    return (
                      <li key={child.title}>
                        <Link href={child.link ?? "/"}>{child.title}</Link>
                      </li>
                    );
                  })}
                </ul>
              </details>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
