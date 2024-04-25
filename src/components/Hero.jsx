import styles from '../styles/Hero.module.css'
function Hero() {
    return (

        <div className={styles.container}>
            <section className={styles.hero}>
                <div className={styles.hero__left}>
                    <h2 className={styles.hero__title}>Love in The Arch</h2>
                    <h3 className={styles.hero__genre}>
                        Genre: Drama, Romance
                    </h3>
                    <p className={styles.hero__description}>
                        A movie by Haidar Love Geisha
                    </p>
                    <button className={styles.hero__button}>Watch</button>
                </div>
                <div className={styles.hero__right}>
                    <img
                        className={styles.hero__image}
                        src="https://www.shutterstock.com/image-photo/close-male-architect-hands-making-600nw-721777969.jpg"
                        alt="image"
                    />
                </div>
            </section>
        </div>
    );
}


export default Hero;