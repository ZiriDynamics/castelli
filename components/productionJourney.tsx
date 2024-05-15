import { useSearchParams } from 'next/navigation';
import styles from './productionJourney.module.css';

export default function ProductionJourney() {
    const searchParams = useSearchParams();
    const name = searchParams.get('name');
    const email = searchParams.get('email');
    if (!name || !email) return null;

    const productName = 'Radical Down RDS Hooded Jacket'
    const journey = [
        {
            location: 'Portugal',
            operation: 'Transforming',
            kgCO2: 0.002
        },
        {
            location: 'Amsterdam',
            operation: 'Receiving',
            kgCO2: 0.133
        },
        {
            location: 'Milan',
            operation: 'Shipping',
            kgCO2: 0.352
        },
        {
            location: 'Munich',
            operation: 'Commissioning',
            kgCO2: 0.002
        },
        {
            location: 'You',
            operation: 'Delivering',
            kgCO2: 0.002
        },
    ]

    return (
        <div className={styles.productionJourney}>
            <h1>Production journey of {productName}</h1>
            <img src={'/safsfa.png'} alt="journey" className={styles.image} />
            <div className={styles.journeyList}>
                {
                    journey.map((item, index) => (
                        <div key={index} className={styles.journeyItem}>
                            <div className={styles.journeyLocation}>{item.location}</div>
                            <div className={styles.journeyArrow}>
                                <div className={styles.dot} />
                                <div className={styles.line + ' ' + (index === journey.length - 1 ? styles.last : '')} />
                            </div>
                            <div className={styles.journeyDetails}>
                                <div className={styles.journeyOperation}>{item.operation}</div>
                                <div className={styles.journeyCO2}>+{item.kgCO2}kg CO2</div>
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
    );
}
