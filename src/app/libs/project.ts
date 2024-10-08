import NexAnime from "@images/NexAnime.png"
import JustWaifu from '@images/JustWaifu.png'
import Portfolio from '@images/Portfolio.png'
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
        Github: 'https://github.com/Sileniz/NexAnime',
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
        technologiesUsed: "React | JavaScript | CSS Modules",
        projectType: "FrontEnd",
        imageSrc: JustWaifu,
        projectDescription: "Aplicação feita em React.JS. Desenvolvida para amantes de animes e mangás, permite navegar entre várias imagens de animes e diferentes tags ao seu gosto, além de poder favoritar as imagens."
    },
    {   
        Github: 'https://github.com/Sileniz/personalWebsite',
        Project: 'https://just-waifu.vercel.app/',
        projectName: "Portfolio Website",
        technologiesUsed: "Next.JS | TypeScript | CSS Modules",
        projectType: "FrontEnd",
        imageSrc: Portfolio,
        projectDescription: "Aplicação feita em Next.JS, com inuito de ser utilizado como um site portoflio para mostrar meus projetos, conhecimentos. Sendo atualizando e melhorado de acordo com minhas hablidades.   "
    }
];
export default projects;