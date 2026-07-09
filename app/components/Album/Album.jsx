'use client'
import { useState } from 'react';
import { useRouter, usePathname, useSearchParams } from 'next/navigation';
import styles from './Album.module.css';
import MediaCard from '@/app/components/MediaCard/MediaCard';
import SortSelect from '../SortSelect/SortSelect';
import InfoBar from '../InfoBar/InfoBar';
import Lightbox from '../Lightbox/Lightbox';
import { likeMedia } from '@/app/lib/actions';

export default function Album({album, price}) {

    const router = useRouter()
    const pathname = usePathname()
    const searchParams = useSearchParams()

    const [filter, setFilter] = useState('popularity')
    const [medias, setMedias] = useState(album)
    const [likedIds, setLikedIds] = useState(() => new Set())

    const numberOfLikes = medias.reduce((total, media) => total + media.likes, 0)

    const handleLike = async (media) => {
        if (likedIds.has(media.id)) return;

        setLikedIds((prev) => new Set(prev).add(media.id))
        setMedias((prev) =>
            prev.map((m) =>
                m.id === media.id ? { ...m, likes: m.likes + 1 } : m
            )
        )
        await likeMedia(media.id, media.likes)
        router.refresh()
    }

    const sortedMedias = [...medias].sort((a, b) => {
        if (filter === 'title') return a.title.localeCompare(b.title);
        if (filter === 'date')  return new Date(b.date) - new Date(a.date);
        return b.likes - a.likes;
    });

    const openId = searchParams.get('media')
    const lightboxIndex = openId
        ? sortedMedias.findIndex((m) => String(m.id) === openId)
        : -1

    
    const hrefForIndex = (index) => {
        const lastIndex = sortedMedias.length - 1
        if (index < 0) index = lastIndex          
        if (index > lastIndex) index = 0          
        const target = sortedMedias[index]
        return `${pathname}?media=${target.id}`
    }

    return(
        <section aria-label="Galerie">
            <div className={styles.filterContainer}>
                <SortSelect value={filter} onChange={(value) => setFilter(value)}/>
            </div>
            <ul className={styles.album}>
                {
                    sortedMedias.map((media)=>(
                        <li key={media.id}>
                            <MediaCard
                                media={media}
                                liked={likedIds.has(media.id)}
                                onLike={handleLike}
                            />
                        </li>
                    ))
                }
            </ul>
            <InfoBar price={price} likes={numberOfLikes}/>

            {lightboxIndex !== -1 && (
                <Lightbox
                    media={sortedMedias[lightboxIndex]}
                    prevHref={hrefForIndex(lightboxIndex - 1)}
                    nextHref={hrefForIndex(lightboxIndex + 1)}
                    closeHref={pathname}
                />
            )}
        </section>

    )
}
