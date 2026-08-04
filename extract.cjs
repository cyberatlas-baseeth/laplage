const fs=require('fs');
const html=fs.readFileSync('C:/Users/Taha/.gemini/antigravity/brain/5fc27994-a3db-4599-8c7c-38bc069982e6/.system_generated/steps/4/content.md', 'utf8');

// Use a simple regex to find all text inside <span> and <h1..6> tags that are not script/style
const texts = html.replace(/<script[^>]*>[\s\S]*?<\/script>/gi, '')
                  .replace(/<style[^>]*>[\s\S]*?<\/style>/gi, '')
                  .replace(/<[^>]+>/g, ' ')
                  .replace(/\s+/g, ' ')
                  .trim();

console.log(texts.substring(0, 5000));
