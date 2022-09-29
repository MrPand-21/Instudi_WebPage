import styles from './footer.module.css'

export default function Footer() {
    return (
        <div className={ styles.footer }>
            <div className={ styles.footer_text }>

                <div className={ styles.footer_title } id="logo" >
                    <h4 className={ styles.footer_title_header }>Instudi</h4>
                    <p className={ styles.footer_title_text }>Descry Group</p>
                </div>
                <div className={ styles.footer_links } id="links">
                    <h5 className={ styles.footer_subtitle } >Links</h5>
                    <a href="" className={ styles.links_link + " " + styles.link_1 }>Instagram</a>
                    <a href="" className={ styles.links_link + " " + styles.link_2 }>Twitter</a>
                    <a href="" className={ styles.links_link + " " + styles.link_2 }>Discord</a>
                </div>

                <div className={ styles.footer_contact } id="contact">
                    <h5 className={ styles.footer_subtitle }>Get in touch</h5>
                    <div className={ styles.contact_box }>
                        <p className={ styles.contact_text }>Call me!</p>
                        <p className={ styles.contact_address }>+90 555 422 87 67</p>
                    </div>
                    <div className={ styles.contact_box }>
                        <p className={ styles.contact_text }>Mail us!</p>
                        <p className={ styles.contact_address }>report.instudi@gmail.com</p>
                    </div>
                </div>

            </div>

            <div className={ styles.triangles }>
                <div className={ styles.triangle_top }>
                </div>
                <div className={ styles.triangle_bottom }>
                </div>
                <div className={ styles.triangle_left }>
                </div>
            </div>

            <p className={ styles.footer_copy }>
                © 2022 Instudi. All rights reserved
            </p>

        </div>
    )
}