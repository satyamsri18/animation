import React from "react";
import { useEffect, useState } from "react";
import * as styles from "./movies.module.scss";
import Filter from "./Filter/Filter";
import { AnimatePresence, motion } from "framer-motion";

const Movies = () => {
  const [popular, setPopular] = useState([]);
  const [filtered, setFiltered] = useState([]);
  const [activeGenre, setActiveGenre] = useState([]);

  useEffect(() => {
    fetchPopular();
  }, []);
  const fetchPopular = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/popular?api_key=bf7840e0eed77a295165e16092157aa8&language=en-US&page=1"
    );
    const movies = await data.json();
    console.log(movies);

    setPopular(movies.results);
    setFiltered(movies.results);
  };
  return (
    <div className={styles.movieContainer}>
      <h2 className={styles.movieHeading}>Movies</h2>
      <Filter
        popular={popular}
        setFiltered={setFiltered}
        activeGenre={activeGenre}
        setActiveGenre={setActiveGenre}
      />
      <motion.div Layout className={styles.popularMovies}>
        <AnimatePresence>
          {filtered.map((movie) => {
            return (
              <motion.div
                animate={{ opacity: 1, scale: 1 }}
                initial={{ opacity: 0, scale: 0 }}
                exit={{ opacity: 0, scale: 0 }}
                Layout
                className={styles.movieCard}
              >
                <h2 className={styles.movieTitle}>{movie.title}</h2>
                <img
                  className={styles.movieImage}
                  src={"https://image.tmdb.org/t/p/w500" + movie.backdrop_path}
                  alt=""
                />
              </motion.div>
            );
          })}
        </AnimatePresence>
      </motion.div>
    </div>
  );
};
export default Movies;
