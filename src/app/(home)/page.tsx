import Link from "next/link";
import styles from "./home.module.css";
import Image from "next/image";
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
      <h1 className={styles.title}>
        Front-end developer crafting user-friendly, accessible, and engaging
        websites
      </h1>
      <section className={styles.logosbar}>
        <Image
          src="/images/html5-logo.svg"
          alt="html logo"
          width={74}
          height={74}
        />
        <Image
          src="/images/css-3-logo.svg"
          alt="css logo"
          width={73}
          height={73}
        />
        <Image
          src="/images/typescript-logo.svg"
          alt="type scrpit logo"
          width={73}
          height={74}
        />
        <Image
          src="/images/react-logo.svg"
          alt="react logo"
          width={74}
          height={74}
        />
        <Image
          src="/images/nextjs-logo.svg"
          alt="nextjs logo"
          width={63}
          height={65}
        />
      </section>
    </>
  );
}
