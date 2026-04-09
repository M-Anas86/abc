const fs = require('fs');

let content = fs.readFileSync('src/programs.js', 'utf8');

content = content.replace('title: "20. Prim\'s Algorithm"', 'title: "20. Prims Algorithm"');

fs.writeFileSync('src/programs.js', content, 'utf8');
console.log('Fixed Program Name to Prims');
