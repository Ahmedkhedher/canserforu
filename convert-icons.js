const sharp = require('sharp');
const fs = require('fs');

async function convertIcons() {
  try {
    console.log('Converting SVG icons to PNG...');
    
    // Convert app icon (1024x1024)
    await sharp('./assets/icon.svg')
      .resize(1024, 1024)
      .png()
      .toFile('./assets/icon.png');
    console.log('✅ Created icon.png (1024x1024)');
    
    // Convert splash screen (1284x2778)
    await sharp('./assets/splash.svg')
      .resize(1284, 2778)
      .png()
      .toFile('./assets/splash-icon.png');
    console.log('✅ Created splash-icon.png (1284x2778)');
    
    // Convert adaptive icon (432x432)
    await sharp('./assets/adaptive.svg')
      .resize(432, 432)
      .png()
      .toFile('./assets/adaptive-icon.png');
    console.log('✅ Created adaptive-icon.png (432x432)');
    
    // Convert favicon (32x32)
    await sharp('./assets/favicon.svg')
      .resize(32, 32)
      .png()
      .toFile('./assets/favicon.png');
    console.log('✅ Created favicon.png (32x32)');
    
    // Clean up SVG files
    fs.unlinkSync('./assets/icon.svg');
    fs.unlinkSync('./assets/splash.svg');
    fs.unlinkSync('./assets/adaptive.svg');
    fs.unlinkSync('./assets/favicon.svg');
    console.log('🧹 Cleaned up SVG files');
    
    console.log('🎉 All custom icons created successfully!');
    console.log('📱 Your app now has:');
    console.log('   • Custom app icon with cancer awareness ribbon');
    console.log('   • Beautiful gradient splash screen');
    console.log('   • Android adaptive icon');
    console.log('   • Web favicon');
    
  } catch (error) {
    console.error('❌ Error converting icons:', error.message);
  }
}

convertIcons();
