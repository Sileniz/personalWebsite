import NexAnime from "@images/NexAnime.png"
import JustWaifu from '@images/JustWaifu.png'
import { StaticImageData } from "next/image";

interface Project {
    projectName: string;
    imageSrc: StaticImageData;
    projectDescription: string,
    technologiesUsed: string,
    projectType: string,
    Project: string
    Github: string
}

const projects: Project[] = [
    {   
        Github: '#',
        Project: 'https://nex-anime.vercel.app/',
        projectName: "NexAnime",
        technologiesUsed: "Next.JS | TypeScript | CSS Modules",
        projectType: "FrontEnd",
        imageSrc: NexAnime,
        projectDescription: "Aplicação feita em Next.JS. Desenvolvida para acompanhar as temporadas de animes de maneira simples."
    },
    {   
        Github: 'https://github.com/Sileniz/just-waifu/',
        Project: 'https://just-waifu.vercel.app/',
        projectName: "Just Waifu",
        technologiesUsed: "React | Javascript | CSS Modules",
        projectType: "FrontEnd",
        imageSrc: JustWaifu,
        projectDescription: "Aplicação feita em React.JS. Desenvolvida para amantes de animes e mangás, permite navegar entre várias imagens de animes e diferentes tags ao seu gosto, além de poder favoritar as imagens."
    }
];
export default projects;