import React from 'react';
import { Image, StyleSheet, View } from 'react-native';

// import ParallaxScrollView from '@/components/ParallaxScrollView';
// import { ThemedText } from '@/components/ThemedText';
// import { ThemedView } from '@/components/ThemedView';

import Map from '@/components/homeScreen/Map';

export default function HomeScreen() {

  return (
    
        <Map />
  );
}

const styles = StyleSheet.create({
  titleContainer: {
    flexDirection: 'row',
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
