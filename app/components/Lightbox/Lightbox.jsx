'use client'

import { useEffect, useRef } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import styles from './Lightbox.module.css'

export default function Lightbox({ media, prevHref, nextHref, closeHref }) {
    const router = useRouter()
   
    useEffect(() => {
        const previousOverflow = document.body.style.overflow
        document.body.style.overflow = 'hidden'
        return () => {
            document.body.style.overflow = previousOverflow
        }
    }, [])

    useEffect(() => {
        const handleKeyDown = (event) => {
            if (event.key === 'ArrowLeft') router.push(prevHref, { scroll: false })
            if (event.key === 'ArrowRight') router.push(nextHref, { scroll: false })
        }

        document.addEventListener('keydown', handleKeyDown)
        return () => document.removeEventListener('keydown', handleKeyDown)
    }, [router, prevHref, nextHref])

    if (!media) return null

    const { title, image, video } = media

    return (
        <div
            className={styles.overlay}
            role="dialog"
            aria-modal="true"
            aria-label="image closeup view"
        >
            <div className={styles.content}>
                <Link
                    href={closeHref}
                    scroll={false}
                    className={`${styles.control} ${styles.close}`}
                    aria-label="Close dialog"
                >
                    &times;
                </Link>

                <Link
                    href={prevHref}
                    scroll={false}
                    className={`${styles.control} ${styles.prev}`}
                    aria-label="Previous image"
                >
                    &#12296; 
                </Link>

                <figure className={styles.figure}>
                    {video ? (
                        <video
                            className={styles.media}
                            src={`/${video}`}
                            controls
                            autoPlay
                            aria-label={title}
                        />
                    ) : (
                        <Image
                            className={styles.media}
                            src={`/${image}`}
                            alt={title}
                            width={1050}
                            height={900}
                        />
                    )}
                    <figcaption className={styles.caption}>{title}</figcaption>
                </figure>

                <Link
                    href={nextHref}
                    scroll={false}
                    className={`${styles.control} ${styles.next}`}
                    aria-label="Next image"
                >
                    &#x3009;
                </Link>
            </div>
        </div>
    )
}
