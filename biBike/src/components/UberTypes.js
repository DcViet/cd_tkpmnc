import React from 'react';
import { View, StyleSheet, Text, TouchableOpacity, ScrollView } from 'react-native';

const UberTypes = ({ onSelect }) => {
  const uberTypes = [
    { type: 'UberX', price: '$10-15', time: '5 min' },
    { type: 'UberXL', price: '$15-20', time: '7 min' },
    { type: 'UberBlack', price: '$20-25', time: '10 min' },
  ];

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Choose a ride</Text>
      <ScrollView>
        {uberTypes.map((uberType, index) => (
          <TouchableOpacity 
            key={index} 
            style={styles.uberType} 
            onPress={() => onSelect(uberType.type)}
          >
            <Text style={styles.uberTypeName}>{uberType.type}</Text>
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
  },
  uberTypeDetails: {
    fontSize: 14,
    color: '#666',
  },
});

export default UberTypes;
