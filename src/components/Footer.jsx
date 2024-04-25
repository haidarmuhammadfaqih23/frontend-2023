import styles from '../styles/Footer.module.css';

export default function Footer() {
    return (
        <div className={styles.container}>
            <footer className={styles.footer}>
                <h2 className={styles.footer__title}>Geisha Teater</h2>
                <p className={styles.footer__author}>Created by Haidar Muhammad Faqih</p>
            </footer>
        </div>
    )
}
