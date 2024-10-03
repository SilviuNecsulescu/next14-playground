import Image from "next/image";
import HeaderNavigation from "../headerNavigation/HeaderNavigation";
import Search from "../search/Search";
import LanguageSwitcher from "../LanguageSwitcher";
import styles from "./header.module.scss";

export default function Header() {
  return (
    <header className={styles.headerContainer}>
      <HeaderNavigation />
      <div className={styles.logoContainer}>
        <Image src="/Logo.png" alt="Logo" width={100} height={100} />
      </div>
      <div>
        <LanguageSwitcher />
        <Search />
      </div>
    </header>
  );
}
