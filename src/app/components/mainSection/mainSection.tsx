import styles from './mainSection.module.css'
import Icons from '../iconsMain/iconsMain'
import Title from '../title/title'
import Profile from '../profile/profile'
export default function MainSection(){
    return(
        <section className={styles.mainSection}>
            <article className={styles.articleTitle}>
                <hr className={styles.horizontal}/>
                <div className={styles.DivTitle}>
                    <Title/>
                    <Icons/>
                </div>
            </article>
            <article>
                <Profile/>
            </article>
        </section>
    )
}