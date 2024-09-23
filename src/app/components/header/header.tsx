import NavBar from "../nav/nav"
import styles from './header.module.css'
export default function Header(){
    return(
        <header className={styles.header}>
            <div className={styles.containerHeader}>
                <h1 className={styles.title}>&lt; Walisson.dev /&gt;</h1>
                <NavBar />
            </div>
        </header>
    )
}