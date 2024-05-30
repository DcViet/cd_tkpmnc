import React from 'react';
import { StyleSheet } from 'react-native';
import { ThemedView } from '@/components/ThemedView';
import CarSelection from '@/components/carSelection';

export default function CarSelectionScreen() {
  return (
    <ThemedView style={styles.carContainer}>
      <CarSelection />
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  carContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f0f0f0', // Adjust the background color as needed
    padding: 20, // Add padding around the content
  },
});
