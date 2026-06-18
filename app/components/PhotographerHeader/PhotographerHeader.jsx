import Image from 'next/image'
import styles from './PhotographerHeader.module.css'
import ContactForm from '../ContactForm/ContactForm'

export default function PhotographerHeader({ photographer }) {
    const { name, city, country, tagline, portrait } = photographer;

    return (
        <header className={styles.header}>
            <div className={styles.info}>
                <h1 className={styles.name}>{name}</h1>
                <span className={styles.location}>{city}, {country}</span>
                <p className={styles.tagline}>{tagline}</p>
            </div>

            <ContactForm photographerName={name} />

            <Image
                className={styles.portrait}
                src={`/${portrait}`}
                alt={name}
                width={200}
                height={200}
                loading="eager"
            />
        </header>
    )
}
