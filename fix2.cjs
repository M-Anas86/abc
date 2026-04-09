const fs = require('fs');

let content = fs.readFileSync('src/programs.js', 'utf8');

// Find the index of "2. Priority Queue"
const pqStart = content.indexOf('title: "2. Priority Queue"');
if (pqStart !== -1) {
    const pqOutputStart = content.indexOf('output: `', pqStart);
    const pqOutputEnd = content.indexOf('`', pqOutputStart + 9);

    const newOutput = "output: `1. Add\\n2. Remove\\n3. Display\\n4. Terminate\\nChoose option: 1\\ndata: 10\\npriority: 2\\n1. Add\\n2. Remove\\n3. Display\\n4. Terminate\\nChoose option: 3\\n10 \\n`";

    content = content.substring(0, pqOutputStart) + newOutput + content.substring(pqOutputEnd + 1);
}

fs.writeFileSync('src/programs.js', content, 'utf8');
console.log('Fixed Priority Queue output');
