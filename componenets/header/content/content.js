import Image from "next/image";
import styles from "./content.module.css";

export default function Content() {
    return (
        <div className={ styles.content }>
            <div className={ styles.contentLeft }>
                <div className={ styles.headerGroup }>
                    <h2 className={ styles.headerUp }>Yeni Nesil</h2>
                    <h2 className={ styles.headerDown }>Öğrenci Platformu</h2>
                </div>
                <p className={ styles.detail }>Instudi, öğrencilerin akış kısmında birbirlerinden faydalanabileceği, mentörlük sayfasında üniversitelilerden ve öğretmenlerden birebir görüşme alabileceği, kurumların profillerini görüntüleyebileceği ve yine eğitim kurumları veya içerik üreticilerinin düzenleyeceği webinar'lara katılımını sağlayabilecek bir platformdur.

                </p>
                <div className={ styles.buttonGroup }>
                    <button className={ styles.preRegister }><a href="#pre-register" >Erken Kaydol</a></button>
                    <button className={ styles.discover }><a href="#discover-plans">Keşfet</a></button>
                </div>
            </div>
            <div className={ styles.contentRight }>

                <Image src={ "/images/tanıtım.png" }
                    alt="tanıtım"
                    width={ 654 }
                    height={ 775 }>

                </Image>
            </div>

        </div>
    )
}