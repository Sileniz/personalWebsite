import Image from "next/image"
import profile from '@images/01.jpg'
import styles from './profile.module.css'
export default function Profile(){
    return(
        <div className={styles.containerProfile}>
            <Image className={styles.profile}src={profile} alt="profile" />
            <div className={styles.rotateDiv}></div>
        </div>
    )
}