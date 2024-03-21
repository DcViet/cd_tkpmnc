import React from 'react';
import { View, StyleSheet, TextInput, TouchableOpacity, Text, ScrollView } from 'react-native';

const HomeSearch = () => {

  const locationHome = [
    { type: 'Home', latitude: '10.764734', longitude: '106.742971' },
    { type: 'Work', latitude: '10.774734', longitude: '106.752971' },
    { type: 'Pin', latitude: '10.784734', longitude: '106.762971' },
  ];

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Search for a destination"
      />
      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Search</Text>
      </TouchableOpacity>

      <ScrollView>
        {locationHome.map((locationHome, index) => (
          <TouchableOpacity
            key={index}
            onPress={() => onSelect(locationHome.type)}
          >
            <Text>{locationHome.type}</Text>
          </TouchableOpacity>
        ))}
      </ScrollView>

    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: 'white',
    borderRadius: 20,
    paddingVertical: 10,
    paddingHorizontal: 20,
    elevation: 5,
  },
  input: {
    flex: 1,
    marginRight: 10,
    padding: 10,
    borderRadius: 10,
    backgroundColor: '#f0f0f0',
  },
  button: {
    backgroundColor: 'blue',
    borderRadius: 10,
    paddingVertical: 10,
    paddingHorizontal: 20,
  },
  buttonText: {
    color: 'white',
    fontWeight: 'bold',
  },
});

export default HomeSearch;
