# React Native Flash ⚡ Boilerplate

A fully-featured, modern React Native boilerplate with TypeScript support, navigation structure, multi-language capabilities, theme switching, and more!

## Features

- ⚡ Built with React Native 0.79.1
- 🧩 TypeScript for type safety
- 🧭 React Navigation v7 with ready-to-use navigation structure
- 🌗 Dark/Light theme support with ThemeProvider
- 🌐 Internationalization (i18n) with language switching
- 💾 MMKV storage for fast data persistence
- 🔄 State management with Zustand
- 🛡️ Safe Area handling
- 📱 Well-structured project architecture
- 🧹 ESLint configuration for code quality
- 📏 Consistent metrics system for responsive layouts
- 🎨 Vector Icons integration for beautiful UI elements
- 🧰 Pre-configured UI components ready to use

## Project Structure

```
src/
├── assets/           # Fonts, images, and other static files
│   └── fonts/        # Custom fonts
├── components/       # Reusable UI components
│   ├── Button/       # Button component
│   ├── SizedBox/     # Spacing component
│   └── TextField/    # Text input component
├── i18n/             # Internationalization
│   ├── locales/      # Translation files
│   └── initI18next.ts # i18n configuration
├── navigation/       # Navigation setup
│   ├── page-navigators/  # Individual navigators
│   │   ├── HomeStackNavigator.tsx
│   │   ├── AppNavigator.tsx
│   │   └── RootNavigator.tsx
├── screens/          # App screens
│   └── home/         # Home screen
│       ├── index.tsx # Screen component
│       └── styles.ts # Screen styles
├── storage/          # Storage utilities
│   └── index.ts      # MMKV setup
├── store/            # State management
│   └── useStore.ts   # Zustand store
└── theme/            # Theming system
    ├── colors.ts     # Color palette
    ├── metrics.ts    # Consistent sizing
    ├── ThemeProvider.tsx # Theme context
    └── typography.ts # Text styles
```

## Getting Started

### Prerequisites

- Node.js >= 18
- JDK 17 or newer
- Android Studio (for Android development)
- Xcode (for iOS development)
- CocoaPods (for iOS dependencies)
- Ruby (for iOS development)

### Installation

1. Clone the repository:
```bash
git clone https://github.com/phosimurg/rn-flash-boilerplate.git
cd rn_boilerplate
```

2. Use the setup script (recommended):
```bash
npm run setup
```
```bash
yarn setup
```

This setup script will:
- Install all dependencies
- Link font assets automatically
- Install iOS pods
- Configure everything for immediate use

OR install manually:

3. Install dependencies:
```bash
npm install
```
```bash
yarn install
```

4. Link assets (for fonts):
```bash
npx react-native-asset
```

5. Install iOS dependencies:
```bash
cd ios && pod install && cd ..
```

### Running the app

#### iOS
```bash
npm run ios
```
```bash
yarn ios
```

By default, this command will run the app on iPhone 16 Pro simulator using PowerShell terminal. You can customize this in package.json.

#### Android
```bash
npm run android
```
```bash
yarn android
```

#### Development server
```bash
npm run start
```
```bash
yarn start
```

## Customization

### Renaming the Project

To rename your project from "rn_boilerplate" to your preferred name:

