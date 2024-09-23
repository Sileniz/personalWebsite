import styles from "./page.module.css";
import MainSection from "./components/mainSection/mainSection";
import Project from "./components/project/project";
export default function Home() {
  return (
    <main className={styles.main}>
      <MainSection/>
      <Project />
    </main>
  );
}
