import styles from "./page.module.css";
import Link from "next/link";

export default function Home() {
  return (
    <main className={styles.main}>
        <Link className={styles.link} href={'/pages/timeline'}>click me</Link>
    </main>
  );
}
