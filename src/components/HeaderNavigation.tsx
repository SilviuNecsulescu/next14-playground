"use client";

import Link from "next/link";
import { headerNavLinks } from "@/utils/headerNavigationLinks";
import { usePathname } from "next/navigation";

function HeaderNavigation() {
  const pathName = usePathname();

  return (
    <nav className="">
      <ul className="">
        {headerNavLinks.map((navLink) => (
          <li key={navLink.id}>
            <Link
              href={navLink.href}
              className={` ${pathName === navLink.href ? "activeNav" : ""} `}
            >
              <div className="">{navLink.icon}</div>
              {navLink?.label}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default HeaderNavigation;
