import Image from "next/image";
import styles from "./logos.module.css";

export default function Logos() {
    return (
        <div className={ styles.logos + " line" }>
            <Image
                src={ "/images/üretken.png" }
                alt="üretken akademi"
                width={ 361 }
                height={ 71 }
            />
            <Image
                src={ "/images/trakya.png" }
                alt="trakya kalkınma ajansı"
                width={ 118 }
                height={ 71 }
            />
        </div>
    );
}