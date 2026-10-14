---
phase: 01-signal-map-stubbing-ui-integration
plan: 01
duration: 3 min
completed: 2026-10-13
subsystem: ui
tags: [react-native, alert, ui-stub, signal-map]
requires: []
provides:
  - Coming Soon popup handler for Signal Map feature
  - Dashboard card and bottom navigation wired to coming soon handler
affects:
  - 02-file-decommission-runtime-verification
tech-stack:
  added: []
  patterns:
    - Stubbed Alert modal pattern for decommissioned features under maintenance
key-files:
  created: []
  modified:
    - App.tsx
key-decisions:
  - "Decoupled SignalMapScreen from App.tsx navigation and replaced it with a user-friendly Coming Soon alert dialog."
patterns-established:
  - "Use showSignalMapComingSoon to provide feedback without mounting unstable native components."
requirements-completed:
  - MAP-01
  - UI-01
  - UI-02
  - UI-03
---

# Phase 01 Plan 01 Summary: Signal Map Stubbing & UI Integration

## Accomplishments
1. **Added `showSignalMapComingSoon` helper**: Created a clean `Alert.alert` notification informing users that the Signal Map feature is under maintenance and will return in a future update.
2. **Preserved Dashboard UI**: Kept the Signal Map `FeatureCard` visual presentation completely intact (`background`, `color`, `Icon`, titles) while updating `onPress` to trigger the Coming Soon popup.
3. **Protected Bottom Navigation**: Connected the bottom navigation `Map` button directly to `showSignalMapComingSoon`.
4. **Guarded Screen State**: Removed `SignalMapScreen` imports and ensured `'map'` screen state safely falls back to home without crashing.
5. **Verified Stability**: Both TypeScript compilation (`tsc --noEmit`) and Expo linting passed with zero errors.

## Verification
- `npx tsc --noEmit` exited with code 0.
- `npx expo lint` exited with code 0.
- `showSignalMapComingSoon` present in `App.tsx` and referenced by both card and nav bar.
