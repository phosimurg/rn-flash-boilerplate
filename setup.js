const { execSync } = require('child_process');

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

const { projectName, bundleName } = parseArguments();

console.log('⚡ React Native Flash Boilerplate Setup ⚡');
console.log('=======================================');

try {
  // Rename project if project name and bundle name are provided
  if (projectName && bundleName) {
    console.log(`🏷️  Renaming project to "${projectName}" with bundle "${bundleName}"...`);
    execSync(`npx react-native-rename "${projectName}" -b ${bundleName}`, { stdio: 'inherit' });
    console.log('✅ Project renamed successfully!');
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
  }
} catch (error) {
  console.error('\n❌ Setup failed with error:', error.message);
  process.exit(1);
}
