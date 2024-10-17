import NexAnime from "@images/NexAnime.png"
import JustWaifu from '@images/JustWaifu.png'
import Portfolio from '@images/Portfolio.png'
import ChatTcp from '@images/Chat_TCP.jpg'
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
        Github: 'https://github.com/Sileniz/Chapter_seek',
        Project: '#',
        projectName: "Chapter Seek",
        technologiesUsed: "Node.js | TypeScript | Cheerio | Telegraf",
        projectType: "BackEnd",
        imageSrc: ChatTcp,  
        projectDescription: "Chapter Seek é um serviço em Node.js desenvolvido com TypeScript que realiza web scraping no site da comick para monitorar novos capítulos. Quando um novo capítulo é detectado, o serviço envia notificações automáticas para um canal ou grupo no Telegram, utilizando a API do Telegram."
    },
    {   
        Github: 'https://github.com/Sileniz/DNS_Server',
        Project: '#',
        projectName: "DNS'Server",
        technologiesUsed: "Node.js | TypeScript | UDP Sockets",
        projectType: "BackEnd",
        imageSrc: ChatTcp,  
        projectDescription: "Este projeto é um servidor DNS simples que utiliza o protocolo UDP para resolver consultas DNS. O servidor é implementado em TypeScript."
    },
    {   
        Github: 'https://github.com/Sileniz/Chat_TCP',
        Project: '#',
        projectName: "ChatTCP",
        technologiesUsed: "Node.js | TypeScript | TCP Sockets | AES-256 Encryption",
        projectType: "BackEnd",
        imageSrc: ChatTcp,  
        projectDescription: "Servidor socket TCP simples desenvolvido com Node.js e TypeScript. Para interação em tempo real. Utiliza criptografia simétrica AES-256 para segurança dos dados."
    },
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
        Project: 'https://walisson.vercel.app/',
        projectName: "Portfolio Website",
        technologiesUsed: "Next.JS | TypeScript | CSS Modules",
        projectType: "FrontEnd",
        imageSrc: Portfolio,
        projectDescription: "Aplicação feita em Next.JS, com inuito de ser utilizado como um site portoflio para mostrar meus projetos, conhecimentos. Sendo atualizando e melhorado de acordo com minhas hablidades.   "
    }
];
export default projects;