import React from 'react';
import { View, StyleSheet } from 'react-native';

import ReviewScreen from '../components/ReviewScreen';

const ReviewS = () => {
  return (
    <View style={styles.container}>
        <ReviewScreen />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default ReviewS;
