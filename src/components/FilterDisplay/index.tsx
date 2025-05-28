import { FormEvent } from "react";
import styles from "./styles.module.css";

export default function FilterDisplay() {
  const submitSearch = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);
    const selectedFilters: string[] = [];

    for (const [_name, value] of formData.entries()) {
      selectedFilters.push(value.toString());
    }

    console.log(selectedFilters);
    // TODO: Create html params with this info
  };

  return (
    <form className={styles.form} onSubmit={submitSearch}>
      <fieldset>
        <label className={styles.label} htmlFor="artwork-title-input">Artwork Title</label>
        <input id="artwork-title-input" type="text" />
      </fieldset>

      <fieldset>
        <label className={styles.label} htmlFor="artwork-creator-input">Creator's Name</label>
        <input id="artwork-creator-input" type="text" />
      </fieldset>

      <fieldset aria-labelledby="artwork-category-heading">
        <h3 className={styles.label} id="artwork-category-heading">Categories</h3>

        <div className={styles["artwork-categories"]}>
          <label>
            <input type="checkbox" name="one-div-filter" value="one div" />
            One Div
          </label>

          <label>
            <input type="checkbox" name="animated-filter" value="animated" />
            Animated
          </label>

          <label>
            <input
              type="checkbox"
              name="interactive-filter"
              value="interactive"
            />
            Interactive
          </label>

          <label>
            <input type="checkbox" name="pixel-art-filter" value="pixel art" />
            Pixel Art
          </label>
        </div>
      </fieldset>

      <fieldset>
        <label className={styles.label} htmlFor="artwork-sort-order">Sort By</label>
        <select id="artwork-sort-order" defaultValue="default">
          <option value="default">Default</option>
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
