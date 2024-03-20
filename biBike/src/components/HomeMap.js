import React from 'react';
import { View, StyleSheet, Text } from 'react-native';

const HomeMap = () => {
  return (
    <View style={styles.container}>
      <Text>This is the HomeMap component</Text>
      {/* Add your map component here */}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f0f0f0',
  },
});

export default HomeMap;
