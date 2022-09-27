import styles from './listCard.module.css'

export default function ListCard({ title, details }) {
    return (
        <div className={ styles.listCard }>
            <h4 className={ styles.cardTitle }>{ title }</h4>
            <div className={ styles.cardList }>{ details.map((detail, index) => {
                return <li key={ index } className={ styles.listItem }>
                    { detail }
                </li>
            }) }</div>
            <button className={ styles.preRegister }><a href='#pre-register'>Erken Kaydol</a></button>

        </div>
    )
}