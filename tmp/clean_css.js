const fs = require('fs');
const path = 'd:/Projects/MIT Website/mit-indore-website/src/index.css';

try {
    // Read raw buffer to handle any encoding
    const buffer = fs.readFileSync(path);
    // Filter out null bytes
    const cleanBuffer = buffer.filter(byte => byte !== 0);
    // Convert to string and truncate at line 5067 (the last safe closing brace)
    const content = cleanBuffer.toString('utf8');
    const lines = content.split('\n');
    const safeLines = lines.slice(0, 5067);
    const result = safeLines.join('\n');
    
    fs.writeFileSync(path, result, 'utf8');
    console.log('Successfully cleaned index.css and truncated at line 5067');
} catch (err) {
    console.error('Error cleaning index.css:', err);
    process.exit(1);
}
