const fs = require('fs');

let content = fs.readFileSync('src/programs.js', 'utf8');

content = content.replace('title: "19. Kruska Algo"', 'title: "19. Kruskal\'s Algorithm"');
content = content.replace('title: "20. Prims Algo"', 'title: "20. Prim\'s Algorithm"');

fs.writeFileSync('src/programs.js', content, 'utf8');
console.log('Fixed Program Names');
