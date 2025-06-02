import { FormEvent } from "react";
import styles from "./styles.module.css";
import { useSearchParams } from "react-router-dom";

export default function FilterForm() {
  const [, setSearchParams] = useSearchParams();

  const handleSubmitSearch = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);
    const params = new URLSearchParams();

    for (const [name, value] of formData.entries()) {
      if (name === "sort" && value === "featured") continue;
      if (value) params.append(name, value.toString());
    }

    setSearchParams(params);
  };

  return (
    <form className={styles.form} onSubmit={handleSubmitSearch}>
      <fieldset>
        <label className={styles.label} htmlFor="artwork-title-input">
          Artwork Title
        </label>
        <input id="artwork-title-input" type="text" name="title" />
      </fieldset>

      <fieldset>
        <label className={styles.label} htmlFor="artwork-creator-input">
          Creator's Name
        </label>
        <input id="artwork-creator-input" type="text" name="creator" />
      </fieldset>

      <fieldset aria-labelledby="artwork-category-heading">
        <h3 className={styles.label} id="artwork-category-heading">
          Categories
        </h3>

        <div className={styles["artwork-categories"]}>
          <label>
            <input type="checkbox" name="category" value="one div" />
            One Div
          </label>

          <label>
            <input type="checkbox" name="category" value="animated" />
            Animated
          </label>

          <label>
            <input type="checkbox" name="category" value="interactive" />
            Interactive
          </label>

          <label>
            <input type="checkbox" name="category" value="pixel art" />
            Pixel Art
          </label>
        </div>
      </fieldset>

      <fieldset>
        <label className={styles.label} htmlFor="artwork-sort-order">
          Sort By
        </label>
        <select id="artwork-sort-order" name="sort" defaultValue="featured">
          <option value="featured">Featured</option>
          <option value="date-ascending">Date Ascending</option>
          <option value="date-descending">Date Descending</option>
          <option value="title-ascending">Title Ascending</option>
          <option value="title-descending">Title Descending</option>
        </select>
      </fieldset>

      <div className={styles["button-group"]}>
        <button type="reset">CLEAR</button>
        <button type="submit">SEARCH</button>
      </div>
    </form>
  );
}
