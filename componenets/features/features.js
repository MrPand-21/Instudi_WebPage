import Card from '../../utils/card/card';
import styles from './features.module.css';

export default function Features() {

    let features = [
        {
            title: "Profilleri Gezme",
            detail: "Diğer öğrencilerin, mentörlerin ve okulların profilini görebilir ve onları takip ederek en hızlı şekilde onlardan haberdar olabilir, kişisel mesajlar gönderebilirsiniz. "
        }, {
            title: "Geri Bildirimler",
            detail: "Mentörlerle birebir görüştükten sonra geri bildirim verebilirsiniz ve bir mentörle görüşmeden önce ona verilen diğer geri bildirimleri görebilirsiniz. Webinarlara katılım sağladıktan sonra bunun üzerine geri bildirim verebilirsiniz"
        }, {
            title: "Kolayca Etkileşim",
            detail: "Öğreciler, çalışmak istedikleri konuda kolayca mentör bulabilecekler ve Mentörler de kolaylıkla gelen talepleri inceleyebilecek her taraf için de kazançlı bir etkileşim sağlanmış olunacak."
        }
    ]

    return (
        <div className={ styles.features }>
            <div className={ styles.headingGroup }>
                <h2 className={ styles.header }>
                    Öne Çıkan <h2 className={ styles.headerBold }>Özelliklerimiz</h2></h2>
                <p className={ styles.headingDetail }>Diğer benzer platformlardan bizi ayıran ve yön katan diğer özelliklerimize buradan ulaşabilirsin! </p>
            </div>
            <div className={ styles.cards }>
                { features.map((feature, index) => {
                    return <Card key={ index } title={ feature.title } detail={ feature.detail } />
                }) }
            </div>
            <button className={ styles.preRegister }><a href="#pre-register">Erken Kaydol</a></button>

        </div>
    )
};