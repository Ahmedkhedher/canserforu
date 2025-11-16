// Simple icon creation script
const fs = require('fs');

// Create SVG app icon
const appIconSVG = `
<svg width="1024" height="1024" viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <linearGradient id="bgGradient" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style="stop-color:#4A90E2;stop-opacity:1" />
      <stop offset="100%" style="stop-color:#50C9C3;stop-opacity:1" />
    </linearGradient>
    <filter id="shadow" x="-50%" y="-50%" width="200%" height="200%">
      <feDropShadow dx="0" dy="10" stdDeviation="20" flood-color="rgba(0,0,0,0.3)"/>
    </filter>
  </defs>
  
  <!-- Background with rounded corners -->
  <rect width="1024" height="1024" rx="180" ry="180" fill="url(#bgGradient)"/>
  
  <!-- Cancer awareness ribbon -->
  <path d="M 512 200 
           C 400 150, 250 250, 300 450
           C 330 550, 400 600, 450 550
           C 500 600, 570 550, 600 450
           C 650 250, 500 150, 512 200
           
           M 512 200
           C 462 180, 432 220, 462 280
           C 492 320, 532 320, 562 280
           C 592 220, 562 180, 512 200 Z" 
        fill="white" 
        filter="url(#shadow)"/>
  
  <!-- Heart symbol -->
  <path d="M 512 500
           C 512 470, 482 450, 462 450
           C 442 450, 412 470, 412 500
           C 412 530, 512 600, 512 600
           C 512 600, 612 530, 612 500
           C 612 470, 582 450, 562 450
           C 542 450, 512 470, 512 500 Z" 
        fill="#FF6B9D"/>
  
  <!-- App name -->
  <text x="512" y="750" text-anchor="middle" font-family="Arial, sans-serif" font-size="80" font-weight="bold" fill="white">CanServe</text>
  <text x="512" y="820" text-anchor="middle" font-family="Arial, sans-serif" font-size="40" fill="rgba(255,255,255,0.8)">Cancer Support</text>
</svg>
`;

// Create SVG splash screen
const splashSVG = `
<svg width="1284" height="2778" viewBox="0 0 1284 2778" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <linearGradient id="splashGradient" x1="0%" y1="0%" x2="0%" y2="100%">
      <stop offset="0%" style="stop-color:#4A90E2;stop-opacity:1" />
      <stop offset="50%" style="stop-color:#50C9C3;stop-opacity:1" />
      <stop offset="100%" style="stop-color:#4A90E2;stop-opacity:1" />
    </linearGradient>
    <filter id="splashShadow" x="-50%" y="-50%" width="200%" height="200%">
      <feDropShadow dx="0" dy="15" stdDeviation="30" flood-color="rgba(0,0,0,0.3)"/>
    </filter>
  </defs>
  
  <!-- Background -->
  <rect width="1284" height="2778" fill="url(#splashGradient)"/>
  
  <!-- Decorative circles -->
  <circle cx="200" cy="400" r="80" fill="rgba(255,255,255,0.1)"/>
  <circle cx="1000" cy="600" r="120" fill="rgba(255,255,255,0.08)"/>
  <circle cx="300" cy="1200" r="100" fill="rgba(255,255,255,0.06)"/>
  <circle cx="900" cy="1800" r="90" fill="rgba(255,255,255,0.1)"/>
  <circle cx="150" cy="2200" r="110" fill="rgba(255,255,255,0.07)"/>
  
  <!-- Main ribbon symbol -->
  <path d="M 642 1189
           C 492 1089, 342 1289, 442 1589
           C 492 1739, 592 1789, 642 1689
           C 692 1789, 792 1739, 842 1589
           C 942 1289, 792 1089, 642 1189 Z" 
        fill="white" 
        filter="url(#splashShadow)"/>
  
  <!-- App title -->
  <text x="642" y="1789" text-anchor="middle" font-family="Arial, sans-serif" font-size="120" font-weight="bold" fill="white">CanServe</text>
  <text x="642" y="1869" text-anchor="middle" font-family="Arial, sans-serif" font-size="60" fill="rgba(255,255,255,0.9)">Cancer Awareness &amp; Support</text>
  <text x="642" y="1929" text-anchor="middle" font-family="Arial, sans-serif" font-size="40" fill="rgba(255,255,255,0.7)">Together We Fight</text>
</svg>
`;

// Create simple adaptive icon
const adaptiveIconSVG = `
<svg width="432" height="432" viewBox="0 0 432 432" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <linearGradient id="adaptiveGradient" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style="stop-color:#4A90E2;stop-opacity:1" />
      <stop offset="100%" style="stop-color:#50C9C3;stop-opacity:1" />
    </linearGradient>
  </defs>
  
  <!-- Background -->
  <rect width="432" height="432" fill="url(#adaptiveGradient)"/>
  
  <!-- Ribbon symbol -->
  <path d="M 216 136
           C 156 116, 96 156, 136 256
           C 156 316, 196 336, 216 296
           C 236 336, 276 316, 296 256
           C 336 156, 276 116, 216 136 Z" 
        fill="white"/>
</svg>
`;

// Create favicon
const faviconSVG = `
<svg width="32" height="32" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
  <rect width="32" height="32" fill="#4A90E2"/>
  <path d="M 16 8
           C 12 6, 8 10, 10 16
           C 12 20, 14 22, 16 20
           C 18 22, 20 20, 22 16
           C 24 10, 20 6, 16 8 Z" 
        fill="white"/>
</svg>
`;

// Save SVG files
fs.writeFileSync('./assets/icon.svg', appIconSVG);
fs.writeFileSync('./assets/splash.svg', splashSVG);
fs.writeFileSync('./assets/adaptive.svg', adaptiveIconSVG);
fs.writeFileSync('./assets/favicon.svg', faviconSVG);

console.log('✅ Created SVG icons');
console.log('📝 To convert to PNG, you can use online converters or install sharp/imagemagick');
console.log('🎯 Files created: icon.svg, splash.svg, adaptive.svg, favicon.svg');
