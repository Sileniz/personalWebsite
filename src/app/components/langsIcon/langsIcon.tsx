import { langIcon } from "@/app/libs/icons"
import Image from "next/image"
import styles from './langsIcon.module.css'
export default function LangsIcon(){
    return(
        <section className={styles.section}>
            <article className={styles.article} id="langsID">
            {langIcon.map((item, key) => (
                <div key={key} className={styles.containerImage}>
                    <Image className={styles.image} src={item.src} id={item.name} key={key} width={100} alt={`${item.name}'s icon`} />
                    <p key={key} className={styles.langName}>{item.name}</p>
                </div>
            ))}
            </article>
        </section>
    )
}