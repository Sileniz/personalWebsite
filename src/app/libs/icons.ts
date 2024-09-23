import github from '@svg/github.svg';
import linkedin from '@svg/linkedin.svg';
import resume from '@svg/resume.svg';
import globe from '@svg/globe.svg'

interface Icon {
    name: string;
    src: string;
}

interface IconProject {
    name: string;
    src: string;
}

export const icons: Icon[] = [
    { name: "Github", src: github },
    { name: "LinkedIn", src: linkedin },
    { name: "Resume", src: resume },
];

export const iconsProject: IconProject[] = [
    { name: "Globe", src: globe},
    { name: "Repositório", src: github},
];
