import Link from 'next/link'
import Image from "next/image"
import styles from "./Banner.module.css"

export default function Banner({homepage}) {
    return(
        <section className={styles.banner}>
            <Link href="/" className={styles.logo}>
                <Image src="/Logo_FishEye.svg" width={170} height={40} alt='FishEye Home Page'></Image>
            </Link>
            {homepage && (
                <h1 className={styles.title}>Nos photographes</h1>
            )}
        </section>
    )
}