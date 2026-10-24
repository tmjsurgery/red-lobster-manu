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

const missingCategories = [];
const missingItems = [];
let replacedCount = 0;

// Categories Regex: { id: "c1",  name: "NEW! Crabfest",       slug: "new-crabfest",       description: "...", image: `${RL_CDN}/...` },
const categoryRegex = /\{[^}]*id:\s*"c\d+",\s*name:\s*"([^"]+)",\s*slug:\s*"([^"]+)"[^}]*image:\s*(`\$\{RL_CDN\}[^`]+`|"[^"]+")[^}]*\}/g;

dataContent = dataContent.replace(categoryRegex, (match, name, slug, currentImg) => {
  let imgName = slug + '.webp';
  let found = files.find(f => f === imgName || f === imgName.replace('new-', ''));
  
  if (!found) {
    // If not found by slug, maybe we have some fallback image for categories?
    // Let's just track them.
    missingCategories.push(name);
    return match;
  }
  
  replacedCount++;
  return match.replace(currentImg, `"${'/' + found}"`);
});

// Menu Items Regex: { id: "crab1", name: "Crab Your Way - Snow Crab", categorySlug: "new-crabfest", ... image: `${RL_CDN}/...` },
const itemRegex = /\{[^}]*id:\s*"[^"]+",\s*name:\s*"([^"]+)",[^}]*image:\s*(`\$\{RL_CDN\}[^`]+`|"[^"]+")[^}]*\}/g;

dataContent = dataContent.replace(itemRegex, (match, name, currentImg) => {
  // If it's already a local path, skip
  if (currentImg.startsWith('"/')) {
    return match;
  }

  let slug = slugify(name);
  let imgName = slug + '.webp';
  
  let found = files.find(f => f === imgName || f === slug + ' (1).webp' || f === slug.replace('new-', '') + '.webp');
  
  if(!found) {
    found = files.find(f => f.includes(slug) || slug.includes(f.replace('.webp', '')));
  }

  if (found) {
    replacedCount++;
    return match.replace(currentImg, `"${'/' + found}"`);
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
