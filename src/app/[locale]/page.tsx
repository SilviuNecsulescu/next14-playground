import styles from "./page.module.scss";
import { useTranslations } from "next-intl";
import { routing } from "@/i18n/routing";
import { unstable_setRequestLocale } from "next-intl/server";

//force this to be SSG even though it's inside the [locale] dynamic route
export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export default function Home({
  params: { locale },
}: {
  params: { locale: string };
}) {
  unstable_setRequestLocale(locale);
  const t = useTranslations("HomePage");
  return (
    <>
      <h1 className={styles.h1}>{t("title")}</h1>
      <p>
        Due to the i18n new app routing issue that makes all componets inside
        dynamic, had to use generateStaticParams and unstable_setRequestLocale
        in order to make this SSG
      </p>
    </>
  );
}
