import { useEffect, useState } from "react";
import styles from "./styles.module.css";
import { useLocation, useNavigate } from "react-router-dom";

export default function ArtworkModal() {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();

  const closeModal = () => {
    navigate(-1);
    setIsOpen(false);
  }

  if (!isOpen) return null;

  return (
    <div className={styles.modal} style={{ display: isOpen ? "flex" : "" }}>
      MODAL
      <button className={styles.exit} onClick={() => closeModal()}>
        <img src="/svg/xmark.svg" alt="Close Modal" height={48} width={48} />
      </button>
      {/* <div className={styles.header}>
        <h2 className={styles.title}>{title}</h2>
        <h3 className={styles.creator}>by {creator}</h3>
      </div>
      <ArtworkContainer>{artwork}</ArtworkContainer>
      <div className={styles.information}>
        <p className={styles.attribution}>{attribution}</p>
        <div>
          <p className={styles.category_title}>categories:</p>
          <ul className={styles.categories}>
            {categories.map((category) => (
              <li
                key={category}
                className={styles[`${category.split(" ").join("")}`]}
              >
                {category}
              </li>
            ))}
          </ul>
        </div>
        <a
          className={styles.github}
          href={`https://github.com/marcobuontempo/mocssa/tree/main/src/artworks/${sourceURL}`}
          target="_blank"
          rel="noreferrer"
        >
          GitHub Source Code
        </a>
      </div> */}
    </div>
  );
}
