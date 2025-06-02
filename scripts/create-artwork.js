#!/usr/bin/env node

import path from 'path';
import { fileURLToPath } from 'url';
import fs, { existsSync } from 'fs';
import { join } from 'path';
import { createInterface } from 'readline';

// Polyfill __dirname in ESM
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Create a readline interface
const rl = createInterface({
  input: process.stdin,
  output: process.stdout,
});

// Helper functions
const ask = question =>
  new Promise(resolve => rl.question(question, answer => resolve(answer.trim())));

const toPascalCase = str =>
  str
    .split(/[^a-zA-Z0-9]/)
    .filter(Boolean)
    .map(w => w[0].toUpperCase() + w.slice(1))
    .join('');

(async () => {
  // Get Artwork name
  const artworkName = await ask('🎨 Artwork Name: ');

  // Get Creator's name
  const creatorName = await ask('👤 Creator Name: ');

  // Get Attribution details
  const attribution = await ask('📝 Attribution (e.g. "Inspired by ..." / "Original Design"): ');
  
  // Get Categories
  const allowedCategories = ['one div', 'animated', 'pixel art', 'interactive'];

  let categories;
  while (true) {
    const input = await ask(
      `🏷️ Categories (comma-separated — choose from: ${allowedCategories.join(', ')}): `
    );

    const selected = input
      .split(',')
      .map(cat => cat.trim().toLowerCase())
      .filter(Boolean);

    const invalid = selected.filter(cat => !allowedCategories.includes(cat));

    if (invalid.length > 0) {
      console.log(`   Invalid categories: ${invalid.join(', ')}`);
      console.log(`   Allowed: ${allowedCategories.join(', ')}`);
      console.log(`   Try again, using the allowed categories with comma-separated inputs (e.g. 'one div, animated'):`)
    } else {
      categories = selected;
      break;
    }
  }

  rl.close();

  // Create component folder
  const componentName = toPascalCase(artworkName);
  const artworkDir = join(__dirname, '..', 'src', 'artworks', componentName);

  if (existsSync(artworkDir)) {
    console.error(`Artwork "${componentName}" already exists.`);
    process.exit(1);
  }

  fs.mkdirSync(artworkDir, { recursive: true });

  const tsxPath = path.join(artworkDir, `index.tsx`);
  const cssPath = path.join(artworkDir, `styles.module.css`);

  const tsxContent = `import ArtworkFrame from '../../components/ArtworkFrame'
    import styles from './styles.module.css'

    const currentFolder = new URL('.', import.meta.url).pathname;
    const paths = currentFolder.split("/");
    const sourceURL = paths[paths.length - 2];

    export default function index() {
      return (
        <ArtworkFrame
          title='${artworkName}'
          attribution='${attribution}'
          creator='${creatorName}'
          categories={[${categories.map(w => `'${w}'`).join(', ')}]}
          sourceURL={sourceURL}
        >
          <div className={styles.artwork} />
        </ArtworkFrame>
      )
    }
  `;

  const cssContent = `.artwork {
    /* STYLE YOUR ARTWORK HERE */
    position: absolute;
    margin: auto;
    left: 0;
    top: 0;
    right: 0;
    bottom: 0;
  }
  `;

  // Create .tsx and .module.css files
  fs.writeFileSync(tsxPath, tsxContent);
  fs.writeFileSync(cssPath, cssContent);

  // Add component to Gallery
  const galleryPath = path.join(__dirname, '..', 'src', 'components', 'Gallery', 'index.tsx');
  if (!fs.existsSync(galleryPath)) throw new Error('Gallery index.tsx not found.');

  let galleryCode = fs.readFileSync(galleryPath, 'utf-8');

  // Insert Import
  const importRegex = /\/\/ Artworks\n([\s\S]*?)\n(?=export)/;
  const importMatch = galleryCode.match(importRegex);

  if (!importMatch) throw new Error('Could not find import block.');

  const importLines = importMatch[1]
    .split('\n')
    .map(l => l.trim())
    .filter(Boolean)
    .concat(`import ${componentName} from '../../artworks/${componentName}'`)
    .sort((a, b) => a.localeCompare(b));

  const newImportBlock = '// Artworks\n' + importLines.join('\n') + '\n\n';
  galleryCode = galleryCode.replace(importRegex, newImportBlock);

  // Insert TSX Component Call
  const divCloseIndex = galleryCode.lastIndexOf('</div>');
  if (divCloseIndex === -1) throw new Error('Could not find </div> tag.');

  galleryCode =
  galleryCode.slice(0, divCloseIndex) +
  `  <${componentName} />\n` +
  `    ${galleryCode.slice(divCloseIndex)}`;

  // Write updated gallery
  fs.writeFileSync(galleryPath, galleryCode);

  console.log(`✅ Created artwork "${artworkName}" in src/artworks/${componentName}/`);
})();
