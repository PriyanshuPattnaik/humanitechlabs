import fs from 'fs';

// Read the JSON file
const filePath = 'src/lib/data/researchDatafinal.json';
let content = fs.readFileSync(filePath, 'utf8');

// Fix the missing comma issue around line 2419
// Replace the pattern where a closing brace is followed by a new object without a comma
content = content.replace(/}\s*\n\s*{/g, '},\n{');

// Write the fixed content back
fs.writeFileSync(filePath, content);

console.log('JSON file fixed successfully!'); 