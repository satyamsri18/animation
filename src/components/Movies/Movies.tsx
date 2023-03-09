import React from "react";
import { useEffect, useState } from "react";
import * as styles from "./movies.module.scss";
import Filter from "./Filter/Filter";
import { AnimatePresence, motion } from "framer-motion";

const Movies = () => {
const [popular, setPopular] = useState([]);
const [filtered, setFiltered] = useState([])
const [activeGenre, setActiveGenre] = useState([0]);

useEffect(() => {
  fetchPopular();
}, []);

const fetchPopular = async () => {
  const data = await fetch(

    "https://api.themoviedb.org/3/movie/popular?api_key=ffafebf8df6d75a03f29d4d9c3eb96e5&language=en-US&page=1"
  );
  const movies = await data.json();
  console.log(movies);
  setPopular(movies.results);
  setFiltered(movies.results);
    console.log("popular",popular);
};

return (
  <div className={styles.movieContainer}>
    <Filter 
      popular={popular} 
      setFiltered={setFiltered}
      activeGenre={activeGenre}
      setActiveGenre={setActiveGenre}
    />
    <motion.div layout className={styles.popularMovies}>
      <AnimatePresence>
        {filtered.map((movie) => (
          <motion.div
                          animate={{ opacity: 1, scale: 1 }}
                          initial={{ opacity: 0, scale: 0 }}
                          exit={{ opacity: 0, scale: 0 }}
                          layout
                          className={styles.movieCard}
                        >
                          <h2
                           className={styles.movieTitle}
                           >{movie.title}</h2>
                          <img
                            className={styles.movieImage}
                            src={"https://image.tmdb.org/t/p/w500" + movie.backdrop_path}
                            alt=""
                          />
                        </motion.div>
        ))}
      </AnimatePresence>
    </motion.div>
  </div>
);
}
export default Movies;
