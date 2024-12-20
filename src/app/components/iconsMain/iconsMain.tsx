'use client'
import styles from './iconsMain.module.css'
import { useState, useRef } from 'react'
import Image from 'next/image'
import { icons } from '@/app/libs/icons'
import { setInfo } from '@/app/libs/setInfo'
import Link from 'next/link'

export default function Icons(){
    const [hover, setHover] = useState<boolean>(false)
    const actualHover = useRef<string | null>(null)
    const info = (data: string | null) => setInfo(data, setHover, hover, actualHover)
    
    return(
        <div className={styles.mainContainer}>
            <div className={styles.containerImage}>{icons.map((item, key) => (
                <Link href={item.href} key={key} target='_blank' rel='noopener nofollow noreferrer'>
                    <Image src={item.src} 
                    alt={`${item.name}'s image`} title={`${item.name}'s icon`}
                    onMouseEnter={() => info(item.name)}
                    onMouseLeave={() => info(null)}
                    className={styles.icon} 
                    key={key}/>
                </Link>
            ))}</div>
            <hr className={styles.horizontal}/>
            {hover ? 
            <p className={styles.genericP}>{actualHover.current}</p> : 
            <Link 
            href="https://wa.me/5588993683011?text=Oi" 
            target='_blank'
            rel='noopener noreferrer'
            className={styles.genericP} 
            title='Link para whatsapp   '>Entre em contato</Link>}
        </div>
    )
}