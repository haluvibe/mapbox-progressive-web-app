import styles from "../styles/Home.module.css";

import dynamic from "next/dynamic";

const Camera = dynamic(() => import("../components/Camera"), {
  ssr: false,
});

export default function Home() {
  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <Camera />
      </main>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{" "}
          <img src="/vercel.svg" alt="Vercel Logo" className={styles.logo} />
        </a>
      </footer>
    </div>
  );
}
