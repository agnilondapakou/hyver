const sharp = require('sharp');
const fs = require('fs').promises;
const path = require('path');

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
    const sourceImage = path.join(__dirname, '../src/assets/logo.png');
    
    // Create output directory if it doesn't exist
    const outputDir = path.join(__dirname, '../public');
    try {
      await fs.access(outputDir);
    } catch {
      await fs.mkdir(outputDir, { recursive: true });
    }
    
    // Generate each size
    for (const size of Object.values(sizes)) {
      await sharp(sourceImage)
        .resize(size.width, size.height, {
          fit: 'contain',
          background: { r: 0, g: 0, b: 0, alpha: 0 }
        })
        .toFile(path.join(outputDir, size.name));
      
      console.log(`Generated ${size.name}`);
    }
    
    console.log('All icons generated successfully!');
  } catch (error) {
    console.error('Error generating icons:', error);
  }
}

// If this script is run directly
if (require.main === module) {
  generateIcons();
}

module.exports = generateIcons; 