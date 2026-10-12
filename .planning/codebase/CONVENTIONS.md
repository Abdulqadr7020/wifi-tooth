---
last_mapped_commit: e42ffd242fcad073d7320c25c84ba520c9a278eb
last_mapped_at: 2026-10-11
---
# Coding Conventions

**Analysis Date:** 2026-10-11

## Naming Patterns

**Files:**
- Component files: PascalCase (e.g. `App.tsx`, target `FeatureCard.tsx`)
- Entry and module files: camelCase (e.g. `index.ts`)
- Configuration and definitions: kebab-case (e.g. `app.json`, `eslint.config.js`, `expo-env.d.ts`)

**Functions & Components:**
- Functional Components: PascalCase (e.g. `FeatureCard`, `App` in `App.tsx`)
- Handler functions: camelCase with action prefix (e.g. `showMessage`, `onPress` in `App.tsx:43,92`)
- Lifecycle / registration: camelCase (e.g. `registerRootComponent` in `index.ts:1`)

**Variables & Constants:**
- Global constant dictionaries: UPPER_SNAKE_CASE (e.g. `COLORS` in `App.tsx:25`)
- Component props: camelCase (e.g. `title`, `subtitle`, `background`, `large` in `App.tsx:38-44`)
- Style sheets: camelCase identifier `styles` created via `StyleSheet.create` (`App.tsx:184`)

**Types & Interfaces:**
- Component prop interfaces: `[ComponentName]Props` pattern in PascalCase (e.g. `FeatureCardProps` in `App.tsx:37`)
- Third-party imported types: PascalCase (e.g. `type { LucideIcon }` in `App.tsx:23`)

## Code Style

**Formatting:**
- Indentation: 2 spaces
- Quotes: Single quotes preferred for TypeScript strings and imports (`import React from 'react';`)
- Semicolons: Required at statement endings (`App.tsx:35,90,181`)
- Trailing commas: Used on multiline objects, arrays, and parameter lists (`App.tsx:11,22,35`)

**Linting:**
- Tool: ESLint 9 using Flat Config (`eslint.config.js`)
- Base Config: `eslint-config-expo/flat`
- Ignores: `dist/*` in `eslint.config.js:8` (Note: `.agents/` should also be ignored to prevent third-party linter warnings)

## Import Organization

**Order:**
1. React core imports (`import React from 'react';` in `App.tsx:1`)
2. React Native UI primitives (`import { SafeAreaView, ScrollView, View, Text, StyleSheet, TouchableOpacity, StatusBar, Alert } from 'react-native';` in `App.tsx:2-11`)
3. Third-party components and libraries (`import { RadioTower, Wifi, Map, Bluetooth, ArrowUpRight, House, Clock, Settings } from 'lucide-react-native';` in `App.tsx:13-22`)
4. Type-only imports using `type` modifier (`import type { LucideIcon } from 'lucide-react-native';` in `App.tsx:23`)
5. Local module imports (`import App from './App';` in `index.ts:3`)

**Path Aliases:**
- Standard relative imports currently used (`./App` in `index.ts:3`).
- Path aliases (e.g. `@/*`) are not yet defined in `tsconfig.json`.

## Error Handling

**Patterns:**
- Alert-based user messaging for unimplemented features (`Alert.alert(feature, ...)` in `App.tsx:93`)
- Native runtime errors surfaced via Expo LogBox
- Recommendation for upcoming services: Use standard `try/catch` wrapping asynchronous native module calls (e.g. Wi-Fi and Bluetooth scanning APIs) and surface errors through typed state objects rather than crashing.

## Logging

**Framework:**
- Built-in `console` (`console.log`, `console.warn`, `console.error`)
- Development logs streamed to the terminal by Metro bundler during `expo start`

## Comments

**When to Comment:**
- Explain initialization side-effects and cross-platform native bridging behavior (e.g. Expo bootstrap comments in `index.ts:5-7`)
- Mark major UI sections (e.g. `{/* Header */}`, `{/* Wi-Fi Card */}`, `{/* Small Cards */}`, `{/* Bottom Navigation */}` in `App.tsx:108,122,133,159`)

**JSDoc/TSDoc:**
- Lightly used; type contracts are enforced via TypeScript interfaces (`FeatureCardProps`) rather than verbose JSDoc blocks.

## Function Design

**Size:**
- Presentational components are concise and focused (`FeatureCard` is ~35 lines in `App.tsx:47-89`).
- Components with complex state should be decomposed when exceeding 150-200 lines.

**Parameters:**
- Destructured props object with optional default values (`large = false` in `FeatureCard` in `App.tsx:54`).

**Return Values:**
- JSX elements for components (`return <TouchableOpacity ... />`).

## Module Design

**Exports:**
- Default exports for screens and root containers (`export default function App()` in `App.tsx:91`)
- Named exports recommended for reusable UI components and helper utilities

---

*Convention analysis: 2026-10-11*