1. Use the [React Native Rename](https://github.com/junedomingo/react-native-rename) package:

```bash
npx react-native-rename "YourAppName" -b com.yourcompany.yourappname
```

2. Update the `name` field in `package.json` to match your new project name.

3. Update the app name in `app.json` or equivalent.

### Customizing the Simulator

In `package.json`, you can change the iOS simulator by modifying:

```json
"ios": "react-native run-ios --simulator=\"iPhone 16 Pro\" --terminal powershell"
```

Replace "iPhone 16 Pro" with your preferred simulator device.

### Changing Theme Colors

Edit the theme color palette in `src/theme/colors.ts` to match your brand's color scheme.

### Using the Metrics System

The boilerplate includes a powerful metrics system in `src/theme/metrics.ts` that provides consistent spacing, sizing, and responsive values across your app:

```typescript
// Example usage in your styles
import {metrics} from '../theme/metrics';
import typography from "./typography";
import {colors} from "./colors";

const styles = StyleSheet.create({
    container: {
        paddingHorizontal: metrics.scale(10),
        marginBottom: metrics.verticalScale(15),
    },
    title: {
        fontSize: metrics.moderateScale(14),
        fontFamily: typography.BOLD,
        color: colors.primary,
    },
});
```

This ensures your UI looks consistent across different device sizes and orientations.

### Navigation Structure

This boilerplate comes with a fully configured navigation system using React Navigation v7, including:

- Stack Navigator for screen transitions
- Bottom Tab Navigator for main navigation
- Safe Area integrated navigation
- Type-safe navigation with TypeScript

Simply start using the pre-configured navigators or extend them for your specific needs.

### Vector Icons Usage

The project includes React Native Vector Icons, giving you access to thousands of customizable icons:

```typescript
import Icon from 'react-native-vector-icons/MaterialIcons';

// In your component
<Icon name="home" size={metrics.moderateScale(24)} color="#000000" />
```

### Font System

This boilerplate comes with the complete Montserrat font family pre-installed with various weights and styles:

- Manrope-Regular
- Manrope-Bold
- Manrope-ExtraLight
- Manrope-ExtraBold
- Manrope-Medium
- Manrope-Light
- Manrope-SemiBold

The `setup` script (mentioned in the Installation section) automatically links these fonts for both Android and iOS platforms, making them immediately ready to use.

#### Using the built-in fonts:

```typescript
import {typography} from '../theme/typography';
import metrics from "./metrics";

const styles = StyleSheet.create({
    title: {
        fontFamily: typography.BOLD,
        fontSize: metrics.moderateScale(14),
    },
    body: {
        fontFamily: typography.REGULAR,
        fontSize: metrics.moderateScale(12),
    }
});
```

#### Adding Custom Fonts

If you want to use different fonts:

1. Add your font files to `src/assets/fonts/`
2. Run `npx react-native-asset` to link them automatically
3. Update `src/theme/typography.ts` to include your new fonts
4. Run `cd ios && pod install && cd ..` for iOS

### Adding Translation Keys

Add or edit translation keys in the locale files located in `src/i18n/locales/`.

## Project Setup

### Setup Script

The boilerplate includes a convenient setup script that automates the project initialization process. To use it, add this script to your package.json:

```json
"scripts": {
  "setup": "node setup.js",
  // other scripts...
}
```

Then create a `setup.js` file in your project root with the following content:

```javascript
// setup.js
const { execSync } = require('child_process');

console.log('⚡ React Native Flash Boilerplate Setup ⚡');
console.log('=======================================');

try {
  console.log('📦 Installing dependencies...');
  execSync('yarn install', { stdio: 'inherit' });

  console.log('\n🔠 Linking font assets...');
  execSync('npx react-native-asset', { stdio: 'inherit' });

  console.log('\n🍎 Installing iOS dependencies...');
  execSync('cd ios && pod install && cd ..', { stdio: 'inherit' });

  console.log('\n✅ Setup completed successfully!');
  console.log('\n🚀 Run your app with:');
  console.log('  iOS:     yarn ios');
  console.log('  Android: yarn android');
} catch (error) {
  console.error('\n❌ Setup failed with error:', error.message);
  process.exit(1);
}
```

Also, create a `react-native.config.js` file in your project root:

```javascript
// react-native.config.js
module.exports = {
  project: {
    ios: {},
    android: {},
  },
  assets: ['./src/assets/fonts/'],
};
```

This setup ensures that new users of your boilerplate can get everything running with a single command.

## Dependencies

### Core
- react-native: 0.79.1
- react: 19.0.0

### Navigation
- @react-navigation/native: ^7.1.6
- @react-navigation/stack: ^7.2.10
- @react-navigation/bottom-tabs: ^7.3.10
- @react-navigation/native-stack: ^7.3.10
- react-native-screens: ^4.10.0
- react-native-safe-area-context: ^5.4.0

### State Management
- zustand: ^5.0.3

### Storage
- react-native-mmkv: ^3.2.0

### Internationalization
- i18next: ^25.0.1
- react-i18next: ^15.4.1
- react-native-localize: ^3.4.1

### UI Utilities
- react-native-svg: ^15.11.2
- react-native-vector-icons: ^10.2.0
- react-native-gesture-handler: ^2.25.0

### Code Quality
- eslint: ^8.19.0
- prettier: 2.8.8
- @react-native/eslint-config: 0.79.1

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Author

Created by Ahmet YILDIZ

---

Feel free to contribute, open issues, or suggest improvements!
