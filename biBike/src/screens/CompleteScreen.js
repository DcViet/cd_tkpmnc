import React from 'react';
import { View, StyleSheet, TouchableOpacity, Text } from 'react-native';
import { useNavigation } from '@react-navigation/native'; // Import useNavigation hook

import HomeMap from '../components/HomeMap';
import TripDetailScreen from '../components/TripDetailScreen';
import ReviewScreen from './ReviewScreen';

const CompleteScreen = () => {
  const navigation = useNavigation(); 

  const goToHome = () => {
    navigation.navigate('Home'); 
  };

  const goToReview = () => {
    navigation.navigate('Review');
  };

  return (
    <View style={styles.container}>
      <View style={styles.mapContainer}>
        <HomeMap />
      </View>

      <View style={styles.bookingDetailsContainer}>
        {/* <BookingDetails />*/}
        <TripDetailScreen />
      </View>

      {/* Buttons */}
      <View style={styles.buttonsContainer}>
        <TouchableOpacity style={styles.button} onPress={goToHome}>
          <Text style={styles.buttonText}>Trang chủ</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={goToReview}>
          <Text style={styles.buttonText}>Đánh giá</Text>
        </TouchableOpacity>
        
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
  bookingDetailsContainer: {
    backgroundColor: 'white',
    flex: 1,
  },
  buttonsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    paddingVertical: 10,
    backgroundColor: 'white',
  },
  button: {
    backgroundColor: 'blue',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
  },
  buttonText: {
    color: 'white',
    fontWeight: 'bold',
  },
});

export default CompleteScreen;
