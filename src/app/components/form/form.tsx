'use client'
import styles from './form.module.css'
import FormLabel from '../formLabel/formLabel'

export default function Form(){
    return(
        <section className={styles.sectionForm}>
            <form className={styles.form}>
                <FormLabel htmlFor='name' type='text' label='Seu nome' textarea={false}/>
                <FormLabel htmlFor='subject' type='text' label='Assunto' textarea={false}/>
                <FormLabel htmlFor='email' type='email' label='Seu email de contato' textarea={false}/>
                <FormLabel htmlFor='content' type='email' label='Mensagem' textarea={true}/>
                <button className={styles.button} type='submit'>Enviar mensagem</button>
            </form>
        </section>
    )
}