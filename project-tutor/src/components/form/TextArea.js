import styles from "./Input.module.css"

function TextArea({type, text, name, placeholder, handleOnChange, value}) {
    return (
        <div className={styles.form_control}>
            <label htmlFor={name}>{text}</label>
            <textarea type={text} name={name} id={name} placeholder={placeholder} onChange={handleOnChange} value={value}></textarea>
        </div>
    )
}

export default TextArea;