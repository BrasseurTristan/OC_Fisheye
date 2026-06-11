import Image from "next/image";
import styles from "./page.module.css";
import Banner from "./components/Banner/Banner";

export default function Home() {
  return (
    <div className={styles.page}>
      <Banner homepage={true}/>
      <main className={styles.main}>
 
      </main>
    </div>
  );
}
