'use client'

import Image from 'next/image'
import Link from 'next/link'
import styles from './MediaCard.module.css'

export default function MediaCard({ media, liked, onLike }) {
    const { title, image, video, likes } = media;

    return (
        <article className={styles.card}>
            <Link
                href={`?media=${media.id}`}
                scroll={false}
                className={styles.thumbnail}
                aria-label={`Ouvrir ${title} en grand`}
            >
                {video ? (
                    <video
                        className={styles.media}
                        src={`/${video}`}
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
            </Link>

            <div className={styles.infos}>
                <h2 className={styles.title}>{title}</h2>
                <p className={styles.likes}>
                    <span>{likes}</span>
                    <button
                        type='button'
                        className={styles.likeButton}
                        onClick={() => onLike(media)}
                        aria-label='likes'
                        aria-pressed={liked}
                    >
                        &#9829;
                    </button>
                </p>
            </div>
        </article>
    )
}
