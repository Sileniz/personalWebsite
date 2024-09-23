export const setInfo = (
    item: string | null, 
    setHover: any, 
    hover: boolean, 
    actualHover: { current: string | null }
): void => {
    if(hover || !item || item == null){
        setHover(false)
        actualHover.current = null
        return;
    }
    setHover(true)
    if(item === 'Globe'){
        actualHover.current = "Veja o site do projeto"
    }
    if(item === "Repositório"){
        actualHover.current = "Veja o repósitorio do projeto"
    }
    if(item === 'Github'){
        actualHover.current = "Veja meus projetos no Github"
    }if(item === 'LinkedIn'){
        actualHover.current = "Veja perfil no Linkedin"
    }if(item === 'Resume'){
        actualHover.current = "Veja meu curriculo completo"
    }
}