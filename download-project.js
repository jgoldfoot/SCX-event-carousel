const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

// Create a simple archive by copying all files to a new directory
function createProjectArchive() {
  const projectName = 'event-carousel-project';
  const archiveDir = path.join(process.cwd(), projectName);
  
  // Create archive directory
  if (fs.existsSync(archiveDir)) {
    fs.rmSync(archiveDir, { recursive: true });
  }
  fs.mkdirSync(archiveDir);
  
  // Files and directories to include
  const filesToCopy = [
    'src',
    'public',
    'package.json',
    'package-lock.json',
    'tsconfig.json',
    'tsconfig.app.json',
    'tsconfig.node.json',
    'vite.config.ts',
    'tailwind.config.js',
    'postcss.config.js',
    'eslint.config.js',
    'index.html',
    'README.md',
    'LICENSE'
  ];
  
  // Copy files
  filesToCopy.forEach(item => {
    const srcPath = path.join(process.cwd(), item);
    const destPath = path.join(archiveDir, item);
    
    if (fs.existsSync(srcPath)) {
      const stat = fs.statSync(srcPath);
      if (stat.isDirectory()) {
        copyDirectory(srcPath, destPath);
      } else {
        fs.copyFileSync(srcPath, destPath);
      }
    }
  });
  
  console.log(`Project files copied to: ${archiveDir}`);
  console.log('\nTo use this project:');
  console.log(`1. Navigate to the ${projectName} directory`);
  console.log('2. Run: npm install');
  console.log('3. Run: npm run dev');
}

function copyDirectory(src, dest) {
  if (!fs.existsSync(dest)) {
    fs.mkdirSync(dest, { recursive: true });
  }
  
  const entries = fs.readdirSync(src, { withFileTypes: true });
  
  for (const entry of entries) {
    const srcPath = path.join(src, entry.name);
    const destPath = path.join(dest, entry.name);
    
    if (entry.isDirectory()) {
      copyDirectory(srcPath, destPath);
    } else {
      fs.copyFileSync(srcPath, destPath);
    }
  }
}

createProjectArchive();