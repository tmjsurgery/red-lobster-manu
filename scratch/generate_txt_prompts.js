const fs = require('fs');
const path = require('path');

// Read data.ts
const dataPath = path.join(__dirname, '../src/lib/data.ts');
let dataContent = fs.readFileSync(dataPath, 'utf8');

// Extract menu items from the array
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

menuItems.forEach((item) => {
  // Generate a clean filename based on the slug
  const filename = `${item.slug}.jpg`;
  
  // Clean up the name for the prompt
  const dishName = item.name.replace(/\\n/g, ' ').replace(/"/g, '').trim();
  
  // Generate a highly specific, realistic prompt without over-the-top fake smoke
  const prompt = `Professional food photography of ${dishName}. Served on a high-quality ceramic plate on a dark wooden restaurant table. Cinematic, soft diffused lighting, natural subtle steam, highly detailed, photorealistic, 8k resolution, depth of field, appetizing, premium restaurant presentation. No artificial styling, natural textures.`;
  
  txtContent += `${filename}\n${prompt}\n\n`;
});

// Also include categories for completeness
const categories = extractArray('categories');
categories.forEach((cat) => {
  const filename = `${cat.slug}-category.jpg`;
  const prompt = `Professional food photography of a premium Red Lobster ${cat.name} spread. Served on high-quality ceramic plates on a dark wooden restaurant table. Cinematic, soft diffused lighting, natural subtle steam, highly detailed, photorealistic, 8k resolution, depth of field, appetizing, premium restaurant presentation. No artificial styling, natural textures.`;
  
  txtContent += `${filename}\n${prompt}\n\n`;
});

const outputPath = 'C:\\Users\\HP\\.gemini\\antigravity\\brain\\41bf3456-2e2b-42e3-b573-80ff37fb6a96\\image_prompts_bulk.txt';
fs.writeFileSync(outputPath, txtContent.trim(), 'utf8');
console.log('Successfully generated ' + outputPath);
