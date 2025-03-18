import Link from "next/link";
import { MenuItems } from "./config";

export default function MobileMenu({ items }: { items: MenuItems }) {
  return (
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          {" "}
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M4 6h16M4 12h8m-8 6h16"
          />{" "}
        </svg>
      </div>
      <ul
        tabIndex={0}
        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
      >
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
