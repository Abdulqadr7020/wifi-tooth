---
last_mapped_commit: e42ffd242fcad073d7320c25c84ba520c9a278eb
last_mapped_at: 2026-10-11
---
<!-- refreshed: 2026-10-11 -->

# Architecture

**Analysis Date:** 2026-10-11

## System Overview

```text
┌─────────────────────────────────────────────────────────────┐
│                    Application Entry Point                  │
│                     `index.ts` (Expo root)                  │
└──────────────────────────────┬──────────────────────────────┘
                               │
                               ▼
┌─────────────────────────────────────────────────────────────┐
│                   App Screen / Container                     │
│                        `App.tsx`                            │
├─────────────────────────────────────────────────────────────┤
│  • SafeAreaView & StatusBar (`App.tsx:97-101`)              │
│  • Header (`SignalScope` branding + RadioTower icon)        │
│  • Scrollable Feature Feed (`ScrollView`)                   │
│  • Bottom Navigation Bar (`styles.bottomNav`)               │
└──────────────────────────────┬──────────────────────────────┘
                               │
                               ▼
┌─────────────────────────────────────────────────────────────┐
│                 Reusable UI Presentation                    │
├─────────────────────────────────────────────────────────────┤
│  FeatureCard (`App.tsx:47-89`)                              │
│  • Wi-Fi Checker Card (Large)                               │
│  • Signal Map Card (Small Grid Item)                        │
│  • Bluetooth Checker Card (Small Grid Item)                 │
└─────────────────────────────────────────────────────────────┘
```

## Component Responsibilities

| Component | Responsibility | File |
|-----------|----------------|------|
| `registerRootComponent` | Initializes Expo app environment and registers root React component | `index.ts:1-8` |
| `App` | Root component managing screen layout, status bar, header, card feed, and bottom navigation bar | `App.tsx:91-182` |
| `FeatureCard` | Reusable presentation card supporting large/small variants, icons, color theming, and tap feedback | `App.tsx:47-89` |
| `COLORS` | Palette constant holding dark-theme surface colors, text colors, and card accent themes | `App.tsx:25-35` |
| `styles` | StyleSheet object managing layout constraints, card geometry, typography, and bottom nav | `App.tsx:184-309` |

## Pattern Overview

**Overall:** Single-File Presentation Prototype (Monolithic Screen Pattern)

**Key Characteristics:**
- **Co-located Components & Styles:** The entire UI presentation, subcomponents, type interfaces, theme colors, and handlers reside in `App.tsx`.
- **Stateless Functional UI:** UI state is purely declarative and stateless, with mock actions dispatched via `Alert.alert`.
- **Dark Mode Aesthetic:** Built with custom HSL/Hex dark-slate palette (`#080B10` background with contrasting tinted card surfaces).

## Layers

**Entry Layer:**
- Purpose: Bootstrap Expo runtime and mount React component tree
- Location: `index.ts`
- Contains: `registerRootComponent` invocation
- Depends on: `expo`, `App.tsx`
- Used by: Expo Metro bundler runtime

**Presentation Layer:**
- Purpose: Render user interface elements, signal status overview, and navigation bar
- Location: `App.tsx`
- Contains: React functional components (`App`, `FeatureCard`), React Native primitives, Lucide SVG icons
- Depends on: `react-native`, `lucide-react-native`, `react-native-svg`
- Used by: `index.ts`

**Service / Hardware Layer (Planned / Absent):**
- Purpose: Interact with Wi-Fi adapters, Bluetooth radios, and device location sensors
- Location: Not yet implemented (target: `src/services/` or `src/modules/`)
- Contains: None currently

## Data Flow

### Primary User Action Path

1. User taps a feature card or bottom nav icon in `App.tsx:57` or `App.tsx:161`
2. `onPress` callback fires calling `showMessage(feature)` in `App.tsx:92-94`
3. Native alert dialog appears displaying placeholder feedback via `Alert.alert` (`App.tsx:93`)

**State Management:**
- Purely local and stateless. No React hooks (`useState`, `useReducer`), context providers, or external stores (Zustand, Redux) are currently employed.

## Key Abstractions

**FeatureCardProps:**
- Purpose: Defines structure and styling properties for dashboard feature cards
- Examples: `App.tsx:37-45`
- Pattern: Prop interface definition for reusable presentational components

## Entry Points

**Root Entry:**
- Location: `index.ts`
- Triggers: Metro bundler startup / native app launch
- Responsibilities: Registers `App` as root component with Expo

**Main UI Screen:**
- Location: `App.tsx`
- Triggers: Mounted by `index.ts`
- Responsibilities: Renders the home dashboard UI

## Architectural Constraints

- **Single-Threaded JS Engine:** Mobile animations, sensor updates, and UI rendering execute on the JavaScript thread via Hermes. Intensive scanning routines must run asynchronously to prevent blocking the UI.
- **Expo CNG (Continuous Native Generation):** Native directories (`ios/`, `android/`) are generated at build time via `app.json` plugins. No manual modifications to Xcode or Gradle projects are allowed.
- **Expo Router Navigation Mandate:** Project architectural rule in `AGENTS.md` mandates Expo Router file-based navigation in `src/app/`. The current codebase is still using a root `App.tsx` layout without Expo Router.

## Anti-Patterns

### Monolithic Screen File

**What happens:** All components (`FeatureCard`), styles (`styles`), types (`FeatureCardProps`), and constants (`COLORS`) are defined together inside `App.tsx`.
**Why it's wrong:** Limits reusability, clutters navigation logic, and makes scaling the app into multiple feature screens difficult.
**Do this instead:** Extract components into `src/components/`, design tokens into `src/constants/theme.ts`, and screens into Expo Router paths under `src/app/`.

### Native StatusBar vs Expo Status Bar

**What happens:** `App.tsx:9` imports `StatusBar` from `react-native`, while `expo-status-bar` is installed in `package.json:7`.
**Why it's wrong:** `react-native`'s `StatusBar` can lead to cross-platform inconsistencies in Expo apps, while `expo-status-bar` automatically handles translucent bars and orientation changes.
**Do this instead:** Import `StatusBar` from `expo-status-bar` (`<StatusBar style="light" />`).

## Error Handling

**Strategy:** Default React Native error handling via development redbox/logbox. No `ErrorBoundary` component wraps the UI tree.

## Cross-Cutting Concerns

**Theming:** Centralized `COLORS` constant in `App.tsx:25-35`.
**Icons:** SVG-backed vector icons via `lucide-react-native` and `react-native-svg`.
**Permissions:** Not yet implemented (will be required for Wi-Fi and Bluetooth capabilities).

---

*Architecture analysis: 2026-10-11*
