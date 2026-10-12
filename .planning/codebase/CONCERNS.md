---
last_mapped_commit: e42ffd242fcad073d7320c25c84ba520c9a278eb
last_mapped_at: 2026-10-11
---
# Codebase Concerns

**Analysis Date:** 2026-10-11

## Tech Debt

**Monolithic Screen Architecture:**
- Issue: Components (`FeatureCard`), styling (`styles`), types (`FeatureCardProps`), and constants (`COLORS`) are defined together in `App.tsx`.
- Files: `App.tsx`
- Impact: Hinders code reusability, testing isolation, and extensibility as more screens are introduced.
- Fix approach: Extract presentational cards into `src/components/`, tokens into `src/constants/theme.ts`, and migrate to Expo Router.

**Missing Router Navigation:**
- Issue: The project rules in `AGENTS.md` mandate file-based routing with Expo Router (`src/app/`), but the app currently uses a static bottom bar and `Alert.alert` calls.
- Files: `App.tsx:160-178`, `AGENTS.md:26-30`
- Impact: Users cannot navigate to distinct screens for Wi-Fi scanning, signal mapping, or Bluetooth discovery.
- Fix approach: Install `expo-router` and configure file-based routes in `src/app/`.

**Linter Scope Configuration:**
- Issue: `eslint.config.js` only ignores `dist/*`. When running `npx expo lint`, ESLint scans `.agents/` scripts and reports thousands of third-party syntax and scoping errors.
- Files: `eslint.config.js:8`
- Impact: Blocks developers from using `expo lint` to validate application code cleanly.
- Fix approach: Add `".agents/*"`, `".claude/*"`, and `".expo/*"` to the `ignores` array in `eslint.config.js`.

**Mismatched StatusBar Implementation:**
- Issue: `package.json` installs `expo-status-bar`, but `App.tsx:9,98` imports and renders `StatusBar` from `react-native`.
- Files: `App.tsx:9,98-101`, `package.json:7`
- Impact: Potential status bar color / translucency inconsistencies across Android and iOS versions.
- Fix approach: Switch to `<StatusBar style="light" />` from `expo-status-bar`.

## Known Bugs

**None in Active Logic:**
- Current application logic is minimal (static presentation and alerts), so no runtime exceptions are present.

## Security Considerations

**Hardware & Location Permissions:**
- Risk: Wi-Fi scanning and Bluetooth LE discovery on modern Android (Android 12/13+) and iOS require sensitive runtime permissions (`ACCESS_FINE_LOCATION`, `NEARBY_WIFI_DEVICES`, `BLUETOOTH_SCAN`). Premature or unhandled permission requests will cause scanning crashes or store rejections.
- Files: Target scanning modules (not yet created) and `app.json`
- Current mitigation: None in place yet (features are currently mocked).
- Recommendations: Add necessary Android permissions and iOS usage descriptions in `app.json` plugins. Implement runtime permission checks and explanatory fallback UI when permissions are denied.

## Performance Bottlenecks

**Frequent Radio Scanning on JS Thread:**
- Problem: Real-time Wi-Fi and Bluetooth RSSI scanning generates frequent event streams that can flood the React Native bridge/JSI and drain device battery.
- Files: Future scanning service modules
- Cause: Unthrottled listener broadcasts updating React state directly.
- Improvement path: Throttle scan updates (e.g. 1-2 Hz sampling rate), aggregate samples, and handle intensive signal computations off the UI thread.

## Fragile Areas

**Expo Go vs Development Builds:**
- Files: `package.json`, `app.json`
- Why fragile: Expo Go cannot run custom native modules (like native Wi-Fi BSSID scanners or `react-native-ble-plx`). Adding these packages requires migrating from Expo Go to Expo Development Builds (`npx expo run:android` / `eas build --profile development`).
- Safe modification: Install `expo-dev-client` and test on native builds before relying on hardware scanner libraries.
- Test coverage: No tests currently.

## Scaling Limits

**Multi-Screen Architecture:**
- Current capacity: Single dashboard screen in `App.tsx`.
- Limit: Adding tabs, detail views, and interactive map views without a router will create an unmaintainable codebase.
- Scaling path: Adopt Expo Router with stack and tab layouts (`src/app/_layout.tsx`).

## Dependencies at Risk

**React 19 & React Native 0.86 Compatibility:**
- Risk: React 19 and React Native 0.86.3 are recent releases. Some older React Native native module libraries for Wi-Fi or Bluetooth may not yet support React 19 peer dependencies or the new React Native architecture (TurboModules / Fabric).
- Impact: `npm install` could fail or require `--legacy-peer-deps`, or native builds could fail.
- Migration plan: Check library compatibility with Expo SDK 57 before adding native scanning dependencies; prefer official Expo modules or verified community modules.

## Missing Critical Features

**Actual Wi-Fi Signal Scanner:**
- Problem: The app is titled "Wi-Fitooth / SignalScope", but has no native Wi-Fi scanning capability.
- Blocks: Core product value proposition (measuring RSSI, channel, link speed, SSID).

**Bluetooth Device Discovery:**
- Problem: No Bluetooth radio scanning integrated.
- Blocks: Detecting nearby BLE beacons and peripherals.

**Signal Heatmap / Map Visualization:**
- Problem: No mapping engine (SVG canvas or map provider) to visualize signal coverage.
- Blocks: Floorplan / geospatial signal visualization.

## Test Coverage Gaps

**Zero Test Suites:**
- What's not tested: Entire application (components, props, styles, handlers).
- Files: `App.tsx`
- Risk: Regressions can occur during refactoring and router migration without detection.
- Priority: High.

---

*Concerns audit: 2026-10-11*
