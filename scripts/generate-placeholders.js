const fs = require('fs');
const path = require('path');

// Create public directory if it doesn't exist
const publicDir = path.join(__dirname, '..', 'public');
if (!fs.existsSync(publicDir)) {
  fs.mkdirSync(publicDir, { recursive: true });
}

// Function to create an SVG placeholder
function createPlaceholder(width, height, text, filename, bgColor = '#E5E7EB', textColor = '#374151') {
  const svg = `<svg width="${width}" height="${height}" xmlns="http://www.w3.org/2000/svg">
  <rect width="${width}" height="${height}" fill="${bgColor}"/>
  <text x="50%" y="50%" font-family="Arial, sans-serif" font-size="24" fill="${textColor}" text-anchor="middle" dominant-baseline="middle">
    ${text}
  </text>
  <text x="50%" y="60%" font-family="Arial, sans-serif" font-size="16" fill="${textColor}" opacity="0.7" text-anchor="middle" dominant-baseline="middle">
    ${width}x${height}
  </text>
</svg>`;

  fs.writeFileSync(path.join(publicDir, filename), svg);
  console.log(`✓ Created ${filename}`);
}

// Generate all placeholders
console.log('Generating placeholder images...\n');

// Hero section
createPlaceholder(1200, 800, 'Hero Image', 'placeholder-hero.svg', '#E6F0FF', '#0066FF');
createPlaceholder(800, 800, 'Hero Visual', 'hero.jpg', '#E6F0FF', '#0066FF');

// Avatars (circular)
createPlaceholder(100, 100, 'User 1', 'placeholder-avatar1.svg', '#F5F3FF', '#7C3AED');
createPlaceholder(100, 100, 'User 2', 'placeholder-avatar2.svg', '#F5F3FF', '#7C3AED');
createPlaceholder(100, 100, 'User 3', 'placeholder-avatar3.svg', '#F5F3FF', '#7C3AED');
createPlaceholder(100, 100, 'User 1', 'avatar1.jpg', '#F5F3FF', '#7C3AED');
createPlaceholder(100, 100, 'User 2', 'avatar2.jpg', '#F5F3FF', '#7C3AED');
createPlaceholder(100, 100, 'User 3', 'avatar3.jpg', '#F5F3FF', '#7C3AED');

// Steps
createPlaceholder(800, 600, 'Step 1: Send Receipts', 'placeholder-step1.svg', '#E6F0FF', '#0066FF');
createPlaceholder(800, 600, 'Step 2: AI Categories', 'placeholder-step2.svg', '#E6F0FF', '#0066FF');
createPlaceholder(800, 600, 'Step 3: Get Reports', 'placeholder-step3.svg', '#E6F0FF', '#0066FF');
createPlaceholder(800, 600, 'Step 1', 'step1.jpg', '#E6F0FF', '#0066FF');
createPlaceholder(800, 600, 'Step 2', 'step2.jpg', '#E6F0FF', '#0066FF');
createPlaceholder(800, 600, 'Step 3', 'step3.jpg', '#E6F0FF', '#0066FF');

// Testimonials
createPlaceholder(200, 200, 'David M.', 'placeholder-testimonial1.svg', '#10B981', '#FFFFFF');
createPlaceholder(200, 200, 'Sarah vdM.', 'placeholder-testimonial2.svg', '#10B981', '#FFFFFF');
createPlaceholder(200, 200, 'James N.', 'placeholder-testimonial3.svg', '#10B981', '#FFFFFF');
createPlaceholder(200, 200, 'David M.', 'testimonial1.jpg', '#10B981', '#FFFFFF');
createPlaceholder(200, 200, 'Sarah vdM.', 'testimonial2.jpg', '#10B981', '#FFFFFF');
createPlaceholder(200, 200, 'James N.', 'testimonial3.jpg', '#10B981', '#FFFFFF');

// Generic placeholder
createPlaceholder(800, 600, 'Replace Me', 'placeholder.svg', '#E5E7EB', '#6B7280');

console.log('\n✅ All placeholder images generated successfully!');
console.log('\nTo use your own images:');
console.log('1. Place your images in the /public folder');
console.log('2. Update paths in /lib/image-config.ts');
console.log('3. Or visit /images-admin to see all image locations\n');
