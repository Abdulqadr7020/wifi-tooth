# Wi-Fitooth (SignalScope)

## What This Is

An Expo/React Native mobile application for diagnosing, monitoring, and testing wireless connections (Wi-Fi, Bluetooth, and location-based signals). It provides real-time signal metrics, speed tests, device scanning, and wireless diagnostic tools with a dark slate UI.

## Core Value

Reliable, instant visibility into nearby wireless networks and device connection health.

## Current Milestone: v1.0 Signal Map Decommission & Coming Soon Stub

**Goal:** Safely remove the problematic native Signal Map implementation files while keeping the dashboard/navigation UI intact with a clean "Coming Soon" popup.

**Target features:**
- Remove problematic Signal Map implementation files (`SignalMapScreen.tsx` and `src/screens/SignalMapScreen.tsx`)
- Retain Signal Map card and navigation items in dashboard and bottom nav
- Implement an informative "Coming Soon" dialog/popup on Signal Map action
- Stabilize app runtime and remove broken native map dependencies/crashes

## Requirements

### Validated

- ✓ Dark mode UI system with custom palette and responsive feature cards — `App.tsx`
- ✓ Wi-Fi diagnostics (SSID, BSSID, RSSI, link speed, frequency band, IP) — `WifiCheckerScreen.tsx`
- ✓ Network speed test runner (download, upload, latency, jitter) — `speedTestService.ts`
- ✓ Bluetooth scanning and signal tracking (BLE/Classic discovery, RSSI monitoring, distance estimation) — `BluetoothCheckerScreen.tsx`

### Active

- [ ] Remove native `SignalMapScreen` files and references causing runtime crashes
- [ ] Preserve Signal Map dashboard card and bottom navigation icons
- [ ] Present "Coming Soon" popup when Signal Map is triggered
- [ ] Ensure seamless cross-platform stability across remaining screens

### Out of Scope

- Native GPS map rendering and OpenStreetMap tile caching — deferred until reimplementation in a future milestone
- Re-architecting Bluetooth or Wi-Fi services — preserving existing functionality

## Context

The initial prototype included a native maps implementation (`react-native-maps`, `expo-location`, `SignalMapScreen.tsx`) that caused runtime instability (`RNMapsAirModule` issues on various environments). The user requested removing the map implementation files while preserving the UI cards and showing a "Coming Soon" notification until it is reimplemented later.

## Constraints

- **Platform**: React Native / Expo (SDK 57)
- **UI Integrity**: Must not break existing Wi-Fi or Bluetooth screens or dashboard layout

## Key Decisions

| Decision | Rationale | Outcome |
|----------|-----------|---------|
| Stub Signal Map with Coming Soon popup | Map native module causes runtime issues; UI placeholders keep user awareness while implementation is redesigned | ✓ Good |

## Evolution

This document evolves at phase transitions and milestone boundaries.

**After each phase transition** (via `/gsd-transition`):
1. Requirements invalidated? → Move to Out of Scope with reason
2. Requirements validated? → Move to Validated with phase reference
3. New requirements emerged? → Add to Active
4. Decisions to log? → Add to Key Decisions
5. "What This Is" still accurate? → Update if drifted

**After each milestone** (via `/gsd-complete-milestone`):
1. Full review of all sections
2. Core Value check — still the right priority?
3. Audit Out of Scope — reasons still valid?
4. Update Context with current state

---
*Last updated: 2026-10-13 after starting milestone v1.0*
