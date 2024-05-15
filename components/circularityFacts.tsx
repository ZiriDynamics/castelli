import styles from './circularityFacts.module.css';
import Image from 'next/image';
import boxOfClothing from '@/public/box of clothing.png';
import tapeMeasure from '@/public/tapeMeasure.png';
import yellowSweater from '@/public/yellowSweater.png';
import { useSearchParams } from 'next/navigation';

export default function CircularityFacts() {
    
    const searchParams = useSearchParams();
    const name = searchParams.get('name');
    const email = searchParams.get('email');
    if (!name || !email) return null;
    return (
        <div className={styles.circularityFacts}>
            <h1>Circularity facts</h1>
            <div className={styles.fact}>
                <img src={'/yellowSweater.png'} alt="yellow sweater" className={styles.img} />
                <div className={styles.textContainer}>
                    <div className={styles.text}>Reselling Rate</div>
                    <div className={styles.stat}>48</div>
                </div>
            </div>
            <div className={styles.fact}>
                <img src={'./tapeMeasure.png'} alt="tape measure" className={styles.img} />
                <div className={styles.textContainer}>
                    <div className={styles.text}>Repair Rate</div>
                    <div className={styles.stat}>2</div>
                </div>
            </div>
            <div className={styles.fact}>
                <img src={'./box of clothing.png'} alt="box of clothing" className={styles.img} />
                <div className={styles.textContainer}>
                    <div className={styles.text}>Donation Rate</div>
                    <div className={styles.stat}>13</div>
                </div>
            </div>
        </div>
    );
}