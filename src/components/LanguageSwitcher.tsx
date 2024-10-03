"use client";

import { useRouter } from "next/navigation";
import { ChangeEvent } from "react";
import { useLocale } from "use-intl";

export default function LanguageSwitcher() {
  const router = useRouter();
  const handleEventChange = (e: ChangeEvent<HTMLSelectElement>) => {
    const nextLocale = e.target.value;
    router.replace(`/${nextLocale}`);
  };
  const localActive = useLocale();
  return (
    <select defaultValue={localActive} onChange={handleEventChange}>
      <option value="en">en</option>
      <option value="ro">ro</option>
    </select>
  );
}
