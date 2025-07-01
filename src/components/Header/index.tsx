import { Dispatch, SetStateAction, useEffect, useState } from "react";
import FilterForm from "../FilterForm";
import styles from "./styles.module.css";

type Props = {
  darkMode: boolean;
  setDarkMode: Dispatch<SetStateAction<boolean>>;
};

export default function Header({ darkMode, setDarkMode }: Props) {
  const [shrunkTitle, setShrunkTitle] = useState(false);
  const [isFilterVisible, setIsFilterVisible] = useState(false);

  // Animate title
  useEffect(() => {
    const timeout = setTimeout(() => {
      setShrunkTitle(true);
    }, 2000); // delay before shrinking
    return () => clearTimeout(timeout);
  }, []);

  const toggleTheme = () => {
    setDarkMode((prev) => !prev);
  };

  const toggleFilterDisplay = () => {
    setIsFilterVisible((prev) => !prev);
  };

  return (
    <header className={styles.header}>
      <div className={styles.titlecontainer}>
        <h1 className={`${styles.title} ${shrunkTitle ? styles.shrink : ""}`}>
          <div>
            <span className={styles.acronym}>M</span>
            <span className={styles.fade}>useum&nbsp;</span>
          </div>
          <div>
            <span className={styles.acronym}>o</span>
            <span className={styles.fade}>f&nbsp;</span>
          </div>
          <div>
            <span className={styles.acronym}>CSS</span>
            <span className={styles.fade}>&nbsp;</span>
          </div>
          <div>
            <span className={styles.acronym}>A</span>
            <span className={styles.fade}>rt</span>
          </div>
        </h1>
      </div>
      <button className={styles.themetoggle} onClick={toggleTheme}>
        <img
          className={styles.themeicon}
          src={`/svg/${darkMode ? "sun" : "moon"}.svg`}
          alt="Theme Toggle Button"
          height={12}
          width={12}
        />
      </button>
      <div className={styles.hr}></div>
      <div className={styles.subcontainer}>
        <h2 className={styles.subheading}>CSS Artworks</h2>
        <p className={styles.info}>
          A collection of artwork creations made with only HTML and CSS.
          Exploring CSS as a medium for artistic expression.
        </p>
        <p className={styles.notice}>
          (best viewed in a Chromium-based browser - i.e. Chrome, Edge, Brave, etc.)
        </p>
        <button className={styles.filterbutton} onClick={toggleFilterDisplay}>
          Filter Options →
        </button>
        {isFilterVisible && <FilterForm />}
      </div>
    </header>
  );
}
