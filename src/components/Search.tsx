"use client";

import { useRouter } from "next/navigation";
import { FormEvent, useState } from "react";

export default function Search() {
  const router = useRouter();
  const [name, setName] = useState("");
  const handleOnSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    router.push(`/search?name=${name}`);
  };
  return (
    <form onSubmit={(e) => handleOnSubmit(e)}>
      <input
        placeholder="Enter your name"
        type="text"
        onChange={(e) => setName(e.target.value)}
      />
      <button>Search</button>
    </form>
  );
}
