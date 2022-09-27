import { useState } from 'react';
import Input from '../../utils/input/input'
import styles from './form.module.css'

export default function Form({ id }) {

    const [credentials, setCredentials] = useState({
        email: "",
        ad: "",
        soyad: "",
    })

    const handleValue = (e) => {
        setCredentials({
            ...credentials,
            [e.target.name]: e.target.value
        })
    }

    const handleClick = () => {

    }


    return (
        <div className={ styles.formContainer } id={ id }>
            <h2 className={ styles.header }>Erken Kaydol</h2>
            <Input
                type="mail"
                placeholder="Mail adresin..."
                name="email"
                value={ credentials.email }
                onChange={ (e) => { handleValue(e) } }
            />
            <Input
                type="ad"
                placeholder="Opsiyonel"
                name="ad"
                value={ credentials.ad }
                onChange={ (e) => { handleValue(e) } }
            />
            <Input
                type="text"
                placeholder="Opsiyonel"
                name="soyad"
                value={ credentials.soyad }
                onChange={ (e) => { handleValue(e) } }
            />

            <button className={ styles.preRegister } onClick={ () => {
                handleClick()
            } }>Erken Kaydol</button>
        </div>
    )
}