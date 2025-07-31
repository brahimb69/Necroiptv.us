#!/usr/bin/env node

// Script to create generic placeholder logos for platforms section
// This removes any potential copyright issues with real company logos

const fs = require('fs');
const path = require('path');

const logoDir = './frontend/public/images/logos';
const logoCount = 10;

// Simple SVG logo templates with generic designs
const logoTemplates = [
  // Circle with letter
  (num) => `<svg width="160" height="80" viewBox="0 0 160 80" xmlns="http://www.w3.org/2000/svg">
    <rect width="160" height="80" fill="#f8f9fa" rx="8"/>
    <circle cx="80" cy="40" r="25" fill="#6366f1"/>
    <text x="80" y="48" text-anchor="middle" fill="white" font-family="Arial, sans-serif" font-size="24" font-weight="bold">P${num}</text>
  </svg>`,
  
  // Rectangle with text
  (num) => `<svg width="160" height="80" viewBox="0 0 160 80" xmlns="http://www.w3.org/2000/svg">
    <rect width="160" height="80" fill="#f8f9fa" rx="8"/>
    <rect x="20" y="25" width="120" height="30" fill="#8b5cf6" rx="4"/>
    <text x="80" y="44" text-anchor="middle" fill="white" font-family="Arial, sans-serif" font-size="16" font-weight="bold">Platform ${num}</text>
  </svg>`,
  
  // Diamond shape
  (num) => `<svg width="160" height="80" viewBox="0 0 160 80" xmlns="http://www.w3.org/2000/svg">
    <rect width="160" height="80" fill="#f8f9fa" rx="8"/>
    <polygon points="80,15 105,40 80,65 55,40" fill="#06b6d4"/>
    <text x="80" y="45" text-anchor="middle" fill="white" font-family="Arial, sans-serif" font-size="14" font-weight="bold">P${num}</text>
  </svg>`,
  
  // Hexagon
  (num) => `<svg width="160" height="80" viewBox="0 0 160 80" xmlns="http://www.w3.org/2000/svg">
    <rect width="160" height="80" fill="#f8f9fa" rx="8"/>
    <polygon points="65,20 95,20 105,40 95,60 65,60 55,40" fill="#10b981"/>
    <text x="80" y="45" text-anchor="middle" fill="white" font-family="Arial, sans-serif" font-size="14" font-weight="bold">CH${num}</text>
  </svg>`,
  
  // Square with gradient
  (num) => `<svg width="160" height="80" viewBox="0 0 160 80" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <linearGradient id="grad${num}" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stop-color="#f59e0b"/>
        <stop offset="100%" stop-color="#dc2626"/>
      </linearGradient>
    </defs>
    <rect width="160" height="80" fill="#f8f9fa" rx="8"/>
    <rect x="30" y="20" width="100" height="40" fill="url(#grad${num})" rx="6"/>
    <text x="80" y="44" text-anchor="middle" fill="white" font-family="Arial, sans-serif" font-size="14" font-weight="bold">NET ${num}</text>
  </svg>`,
  
  // Rounded rectangle
  (num) => `<svg width="160" height="80" viewBox="0 0 160 80" xmlns="http://www.w3.org/2000/svg">
    <rect width="160" height="80" fill="#f8f9fa" rx="8"/>
    <rect x="25" y="22" width="110" height="36" fill="#ec4899" rx="18"/>
    <text x="80" y="44" text-anchor="middle" fill="white" font-family="Arial, sans-serif" font-size="14" font-weight="bold">Stream ${num}</text>
  </svg>`,
  
  // Triangle
  (num) => `<svg width="160" height="80" viewBox="0 0 160 80" xmlns="http://www.w3.org/2000/svg">
    <rect width="160" height="80" fill="#f8f9fa" rx="8"/>
    <polygon points="80,18 110,62 50,62" fill="#8b5cf6"/>
    <text x="80" y="50" text-anchor="middle" fill="white" font-family="Arial, sans-serif" font-size="12" font-weight="bold">TV${num}</text>
  </svg>`,
  
  // Star shape
  (num) => `<svg width="160" height="80" viewBox="0 0 160 80" xmlns="http://www.w3.org/2000/svg">
    <rect width="160" height="80" fill="#f8f9fa" rx="8"/>
    <polygon points="80,20 85,35 100,35 88,45 93,60 80,50 67,60 72,45 60,35 75,35" fill="#f59e0b"/>
    <text x="80" y="30" text-anchor="middle" fill="white" font-family="Arial, sans-serif" font-size="10" font-weight="bold">${num}</text>
  </svg>`,
  
  // Oval
  (num) => `<svg width="160" height="80" viewBox="0 0 160 80" xmlns="http://www.w3.org/2000/svg">
    <rect width="160" height="80" fill="#f8f9fa" rx="8"/>
    <ellipse cx="80" cy="40" rx="45" ry="25" fill="#14b8a6"/>
    <text x="80" y="45" text-anchor="middle" fill="white" font-family="Arial, sans-serif" font-size="14" font-weight="bold">CH ${num}</text>
  </svg>`,
  
  // Multiple circles
  (num) => `<svg width="160" height="80" viewBox="0 0 160 80" xmlns="http://www.w3.org/2000/svg">
    <rect width="160" height="80" fill="#f8f9fa" rx="8"/>
    <circle cx="60" cy="40" r="15" fill="#6366f1"/>
    <circle cx="80" cy="40" r="15" fill="#8b5cf6"/>
    <circle cx="100" cy="40" r="15" fill="#ec4899"/>
    <text x="80" y="65" text-anchor="middle" fill="#374151" font-family="Arial, sans-serif" font-size="12" font-weight="bold">Platform ${num}</text>
  </svg>`
];

console.log('🎨 Creating generic platform logos...\n');

// Ensure logo directory exists
if (!fs.existsSync(logoDir)) {
  fs.mkdirSync(logoDir, { recursive: true });
  console.log(`Created directory: ${logoDir}`);
}

// Create PNG files from SVG templates
for (let i = 1; i <= logoCount; i++) {
  const templateIndex = (i - 1) % logoTemplates.length;
  const svgContent = logoTemplates[templateIndex](i);
  const logoPath = path.join(logoDir, `logo-${i}.svg`);
  
  try {
    fs.writeFileSync(logoPath, svgContent);
    console.log(`✓ Created: logo-${i}.svg`);
  } catch (error) {
    console.error(`✗ Error creating logo-${i}.svg: ${error.message}`);
  }
}

// Update the Platforms.jsx to use SVG files instead of PNG
const platformsJsxPath = './frontend/app/components/sections/Platforms.jsx';
if (fs.existsSync(platformsJsxPath)) {
  try {
    let content = fs.readFileSync(platformsJsxPath, 'utf8');
    
    // Replace PNG imports with SVG imports
    for (let i = 1; i <= logoCount; i++) {
      const oldImport = `import logo${i} from "@/public/images/logos/logo-${i}.png";`;
      const newImport = `import logo${i} from "@/public/images/logos/logo-${i}.svg";`;
      content = content.replace(oldImport, newImport);
    }
    
    fs.writeFileSync(platformsJsxPath, content);
    console.log('\n✓ Updated Platforms.jsx to use SVG logos');
  } catch (error) {
    console.error(`✗ Error updating Platforms.jsx: ${error.message}`);
  }
}

console.log('\n🎉 Generic platform logos created successfully!');
console.log('All potentially copyrighted logos have been replaced with generic designs.');
