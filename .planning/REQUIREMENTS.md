# Requirements: Wi-Fitooth (SignalScope)

**Defined:** 2026-10-13
**Core Value:** Reliable, instant visibility into nearby wireless networks and device connection health.

## v1 Requirements

Requirements for milestone v1.0. Each maps to roadmap phases.

### Signal Map Decommission

- [ ] **MAP-01**: User is prevented from navigating to the unstable native map screen from any app triggers.
- [ ] **MAP-02**: Problematic native map screen files (`SignalMapScreen.tsx` and `src/screens/SignalMapScreen.tsx`) and map module imports are cleanly removed.

### User Interface & Coming Soon Feedback

- [ ] **UI-01**: User sees a clean "Coming Soon" popup/dialog when tapping the Signal Map card on the Dashboard.
- [ ] **UI-02**: User sees the "Coming Soon" popup when tapping the Signal Map bottom navigation icon.
- [ ] **UI-03**: Dashboard layout, typography, and card styling for Signal Map remain visually intact.

### Runtime Stability

- [ ] **STAB-01**: Application boots and navigates between Home, Wi-Fi Checker, and Bluetooth Checker with zero native map dependency crashes.

## v2 Requirements

Deferred to future milestone release. Tracked but not in current roadmap.

### Signal Mapping Reimplementation

- **MAP-03**: Re-architect and implement native GPS signal mapping with reliable platform checks.
- **MAP-04**: Add offline heatmap tile caching and weak area polygon detection.

## Out of Scope

Explicitly excluded. Documented to prevent scope creep.

| Feature | Reason |
|---------|--------|
| Native GPS Map Rendering | Decommissioned per user request due to runtime issues; will be properly re-engineered later |
| Modifications to Wi-Fi/Bluetooth Services | Preserving existing working diagnostics |
| External Map Tile Services | Not needed while feature is in "Coming Soon" state |

## Traceability

Which phases cover which requirements. Updated during roadmap creation.

| Requirement | Phase | Status |
|-------------|-------|--------|
| MAP-01 | Phase 1 | Pending |
| MAP-02 | Phase 2 | Pending |
| UI-01 | Phase 1 | Pending |
| UI-02 | Phase 1 | Pending |
| UI-03 | Phase 1 | Pending |
| STAB-01 | Phase 2 | Pending |

**Coverage:**
- v1 requirements: 6 total
- Mapped to phases: 6
- Unmapped: 0 ✓

---
*Requirements defined: 2026-10-13*
*Last updated: 2026-10-13 after roadmap mapping*
