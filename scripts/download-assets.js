/**
 * Download Lovable assets for Netlify deployment
 * This script downloads all images from Lovable's CDN to local public folder
 */

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { dirname } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const LOVABLE_BASE = 'https://mehbub-digital-showcase.lovable.app';
const ASSETS_DIR = path.join(__dirname, '..', 'src', 'assets');
const PUBLIC_DIR = path.join(__dirname, '..', 'public', 'images');

// Create public images directory
if (!fs.existsSync(PUBLIC_DIR)) {
  fs.mkdirSync(PUBLIC_DIR, { recursive: true });
}

async function downloadAsset(url, filename) {
  try {
    console.log(`Downloading ${filename}...`);
    const response = await fetch(url);
    
    if (!response.ok) {
      console.error(`Failed to download ${filename}: ${response.status}`);
      return false;
    }
    
    const buffer = await response.arrayBuffer();
    const outputPath = path.join(PUBLIC_DIR, filename);
    fs.writeFileSync(outputPath, Buffer.from(buffer));
    console.log(`✓ Downloaded ${filename}`);
    return true;
  } catch (error) {
    console.error(`Error downloading ${filename}:`, error.message);
    return false;
  }
}

async function processAssetFiles() {
  const assetFiles = fs.readdirSync(ASSETS_DIR)
    .filter(file => file.endsWith('.asset.json'));
  
  console.log(`Found ${assetFiles.length} asset files to process\n`);
  
  let successCount = 0;
  let failCount = 0;
  
  for (const assetFile of assetFiles) {
    const assetPath = path.join(ASSETS_DIR, assetFile);
    const assetData = JSON.parse(fs.readFileSync(assetPath, 'utf8'));
    
    const url = `${LOVABLE_BASE}${assetData.url}`;
    const filename = assetData.original_filename;
    
    const success = await downloadAsset(url, filename);
    if (success) {
      successCount++;
      
      // Update asset JSON to point to local file
      assetData.url = `/images/${filename}`;
      fs.writeFileSync(assetPath, JSON.stringify(assetData, null, 2));
    } else {
      failCount++;
    }
    
    // Small delay to avoid overwhelming the server
    await new Promise(resolve => setTimeout(resolve, 100));
  }
  
  console.log(`\n✓ Downloaded ${successCount} assets`);
  if (failCount > 0) {
    console.log(`✗ Failed ${failCount} assets`);
  }
}

// Also process partner logos
async function processPartnerLogos() {
  const partnersDir = path.join(ASSETS_DIR, 'partners');
  if (!fs.existsSync(partnersDir)) {
    return;
  }
  
  const partnerFiles = fs.readdirSync(partnersDir)
    .filter(file => file.endsWith('.asset.json'));
  
  console.log(`\nProcessing ${partnerFiles.length} partner logos...\n`);
  
  for (const assetFile of partnerFiles) {
    const assetPath = path.join(partnersDir, assetFile);
    const assetData = JSON.parse(fs.readFileSync(assetPath, 'utf8'));
    
    const url = `${LOVABLE_BASE}${assetData.url}`;
    const filename = assetData.original_filename;
    
    await downloadAsset(url, filename);
    
    // Update asset JSON
    assetData.url = `/images/${filename}`;
    fs.writeFileSync(assetPath, JSON.stringify(assetData, null, 2));
    
    await new Promise(resolve => setTimeout(resolve, 100));
  }
}

console.log('Starting asset download from Lovable CDN...\n');

processAssetFiles()
  .then(() => processPartnerLogos())
  .then(() => {
    console.log('\n✓ All assets downloaded successfully!');
    console.log(`Assets saved to: ${PUBLIC_DIR}`);
  })
  .catch(error => {
    console.error('\n✗ Error during asset download:', error);
    process.exit(1);
  });
