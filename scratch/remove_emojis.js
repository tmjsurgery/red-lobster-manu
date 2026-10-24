const fs = require('fs');
const path = require('path');

function walkDir(dir, callback) {
  fs.readdirSync(dir).forEach(f => {
    let dirPath = path.join(dir, f);
    let isDirectory = fs.statSync(dirPath).isDirectory();
    isDirectory ? walkDir(dirPath, callback) : callback(path.join(dir, f));
  });
}

walkDir(path.join(__dirname, '../src'), function(filePath) {
  if (filePath.endsWith('.tsx') || filePath.endsWith('.ts')) {
    let content = fs.readFileSync(filePath, 'utf8');
    
    // Replace em dash (—) and en dash (–) with normal hyphen (-)
    let newContent = content.replace(/—/g, '-').replace(/–/g, '-');
    
    // Remove all emojis
    // \p{Emoji_Presentation} catches most standard emojis. 
    // We also include \p{Extended_Pictographic} to catch others.
    newContent = newContent.replace(/[\p{Emoji_Presentation}\p{Extended_Pictographic}]/gu, '');
    
    // Some emojis like 🍽️ might leave behind the variation selector \uFE0F
    newContent = newContent.replace(/\uFE0F/g, '');

    if (content !== newContent) {
      fs.writeFileSync(filePath, newContent, 'utf8');
      console.log(`Updated ${filePath}`);
    }
  }
});
