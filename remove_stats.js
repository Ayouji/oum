const fs = require('fs');
const path = require('path');

// Files to process
const files = [
  'en/index.html',
  'ar/index.html',
  'tamazight/index.html'
];

files.forEach(filePath => {
  let content = fs.readFileSync(filePath, 'utf8');
  // Remove the entire stats section (class="stats")
  content = content.replace(/<!-- STATS -->\n<section class="stats">[\s\S]*?<\/section>\n/g, '');
  // Also catch without comment
  content = content.replace(/<section class="stats">[\s\S]*?<\/section>\n?/g, '');
  fs.writeFileSync(filePath, content, 'utf8');
  console.log('Cleaned stats from:', filePath);
});

console.log('Done.');
