const fs = require('fs');

async function scrape() {
  const res = await fetch('https://www.maisonlaplage.com.tr/');
  const html = await res.text();
  
  // Extract images
  const imgRegex = /https:\/\/static\.wixstatic\.com\/media\/[a-zA-Z0-9_\-]+\.(jpg|jpeg|png|webp)/g;
  const images = [...new Set(html.match(imgRegex))];
  
  // Extract text
  const texts = html.replace(/<[^>]*>?/gm, ' ').replace(/\s+/g, ' ').trim();
  const sampleText = texts.substring(0, 2000);
  
  // Write to scratch file
  fs.writeFileSync('scratch-wix.json', JSON.stringify({ images, sampleText }, null, 2));
  console.log('Scraped!');
}

scrape().catch(console.error);
