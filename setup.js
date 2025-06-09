const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');

// Command line arguments parsing
function parseArguments() {
  const args = process.argv.slice(2);
  const params = {};
  
  for (let i = 0; i < args.length; i++) {
    if (args[i] === '--project-name' && args[i + 1]) {
      params.projectName = args[i + 1];
      i++; // Skip next argument as it's the value
    } else if (args[i] === '--bundle-name' && args[i + 1]) {
      params.bundleName = args[i + 1];
      i++; // Skip next argument as it's the value
    }
  }
  
  return params;
}

// Function to rename iOS folders
function renameIOSFolders(newProjectName) {
  const iosPath = './ios';
  const oldProjectName = 'rn_boilerplate';
  
  if (!fs.existsSync(iosPath)) {
    console.log('⚠️  iOS folder not found, skipping iOS folder renaming...');
    return;
  }

  try {
    console.log('📁 Renaming iOS project folders...');
    
    // Rename the main iOS project folder
    const oldFolderPath = path.join(iosPath, oldProjectName);
    const newFolderPath = path.join(iosPath, newProjectName);
    
    if (fs.existsSync(oldFolderPath)) {
      fs.renameSync(oldFolderPath, newFolderPath);
      console.log(`   ✅ Renamed ${oldProjectName} folder to ${newProjectName}`);
    }

    // Rename the .xcodeproj folder
    const oldXcodeProjPath = path.join(iosPath, `${oldProjectName}.xcodeproj`);
    const newXcodeProjPath = path.join(iosPath, `${newProjectName}.xcodeproj`);
    
    if (fs.existsSync(oldXcodeProjPath)) {
      fs.renameSync(oldXcodeProjPath, newXcodeProjPath);
      console.log(`   ✅ Renamed ${oldProjectName}.xcodeproj to ${newProjectName}.xcodeproj`);
    }

    // Rename the .xcworkspace folder if it exists
    const oldWorkspacePath = path.join(iosPath, `${oldProjectName}.xcworkspace`);
    const newWorkspacePath = path.join(iosPath, `${newProjectName}.xcworkspace`);
    
    if (fs.existsSync(oldWorkspacePath)) {
      fs.renameSync(oldWorkspacePath, newWorkspacePath);
      console.log(`   ✅ Renamed ${oldProjectName}.xcworkspace to ${newProjectName}.xcworkspace`);
    }

    console.log('✅ iOS folders renamed successfully!');
  } catch (error) {
    console.error('❌ Error renaming iOS folders:', error.message);
    throw error;
  }
}

const { projectName, bundleName } = parseArguments();

console.log('⚡ React Native Flash Boilerplate Setup ⚡');
console.log('=======================================');

try {
  // Rename project if project name and bundle name are provided
  if (projectName && bundleName) {
    console.log(`🏷️  Renaming project to "${projectName}" with bundle "${bundleName}"...`);
    execSync(`npx react-native-rename "${projectName}" -b ${bundleName}`, { stdio: 'inherit' });
    console.log('✅ Project renamed successfully!');
    
    // Rename iOS folders after react-native-rename
    renameIOSFolders(projectName);
  } else if (projectName || bundleName) {
    console.log('⚠️  Warning: Both --project-name and --bundle-name are required for renaming.');
    console.log('   Usage: yarn setup --project-name "YourAppName" --bundle-name com.yourcompany.yourapp');
    console.log('   Continuing without renaming...\n');
  }

  console.log('📦 Installing dependencies...');
  execSync('yarn install', { stdio: 'inherit' });

  console.log('\n🔠 Linking font assets...');
  execSync('npx react-native-asset', { stdio: 'inherit' });

  console.log('\n🍎 Installing iOS dependencies...');
  execSync('cd ios && bundle install && bundle exec pod install && cd ..', { stdio: 'inherit' });

  console.log('\n✅ Setup completed successfully!');
  console.log('\n🚀 Run your app with:');
  console.log('  iOS:     yarn ios');
  console.log('  Android: yarn android');
  
  if (projectName && bundleName) {
    console.log(`\n📱 Your app "${projectName}" is ready to go!`);
    console.log(`\n📁 iOS project folders have been renamed to match "${projectName}"`);
  }
} catch (error) {
  console.error('\n❌ Setup failed with error:', error.message);
  process.exit(1);
}
