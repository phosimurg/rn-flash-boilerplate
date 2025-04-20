# React Native Flash ⚡ Boilerplate

A fully-featured, modern React Native boilerplate with TypeScript support, navigation structure, multi-language capabilities, theme switching, and more!

## Features

- ⚡ Built with React Native 0.79.1
- 🧩 TypeScript for type safety
- 🧭 React Navigation v7 with pre-configured navigators (Stack, Bottom Tabs)
- 🌗 Dark/Light theme support with ThemeProvider
- 🌐 Internationalization (i18n) with language switching
- 💾 MMKV storage for fast data persistence
- 🔄 State management with Zustand
- 🛡️ Safe Area handling
- 📱 Well-structured project architecture

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
    └── Typography.ts # Text styles
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

2. Install dependencies:
```bash
npm install
```
```bash
yarn install
```

3. Install iOS dependencies:
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

### Adding Custom Fonts

1. Add your font files to `src/assets/fonts/`
2. Link the fonts by adding them to your iOS and Android configuration
3. Update `src/theme/Typography.ts` to use your custom fonts

### Adding Translation Keys

Add or edit translation keys in the locale files located in `src/i18n/locales/`.

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

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Author

Created by Ahmet YILDIZ

---

Feel free to contribute, open issues, or suggest improvements!
