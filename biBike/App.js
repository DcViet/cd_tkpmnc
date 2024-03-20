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

      <View style={styles.rideOptionsCardContainer}>
        <UberTypes />
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
  },
  searchContainer: {
    backgroundColor: 'white',
    padding: 10,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    elevation: 2,
  },
  rideOptionsCardContainer: {
    backgroundColor: 'white',
    padding: 10,
    borderRadius: 10,
    marginHorizontal: 10,
    marginBottom: 10,
    elevation: 2,
  },
});

export default App;
