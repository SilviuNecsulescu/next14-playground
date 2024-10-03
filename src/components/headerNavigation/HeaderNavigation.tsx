"use client";

import { Link } from "@/i18n/routing";
import { headerNavLinks } from "@/utils/headerNavigationLinks";
import { usePathname } from "next/navigation";
import styles from "./headerNavigation.module.scss";

function HeaderNavigation() {
  const pathName = usePathname();

  return (
    <nav className={`${styles.nav} topBotomBordersOut`}>
      <ul>
        {headerNavLinks.map((navLink) => (
          <li key={navLink.id}>
            <Link
              href={navLink.href}
              className={`${pathName === navLink.href ? "activeNav" : ""}`}
            >
              {navLink.icon}
              {navLink?.label}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default HeaderNavigation;
