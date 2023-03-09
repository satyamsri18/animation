import React, { useEffect } from "react";
// import "./filter.css";
import * as styles from './filter.module.scss'

function Filter({ setActiveGenre, activeGenre, setFiltered, popular }) {
  useEffect(() => {
    if (activeGenre === 0) {
      setFiltered(popular);
      return;
    }
    const filtered = popular.filter((movie) =>
      movie.genre_ids.includes(activeGenre)
    );
    setFiltered(filtered);
  }, [activeGenre]);

  return (
    <div>
      <div className={styles.filterContainer}>
        <button className={activeGenre === 0 ? "active" : ""} onClick={() => setActiveGenre(0)}>All</button>
        <button className={activeGenre === (35) ? "active" : ""}  onClick={() => setActiveGenre(35)}>Action</button>
        <button className={activeGenre === (28) ? "active" : ""}  onClick={() => setActiveGenre(28)}>Comedy</button>
      </div>
    </div>
  );
}

export default Filter;
