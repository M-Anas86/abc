const fs = require('fs');
const path = require('path');

const rootDir = 'C:\\Windows\\Fonts\\consola.ttf'; // dummy
const searchDir = 'C:\\Users\\mohda\\OneDrive\\Desktop\\DSA with C';

function getAllCFiles(dirPath, arrayOfFiles) {
    const files = fs.readdirSync(dirPath);
    
    arrayOfFiles = arrayOfFiles || [];

    files.forEach(function(file) {
        if (fs.statSync(path.join(dirPath, file)).isDirectory()) {
            arrayOfFiles = getAllCFiles(path.join(dirPath, file), arrayOfFiles);
        } else {
            if (file.endsWith('.c')) {
                arrayOfFiles.push(path.join(dirPath, file));
            }
        }
    });

    return arrayOfFiles;
}

const cFiles = getAllCFiles(searchDir);

let outputJS = 'export const PROGRAMS = [\n';

cFiles.forEach((file, idx) => {
    const parsed = path.parse(file);
    let title = parsed.name;

    // Format PascalCase and camelCase into properly spaced titles
    let formattedTitle = title
        .replace(/([A-Z])/g, ' $1') // Insert space before all capital letters
        .replace(/^./, str => str.toUpperCase()) // Uppercase first letter
        .replace(/Arr(?=\\s|$)/g, 'Array') // Replace "Arr" with "Array"
        .trim()
        // Handle double spaces if there were already spaces in the file name
        .replace(/\\s+/g, ' ');
    const content = fs.readFileSync(file, 'utf-8');
    
    // Attempting to generate a fake output placeholder based on file name
    // Since we can't run them waiting for input.
    let fakeOutput = 'Program executed successfully.';
    if (title.toLowerCase().includes('search')) {
        fakeOutput = 'Element found at index 3';
    } else if (title.toLowerCase().includes('sort')) {
        fakeOutput = 'Sorted array: 1 2 3 4 5 6 7 8 9';
    } else if (title.toLowerCase().includes('stack') || title.toLowerCase().includes('queue')) {
        fakeOutput = '1. Add\\n2. Remove\\n3. Display\\nChoose option: 1\\nAdded successfully.\\nChoose option: 3\\nElements: 10';
    }

    // Escape backticks and dollars inside the code to place into JS literal
    const safeContent = content.replace(/\\/g, '\\\\').replace(/\`/g, '\\`').replace(/\\$/g, '\\$');

    outputJS += `  {
    title: "${idx + 1}. ${formattedTitle}",
    filename: "${title}.exe",
    code: \`${safeContent}\`,
    output: \`${fakeOutput}\`
  },
`;
});

outputJS += '];\n';

fs.writeFileSync('src/programs.js', outputJS);
console.log('Successfully generated src/programs.js with ' + cFiles.length + ' programs.');
