import styles from "./services.module.css";

export default function Services() {
    return (
        <div className={ styles.services }>
            <div className={ styles.headingGroup }>
                <h2 className={ styles.header }>
                    Sunduğumuz <h2 className={ styles.headerBold }>Çözümler</h2></h2>
                <p className={ styles.headingDetail }>Platformumuz öğrencilere birbirinden farklı alanlarda destekte bulunuyoruz. Bu konular hakkında bilgi edinmek için kaydır! </p>
                <div className={ styles.cardGroup }>
                    <div className={ styles.leftCardGroup }>
                    </div>
                    <div className={ styles.rightCardGroup }>
                    </div>
                </div>
                <button className={ styles.preRegister }>Erken Kaydol</button>
            </div>
        </div>
    )
}