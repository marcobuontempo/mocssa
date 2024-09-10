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

- Navigate to `mocssa/src/artworks/`. Make a copy of the `_template` folder into the current directory
  > _Rename the copied folder to the name of your artwork, using PascalCase conventions_
- In your new folder's `index.tsx`, fill out the information required:

  - **Title** - the title of the piece
  - **Attribution** - Credit to any original artwork that inspired the piece, or otherwise `'Original Design'`
  - **Creator** - The name or handle of the CSS Artwork's creator
  - **Categories** - The type of the artwork
  - **ghSrc** - Usually the artwork's folder name, preceded by a slash (this is used for hyperlinks to the GitHub source code, such as https://github.com/marcobuontempo/mocssa/tree/main/src/artworks`/MyNewArtwork`)

  ```tsx
  Example:
      <ArtworkFrame
      title='My New Artwork'
      attribution='Original Design'
      creator='@my-username'
      categories={['one div', 'animated']}
      ghSrc='/MyNewArtwork'
    >
    ...
  ```

## 5. Add Your Artwork to the Gallery

- Navigate to `mocssa/src/components/Gallery/index.tsx`. Import your artwork component, and add the component into the Gallery:

  ```tsx
  import MyNewArtwork from "../../artworks/MyNewArtwork";

  <div className={styles.gallery}>
    <MyNewArtwork />
    ...
  </div>;
  ```

## 6. Create Your CSS Design

- Edit your folder's `styles.module.css` file with your custom CSS. The default class is `artwork`. Use pseudo-classes like `artwork::before` or `artwork::after` as needed.
- Reference any existing artworks in `mocssa/src/artworks` if required!
  > **Note:** as per the README, all artworks are 350px \* 350px (as defined by their parent container)

## 7. Commit Your Changes

- After completing your artwork, commit the changes:
  ```bash
  git add .
  git commit -m "Add artwork MyNewArtwork"
  ```

## 8. Push Your Branch

- Push your branch to your forked repository:

  ```bash
  git push origin my-new-artwork
  ```

## 9. Submit a Pull Request

- Go to the original repository on GitHub, navigate to the Pull Requests tab, and click New Pull Request
- Choose your branch and submit the pull request for review
