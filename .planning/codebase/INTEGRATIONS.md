---
last_mapped_commit: e42ffd242fcad073d7320c25c84ba520c9a278eb
last_mapped_at: 2026-10-11
---
# External Integrations

**Analysis Date:** 2026-10-11

## APIs & External Services

**Third-Party Web APIs:**
- None detected - The application currently operates as a standalone offline client prototype with mock navigation triggers in `App.tsx`.
- No HTTP client libraries (`axios`, `fetch` wrappers) or external SDKs configured in `package.json`.

## Data Storage

**Databases:**
- None detected - No local relational database (e.g. `expo-sqlite`, WatermelonDB) or remote database clients (Supabase, Firebase) configured in `package.json`.

**File Storage:**
- Local filesystem assets only:
  - App icons and branding graphics bundled in `assets/icon.png`, `assets/android-icon-foreground.png`, `assets/android-icon-background.png`, `assets/android-icon-monochrome.png`, `assets/splash-icon.png`, and `assets/favicon.png`.

**Caching & State Persistence:**
- None configured - In-memory React state only; no persistent key-value storage (e.g. `react-native-mmkv` or `@react-native-async-storage/async-storage`).

## Authentication & Identity

**Auth Provider:**
- None - Open client application. No authentication flow or user sessions present in `App.tsx`.

## Monitoring & Observability

**Error Tracking:**
- None - Sentry / Bugsnag not installed.

**Logs:**
- Standard console logging and React Native developer exception screen (Metro bundler overlay in development).

## CI/CD & Deployment

**Hosting & Cloud Build:**
- Expo Application Services (EAS) configured as target build system in `AGENTS.md` (`eas build`, `eas submit`, `eas update`).
- No local `eas.json` configuration file created yet.

**CI Pipeline:**
- None configured - No `.github/workflows` or automated build runners in the repository.

## Native Device & Hardware Integrations

**Wi-Fi Signal Inspection:**
- Planned capability: Wi-Fi signal strength checker and network scanner displayed in UI cards in `App.tsx` (`title="Wi-Fi"`, `subtitle="Check signal and speed"`).
- Current status: Unintegrated / UI Mock. Native Wi-Fi scanning APIs (such as `react-native-wifi-reborn` or custom Android Wi-Fi modules) are not yet installed in `package.json`.
- Permissions required: Android `ACCESS_FINE_LOCATION`, `ACCESS_WIFI_STATE`, `CHANGE_WIFI_STATE`, `NEARBY_WIFI_DEVICES`. iOS requires `NEHotspotNetwork` entitlements.

**Bluetooth & BLE Scanning:**
- Planned capability: Bluetooth device discovery displayed in UI cards in `App.tsx` (`title="Bluetooth"`, `subtitle="Find nearby devices"`).
- Current status: Unintegrated / UI Mock. Native BLE scanning libraries (such as `react-native-ble-plx`) are not yet installed in `package.json`.
- Permissions required: Android `BLUETOOTH_SCAN`, `BLUETOOTH_CONNECT`, `ACCESS_FINE_LOCATION`. iOS requires `NSBluetoothAlwaysUsageDescription`.

**Location & Spatial Mapping:**
- Planned capability: Signal map visualization displayed in UI cards in `App.tsx` (`title="Signal Map"`, `subtitle="Find weak areas"`).
- Current status: Unintegrated / UI Mock. Geolocation services (`expo-location`) or map renderers (`react-native-maps`) are not yet installed.

## Environment Configuration

**Required env vars:**
- None currently required by the codebase.

**Secrets location:**
- No secrets or `.env` files present. `.gitignore` explicitly prevents checking in `.env*.local` or native certificates (`*.jks`, `*.p8`, `*.p12`, `*.key`, `*.pem`, `*.mobileprovision`).

## Webhooks & Callbacks

**Incoming:**
- None

**Outgoing:**
- None

---

*Integration audit: 2026-10-11*
