import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';

const CarTypeItem = ({ carType, onPress }) => {
  return (
    <TouchableOpacity
      style={styles.carTypeItem}
      onPress={() => onPress(carType)}
    >
      <Text style={styles.carTypeName}>{carType.name}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  carTypeItem: {
    backgroundColor: '#E0E0E0',
    padding: 20,
    borderRadius: 10,
    marginBottom: 10,
  },
  carTypeName: {
    fontSize: 18,
  },
});

export default CarTypeItem;

// Dữ liệu mẫu
export const carTypesData = [
  { id: 1, name: 'Xe Hạng Sang' },
  { id: 2, name: 'Xe Tiêu Chuẩn' },
  { id: 3, name: 'Xe Gia Đình' },
  // Thêm các loại xe khác nếu cần
];
