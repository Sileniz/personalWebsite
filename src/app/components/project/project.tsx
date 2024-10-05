import projects from "@/app/libs/project"
import Image from "next/image"
import styles from './project.module.css'
import LinkProjects from "../linksProjects/linksProjects"
import AboutProjects from "../aboutProjects/aboutProjects"

export default function Project() {
    return (
        <section>
            <article className={styles.containerProject}>
                {projects.map((item, index) => (
                    <div key={`project-${index}`} className={styles.Project}>
                        <div key={`image-${index}`}>
                            <Image src={item.imageSrc} alt={`Project image`} title={item.projectName} className={styles.projectImg} />   
                            <LinkProjects site={item.Project} github={item.Github} projectType={item.projectType}/>
                        </div>
                        <AboutProjects key={`about-${index}`} name={item.projectName} technologiesUsed={item.technologiesUsed} Description={item.projectDescription}/>
                    </div>
                ))}
            </article>
        </section>
    )
}