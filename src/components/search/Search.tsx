"use client";

import { useRouter } from "next/navigation";
import { FormEvent, useState } from "react";
import { MagnifyingGlassIcon } from "@heroicons/react/24/solid";
import styles from "./search.module.scss";
import { useTranslations } from "next-intl";
import { useLocale } from "use-intl";

export default function Search() {
  const t = useTranslations("SearchInput");
  const router = useRouter();
  const localActive = useLocale();
  const [name, setName] = useState("");
  const handleOnSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    router.push(`/${localActive}/search?name=${name}`);
  };
  return (
    <form onSubmit={(e) => handleOnSubmit(e)}>
      <div className={styles.searchContainer}>
        <input
          placeholder={t("searchPlaceHolder")}
          type="text"
          onChange={(e) => setName(e.target.value)}
        />
        <button className={styles.searchButton}>
          <MagnifyingGlassIcon />
        </button>
      </div>
    </form>
  );
}
