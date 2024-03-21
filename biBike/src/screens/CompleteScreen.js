import React from 'react';
import { View, StyleSheet } from 'react-native';

import HomeMap from '../components/HomeMap';
import TripDetailScreen from '../components/TripDetailScreen';
const CompleteScreen = () => {
  return (
    <View style={styles.container}>
      
      <View style={styles.mapContainer}>
        <HomeMap />
      </View>

      <View style={styles.bookingDetailsContainer}>
        {/* <BookingDetails />        */}
        <TripDetailScreen />
             
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
  bookingDetailsContainer: {
    backgroundColor: 'white',
  },
});

export default CompleteScreen;