# Roadmap: Wi-Fitooth (SignalScope)

## Overview

Milestone v1.0 focuses on safely decommissioning the problematic native Signal Map implementation files while preserving the dashboard card and bottom navigation UI with a friendly "Coming Soon" modal/dialog. This eliminates runtime crashes from native map dependencies while maintaining visual continuity and user feedback.

## Phases

- [ ] **Phase 1: Signal Map Stubbing & UI Integration** - Wire dashboard card and bottom nav triggers to display a clean 'Coming Soon' popup without navigating to native map components.
- [ ] **Phase 2: File Decommission & Runtime Verification** - Remove problematic map screen files and imports, verify clean build, lint, and typecheck.

## Phase Details

### Phase 1: Signal Map Stubbing & UI Integration
**Goal**: Wire dashboard card and bottom navigation triggers to display a clean 'Coming Soon' popup without navigating to native map components, keeping visual layout intact.
**Depends on**: Nothing (first phase)
**Requirements**: MAP-01, UI-01, UI-02, UI-03
**Success Criteria** (what must be TRUE):
  1. Tapping the Signal Map card on the Dashboard presents a friendly 'Coming Soon' dialog informing the user that the feature will arrive soon.
  2. Tapping the Signal Map icon in the bottom navigation bar presents the same 'Coming Soon' feedback without navigating away from the current view.
  3. The visual appearance, layout, icons, and styling of the Signal Map card on the Dashboard remain completely unchanged.
**Plans**: 1 plan

Plans:
- [ ] 01-01: Update `App.tsx` to handle Signal Map triggers with a Coming Soon popup and preserve UI presentation.

### Phase 2: File Decommission & Runtime Verification
**Goal**: Remove problematic map screen files, decouple unused map imports, and verify runtime stability and type correctness across the app.
**Depends on**: Phase 1
**Requirements**: MAP-02, STAB-01
**Success Criteria** (what must be TRUE):
  1. `SignalMapScreen.tsx` and `src/screens/SignalMapScreen.tsx` are deleted from the repository.
  2. All references and imports to `SignalMapScreen` are removed with zero dangling imports.
  3. The codebase passes typechecking (`npx tsc --noEmit`) and linting without errors.
**Plans**: 1 plan

Plans:
- [ ] 02-01: Remove obsolete map screen files, verify imports, and validate build/typecheck stability.

## Progress

**Execution Order:**
Phases execute in numeric order: 1 → 2

| Phase | Plans Complete | Status | Completed |
|-------|----------------|--------|-----------|
| 1. Signal Map Stubbing & UI Integration | 0/1 | Not started | - |
| 2. File Decommission & Runtime Verification | 0/1 | Not started | - |
