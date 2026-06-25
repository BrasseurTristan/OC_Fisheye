import Image from 'next/image'
import styles from './MediaCard.module.css'

export default function MediaCard({ media }) {
    const { title, image, video, likes } = media;

    return (
        <article className={styles.card}>
            <div className={styles.thumbnail}>
                {video ? (
                    <video
                        className={styles.media}
                        src={`/${video}`}
                        controls
                        preload="metadata"
                        aria-label={title}
                    />
                ) : (
                    <Image
                        className={styles.media}
                        src={`/${image}`}
                        alt={title}
                        loading='eager'
                        fill
                        sizes="(max-width: 600px) 100vw, 350px"
                    />
                )}
            </div>

            <div className={styles.infos}>
                <h2 className={styles.title}>{title}</h2>
                <p className={styles.likes}>
                    <span>{likes}</span>
                    <span aria-label='likes'>&#9829;</span>
                </p>
            </div>
        </article>
    )
}
