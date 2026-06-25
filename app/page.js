
import { getAllPhotographers } from '@/app/lib/prisma-db';
import styles from "./page.module.css";
import Banner from "./components/Banner/Banner";
import PhotographerCard from './components/PhotograherCard/PhotographerCard';

export default async function Home() {

  const photographers = await getAllPhotographers();
  
  return (
    <div className={styles.page}>
      <Banner homepage={true}/>
      <main className={styles.main}>
        {photographers.map((p) =>(
         <PhotographerCard key={p.id} props={p}/>
        ))}
      </main>
    </div>
  );
}
