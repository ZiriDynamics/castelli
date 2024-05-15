import { useSearchParams } from 'next/navigation';
import styles from './coupon.module.css';

export default function Coupon() {
    
    const searchParams = useSearchParams();
    const name = searchParams.get('name');
    const email = searchParams.get('email');
    if (!name || !email) return null;

    return (
        <div className={styles.couponContainer}>
        <div className={styles.coupon}>
            <div className={styles.left}>
                <div className={styles.couponText}>You get a 10% discount</div>
                <div className={styles.couponCode}>Discount code: HELLOMOUNT10</div>
            </div>
            <div className={styles.circle}>
                <div>SAVE CODE NOW</div>
            </div>
        </div>
        </div>
    )
}