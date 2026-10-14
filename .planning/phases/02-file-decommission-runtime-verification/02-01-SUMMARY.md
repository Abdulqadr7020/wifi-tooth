---
phase: 02-file-decommission-runtime-verification
plan: 01
duration: 3 min
completed: 2026-10-13
subsystem: cleanup
tags: [decommission, file-cleanup, react-native, stability]
requires:
  - phase: 01-signal-map-stubbing-ui-integration
    provides: UI stubbing and Coming Soon alert in App.tsx
provides:
  - Complete deletion of obsolete SignalMapScreen files
  - Aligned Coming Soon alerts across secondary screen triggers
  - Zero unconfigured native map dependencies or dangling imports
affects: []
tech-stack:
  added: []
  patterns:
    - Clean decommission pattern removing native module references
key-files:
  created: []
  modified:
    - src/screens/WifiCheckerScreen.tsx
    - src/screens/BluetoothCheckerScreen.tsx
key-decisions:
  - "Deleted SignalMapScreen.tsx and src/screens/SignalMapScreen.tsx to eliminate runtime crashes from unconfigured native maps."
  - "Updated WifiCheckerScreen and BluetoothCheckerScreen to trigger the Coming Soon alert directly on Map actions."
patterns-established:
  - "Direct Coming Soon Alert feedback across all secondary screen navigation bars."
requirements-completed:
  - MAP-02
  - STAB-01
---

# Phase 02 Plan 01 Summary: File Decommission & Runtime Verification

## Accomplishments
1. **Deleted Obsolete Map Files**: Completely removed `SignalMapScreen.tsx` (in root) and `src/screens/SignalMapScreen.tsx` from the project.
2. **Aligned Secondary Screens**:
   - In [`WifiCheckerScreen.tsx`](file:///c:/Users/HP/Desktop/Wi-Fitooth/src/screens/WifiCheckerScreen.tsx), connected both the `coverageCard` and bottom navigation `Map` button directly to `showSignalMapComingSoon`.
   - In [`BluetoothCheckerScreen.tsx`](file:///c:/Users/HP/Desktop/Wi-Fitooth/src/screens/BluetoothCheckerScreen.tsx), connected the bottom navigation `Map` button to display the Coming Soon alert.
3. **Verified Zero Lingering References**: Confirmed no dangling imports or calls to `SignalMapScreen` remain anywhere in the project.
4. **Comprehensive Quality Validation**: Both TypeScript typecheck (`npx.cmd tsc --noEmit`) and Expo lint (`npx.cmd expo lint`) passed cleanly with zero errors.

## Verification
- `SignalMapScreen.tsx` on disk: `False`
- `src/screens/SignalMapScreen.tsx` on disk: `False`
- `npx.cmd tsc --noEmit` exited with code 0.
- `npx.cmd expo lint` exited with code 0.
