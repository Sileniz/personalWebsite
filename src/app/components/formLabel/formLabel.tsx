import styles from '../form/form.module.css'

interface FormLabel{
    htmlFor: string
    textarea: boolean
    type: string
    label: string
}
export default function FormLabel({htmlFor, type, label, textarea,}: FormLabel){
    return(
        <div className={styles.containerLabel}>
            <label htmlFor={htmlFor} className={styles.label}>{label}</label>
            {textarea ? <textarea name={htmlFor} className={styles.textArea}></textarea> : <input type={type} className={styles.input} name={htmlFor}/> }
        </div>
    )
}