import { notFound } from 'next/navigation';
import { getPhotographer } from '@/app/lib/prisma-db';
import Banner from '@/app/components/Banner/Banner';
import PhotographerHeader from '@/app/components/PhotographerHeader/PhotographerHeader';
import styles from './page.module.css';

export default async function PhotographerPage({ params }) {
    const { id } = await params;
    const photographer = await getPhotographer(Number(id));

    if (!photographer) {
        notFound();
    }

    return (
        <div className={styles.page}>
            <Banner />
            <main className={styles.main}>
                <PhotographerHeader photographer={photographer} />
            </main>
        </div>
    );
}
