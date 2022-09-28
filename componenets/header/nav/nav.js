import Image from "next/image";
import Link from "next/link";
import styles from "./nav.module.css";

export default function Nav() {
    return (
        <div className={ styles.nav }>
            <img
                src={ "/images/instudi.png" }
                alt="InStudi Logo"
                className={ styles.logo }
            ></img>
            <div className={ styles.navLinks }>
                <a href="" className={ styles.navlinkitem + " " + styles.mainpage }>
                    Ana Sayfa
                </a>
                <a href="" className={ styles.navlinkitem + " " + styles.about }>
                    Hakkımızda
                </a>
                <a href="" className={ styles.navlinkitem + " " + styles.contact }>
                    İletişim
                </a>
            </div>
        </div>);

}
