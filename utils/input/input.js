import styles from './input.module.css'

export default function Input({ type, placeholder, name, value, onChange }) {
    return (
        <div className={ styles.inputField }>
            <h3 className={ styles.header }>{ name }</h3>
            <input type={ type } placeholder={ placeholder } name={ name } value={ value } onChange={ onChange } className={ styles.input } />

        </div>
    )
}