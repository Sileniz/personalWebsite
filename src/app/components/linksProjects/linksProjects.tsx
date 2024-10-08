'use client'
import Image from "next/image"
import Link from "next/link"
import styles from "./linksProjects.module.css"
import { iconsProject } from "@/app/libs/icons"
import { setInfo } from "@/app/libs/setInfo"
import { useState, useRef } from "react"

interface linksProjects {
    site: string,
    projectType: string,
    github: string
}

export default function linksProjects({site, projectType, github}: linksProjects){
    const [hover, setHover] = useState<boolean>(false)
    const actualHover = useRef<string | null>(null)
    const info = (data: string | null) => setInfo(data, setHover, hover, actualHover)
    return(
        <div className={styles.divProjects} id="projectID">
            <div className={styles.Repo}>{iconsProject.map((data, key) => (
                <Link href={data.name == "Repositório" ? github : site} style={{display: 'flex'}} key={`icon-${key}`} target="_blank">
                    <Image 
                    src={data.src} alt={`${data.name}'s icon`}
                    onMouseEnter={() => info(data.name)}
                    onMouseLeave={() => info(null)} 
                    className={styles.iconProject}                          
                    /></Link>
                    ))}
                    <hr className={styles.horizontal}/>
                    {hover && <p className={styles.genericP}>{actualHover.current}</p>}
                    </div>
        <div className={styles.back}>{projectType}</div>
        </div>
    )
}