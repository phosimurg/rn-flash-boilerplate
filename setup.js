const { execSync } = require('child_process');

console.log('⚡ React Native Flash Boilerplate Setup ⚡');
console.log('=======================================');

try {
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
} catch (error) {
  console.error('\n❌ Setup failed with error:', error.message);
  process.exit(1);
}
