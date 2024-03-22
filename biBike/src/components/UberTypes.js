import React, { useState } from 'react';
import { View, StyleSheet, Text, TouchableOpacity, ScrollView } from 'react-native';
import { CheckBox } from '@rneui/themed'; // Import CheckBox component

const UberTypes = ({ onSelect }) => {
  const [selectedType, setSelectedType] = useState(null); // Step 1: Trạng thái để lưu trữ loại Uber được chọn

  const uberTypes = [
    { type: 'UberX', price: '$10-15', time: '5 min' },
    { type: 'UberXL', price: '$15-20', time: '7 min' },
    { type: 'UberBlack', price: '$20-25', time: '10 min' },
  ];

  const handleSelect = (type) => {
    setSelectedType(type === selectedType ? null : type); // Step 2: Cập nhật trạng thái khi người dùng chọn loại Uber
    onSelect(type);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Choose a ride</Text>
      <ScrollView>
        {uberTypes.map((uberType, index) => (
          <TouchableOpacity 
            key={index} 
            style={styles.uberType} 
            onPress={() => handleSelect(uberType.type)} // Thay đổi hàm gọi khi người dùng chọn
          >
            <View style={styles.row}>
              <Text style={styles.uberTypeName}>{uberType.type}</Text>
              <CheckBox 
                checked={selectedType === uberType.type} // Kiểm tra xem loại Uber có được chọn không
                onChange={() => handleSelect(uberType.type)} // Thay đổi trạng thái khi người dùng chọn checkbox
              />
            </View>
            <Text style={styles.uberTypeDetails}>{uberType.price} • {uberType.time}</Text>
          </TouchableOpacity>
        ))}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    borderRadius: 10,
    padding: 20,
    elevation: 5,
    maxHeight: 200, // Chiều cao tối đa của box
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  uberType: {
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  uberTypeName: {
    fontSize: 16,
    fontWeight: 'bold',
    marginRight: 5,
  },
  uberTypeDetails: {
    fontSize: 14,
    color: '#666',
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
  },
});

export default UberTypes;
