import React, { useState } from 'react';
import {
  SafeAreaView,
  ScrollView,
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  StatusBar,
  Alert,
} from 'react-native';

import {
  RadioTower,
  Wifi,
  Map,
  Bluetooth,
  ArrowUpRight,
  House,
  Settings,
} from 'lucide-react-native';
import type { LucideIcon } from 'lucide-react-native';
import WifiCheckerScreen from './src/screens/WifiCheckerScreen';
import BluetoothCheckerScreen from './src/screens/BluetoothCheckerScreen';

const COLORS = {
  background: '#080B10',
  wifiCard: '#102631',
  mapCard: '#191E32',
  bluetoothCard: '#202019',
  white: '#FFFFFF',
  muted: '#8B98A9',
  cyan: '#67E8F9',
  lavender: '#A5B4FC',
  yellow: '#FDE68A',
};

interface FeatureCardProps {
  title: string;
  subtitle: string;
  background: string;
  color: string;
  Icon: LucideIcon;
  onPress: () => void;
  large?: boolean;
}

function FeatureCard({
  title,
  subtitle,
  background,
  color,
  Icon,
  onPress,
  large = false,
}: FeatureCardProps) {
  return (
    <TouchableOpacity
      activeOpacity={0.8}
      onPress={onPress}
      style={[
        styles.card,
        { backgroundColor: background },
        large ? styles.largeCard : styles.smallCard,
      ]}
    >
      <View style={styles.cardTop}>
        <View style={styles.cardText}>
          <Text style={large ? styles.largeTitle : styles.smallTitle}>
            {title}
          </Text>

          <Text style={styles.cardSubtitle}>{subtitle}</Text>
        </View>

        <Icon size={large ? 62 : 48} color={color} strokeWidth={1.8} />
      </View>

      <View style={styles.cardBottom}>
        <Text style={[styles.cardAction, { color }]}>
          {large ? 'Check Now' : title === 'Signal Map'
            ? 'Find weak areas'
            : 'Find devices'}
        </Text>

        <ArrowUpRight size={22} color={color} />
      </View>
    </TouchableOpacity>
  );
}

type Screen = 'home' | 'wifi' | 'bluetooth' | 'map';

export default function App() {
  const [currentScreen, setCurrentScreen] = useState<Screen>('home');

  const showMessage = (feature: string) => {
    Alert.alert(feature, `${feature} screen will open here.`);
  };

  const showSignalMapComingSoon = () => {
    Alert.alert(
      'Coming Soon',
      'The Signal Map feature is currently under maintenance and will be available in an upcoming update.',
      [{ text: 'OK', style: 'default' }]
    );
  };

  if (currentScreen === 'wifi') {
    return (
      <WifiCheckerScreen
        navigation={{
          goBack: () => setCurrentScreen('home'),
          navigate: (screen: string) => setCurrentScreen(screen as Screen),
        }}
      />
    );
  }

  if (currentScreen === 'bluetooth') {
    return (
      <BluetoothCheckerScreen
        navigation={{
          goBack: () => setCurrentScreen('home'),
          navigate: (screen: string) => setCurrentScreen(screen as Screen),
        }}
      />
    );
  }

  if (currentScreen === 'map') {
    showSignalMapComingSoon();
    setCurrentScreen('home');
  }

  return (
    <SafeAreaView style={styles.safeArea}>
      <StatusBar
        barStyle="light-content"
        backgroundColor={COLORS.background}
      />

      <View style={styles.container}>
        <ScrollView
          showsVerticalScrollIndicator={false}
          contentContainerStyle={styles.scrollContent}
        >
          {/* Header */}
          <View style={styles.header}>
            <View>
              <Text style={styles.appName}>SignalScope</Text>
              <Text style={styles.tagline}>
                Your wireless connections
              </Text>
            </View>

            <View style={styles.headerIcon}>
              <RadioTower size={30} color={COLORS.cyan} />
            </View>
          </View>

          {/* Wi-Fi Card */}
          <FeatureCard
            title="Wi-Fi"
            subtitle="Check signal and speed"
            background={COLORS.wifiCard}
            color={COLORS.cyan}
            Icon={Wifi}
            large
            onPress={() => setCurrentScreen('wifi')}
          />

          {/* Small Cards */}
          <View style={styles.grid}>
            <View style={styles.gridItem}>
              <FeatureCard
                title="Signal Map"
                subtitle="Find weak areas"
                background={COLORS.mapCard}
                color={COLORS.lavender}
                Icon={Map}
                onPress={showSignalMapComingSoon}
              />
            </View>

            <View style={styles.gridItem}>
              <FeatureCard
                title="Bluetooth"
                subtitle="Find nearby devices"
                background={COLORS.bluetoothCard}
                color={COLORS.yellow}
                Icon={Bluetooth}
                onPress={() => setCurrentScreen('bluetooth')}
              />
            </View>
          </View>
        </ScrollView>

        {/* Bottom Navigation */}
        <View style={styles.bottomNav}>
          <TouchableOpacity
            onPress={() => setCurrentScreen('home')}
          >
            <House size={25} color={COLORS.cyan} />
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => setCurrentScreen('wifi')}
          >
            <Wifi size={25} color={COLORS.muted} />
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => setCurrentScreen('bluetooth')}
          >
            <Bluetooth size={25} color={COLORS.muted} />
          </TouchableOpacity>

          <TouchableOpacity
            onPress={showSignalMapComingSoon}
          >
            <Map size={25} color={COLORS.muted} />
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: COLORS.background,
  },

  container: {
    flex: 1,
    backgroundColor: COLORS.background,
  },

  scrollContent: {
    padding: 20,
    paddingBottom: 24,
  },

  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 30,
    marginTop: 10,
  },

  appName: {
    fontSize: 27,
    fontWeight: '700',
    color: COLORS.white,
    letterSpacing: 0.3,
  },

  tagline: {
    color: COLORS.muted,
    fontSize: 13,
    marginTop: 6,
  },

  headerIcon: {
    width: 56,
    height: 56,
    borderRadius: 18,
    backgroundColor: '#17212D',
    alignItems: 'center',
    justifyContent: 'center',
  },

  card: {
    borderRadius: 25,
    padding: 20,
    justifyContent: 'space-between',
  },

  largeCard: {
    minHeight: 205,
    marginBottom: 18,
    padding: 24,
  },

  smallCard: {
    minHeight: 220,
    flex: 1,
    padding: 16,
  },

  cardTop: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    gap: 8,
  },

  cardText: {
    flex: 1,
    gap: 8,
  },

  largeTitle: {
    color: COLORS.white,
    fontSize: 27,
    fontWeight: '700',
  },

  smallTitle: {
    color: COLORS.white,
    fontSize: 20,
    fontWeight: '700',
  },

  cardSubtitle: {
    color: '#B7C5D0',
    fontSize: 12,
    lineHeight: 18,
  },

  cardBottom: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop: 28,
  },

  cardAction: {
    fontSize: 14,
    fontWeight: '600',
  },

  grid: {
    flexDirection: 'row',
    gap: 12,
  },

  gridItem: {
    flex: 1,
    minWidth: 0,
  },

  bottomNav: {
    height: 68,
    borderTopWidth: 1,
    borderTopColor: '#202733',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
    backgroundColor: COLORS.background,
  },
});
