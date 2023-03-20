import { useEffect, useState } from "react";
import styles from "../styles/Home.module.css";
import { useImageCapture } from "../utils/useImageCapture";

export default function Home() {
  const [blob, setBlob] = useState();
  const { takePhoto } = useImageCapture();

  useEffect(() => {
    console.log("🚀 ~ file: index.tsx:7 ~ Home ~ blob:", blob);
  }, [blob]);

  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <button
          onClick={async () => {
            const blob = await takePhoto();
            setBlob(blob);
          }}
        >
          click me
        </button>
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
