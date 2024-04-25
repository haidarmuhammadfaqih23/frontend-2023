import { useState } from "react";
import styles from "../styles/Movies.module.css";

import Movie from "./Movie";

import data from "../../utils/constanst/data";
import { nanoid } from "nanoid";

export default function Movies() {
  const [movies, setMovies] = useState(data);

  const handleClick = function () {
    const new_movie = {
      id: nanoid(),
      title: "72 Days",
      year: "2023",
      type: "Movie",
      poster: "https://m.media-amazon.com/images/M/MV5BZWMyYzFjYTYtNTRjYi00OGExLWE2YzgtOGRmYjAxZTU3NzBiXkEyXkFqcGdeQXVyMzQ0MzA0NTM@._V1_SX300.jpg",
    };
    setMovies([...movies, new_movie]);
  };

  return (
    <div className={styles.container}>
      <section className={styles.movies}>
        <h2 className={styles.movies__title}>Upcoming</h2>
        <div className={styles.movie__container}>
          {movies.map((movie) => {
            return <Movie key={movie.id} movie={movie} />;
          })}
        </div>
        <button onClick={handleClick}>Add New Movie</button>
      </section>
    </div>
  );
}
