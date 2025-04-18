const https = require('https');
const fs = require('fs');
const path = require('path');

const logoUrl = 'https://res.cloudinary.com/dpofk8xy0/image/upload/v1739124077/hyver/ymwmdk7hgyjwnrvgoemw.png';
const outputPath = path.join(__dirname, '..', 'src', 'assets', 'logo.png');

// Ensure assets directory exists
const assetsDir = path.dirname(outputPath);
if (!fs.existsSync(assetsDir)) {
  fs.mkdirSync(assetsDir, { recursive: true });
}

https.get(logoUrl, (response) => {
  if (response.statusCode !== 200) {
    console.error(`Failed to download logo: ${response.statusCode} ${response.statusMessage}`);
    process.exit(1);
  }

  const fileStream = fs.createWriteStream(outputPath);
  response.pipe(fileStream);

  fileStream.on('finish', () => {
    console.log('Logo downloaded successfully!');
    fileStream.close();
    
    // Run icon generation script after download
    require('./generate-icons.cjs');
  });
}).on('error', (err) => {
  console.error('Error downloading logo:', err.message);
  process.exit(1);
}); 