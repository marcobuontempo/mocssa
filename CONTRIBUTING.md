# Contributing

Thank you for considering contributing to MoCSSA! Follow the steps below to add your own artwork to the gallery.

## 1. Complete README

- Go through the [README](README.md) for details about this repo, including objectives, external resources, and guidelines to follow

## 2. Fork the Repository

- Fork the repository by clicking the Fork button at the top right of the [repo page](https://github.com/marcobuontempo/mocssa)
- Clone the forked repository to your local machine:
  ```bash
  git clone https://github.com/your-username/mocssa.git
  cd mocssa
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
>  2. creates a component: `/src/artworks/{ArtworkName}/index.tsx` (you can edit this file if necessary)
>  3. creates a css file: `/src/artworks/{ArtworkName}/styles.module.css` (this is where you code your CSS art)
>  4. imports and adds the artwork to the `Gallery` component (located at `/src/components/Gallery/index.tsx`)

## 5. Create Your CSS Design

- Edit your folder's `styles.module.css` file with your custom CSS. The default class is `artwork`. Use pseudo-classes like `artwork::before` or `artwork::after` as needed.
- Reference any existing artworks in `mocssa/src/artworks` if required!
  > **Note:** as per the README, all artworks are 350px \* 350px (as defined by their parent container)

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
