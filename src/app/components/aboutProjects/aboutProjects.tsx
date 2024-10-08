import styles from './aboutProjects.module.css'
interface aboutProjects{
    name: string
    technologiesUsed: string,
    Description: string
}
export default function AboutProjects({name, technologiesUsed, Description}: aboutProjects){
    return(
        <div className={styles.containerAbout}>
                <h1 className={styles.projectName}>{name}</h1>
                <hr className={styles.horizontalStack}/>
                <p className={styles.aboutP}>{technologiesUsed}</p>
                <p>{Description}</p>
        </div>
    )
}