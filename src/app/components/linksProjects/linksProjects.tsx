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
    return(
        <div className={styles.divProjects}>
            <div className={styles.Repo}>{iconsProject.map((data, key) => (
                <Link href={data.name == "Repositório" ? github : site} style={{display: 'flex'}} key={`icon-${key}`}>
                    <Image 
                    src={data.src} alt={`${data.name}'s icon`}
                    onMouseEnter={() => setInfo(data.name, setHover, hover, actualHover)}
                    onMouseLeave={() => setInfo(null, setHover, hover, actualHover)} 
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