import styles from '../styles/Movies.module.css'

export default function Movie(props) {
    let {movie} = props
    return (
        <div className={styles.movie}>
            <img
                className={styles.movie__image}
                src={movie.poster}
                alt=""
            />
            <h3 className={styles.movie__title}>{movie.title}</h3>
            <p className={styles.movie__date}>coming soon</p>
        </div>
    )
}
