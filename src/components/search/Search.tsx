"use client";

import { useRouter } from "next/navigation";
import { FormEvent, useState } from "react";
import { MagnifyingGlassIcon } from "@heroicons/react/24/solid";
import styles from "./search.module.scss";

export default function Search() {
  const router = useRouter();
  const [name, setName] = useState("");
  const handleOnSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    router.push(`/search?name=${name}`);
  };
  return (
    <form onSubmit={(e) => handleOnSubmit(e)}>
      <div className={styles.searchContainer}>
        <input
          placeholder="Enter your name"
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
