import Link from 'next/link'
import styles from './PhotographerCard.module.css'
import Image from 'next/image'

export default function PhotographerCard({props}) {

    const {id,portrait,name,tagline,price,city, country} = props;
    return(
      <article className={styles.card}>
        <Link href={`/${id}`} className={styles.cardLink}>
            <Image className={styles.portrait} src={`/${portrait}`} alt={name} width={200} height={200} loading="eager"/>
            <h2 className={styles.name}>{name}</h2>
        </Link>
        <div className={styles.info}>
            <span className={styles.location}>{city}, {country}</span>
            <p className={styles.tagline}>{tagline}</p>
            <span className={styles.price}>{price}€/jour</span>
        </div>
    </article>
    )
}
