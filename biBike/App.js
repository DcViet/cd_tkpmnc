import React from 'react';
import { View, StyleSheet } from 'react-native';
import HomeMap from './src/components/HomeMap';
import HomeSearch from './src/components/HomeSearch';
import UberTypes from './src/components/UberTypes';
import RideOptionsCard from './src/components/RideOptionsCard';

const App = () => {
  return (
    <View style={styles.container}>
      <View style={styles.mapContainer}>
        <HomeMap />
        <View style={styles.searchContainer}>
          <HomeSearch />
        </View>
      </View>

      <View style={styles.uberTypesContainer}>
        <UberTypes />
      </View>

      <View style={styles.rideOptionsCardContainer}>
        <RideOptionsCard />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  mapContainer: {
    flex: 1,
    width: '100%',
    position: 'relative',
  },
  searchContainer: {
    paddingHorizontal: 20,
    paddingVertical: 10,
    width: '100%',
    backgroundColor: 'white',
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    elevation: 2,
    position: 'absolute',
    bottom: 0,
  },
  uberTypesContainer: {
    position: 'absolute',
    bottom: 70,
    left: 20,
    right: 20,
    zIndex: 1000,
  },
  rideOptionsCardContainer: {
    position: 'absolute',
    bottom: 20,
    left: 20,
    right: 20,
    zIndex: 1000,
  },
});

export default App;
