import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';

const LocationPicker = ({ location, onPress }) => {
  return (
    <TouchableOpacity
      style={styles.locationItem}
      onPress={() => onPress(location)}
    >
      <Text style={styles.locationName}>{location.name}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  locationItem: {
    backgroundColor: '#E0E0E0',
    padding: 20,
    borderRadius: 10,
    marginBottom: 10,
  },
  locationName: {
    fontSize: 18,
  },
});

export default LocationPicker;

// Dữ liệu mẫu
export const locationsData = [
  { id: 1, name: 'Địa điểm A' },
  { id: 2, name: 'Địa điểm B' },
  { id: 3, name: 'Địa điểm C' },
  // Thêm các địa điểm khác nếu cần
];
