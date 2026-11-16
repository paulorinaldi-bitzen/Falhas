const fs = require('fs');
const path = require('path');

const sourceDir = path.join(__dirname, '../src/generated');
const targetDir = path.join(__dirname, '../dist/generated');

function copyDirectory(src, dest) {
  if (!fs.existsSync(dest)) {
    fs.mkdirSync(dest, { recursive: true });
  }

  const entries = fs.readdirSync(src, { withFileTypes: true });

  for (const entry of entries) {
    const srcPath = path.join(src, entry.name);
    const destPath = path.join(dest, entry.name);

    if (entry.isDirectory()) {
      copyDirectory(srcPath, destPath);
    } else {
      fs.copyFileSync(srcPath, destPath);
    }
  }
}

console.log('Copying from:', sourceDir);
console.log('Copying to:', targetDir);
copyDirectory(sourceDir, targetDir);
console.log('Prisma generated files copied to dist/generated');
