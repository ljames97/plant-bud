import fs from 'fs';
import path from 'path';

const generateIndexFile = (directory) => {
  const files = fs.readdirSync(directory);
  const exports = files.map(file => {
    const filePath = path.join(directory, file);
    if (fs.lstatSync(filePath).isDirectory()) {
      generateIndexFile(filePath);
      return null;
    }
    const ext = path.extname(file);
    if (ext === '.png' || ext === '.jpg' || ext === '.jpeg' || ext === '.gif') {
      const fileName = path.basename(file, ext);
      return `export { default as ${fileName} } from './${file}';`;
    }
    return null;
  }).filter(Boolean).join('\n');

  fs.writeFileSync(path.join(directory, 'index.js'), exports);
};

const imagesDir = path.join(process.cwd(), 'src/images');
generateIndexFile(imagesDir);

console.log('Image index files generated successfully.');
