const fs = require('fs');
const path = require('path');
const sharp = require('sharp');

const directories = [path.join(__dirname, 'src'), path.join(__dirname, 'public')];
const extensions = ['.png', '.jpg', '.jpeg', '.PNG', '.JPG', '.JPEG'];

async function processFile(filePath) {
  const ext = path.extname(filePath);
  if (!extensions.includes(ext)) return;

  const newPath = filePath.replace(new RegExp(`${ext}$`), '.webp');
  try {
    const size = fs.statSync(filePath).size / (1024 * 1024);
    console.log(`Processing: ${filePath} (${size.toFixed(2)} MB)`);
    
    await sharp(filePath)
      .withMetadata()
      .webp({ quality: 80 })
      .toFile(newPath);
      
    fs.unlinkSync(filePath); // delete original
    console.log(` -> WebP converted.`);
    
    // Now, update references in codebase
    updateReferences(path.basename(filePath), path.basename(newPath));
  } catch (err) {
    console.error(` -> Error processing ${filePath}`, err);
  }
}

function updateReferences(oldName, newName) {
  const searchableExtensions = ['.ts', '.tsx', '.js', '.jsx', '.css', '.html'];
  directories.forEach(dir => {
    traverseAndReplace(dir, oldName, newName, searchableExtensions);
  });
}

function traverseAndReplace(dir, oldName, newName, extList) {
  if (!fs.existsSync(dir)) return;
  const files = fs.readdirSync(dir);
  for (const file of files) {
    const fullPath = path.join(dir, file);
    if (fs.statSync(fullPath).isDirectory()) {
      traverseAndReplace(fullPath, oldName, newName, extList);
    } else {
      if (extList.includes(path.extname(fullPath))) {
        let content = fs.readFileSync(fullPath, 'utf8');
        // Simple string replacement could be risky if same name exists in different directories,
        // but typically sufficient for a small/medium project. Best to do global replace.
        if (content.includes(oldName)) {
           content = content.split(oldName).join(newName);
           fs.writeFileSync(fullPath, content, 'utf8');
        }
      }
    }
  }
}

async function start() {
  const allImages = [];
  function discover(dir) {
    if (!fs.existsSync(dir)) return;
    const files = fs.readdirSync(dir);
    for (const file of files) {
      const fullPath = path.join(dir, file);
      if (fs.statSync(fullPath).isDirectory()) {
        discover(fullPath);
      } else {
        if (extensions.includes(path.extname(fullPath))) {
          allImages.push(fullPath);
        }
      }
    }
  }
  
  directories.forEach(d => discover(d));
  
  console.log(`Found ${allImages.length} images to convert.`);
  for (const img of allImages) {
    await processFile(img);
  }
  console.log("All done.");
}

start();
