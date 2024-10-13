import Link from "next/link";
import styles from "./home.module.css";
export default function Home() {
  return (
    <>
      <nav className={styles.navbar}>
        <a href="/projects">Projects</a>
        <Link href="/projects">Articles</Link>
        <a href="/projects">Contact</a>
        <a href="/projects">Github</a>
        <a href="/projects">CV</a>
      </nav>
    </>
  );
}
