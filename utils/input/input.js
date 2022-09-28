import styles from './input.module.css'

export default function Input({ type, placeholder, name, value, onChange, isNull, id }) {
    return (
        <div className={ styles.inputField } style={ isNull ? { margin: "calc(-1rem - 1px) 0" } : {} } id={ id }>
            <h3 className={ styles.header }>{ name }</h3>
            <input type={ type } placeholder={ placeholder } name={ name } value={ value } style={ isNull ? { background: "#fbabab", borderColor: "red", color: "red" } : {} } onChange={ onChange } className={ styles.input } />
            <div className={ styles.error } style={ isNull ? { display: "block" } : { display: "none" } }>
                <p className={ styles.errorText }>*Bu alan boş bırakılamaz</p>
            </div>
        </div>
    )
}