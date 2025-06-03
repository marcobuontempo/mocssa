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

  const tsxPath = path.join(artworkDir, 'index.tsx');
  const cssPath = path.join(artworkDir, 'styles.module.css');
  const metadaPath = path.join(artworkDir, 'metadata.json');

  const tsxContent = (
    `import ArtworkFrame from "../../components/ArtworkFrame";
import { ArtworkMetadata } from "../../types/artworkMetadataType";
import metadataRaw from "./metadata.json";
import styles from "./styles.module.css";

export const metadata: ArtworkMetadata = metadataRaw as ArtworkMetadata;

export const artwork = (
  <>
    <div className={styles.artwork} />
  </>
);

export default function ${componentName}() {
  return (
    <ArtworkFrame
      title={metadata.title}
      creator={metadata.creator}
      sourceURL={"${componentName}"}
    >
      {artwork}
    </ArtworkFrame>
  )
}
  `);

  const cssContent = (
    `.artwork, 
.artwork::before, 
.artwork::after {
  /* STYLE YOUR ARTWORK HERE */
  position: absolute;
  margin: auto;
  left: 0;
  top: 0;
  right: 0;
  bottom: 0;
}

  `);

  const metadataContent = JSON.stringify(
    {
      title: artworkName,
      attribution: attribution,
      creator: creatorName,
      date: (new Date()).toISOString().split('T')[0],
      categories: categories,
    },
    null,
    2
  );

  try {
    // Create .tsx and .module.css files
    fs.writeFileSync(tsxPath, tsxContent);
    fs.writeFileSync(cssPath, cssContent);
    fs.writeFileSync(metadaPath, metadataContent);
    console.log(`✅ Created artwork "${artworkName}" in src/artworks/${componentName}/`);
  } catch (e) {
    console.log(`Error creating artwork components.\n\nERROR:\n${e}`);
  }
})();
