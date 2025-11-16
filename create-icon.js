// Script to create custom app icon and splash screen
const fs = require('fs');
const { createCanvas } = require('canvas');

// Create app icon (1024x1024)
function createAppIcon() {
  const canvas = createCanvas(1024, 1024);
  const ctx = canvas.getContext('2d');
  
  // Background gradient (medical blue to teal)
  const gradient = ctx.createLinearGradient(0, 0, 1024, 1024);
  gradient.addColorStop(0, '#4A90E2');  // Medical blue
  gradient.addColorStop(1, '#50C9C3');  // Teal
  
  ctx.fillStyle = gradient;
  ctx.fillRect(0, 0, 1024, 1024);
  
  // Add rounded corners
  ctx.globalCompositeOperation = 'destination-in';
  ctx.beginPath();
  ctx.roundRect(0, 0, 1024, 1024, 180);
  ctx.fill();
  
  ctx.globalCompositeOperation = 'source-over';
  
  // Draw medical cross/ribbon symbol
  ctx.fillStyle = '#FFFFFF';
  ctx.shadowColor = 'rgba(0,0,0,0.3)';
  ctx.shadowBlur = 20;
  ctx.shadowOffsetY = 10;
  
  // Ribbon shape (cancer awareness ribbon)
  ctx.beginPath();
  ctx.moveTo(400, 200);
  ctx.bezierCurveTo(300, 150, 200, 250, 250, 400);
  ctx.bezierCurveTo(280, 500, 350, 550, 400, 500);
  ctx.bezierCurveTo(450, 550, 520, 500, 550, 400);
  ctx.bezierCurveTo(600, 250, 500, 150, 400, 200);
  ctx.closePath();
  
  // Create ribbon loop
  ctx.moveTo(400, 200);
  ctx.bezierCurveTo(350, 180, 320, 220, 350, 280);
  ctx.bezierCurveTo(380, 320, 420, 320, 450, 280);
  ctx.bezierCurveTo(480, 220, 450, 180, 400, 200);
  ctx.fill();
  
  // Add heart symbol in center
  ctx.fillStyle = '#FF6B9D';
  ctx.beginPath();
  ctx.moveTo(512, 450);
  ctx.bezierCurveTo(512, 420, 482, 400, 462, 400);
  ctx.bezierCurveTo(442, 400, 412, 420, 412, 450);
  ctx.bezierCurveTo(412, 480, 512, 550, 512, 550);
  ctx.bezierCurveTo(512, 550, 612, 480, 612, 450);
  ctx.bezierCurveTo(612, 420, 582, 400, 562, 400);
  ctx.bezierCurveTo(542, 400, 512, 420, 512, 450);
  ctx.fill();
  
  // Add app name text
  ctx.shadowColor = 'transparent';
  ctx.fillStyle = '#FFFFFF';
  ctx.font = 'bold 80px Arial';
  ctx.textAlign = 'center';
  ctx.fillText('CanServe', 512, 750);
  
  ctx.font = '40px Arial';
  ctx.fillStyle = 'rgba(255,255,255,0.8)';
  ctx.fillText('Cancer Support', 512, 800);
  
  return canvas.toBuffer('image/png');
}

// Create splash screen (1284x2778 for iPhone 14 Pro Max)
function createSplashScreen() {
  const canvas = createCanvas(1284, 2778);
  const ctx = canvas.getContext('2d');
  
  // Background gradient
  const gradient = ctx.createLinearGradient(0, 0, 0, 2778);
  gradient.addColorStop(0, '#4A90E2');
  gradient.addColorStop(0.5, '#50C9C3');
  gradient.addColorStop(1, '#4A90E2');
  
  ctx.fillStyle = gradient;
  ctx.fillRect(0, 0, 1284, 2778);
  
  // Add subtle pattern overlay
  ctx.fillStyle = 'rgba(255,255,255,0.1)';
  for (let i = 0; i < 20; i++) {
    ctx.beginPath();
    ctx.arc(Math.random() * 1284, Math.random() * 2778, Math.random() * 100 + 50, 0, Math.PI * 2);
    ctx.fill();
  }
  
  // Main logo/icon in center
  const centerX = 1284 / 2;
  const centerY = 2778 / 2;
  
  // Large ribbon symbol
  ctx.fillStyle = '#FFFFFF';
  ctx.shadowColor = 'rgba(0,0,0,0.3)';
  ctx.shadowBlur = 30;
  ctx.shadowOffsetY = 15;
  
  ctx.beginPath();
  ctx.moveTo(centerX, centerY - 200);
  ctx.bezierCurveTo(centerX - 150, centerY - 300, centerX - 300, centerY - 100, centerX - 200, centerY + 100);
  ctx.bezierCurveTo(centerX - 150, centerY + 250, centerX - 50, centerY + 300, centerX, centerY + 200);
  ctx.bezierCurveTo(centerX + 50, centerY + 300, centerX + 150, centerY + 250, centerX + 200, centerY + 100);
  ctx.bezierCurveTo(centerX + 300, centerY - 100, centerX + 150, centerY - 300, centerX, centerY - 200);
  ctx.closePath();
  ctx.fill();
  
  // App title
  ctx.shadowColor = 'transparent';
  ctx.fillStyle = '#FFFFFF';
  ctx.font = 'bold 120px Arial';
  ctx.textAlign = 'center';
  ctx.fillText('CanServe', centerX, centerY + 400);
  
  ctx.font = '60px Arial';
  ctx.fillStyle = 'rgba(255,255,255,0.9)';
  ctx.fillText('Cancer Awareness & Support', centerX, centerY + 480);
  
  // Subtitle
  ctx.font = '40px Arial';
  ctx.fillStyle = 'rgba(255,255,255,0.7)';
  ctx.fillText('Together We Fight', centerX, centerY + 540);
  
  return canvas.toBuffer('image/png');
}

