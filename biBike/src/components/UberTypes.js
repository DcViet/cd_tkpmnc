import React from 'react';
import { View, StyleSheet, Text } from 'react-native';

const UberTypes = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Choose a ride</Text>
      {/* Add your Uber types here */}
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

export default UberTypes;
