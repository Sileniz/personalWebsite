import github from '@svg/github.svg';
import linkedin from '@svg/linkedin.svg';
import resume from '@svg/resume.svg';
import globe from '@svg/globe.svg'
import javascript from '@svg/javascript.svg'
import typescript from '@svg/typescript.svg'
import docker from '@svg/docker.svg'
import git from '@svg/git.svg'
import express from '@svg/express.svg'
import node from '@svg/nodejs.svg'
import jwt from '@svg/jwt.svg'
import html from '@svg/html.svg'
import css from '@svg/css.svg'
import react from '@svg/react.svg'
import next from '@svg/next.svg'
import postgres from '@svg/postgres.svg'


interface Icon {
    name: string;
    src: string;
    href: string,
}

interface IconProject {
    name: string;
    src: string;
}

export const icons: Icon[] = [
    { name: "Github", src: github, href: "https://github.com/Sileniz" },
    { name: "LinkedIn", src: linkedin, href: "https://www.linkedin.com/in/walisson-da-silva-b71925297/" },
    { name: "Resume", src: resume, href: "#" },
];

export const iconsProject: IconProject[] = [
    { name: "Globe", src: globe},
    { name: "Repositório", src: github},
];

export const langIcon: IconProject[] = [
    { name: "HTML", src: html },
    { name: "CSS", src: css },
    { name: "JavaScript", src: javascript },
    { name: "TypeScript", src: typescript },
    { name: "Docker", src: docker },
    { name: "Git", src: git },
    { name: "Express", src: express },
    { name: "Node.js", src: node },
    { name: "JWT", src: jwt },
    { name: "React", src: react },
    { name: "Next.js", src: next },
    { name: "PostgreSQL", src: postgres },
];