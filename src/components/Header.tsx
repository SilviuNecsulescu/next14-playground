import logo from "@/assets/logo.png";
import Image from "next/image";
import HeaderNavigation from "./HeaderNavigation";
import Search from "./Search";
import LanguageSwitcher from "./LanguageSwitcher";

export default function Header() {
  return (
    <header>
      <Image src={logo} alt="Logo" width={100} height={100} />
      <HeaderNavigation />
      <div>
        <LanguageSwitcher />
        <Search />
      </div>
    </header>
  );
}
