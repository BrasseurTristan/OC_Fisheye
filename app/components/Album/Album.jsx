'use client'
import { useState } from 'react';
import styles from './Album.module.css';
import MediaCard from '@/app/components/MediaCard/MediaCard';
import SortSelect from '../SortSelect/SortSelect';

export default function Album({album}) {
    
    const [filter, setFilter] = useState('popularity')
    
    const sortedAlbum = [...album].sort((a, b) => {
        if (filter === 'title') return a.title.localeCompare(b.title);
        if (filter === 'date')  return new Date(b.date) - new Date(a.date);
        return b.likes - a.likes; 
    }); 
        
    return(
        <section aria-label="Galerie">
            <div className={styles.filterContainer}>
                <SortSelect value={filter} onChange={(value) => setFilter(value)}/>
            </div>
            <ul className={styles.album}>
                {
                    sortedAlbum.map((media)=>(
                        <li key={media.id}>
                            <MediaCard media={media} />
                        </li>
                    ))
                }
            </ul>
        </section>

    )
}