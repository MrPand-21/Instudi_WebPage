import Head from 'next/head'
import ListCard from '../../utils/listCard/listCard'
import styles from './options.module.css'

export default function Options() {

    let options = [
        {
            title: "Öğrenciler İçin",
            details: [
                "Akışta Paylaşım Yapabilmek"
                , "Mentörlerden canlı destek alabilmek"
                , "Mentörlere Geri bildirim verebilme"
                , "meslekler hakkında bilgiye erişmek"
                , "Kurumlar Hakkında bilgiye erişmek"
                , "webinarlara katılmak"
            ]
        }, {
            title: "Kurumlar İçin",
            details: [
                "Akışta Okul Etkinliklerini Paylaşma"
                , "Okulu tanıatabilme"
                , "Webinarlar Düzenleme"
                , "İçeriklere Katkıda Bulunma"
                , "Öğrencilere kolayca ulaşabilme"
            ]
        }, {
            title: "mentörler İçin",
            details: [
                "Öğrencilerle Kolayca Buluşma"
                , "Bilgilerini Sunabilme"
                , "Webinarlarlar Düzenleme"
                , "Akışta Yaptıklarını Paylaşabilme"
            ]
        }
    ]

    return (
        <div className={ styles.container } >
            <h2 className={ styles.header }>
                Kullanıcı <h2 className={ styles.headerBold }>Seçenekleri</h2></h2>
            <div className={ styles.options }>
                { options.map((option, index) => {
                    return <ListCard key={ index } title={ option.title } details={ option.details } />
                })
                }
            </div>
        </div>
    )
}