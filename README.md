# Museum of CSS Art _(MoCSSA)_

Welcome to MoCSSA, the Museum of CSS Art, a curated open-source gallery showcasing creative, artistic, and innovative uses of CSS. This project aims to provide a platform for web designers, developers, artists, (and basically anyone else) to contribute their CSS artwork while serving as a resource for others to learn and draw inspiration from.

## Purpose

The goal of MoCSSA is to:

- Encourage creativity in CSS art
- Build a community-driven collection of CSS works
- Provide reference material for others to study and learn from
- Allow anyone to contribute their own CSS artwork to the gallery

## Table of Contents

1. [Gallery Structure](#gallery-structure)
2. [Guidelines](#guidelines)
3. [Running the Project](#running-the-project)
4. [External Resources](#external-resources)
5. [Contributing](#contributing)
6. [License](#license)

## Gallery Structure

The gallery is a simple grid display of all the artworks. There is no overarching theme, colour palette, style, etc. Each artwork should be considered standalone and unique.

Each artwork in MoCSSA follows this structure:

- **Dimensions** - 350px \* 350px
- **Title** - the title of the piece
- **Attribution** - Credit to any original artwork that inspired the piece, or otherwise 'Original Design'
- **Creator** - The name or handle of the CSS Artwork's creator
- **Categories** - The type of the artwork. These include:
  - _One Div: created using only a single html element_
  - _Pixel Art: follows a pixel art design_
  - _Animated: utilises CSS animations_
  - _Interactive: is interactive with the front-end user (such as click, drag, hover, etc.)_

## Guidelines

To maintain quality and consistency in the gallery, please adhere to the following guidelines when submitting your artwork:

- **CSS Only** - The artwork should be created using pure CSS (no images, external libraries, or SVG implementations)
- **Performance** - If using animation, ensure your artwork runs smoothly
- **Originality** - If your work is inspired by another design, please include proper attribution
- **Unique** - Repeats of existing artwork designs will likely not be accepted, unless they offer some substantial uniqueness
- **Content** - Do not create any content that would be considered unethical or illegal
- **Quality** - Low quality submissions will not be accepted. This doesn't necessarily mean a complex artwork, but it must not be a _spam_ submission

## Running the Project

To run the current iteration of MoCSSA locally:

1. Clone the repository:

   ```bash
   git clone https://github.com/marcobuontempo/mocssa.git
   ```

2. Navigate to the project directory:

   ```bash
   cd mocssa
   ```

3. Install dependencies (please have the latest version of nodejs installed):

   ```bash
   npm install
   ```

4. Start the development server:
   ```bash
   npm run dev
   ```

Your gallery should now be running on http://localhost:5173/ (check your terminal's output if it is running on a different port instead)!

## External Resources
A collection of resources that may be useful in creating your CSS artworks:
- [The Shapes of CSS](https://css-tricks.com/the-shapes-of-css/)
- [Coding Artist - CSS Art Youtube Playlist](https://www.youtube.com/playlist?list=PLNCevxogE3fjFTYBst-r1gvlCMsUSzjEU)
- [A Single Div](https://github.com/lynnandtonic/a-single-div)
- [Getting Started With CSS Art](https://dev.to/adriennemiller/getting-started-with-css-art-43b8)
- [The How and Why of Stunning CSS Art (with Examples)](https://tripleten.com/blog/posts/the-how-and-why-of-stunning-css-art-with-examples)
- [Secrets of drawing with CSS and a single DIV](https://javascript.plainenglish.io/secrets-of-drawing-with-css-and-a-single-div-ce9930ec9050)

## Contributing

This project is open-sourced and accepting contributions. Please refer to [CONTRIBUTING](CONTRIBUTING.md) file for details

## License

Refer to [LICENSE](LICENSE) file for details
