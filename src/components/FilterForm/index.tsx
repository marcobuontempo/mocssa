import { FormEvent, MouseEvent, useState } from "react";
import styles from "./styles.module.css";
import { useSearchParams } from "react-router-dom";

export default function FilterForm() {
  const [searchParams, setSearchParams] = useSearchParams();
  const [title, setTitle] = useState(searchParams.get("title") || "");
  const [creator, setCreator] = useState(searchParams.get("creator") || "");
  const [sort, setSort] = useState(searchParams.get("sort") || "featured");
  const [categories, setCategories] = useState<string[]>(searchParams.getAll("category") || []);

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

  const handleClearForm = (e: MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    setTitle("");
    setCreator("");
    setSort("");
    setCategories([]);
    setSearchParams({});
  };

  const toggleCategory = (cat: string) => {
    setCategories((prev) =>
      prev.includes(cat) ? prev.filter((c) => c !== cat) : [...prev, cat]
    );
  };

  return (
    <form className={styles.form} onSubmit={handleSubmitSearch}>
      <fieldset>
        <label className={styles.label} htmlFor="artwork-title-input">
          Artwork Title
        </label>
        <input
          id="artwork-title-input"
          type="text"
          name="title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
      </fieldset>

      <fieldset>
        <label className={styles.label} htmlFor="artwork-creator-input">
          Creator's Name
        </label>
        <input
          id="artwork-creator-input"
          type="text"
          name="creator"
          value={creator}
          onChange={(e) => setCreator(e.target.value)}
          
        />
      </fieldset>

      <fieldset aria-labelledby="artwork-category-heading">
        <h3 className={styles.label} id="artwork-category-heading">
          Categories
        </h3>

        <div className={styles["artwork-categories"]}>
          <label>
            <input
              type="checkbox"
              name="category"
              value="one div"
              checked={categories.includes("one div")}
              onChange={() => toggleCategory("one div")}
            />
            One Div
          </label>

          <label>
            <input
              type="checkbox"
              name="category"
              value="animated"
              checked={categories.includes("animated")}
              onChange={() => toggleCategory("animated")}
            />
            Animated
          </label>

          <label>
            <input
              type="checkbox"
              name="category"
              value="interactive"
              checked={categories.includes("interactive")}
              onChange={() => toggleCategory("interactive")}
            />
            Interactive
          </label>

          <label>
            <input
              type="checkbox"
              name="category"
              value="pixel art"
              checked={categories.includes("pixel art")}
              onChange={() => toggleCategory("pixel art")}
            />
            Pixel Art
          </label>
        </div>
      </fieldset>

      <fieldset>
        <label className={styles.label} htmlFor="artwork-sort-order">
          Sort By
        </label>
        <select
          id="artwork-sort-order"
          name="sort"
          value={sort}
          onChange={(e) => setSort(e.target.value)}
        >
          <option value="featured">Featured</option>
          <option value="date-ascending">Date Ascending</option>
          <option value="date-descending">Date Descending</option>
          <option value="title-ascending">Title Ascending</option>
          <option value="title-descending">Title Descending</option>
        </select>
      </fieldset>

      <div className={styles["button-group"]}>
        <button type="button" onClick={handleClearForm}>
          CLEAR
        </button>
        <button type="submit">SEARCH</button>
      </div>
    </form>
  );
}
