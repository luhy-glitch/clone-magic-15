import sharp from 'sharp';
import { readdirSync, statSync, copyFileSync, unlinkSync } from 'fs';
import { join, extname, basename } from 'path';

const BLOG_IMAGES_DIR = 'public/images/blog-images';
const TARGET_FILES = [
  '7ed2eeff-06fa-4534-9d82-11ee2bb3e158.png',
  'f6be46bc-bb07-4998-9685-5d6a5300af46.png',
  '8e3f4f0d-81c0-44a5-a15f-e6a3b58b4a91.png',
  '14510854-4bb8-45e5-b985-d6a0f4de8ac8.png',
  'aa8c7b44-60eb-424d-a1b8-e063cf09a01d.png',
  '21bbf54e-fed9-4f30-934f-2b66c7e56737.png',
  '25fe8909-d082-48ce-a064-aaad731f5b88.png',
  'standard-bild.webp',
];

async function compress(file) {
  const inputPath = join(BLOG_IMAGES_DIR, file);
  const ext = extname(file).toLowerCase();
  const name = basename(file, ext);
  const outputPath = join(BLOG_IMAGES_DIR, `${name}.webp`);

  const before = statSync(inputPath).size;

  await sharp(inputPath)
    .resize({ width: 1200, height: 675, fit: 'cover', position: 'attention' })
    .webp({ quality: 72, effort: 6 })
    .toFile(outputPath + '.tmp');

  const after = statSync(outputPath + '.tmp').size;

  // Replace original with compressed version
  // If source was PNG, keep original name but as .webp
  // If source was already .webp, replace in-place
  const { default: fs } = await import('fs');
  fs.renameSync(outputPath + '.tmp', outputPath);

  // Remove original PNG if we created a new .webp with different name
  if (ext === '.png' && outputPath !== inputPath) {
    unlinkSync(inputPath);
  }

  console.log(`${file} → ${name}.webp  ${(before/1024).toFixed(0)}KB → ${(after/1024).toFixed(0)}KB  (${Math.round((1-after/before)*100)}% smaller)`);
  return { file, name, before, after };
}

const results = [];
for (const file of TARGET_FILES) {
  try {
    const r = await compress(file);
    results.push(r);
  } catch (e) {
    console.error(`ERROR: ${file}:`, e.message);
  }
}

const totalBefore = results.reduce((s, r) => s + r.before, 0);
const totalAfter = results.reduce((s, r) => s + r.after, 0);
console.log(`\nTotal: ${(totalBefore/1024/1024).toFixed(1)}MB → ${(totalAfter/1024/1024).toFixed(1)}MB (${Math.round((1-totalAfter/totalBefore)*100)}% smaller)`);
