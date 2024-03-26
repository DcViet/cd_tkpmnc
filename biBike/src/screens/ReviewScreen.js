import React from 'react';
import { View, StyleSheet } from 'react-native';

import ReviewComponent from '../components/ReviewComponent';

const ReviewScreen = ( { navigation }) => {
  return (
    <View style={styles.container}>
        <ReviewComponent />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default ReviewScreen;
