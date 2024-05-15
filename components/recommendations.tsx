import { useSearchParams } from 'next/navigation';
import styles from './recommendations.module.css';

export default function Recommendations() {
    const searchParams = useSearchParams();
    const name = searchParams.get('name');
    const email = searchParams.get('email');
    if (!name || !email) return null;

    const data  = [
        {
            name: 'TLT TOURING DYNASTRETCH',
            image : '/pants.png',
            url: 'https://www.dynafit.com/tlt-touring-dynastretch-pants-men-08-0000071388?c=518548',
            sustainabilityScore: 0.95,
        },
        {
            name: 'Speed Dryarn® Long Sleeve Shirt Men',
            image : '/Untitled-4.png',
            url: 'https://www.dynafit.com/speed-dryarn-long-sleeve-shirt-men-08-0000071056?number=08-0000071056_0000000016&c=518548&listing=',
            sustainabilityScore: 0.65,
        },
        {
            name: 'FT BEANIE',
            image : '/Untitled-5.png',
            url: 'https://www.dynafit.com/ft-beanie-08-0000070955?number=08-0000070955_0000000010&c=516548&listing=1',
            sustainabilityScore: 0.70,
        },
    ]

    return (
        <div className={styles.recommendations}>
            <h1>This would suit you too</h1>
            <div className={styles.recommendationsList}>
                {data.map((item, index) => (
                    <a href={item.url} target="_blank" rel="noreferrer" className={styles.recommendationLink} style={{textDecoration: 'none'}} key={index}>
                    <div className={styles.recommendation}>
                        <img src={item.image} alt={item.name} width={300} height={400} style={{objectFit: 'contain', background: 'rgb(232, 232, 232)'}} />
                        <div className={styles.recommendationScore}>
                            <div className={styles.score}>
                                <span
                                    style={{
                                        color: (item.sustainabilityScore > 0.65 ? '#3ce877' : '#ffae14'),
                                        marginRight: '5px'
                                    }}
                                    >
                                        {(item.sustainabilityScore * 100).toFixed(0)}
                                </span>
                                 / 100
                            </div>
                            <div className={styles.recommendationScoreText}>Sustainability score</div>
                        </div>
                        <div className={styles.recommendationName}>
                            <div className={styles.name}>{item.name}</div>
                            <svg style={{flex: '0 0 auto'}} xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 -960 960 960" width="24"><path d="m547.692-267.692-28.307-28.77L682.923-460H200v-40h482.923L519.385-663.538l28.307-28.77L760-480 547.692-267.692Z" fill='currentColor'/></svg>
                        </div>
                    </div>
                    </a>
                ))}
            </div>
        </div>
    );
}
