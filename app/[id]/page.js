import { notFound } from 'next/navigation';
import { getPhotographer,getAllMediasForPhotographer } from '@/app/lib/prisma-db';
import Banner from '@/app/components/Banner/Banner';
import PhotographerHeader from '@/app/components/PhotographerHeader/PhotographerHeader';
import styles from './page.module.css';
import Album from '../components/Album/Album';


export default async function PhotographerPage({ params }) {
    const { id } = await params;
    const photographer = await getPhotographer(Number(id));
    if (!photographer) {
        notFound();
    }
    const album = await getAllMediasForPhotographer(Number(id))
    const price = photographer.price;

    return (
        <div className={styles.page}>
            <Banner />
            <main className={styles.main}>
                <PhotographerHeader photographer={photographer} />
                <Album album={album} price={price}/>
                
            </main>
        </div>
    );
}
``