'use client'
import Link from "next/link"
import styles from './nav.module.css'
import data from '@json/header.json'
export default function NavBar(){
    return(
        <nav className={styles.navbar}>
            <ul className={styles.ulNavBar}>
                {data.map((item, key) => (
                    <li key={key} className={styles.ulLi}>
                    <Link
                    href={item.url}
                    target={item.url.includes('https') ? '_blank' : ''}
                    rel='noopener noreferrer'
                    className={styles.ulLinks}>{item.name}
                    </Link><hr className={styles.hr}/>
                    </li>
                ))}
            </ul>
        </nav>
    )
}