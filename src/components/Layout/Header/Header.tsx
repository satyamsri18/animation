import React from 'react'
import * as styles from '../Header/header.module.scss'

export const Header = () => {
  return (
    <div>
        <header className={styles.container}>
  <div className={styles.logo}>Animation</div>
  <nav>
    <ul className={styles.navLinks}>
      <li><a href="#">Home</a></li>
      <li><a href="/animations">Animations</a></li>
      <li><a href="/movies">Movies</a></li>
    </ul>
  </nav>
  <div className={styles.burger}>
    <div className={styles.line1}></div>
    <div className={styles.line2}></div>
    <div className={styles.line3}></div>
  </div>
</header>
    </div>
  )
}
export default Header