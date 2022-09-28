import { useState } from 'react';
import Input from '../../utils/input/input'
import styles from './form.module.css'
import axios from 'axios'


export default function Form({ id }) {


    const [isClicked, setIsClicked] = useState(false)

    const [isNull, setIsNull] = useState({
        email: false,
        soyad: false,
        ad: false,
    })

    const [credentials, setCredentials] = useState({
        email: "",
        ad: "",
        soyad: "",
    })

    const handleValue = (e) => {
        let style = document.getElementById(e.target.name).style
        if (e.target.value !== "") {
            style.setProperty("--placeholder-color", "#BDBDBD")
            setIsNull({ ...isNull, [e.target.name]: false })
        }
        else {
            if (isClicked == true) {
                setIsNull({ ...isNull, [e.target.name]: true })
                style.setProperty("--placeholder-color", "#ec9090")
            }
        }

        setCredentials({
            ...credentials,
            [e.target.name]: e.target.value
        })
    }

    const handleClick = () => {
        setIsClicked(true);
        if (credentials.email === "" || credentials.ad === "" || credentials.soyad === "") {


            setIsNull({
                ...isNull,
                email: credentials.email === "" ? true : false,
                soyad: credentials.soyad === "" ? true : false,
                ad: credentials.ad === "" ? true : false,
            })
            console.log(isNull)
            document.getElementById("email").style.setProperty("--placeholder-color", credentials.email ? "#BDBDBD" : "#ec9090")
            document.getElementById("ad").style.setProperty("--placeholder-color", credentials.ad ? "#BDBDBD" : "#ec9090")
            document.getElementById("soyad").style.setProperty("--placeholder-color", credentials.soyad ? "#BDBDBD" : "#ec9090")

        } else {
            setIsNull({
                ...isNull,
                email: false,
                soyad: false,
                ad: false,
            })
            axios({
                method: 'GET',
                url: `https://script.google.com/macros/s/AKfycby2Vo_dLoOQ4VqK7AhqGjeZ92-q4tAXAwGnkwxOvb_Melv0RD10/exec?email=${credentials.email}&ad=${credentials.ad}&soyad=${credentials.soyad}`,
            })
                .then(res => console.log(res));
        }

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
                isNull={ isNull.email }
                id="email"
            />
            <Input
                type="text"
                placeholder="Adınız..."
                name="ad"
                value={ credentials.ad }
                onChange={ (e) => { handleValue(e) } }
                isNull={ isNull.ad }
                id="ad"
            />
            <Input
                type="text"
                placeholder="Soyadınız..."
                name="soyad"
                value={ credentials.soyad }
                onChange={ (e) => { handleValue(e) } }
                isNull={ isNull.soyad }
                id="soyad"
            />

            <button className={ styles.preRegister } onClick={ () => {
                handleClick()
            } }>Erken Kaydol</button>
        </div>
    )
}