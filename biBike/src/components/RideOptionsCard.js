import React from 'react';
import { View, StyleSheet, Text } from 'react-native';

const RideOptionsCard = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Select a Ride</Text>
      {/* Add your ride options here */}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    borderRadius: 10,
    padding: 20,
    elevation: 5,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
  },
});

export default RideOptionsCard;
