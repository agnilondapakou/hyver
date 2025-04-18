const sharp = require('sharp');
const fs = require('fs').promises;
const path = require('path');
const svg2png = require('svg2png');

const sizes = {
  favicon16: { width: 16, height: 16, name: 'favicon-16x16.png' },
  favicon32: { width: 32, height: 32, name: 'favicon-32x32.png' },
  apple: { width: 180, height: 180, name: 'apple-touch-icon.png' },
  android192: { width: 192, height: 192, name: 'android-chrome-192x192.png' },
  android512: { width: 512, height: 512, name: 'android-chrome-512x512.png' },
  ogImage: { width: 1200, height: 630, name: 'og-image.png' },
  twitterCard: { width: 1200, height: 600, name: 'twitter-card.png' }
};

async function generateIcons() {
  try {
    // Read the SVG file
    const sourceImage = await fs.readFile(path.join(__dirname, '../src/assets/logo.svg'));
    
    // Convert SVG to PNG
    const pngBuffer = await svg2png(sourceImage);
    
    // Save temporary PNG
    const tempPngPath = path.join(__dirname, '../src/assets/logo.png');
    await fs.writeFile(tempPngPath, pngBuffer);
    
    // Create output directory if it doesn't exist
    const outputDir = path.join(__dirname, '../public');
    try {
      await fs.access(outputDir);
    } catch {
      await fs.mkdir(outputDir, { recursive: true });
    }
    
    // Generate each size
    for (const size of Object.values(sizes)) {
      await sharp(tempPngPath)
        .resize(size.width, size.height)
        .toFile(path.join(outputDir, size.name));
      
      console.log(`Generated ${size.name}`);
    }
    
    // Clean up temporary PNG
    await fs.unlink(tempPngPath);
    
    console.log('All icons generated successfully!');
  } catch (error) {
    console.error('Error generating icons:', error);
  }
}

generateIcons(); 