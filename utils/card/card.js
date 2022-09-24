import styles from "./card.module.css";

export default function Card({ title, detail }) {
    return (
        <div className={ styles.card }>
            <h5 className={ styles.cardTitle }>{ title }</h5>
            <p className={ styles.cardDetail }>{ detail }</p>
        </div>
    );
}