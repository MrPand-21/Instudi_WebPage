import styles from "./services.module.css";

export default function Services() {
    return (
        <div className={ styles.services }>
            <div className={ styles.headingGroup }>
                <h2 className={ styles.header }>
                    Sunduğumuz <h2 className={ styles.headerBold }>Çözümler</h2></h2>
                <p className={ styles.headingDetail }>Platformumuz öğrencilere birbirinden farklı alanlarda destekte bulunuyoruz. Bu konular hakkında bilgi edinmek için kaydır! </p>
            </div>
            <div className={ styles.cardGroup }>
                <div className={ styles.leftCardGroup }>
                    <div className={ styles.cardTopLeft }>
                        <h3 className={ styles.cardHeader }>Akış</h3>
                        <p className={ styles.cardDetail }>Öğrenciler, içerik üreticileri ve okulların buluştuğu, birbirlerine sorular sorup paylaşım yapabileceksiniz</p>
                    </div>
                    <div className={ styles.cardBottomLeft }>
                        <h3 className={ styles.cardHeader }>Kurumlarla Etkileşim</h3>
                        <p className={ styles.cardDetail }>Okullar, dershaneler gibi kurumlar hakkında bilgiye kolaylıkla ulaşabilecek ve onlarla rahatlıkla iletişime geçebileceksiniz</p>
                    </div>
                </div>
                <div className={ styles.rightCardGroup }>
                    <div className={ styles.cardTopRight }>
                        <h3 className={ styles.cardHeader }>Webinarlar</h3>
                        <p className={ styles.cardDetail }>Öğrencilerin, akıllarındaki soruları gidericekleri çeşitli konularda onları bilgilendiren eğitici içeriklere ulaşılabilecek </p>
                    </div>
                    <div className={ styles.cardBottomRight }>
                        <h3 className={ styles.cardHeader }>Mentörlük ve Danışmanlık</h3>
                        <p className={ styles.cardDetail }>Öğrenciler, içerik üreticileri ve okulların buluştuğu, birbirlerine sorular sorup paylaşım yapabileceksiniz

                        </p>
                    </div>
                </div>

            </div>

            <button className={ styles.preRegister }>Erken Kaydol</button>
        </div>

    )
}