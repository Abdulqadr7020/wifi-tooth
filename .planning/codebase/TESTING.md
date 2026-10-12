---
last_mapped_commit: e42ffd242fcad073d7320c25c84ba520c9a278eb
last_mapped_at: 2026-10-11
---
# Testing Patterns

**Analysis Date:** 2026-10-11

## Test Framework

**Runner:**
- Currently unconfigured - No test runner (Jest / Vitest) is installed in `package.json`.
- Recommended framework: Jest with `jest-expo` preset (official standard for Expo SDK 57).

**Assertion Library:**
- None configured (standard recommendation: `@testing-library/react-native` and `expect`).

**Run Commands:**

```bash

# Target commands once configured:

npx jest               # Run all test suites
npx jest --watch       # Run tests in interactive watch mode
npx jest --coverage    # Generate test coverage report
```

## Test File Organization

**Location:**
- No test files currently exist in the repository.
- Recommended pattern: Co-located test directories adjacent to source components:
  - `src/components/__tests__/FeatureCard.test.tsx`
  - `src/services/__tests__/wifi.test.ts`
  - `src/services/__tests__/bluetooth.test.ts`

**Naming:**
- Unit/Component tests: `*.test.ts` or `*.test.tsx`
- Integration tests: `*.spec.ts` or `*.spec.tsx`

## Test Structure

**Suite Organization (Standard React Native Pattern to Adopt):**

```typescript
import React from 'react';
import { render, fireEvent } from '@testing-library/react-native';
import { FeatureCard } from '../FeatureCard';
import { Wifi } from 'lucide-react-native';

describe('FeatureCard', () => {
  it('renders title and subtitle correctly', () => {
    const onPressMock = jest.fn();
    const { getByText } = render(
      <FeatureCard
        title="Wi-Fi"
        subtitle="Check signal and speed"
        background="#102631"
        color="#67E8F9"
        Icon={Wifi}
        onPress={onPressMock}
      />
    );

    expect(getByText('Wi-Fi')).toBeTruthy();
    expect(getByText('Check signal and speed')).toBeTruthy();
  });

  it('triggers onPress callback when tapped', () => {
    const onPressMock = jest.fn();
    const { getByText } = render(
      <FeatureCard
        title="Wi-Fi"
        subtitle="Check signal and speed"
        background="#102631"
        color="#67E8F9"
        Icon={Wifi}
        onPress={onPressMock}
      />
    );

    fireEvent.press(getByText('Wi-Fi'));
    expect(onPressMock).toHaveBeenCalledTimes(1);
  });
});
```

## Mocking

**Framework:**
- `jest.mock` / `@testing-library/react-native`

**What to Mock:**
- Native modules and hardware device APIs (e.g. Wi-Fi scanning, BLE adapter, location services)
- Native animations and timing functions
- Navigation hooks (`useNavigation`, `useRouter`, `useLocalSearchParams`)

**What NOT to Mock:**
- Pure presentation components (`FeatureCard`)
- Business logic calculations (e.g. RSSI dBm to percentage signal conversion, frequency band detection)

## Fixtures and Factories

**Test Data (Recommended Pattern for Signal Models):**

```typescript
export const mockWifiNetwork = {
  ssid: 'TestNetwork_5G',
  bssid: '00:11:22:33:44:55',
  rssi: -58,
  frequency: 5180,
  security: 'WPA2-PSK',
};

export const mockBluetoothDevice = {
  id: 'DE:AD:BE:EF:00:01',
  name: 'Wireless Headphones',
  rssi: -65,
  isConnectable: true,
};
```

## Coverage

**Requirements:**
- None enforced currently. Target baseline for upcoming services: 80% coverage on core scanning utilities.

## Test Types

**Unit Tests:**
- Signal math, dBm rating formulas, network data normalizers, and service wrappers.

**Component Tests:**
- Rendering of card variants, color application, icon loading, accessibility labels, and tap event dispatches.

**E2E Tests:**
- Not configured. Maestro or Detox recommended for automated mobile device testing once native scanners are built.

## Common Patterns

**Async Testing:**

```typescript
it('resolves nearby networks asynchronously', async () => {
  const networks = await scanNearbyWifi();
  expect(networks.length).toBeGreaterThan(0);
});
```

**Error Testing:**

```typescript
it('handles permission rejection gracefully', async () => {
  mockLocationPermissionDenied();
  await expect(startWifiScan()).rejects.toThrow('Location permission required for Wi-Fi scanning');
});
```

---

*Testing analysis: 2026-10-11*
