const fs = require('fs');
const path = 'C:\\Windows\\Fonts\\consola.ttf';
const ttf = fs.readFileSync(path);
const b64 = ttf.toString('base64');
fs.writeFileSync('src/consolaFont.js', 'export const consolaFont = "' + b64 + '";');
