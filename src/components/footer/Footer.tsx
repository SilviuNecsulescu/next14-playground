import styles from "./footer.module.scss";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      Silviu`s NextJs playground - {new Date().getFullYear()}
    </footer>
  );
}
