const fs = require('fs');
const path = require('path');

const filesToProcess = [
  'src/data/products.ts',
  'src/app/page.tsx',
  'src/app/about/page.tsx',
  'src/context/AuthContext.tsx',
  'src/components/HeroSlider.tsx'
];

filesToProcess.forEach(file => {
  const filePath = path.join(__dirname, file);
  if (fs.existsSync(filePath)) {
    let content = fs.readFileSync(filePath, 'utf8');
    const regex = /https:\/\/images\.unsplash\.com\/[^\s'"]+/g;
    content = content.replace(regex, 'https://placehold.co/800x800/111111/FFFFFF?text=SPORT+ZONE');
    fs.writeFileSync(filePath, content);
    console.log(`Updated ${file}`);
  }
});
