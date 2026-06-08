const fs = require('fs');
let css = fs.readFileSync('style.css', 'utf8');

// Set all --r-* tokens to 0
css = css.replace(/--r-sm:\s*\d+px/g, '--r-sm: 0');
css = css.replace(/--r-md:\s*\d+px/g, '--r-md: 0');
css = css.replace(/--r-lg:\s*\d+px/g, '--r-lg: 0');
css = css.replace(/--r-xl:\s*\d+px/g, '--r-xl: 0');

// Remove all inline border-radius properties that don't use variables
css = css.replace(/border-radius:\s*[\d.]+px[^;]*/g, 'border-radius: 0');
css = css.replace(/border-radius:\s*99px/g, 'border-radius: 0');
css = css.replace(/border-radius:\s*50%/g, 'border-radius: 0');
css = css.replace(/border-radius:\s*2px/g, 'border-radius: 0');

fs.writeFileSync('style.css', css, 'utf8');
console.log('All border-radius removed.');
