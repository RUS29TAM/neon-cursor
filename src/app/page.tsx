import Image from "next/image";
import styles from "./page.module.css";
import Page from "@/app/pages/neon/page";
import Link from "next/link";

export default function Home() {
  return (
    <main className={styles.main}>
        <Link className={styles.link} href={'/pages/neon'}>click me</Link>
    </main>
  );
}
