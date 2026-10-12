---
last_mapped_commit: e42ffd242fcad073d7320c25c84ba520c9a278eb
last_mapped_at: 2026-10-11
---
# Technology Stack

**Analysis Date:** 2026-10-11

## Languages

**Primary:**
- TypeScript 6.0.3 (`~6.0.3` in `package.json`) - Application UI and root component code in `App.tsx` and `index.ts`. Strict mode enabled via `tsconfig.json`.

**Secondary:**
- JavaScript (ES Modules / CommonJS) - Tooling and linter configuration in `eslint.config.js`.

## Runtime

**Environment:**
- Node.js (v20+ LTS recommended for Expo SDK 57)
- React Native 0.86.3 - Mobile runtime executing on Android and iOS devices
- JavaScript Engine: Hermes (default bundled with Expo SDK 57)

**Package Manager:**
- npm (lockfile `package-lock.json` present)
- Note: Project uses `npx` / `npm` commands; `bun.lock` is not present

## Frameworks

**Core:**
- Expo SDK 57 (`~57.0.27` in `package.json`) - Universal React Native framework for cross-platform mobile apps
- React 19.2.3 - Core declarative UI library
- React Native 0.86.3 - Native mobile platform primitives (`SafeAreaView`, `ScrollView`, `View`, `Text`, `TouchableOpacity`, `StatusBar`, `Alert`)

**Testing:**
- None installed - No test runner configured in `package.json`

**Build/Dev:**
- Metro Bundler (bundled with `expo`) - Fast JavaScript bundler for React Native
- TypeScript Compiler (`typescript` `~6.0.3`) - Type checking (`tsconfig.json`)
- ESLint 9 (`eslint` `^9.0.0` with `eslint-config-expo` `~57.0.2`) - Static analysis (`eslint.config.js`)

## Key Dependencies

**Critical:**
- `expo` (`~57.0.27`) - Core application container, runtime lifecycle, and module loader (`index.ts`)
- `react-native` (`0.86.3`) - Mobile UI primitives, layout system, and native bridges (`App.tsx`)
- `lucide-react-native` (`^1.55.0`) - Icon library for UI cards and navigation items (`RadioTower`, `Wifi`, `Map`, `Bluetooth`, `ArrowUpRight`, `House`, `Clock`, `Settings`) in `App.tsx`
- `react-native-svg` (`15.15.4`) - SVG rendering backend required by `lucide-react-native`
- `expo-status-bar` (`~57.0.1`) - Expo-managed status bar controller dependency in `package.json`

**Infrastructure:**
- `@types/react` (`~19.2.2`) - Type definitions for React 19
- `expo/tsconfig.base` - Base compiler options extended by `tsconfig.json`

## Configuration

**Environment:**
- No `.env` files currently loaded; runtime environment managed through Expo configuration in `app.json`

**Build & App Manifest:**
- `app.json` - Expo project manifest configuring app identity (`Wi-Fitooth`), orientation (`portrait`), icons, splash screen, and Android adaptive icon settings
- `tsconfig.json` - TypeScript compiler settings (`strict: true`, `jsx: "react-jsx"`, includes `**/*.ts`, `**/*.tsx`, `.expo/types/**/*.ts`, `expo-env.d.ts`)
- `eslint.config.js` - ESLint flat config setup extending `eslint-config-expo/flat`

## Platform Requirements

**Development:**
- Windows / macOS / Linux with Node.js installed
- Expo CLI (`npx expo start`) running Metro dev server
- Testing on device via Expo Go or native Development Builds (`npx expo run:android` / `npx expo run:ios`)
- Continuous Native Generation (CNG) active — native `android/` and `ios/` folders are gitignored and generated dynamically

**Production:**
- Android: APK / AAB build targets generated via EAS Build (`eas build --platform android`)
- iOS: IPA build targets generated via EAS Build (`eas build --platform ios`)

---

*Stack analysis: 2026-10-11*
*Update after major dependency changes*
