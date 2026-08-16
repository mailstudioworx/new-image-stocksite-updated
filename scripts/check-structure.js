#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

const srcDir = path.join(process.cwd(), 'src');
const dirs = ['pages', 'components', 'styles', 'utils', 'data', 'lib'];

console.log('\n📁 Project Structure:');
console.log('\nroot/');

dirs.forEach(dir => {
  const dirPath = path.join(srcDir, dir);
  if (fs.existsSync(dirPath)) {
    console.log(`├── src/${dir}/`);
    const files = fs.readdirSync(dirPath);
    files.forEach((file, idx) => {
      const isLast = idx === files.length - 1;
      console.log(`│   ${isLast ? '└──' : '├──'} ${file}`);
    });
  }
});

console.log('\n✓ Project structure initialized!');