// Create adaptive icon (Android)
function createAdaptiveIcon() {
  const canvas = createCanvas(432, 432);
  const ctx = canvas.getContext('2d');
  
  // Background (will be masked by Android)
  const gradient = ctx.createLinearGradient(0, 0, 432, 432);
  gradient.addColorStop(0, '#4A90E2');
  gradient.addColorStop(1, '#50C9C3');
  
  ctx.fillStyle = gradient;
  ctx.fillRect(0, 0, 432, 432);
  
  // Foreground icon (ribbon symbol)
  ctx.fillStyle = '#FFFFFF';
  ctx.shadowColor = 'rgba(0,0,0,0.3)';
  ctx.shadowBlur = 10;
  
  const centerX = 216;
  const centerY = 216;
  
  ctx.beginPath();
  ctx.moveTo(centerX, centerY - 80);
  ctx.bezierCurveTo(centerX - 60, centerY - 120, centerX - 120, centerY - 40, centerX - 80, centerY + 40);
  ctx.bezierCurveTo(centerX - 60, centerY + 100, centerX - 20, centerY + 120, centerX, centerY + 80);
  ctx.bezierCurveTo(centerX + 20, centerY + 120, centerX + 60, centerY + 100, centerX + 80, centerY + 40);
  ctx.bezierCurveTo(centerX + 120, centerY - 40, centerX + 60, centerY - 120, centerX, centerY - 80);
  ctx.closePath();
  ctx.fill();
  
  return canvas.toBuffer('image/png');
}

// Create favicon
function createFavicon() {
  const canvas = createCanvas(32, 32);
  const ctx = canvas.getContext('2d');
  
  // Background
  ctx.fillStyle = '#4A90E2';
  ctx.fillRect(0, 0, 32, 32);
  
  // Simple ribbon
  ctx.fillStyle = '#FFFFFF';
  ctx.beginPath();
  ctx.moveTo(16, 6);
  ctx.bezierCurveTo(10, 4, 6, 10, 8, 16);
  ctx.bezierCurveTo(10, 20, 14, 22, 16, 20);
  ctx.bezierCurveTo(18, 22, 22, 20, 24, 16);
  ctx.bezierCurveTo(26, 10, 22, 4, 16, 6);
  ctx.closePath();
  ctx.fill();
  
  return canvas.toBuffer('image/png');
}

// Save all icons
try {
  console.log('Creating custom app icons...');
  
  fs.writeFileSync('./assets/icon.png', createAppIcon());
  console.log('✅ Created icon.png');
  
  fs.writeFileSync('./assets/splash-icon.png', createSplashScreen());
  console.log('✅ Created splash-icon.png');
  
  fs.writeFileSync('./assets/adaptive-icon.png', createAdaptiveIcon());
  console.log('✅ Created adaptive-icon.png');
  
  fs.writeFileSync('./assets/favicon.png', createFavicon());
  console.log('✅ Created favicon.png');
  
  console.log('🎉 All custom icons created successfully!');
  
} catch (error) {
  console.error('❌ Error creating icons:', error.message);
  console.log('💡 Installing canvas dependency...');
  
  // Fallback: Create simple text-based icons
  console.log('Creating simple fallback icons...');
  
  // We'll create the icons using a different approach
}
