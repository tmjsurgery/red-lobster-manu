const fs = require('fs');
const path = require('path');

const dataPath = path.join(__dirname, '../src/lib/data.ts');
let dataContent = fs.readFileSync(dataPath, 'utf8');

function extractArray(name) {
  const regex = new RegExp(`export const ${name}: [a-zA-Z\\[\\]]+ = \\[(.*?)\\];`, 's');
  const match = dataContent.match(regex);
  if (!match) return [];
  
  const objRegex = /\{([^}]+)\}/g;
  const objects = [];
  let m;
  while ((m = objRegex.exec(match[1])) !== null) {
    let objStr = m[1];
    let obj = {};
    const kvRegex = /([a-zA-Z0-9_]+):\s*(?:"([^"]*)"|`([^`]*)`|([^,]*))/g;
    let kvMatch;
    while ((kvMatch = kvRegex.exec(objStr)) !== null) {
      let key = kvMatch[1];
      let value = kvMatch[2] || kvMatch[3] || kvMatch[4];
      if (value) value = value.trim();
      obj[key] = value;
    }
    objects.push(obj);
  }
  return objects;
}

const menuItems = extractArray('menuItems');

let txtContent = "";
let counter = 1;

menuItems.forEach((item) => {
  // Clean filename: lowercase, replace spaces with hyphens, remove special chars, NO extension
  let filename = item.name.toLowerCase().replace(/[^a-z0-9\s-]/g, '').replace(/\s+/g, '-').replace(/-+/g, '-').replace(/^-|-$/g, '');
  
  let dishName = item.name.replace(/\\n/g, ' ').replace(/"/g, '').trim();
  
  let prompt = `A highly detailed, photorealistic close up of ${dishName}. Served on a high-quality ceramic plate on a dark wooden restaurant table. Cinematic, soft diffused lighting, natural subtle steam, highly detailed, photorealistic, 8k resolution, depth of field, appetizing, premium restaurant presentation.`;
  
  // Exact format: filename (no extension), next line prompt, next line blank
  txtContent += `${filename}\r\n${prompt}\r\n\r\n`;
});

const outputPath = 'C:\\Users\\HP\\.gemini\\antigravity\\brain\\41bf3456-2e2b-42e3-b573-80ff37fb6a96\\strict_prompts.txt';
fs.writeFileSync(outputPath, txtContent, 'utf8');
console.log('Successfully generated strict prompts with 5 lines spacing and no numbering.');
