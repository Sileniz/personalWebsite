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

    return(
        <div className={styles.mainContainer}>
            <div className={styles.containerImage}>{icons.map((item, key) => (
                <Image src={item.src} 
                alt={`${item.name}'s image`} title={`${item.name}'s icon`}
                onMouseEnter={(): void => setInfo(item.name, setHover, hover, actualHover)}
                onMouseLeave={(): void => setInfo(null, setHover, hover, actualHover)}
                className={styles.icon} 
                key={key}/>
            ))}</div>
            <hr className={styles.horizontal}/>
            {hover ? 
            <p className={styles.genericP}>{actualHover.current}</p> : 
            <Link 
            href="#" 
            className={styles.genericP} 
            title='Link para formulário'>Entre em contato</Link>}
        </div>
    )
}