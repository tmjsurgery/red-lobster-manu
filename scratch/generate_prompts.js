const fs = require('fs');
const path = require('path');

// Read data.ts
const dataPath = path.join(__dirname, '../src/lib/data.ts');
let dataContent = fs.readFileSync(dataPath, 'utf8');

// We can extract categories and menu items using regex since it's a TS file
function extractArray(name) {
  const regex = new RegExp(`export const ${name}: [a-zA-Z\\[\\]]+ = \\[(.*?)\\];`, 's');
  const match = dataContent.match(regex);
  if (!match) return [];
  
  // A bit hacky, but we can match objects inside the array
  const objRegex = /\{([^}]+)\}/g;
  const objects = [];
  let m;
  while ((m = objRegex.exec(match[1])) !== null) {
    let objStr = m[1];
    let obj = {};
    // Extract key-value pairs
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

const categories = extractArray('categories');
const menuItems = extractArray('menuItems');

let md = `# Red Lobster Menu Overview (With Image Prompts)\n\n`;
md += `There are a total of **${categories.length} menu categories** and **${menuItems.length} menu items** listed on the site. Below is the complete breakdown with every category, its items, and an AI image generation prompt for each.\n\n`;

categories.forEach((cat, index) => {
  md += `### ${index + 1}. ${cat.name}\n`;
  md += `**Category Image Prompt:** A professional, high-end food photography shot of ${cat.description || cat.name}. Cinematic lighting, 8k resolution, appetizing, styled for a premium restaurant menu.\n\n`;
  
  const items = menuItems.filter(item => item.categorySlug === cat.slug);
  items.forEach(item => {
    md += `- **${item.name}**\n`;
    let desc = item.description || item.name;
    md += `  - *Prompt:* A close-up, ultra-realistic food photography shot of ${desc}. Served on a beautiful rustic plate, dark moody lighting, warm highlights, steam rising, highly detailed, 8k, restaurant quality.\n`;
  });
  md += `\n`;
});

const outputPath = 'C:\\Users\\HP\\.gemini\\antigravity\\brain\\41bf3456-2e2b-42e3-b573-80ff37fb6a96\\menu_list_with_prompts.md';
fs.writeFileSync(outputPath, md, 'utf8');
console.log('Successfully generated ' + outputPath);
