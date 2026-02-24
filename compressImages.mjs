import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import sharp from 'sharp';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const GALLERY_DIR = path.join(__dirname, 'src', 'assets', 'mit gallery');

// Define maximum dimensions and quality for web-friendly output
const MAX_WIDTH = 1920;
const MAX_HEIGHT = 1080;
const QUALITY = 80;

async function processDirectory(dir, isRoot = false) {
    const entries = fs.readdirSync(dir, { withFileTypes: true });

    for (const entry of entries) {
        const fullPath = path.join(dir, entry.name);

        if (entry.isDirectory()) {
            await processDirectory(fullPath);
        } else if (entry.isFile()) {
            const ext = path.extname(entry.name).toLowerCase();

            // Only process image files (specifically targeting large JPG/PNGs)
            if (['.jpg', '.jpeg', '.png', '.webp'].includes(ext)) {

                const stats = fs.statSync(fullPath);
                const sizeInMB = stats.size / (1024 * 1024);

                // Skip files smaller than 1.5MB to avoid re-compressing already web-friendly items
                if (sizeInMB < 1.5) continue;

                console.log(`Optimizing: ${entry.name} (${sizeInMB.toFixed(2)} MB)...`);

                try {
                    const tempPath = fullPath + '.tmp';

                    // Compress, resize, and convert to WebP for massive space savings
                    let transformer = sharp(fullPath).resize({
                        width: MAX_WIDTH,
                        height: MAX_HEIGHT,
                        fit: 'inside', // Preserve aspect ratio, don't crop
                        withoutEnlargement: true
                    });

                    // Auto-rotate based on EXIF and optimize 
                    transformer = transformer.withMetadata().rotate().webp({ quality: QUALITY });

                    await transformer.toFile(tempPath);

                    // Replace original with optimized version
                    fs.unlinkSync(fullPath);
                    // Standardize everything to standard .webp extensions 
                    const finalPath = fullPath.replace(/\.(jpg|jpeg|png|JPG|JPEG|PNG)$/, '.webp');
                    fs.renameSync(tempPath, finalPath);

                    const newStats = fs.statSync(finalPath);
                    const newSizeInMB = newStats.size / (1024 * 1024);
                    console.log(`\t-> Successfully compressed to ${newSizeInMB.toFixed(2)} MB (${path.basename(finalPath)})`);

                } catch (err) {
                    console.error(`\t-> Error processing ${entry.name}:`, err.message);
                }
            }
        }
    }
}

console.log(`Scanning directory: ${GALLERY_DIR} for raw image files over 1.5MB...`);
await processDirectory(GALLERY_DIR, true);
console.log('Finished compressing images.');
