import React from 'react';
import { View, StyleSheet } from 'react-native';

import HomeMap from '../components/HomeMap';
import HomeSearch from '../components/HomeSearch';


import HomeBookNow from '../components/HomeBookNow';
import HomeBookLate from '../components/HomeBookLate';

const HomeScreen = () => {
  return (
    <View style={styles.container}>
      
      <View style={styles.mapContainer}>
        <HomeMap />
        <View style={styles.searchContainer}>
          <HomeSearch />
        </View>
      </View>

      <View style={styles.BookContainer}>
        <HomeBookNow />      
        <HomeBookLate />     
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
  BookContainer: {
    backgroundColor: 'white',
    
  },
});

export default HomeScreen;
