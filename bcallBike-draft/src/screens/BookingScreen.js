import React from 'react';
import { View, StyleSheet, TouchableOpacity, Text, ScrollView } from 'react-native'; 

import Map from '../components/HomeScreen/Map';
import CarType from '../components/CarType';

const BookingScreen = () => { 
  return (
    <View style={styles.container}>

      <View style={styles.mapContainer}>
        <Map />
      </View>

      <View style={styles.bookContainer}>
        <CarType />
      </View>

      <TouchableOpacity style={styles.bookButton}>
        <Text style={styles.buttonText}>Book</Text>
      </TouchableOpacity>
      
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
  bookContainer: {
    flex: 1, // Adjusted to make the UberTypes component fill the available space
    backgroundColor: 'white',
  },
  bookButton: {
    backgroundColor: '#007AFF', // Example color for the button background
    padding: 10, // Added padding to the button for better touchability
    alignItems: 'center', // Center the content horizontally
    borderRadius: 5, // Rounded corners for the button
    margin: 10, // Added margin for better spacing
  },
  buttonText: {
    color: 'white', // Example color for the button text
    fontSize: 16, // Example font size for the button text
  },
});

export default BookingScreen; 
