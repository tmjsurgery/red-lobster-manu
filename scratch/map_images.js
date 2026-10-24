const fs = require('fs');
const path = require('path');

const dataFilePath = path.join(__dirname, '../src/lib/data.ts');
let dataContent = fs.readFileSync(dataFilePath, 'utf8');

const publicDir = path.join(__dirname, '../public');
const files = fs.readdirSync(publicDir).filter(f => f.endsWith('.webp'));

function slugify(text) {
  return text.toLowerCase()
    .replace(/[^\w\s-]/g, '')
    .replace(/[\s_-]+/g, '-')
    .replace(/^-+|-+$/g, '');
}

// Strip out (1) or (2) from filenames just in case
const availableImages = new Set(files.map(f => f.replace(/\s*\(\d+\)/, '')));

const missingCategories = [];
const missingItems = [];
let replacedCount = 0;

// Parse the data file manually or use simple regex replacement since it's a formatted TS file
// Let's use regex to find each item's name and its current image

const nameRegex = /name:\s*"([^"]+)",[^}]*image:\s*`\$\{RL_CDN\}\/[^`]+`/g;
const categoryRegex = /name:\s*"([^"]+)",\s*slug:\s*"([^"]+)",[^}]*image:\s*`\$\{RL_CDN\}\/[^`]+`/g;

// Fix categories first
dataContent = dataContent.replace(categoryRegex, (match, name, slug) => {
  let imgName = slug + '.webp';
  let found = files.find(f => f === imgName);
  
  if (!found) {
     missingCategories.push(name);
     return match;
  }
  
  replacedCount++;
  return match.replace(/`\$\{RL_CDN\}\/[^`]+`/, `"${'/' + found}"`);
});

// Fix menu items
dataContent = dataContent.replace(/name:\s*"([^"]+)",([^}]+)image:\s*`\$\{RL_CDN\}\/[^`]+`/g, (match, name, middle) => {
  let slug = slugify(name);
  
  // Custom manual mappings based on potential mismatches
  let imgName = slug + '.webp';
  
  let found = files.find(f => f === imgName || f === slug + ' (1).webp' || f === slug.replace('new-', '') + '.webp' || f === imgName.replace('lunch', 'lunch-favorites'));
  
  if(!found) {
    // Try some fuzzy matching
    found = files.find(f => f.includes(slug) || slug.includes(f.replace('.webp', '')));
  }

  // hardcoded fallbacks based on observation
  if (!found) {
    if (slug === 'new-crabfest-boil') found = 'new-crabfest-boil.webp';
    if (slug === 'crab-shrimp-linguini-alfredo') found = 'crab-shrimp-linguini-alfredo.webp';
    if (slug === 'crab-topped-asparagus-add-on') found = 'crab-topped-asparagus-add-on.webp';
    if (slug === 'parrot-isle-jumbo-coconut-shrimp-entre') found = 'parrot-isle-jumbo-coconut-shrimp-entre.webp';
  }

  if (found) {
    replacedCount++;
    return `name: "${name}",${middle}image: "/${found}"`;
  } else {
    missingItems.push(name);
    return match;
  }
});

fs.writeFileSync(dataFilePath, dataContent);

console.log("REPLACED: " + replacedCount);
console.log("MISSING CATEGORIES:");
console.log(missingCategories);
console.log("MISSING ITEMS:");
console.log(missingItems);
