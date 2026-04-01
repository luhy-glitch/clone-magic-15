import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const distDir = path.resolve(__dirname, 'dist');

// Funktion för att hitta ALLA html-filer rekursivt
function getFiles(dir, fileList = []) {
  const files = fs.readdirSync(dir);
  files.forEach(file => {
    const filePath = path.join(dir, file);
    if (fs.statSync(filePath).isDirectory()) {
      getFiles(filePath, fileList);
    } else if (file.endsWith('.html')) {
      fileList.push(filePath);
    }
  });
  return fileList;
}

const allFiles = getFiles(distDir);

allFiles.forEach(filePath => {
  let content = fs.readFileSync(filePath, 'utf8');
  
  // Om filen har platshållare, försök lista ut vad som ska stå där baserat på filnamnet
  if (content.includes('__PAGE_TITLE__')) {
    const fileName = path.basename(path.dirname(filePath)) === 'dist' 
      ? path.basename(filePath, '.html') 
      : path.basename(path.dirname(filePath));
    
    const cleanName = fileName.replace(/-/g, ' ').replace(/\b\w/g, l => l.toUpperCase());
    const title = `${cleanName} | LRH Konsult`;
    const desc = `Professionell webbutveckling och SEO för ${cleanName}. Vi bygger snabba hemsidor som rankar högt på Google.`;

    content = content.replace(/__PAGE_TITLE__/g, title);
    content = content.replace(/__PAGE_DESCRIPTION__/g, desc);
    
    fs.writeFileSync(filePath, content);
    console.log(`✅ SEO injicerat i: ${path.relative(distDir, filePath)}`);
  }
});
