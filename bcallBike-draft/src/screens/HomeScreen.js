import React from 'react';
import { View, StyleSheet } from 'react-native';

import Map from '../components/HomeScreen/Map';
import MapSearch from '../components/HomeScreen/MapSearch';

const HomeScreen = () => {
  return (
    <View style={HomeStyles.container}>
      <View style={HomeStyles.mapContainer}>
        <Map />
      </View>

      <View style={HomeStyles.bookContainer}>

        <MapSearch />
      </View>
    </View>
  );
};

const HomeStyles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column', // Default is 'column', so it's optional to include this line
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
  bookContainer: {
    flexDirection: 'row', // Arrange children horizontally
    justifyContent: 'space-between', // Spread children along the row
    backgroundColor: 'white',
    paddingVertical: 20, // Example: adjust padding
    paddingHorizontal: 20, // Example: adjust padding
    borderRadius: 20, // Example: adjust border radius
    marginTop: 10, // Example: adjust margin top
    elevation: 2,
  },
});

export default HomeScreen;
