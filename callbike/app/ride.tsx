import React from 'react';
import { Image, StyleSheet, View } from 'react-native';

import ParallaxScrollView from '@/components/ParallaxScrollView';
import { useLocalSearchParams } from 'expo-router';
import RidePage from '@/components/yourRide';

export default function RideScreen() {
  const { selectedCarType, userName } = useLocalSearchParams<{ selectedCarType: 'economy' | 'luxury' | 'family'; userName: string }>();

  // Type assertion to ensure selectedCarType is not undefined
  const carType: 'economy' | 'luxury' | 'family' = selectedCarType as 'economy' | 'luxury' | 'family';

  return (
    <ParallaxScrollView
      headerBackgroundColor={{ light: '#A1CEDC', dark: '#1D3D47' }}
      headerImage={
        <Image
          source={require('@/assets/images/partial-react-logo.png')}
          style={styles.reactLogo}
        />
      }
    >
      <View style={styles.titleContainer}>
        {/* Render RidePage only if selectedCarType is defined */}
        {selectedCarType !== undefined && (
          <RidePage selectedCarType={carType} userName={userName} />
        )}
      </View>
    </ParallaxScrollView>
  );
}

const styles = StyleSheet.create({
  titleContainer: {
    flexDirection: 'column',
    alignItems: 'center',
    gap: 8,
  },
  reactLogo: {
    height: 178,
    width: 290,
    position: 'absolute',
    bottom: 0,
    left: 0,
  },
  mapContainer: {
    height: 400,
    width: '100%',
    marginTop: 16,
  },
  map: {
    ...StyleSheet.absoluteFillObject,
  },
});
