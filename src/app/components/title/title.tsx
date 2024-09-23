import styles from './title.module.css'
export default function Title(){
    return(
        <div className={styles.containerTitle}>
            <p className={styles.genericP}>Olá, me chamo</p>
            <h1 className={styles.title}>Walisson</h1>
            <p className={styles.role}>Desenvolvedor FullStack</p>
        </div>
    )
}