# Contributing

Thank you for considering contributing to MoCSSA! Follow the steps below to add your own artwork to the gallery.

## 1. Complete README

- Go through the [README](README.md) for details about this repo, including objectives, external resources, and guidelines to follow

## 2. Fork the Repository and Run Locally

- Fork the repository by clicking the Fork button at the top right of the [repo page](https://github.com/marcobuontempo/mocssa)
- Clone the forked repository to your local machine:
  ```bash
  git clone https://github.com/your-username/mocssa.git
  cd mocssa
  ```
- Install packages
  ```bash
  npm install
  ```
- Run local development environment. You should now be able to view the live development version locally at `http://localhost:5173/` (or wherever your terminal specifies)
  ```bash
  npm run dev
  ```

## 3. Create a Branch

- Create a new branch to work on:
  ```bash
  git checkout -b my-new-artwork
  ```

## 4. Add Your Artwork

- Generate a new artwork template by running the following script:
  ```bash
  npm run create-artwork
  ```
- Then, simply follow the prompts in the terminal

> **Note: for your reference, this script completes the following actions:**
>  1. creates a folder: `/src/artworks/{ArtworkName}/`
>  1. creates a component: `/src/artworks/{ArtworkName}/index.tsx` 
>     - you can edit this file if necessary. for example, if you need to add html elements, add them into the `const artwork = ...` section
>  1. creates a css file: `/src/artworks/{ArtworkName}/styles.module.css`
>     - this is where you can add your CSS rules for the artwork
>  1. creates a metadata file: `/src/artworks/${ArtworkName}/metadata.json`
>     - defines the artwork's data, such as title, creator, attribution, & categories. you can update this information if necessary

## 5. Create Your CSS Design

- Edit your folder's `styles.module.css` file using your custom CSS. The default defined class is `artwork`. Use pseudo-classes like `artwork::before` or `artwork::after` as needed.
- If additional HTML `<div>`'s are needed for your art piece, you can simply include these in the `const artwork = ...` section within `index.tsx`.
- This project uses [CSS Modules](https://github.com/css-modules/css-modules) to prevent conflicting CSS rules between artworks. So keep this in mind when defining custom styles (i.e. `className={styles.myCustomClassName}`).
- Double-check your `metadata.json` file is correct before submitting your design. If your artwork isn't applicable to any of the pre-existing categories (one div, animated, etc.), simply provide an empty array (i.e. `"categories": []`).
- If you get stuck on styles and functionality, just reference the code of any existing artworks in `mocssa/src/artworks` if required!
  > **Note:** as per the README, all artworks are 21.875rem \* 21.875rem (i.e. 350px \* 350px), as defined by their parent container)

## 6. Commit Your Changes

- After completing your artwork, commit the changes:
  ```bash
  git add .
  git commit -m "Add artwork MyNewArtwork"
  ```

## 7. Push Your Branch

- Push your branch to your forked repository:

  ```bash
  git push origin my-new-artwork
  ```

## 8. Submit a Pull Request

- Go to the original repository on GitHub, navigate to the Pull Requests tab, and click New Pull Request
- Choose your branch and submit the pull request for review

😊