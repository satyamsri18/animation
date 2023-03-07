import React from "react";
import { useEffect } from "react";

const Filter = (popular: any, setActiveGenre: any, activeGenre: any, setFiltered: any) => {
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
      <button className={activeGenre === 0 ? `${'styles.active'}` : ''} onClick={() => setActiveGenre(0)}>All</button>
      <button className={activeGenre === 35 ? `${'styles.active'}` : ''} onClick={() => setActiveGenre(35)}>Comedy</button>
      <button className={activeGenre === 28 ? `${'styles.active'}` : ''} onClick={() => setActiveGenre(28)}>Action</button>
    </div>
  );
};

export default Filter;
