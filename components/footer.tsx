import styles from './footer.module.css';

export default function Footer() {
    return (
        <footer className={styles.footer}>
            <ul className={styles.list}>
                <li>IMPRINT</li>
                <li>PRIVACY POLICY</li> 
                <li>TERMS & CONDITIONS</li>
            </ul>
            <div className={styles.horizontal}>
                <p>ZIRI Dynamics</p>
                <p>COPYRIGHT © 2024</p>
            </div>
        </footer>
    );
}
