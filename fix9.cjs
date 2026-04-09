const fs = require('fs');
let content = fs.readFileSync('src/programs.js', 'utf8');

content = content.replace('title: "21. Travelling Salesperson Problem"', 'title: "21. Travelling Salesman Problem"');

fs.writeFileSync('src/programs.js', content, 'utf8');
console.log('Fixed Salesperson to Salesman');
