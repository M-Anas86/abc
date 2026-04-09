const fs = require('fs');

let content = fs.readFileSync('src/programs.js', 'utf8');

const replaceGraphOutput = (titleStart, specificText) => {
    const start = content.indexOf(titleStart);
    if (start !== -1) {
        const outputStart = content.indexOf('output: `', start);
        const outputEnd = content.indexOf('`', outputStart + 9);
        const newOutput = `output: \`Enter number of vertices: 3\\nEnter the adjacency matrix:\\n0 5 1\\n5 0 3\\n1 3 0\\n${specificText}\``;
        content = content.substring(0, outputStart) + newOutput + content.substring(outputEnd + 1);
    }
}

replaceGraphOutput('title: "19. Kruska Algo"', "Edge added: 0 <---> 2 (Cost: 1)\\nEdge added: 2 <---> 1 (Cost: 3)\\nMinimum Cost of Spanning Tree: 4");
replaceGraphOutput('title: "20. Prims Algo"', "Edge added: 0 <---> 2 (Cost: 1)\\nEdge added: 2 <---> 1 (Cost: 3)\\nMinimum Cost of Spanning Tree: 4");

fs.writeFileSync('src/programs.js', content, 'utf8');
console.log('Fixed Graph outputs');
