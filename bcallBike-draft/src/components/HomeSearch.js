import React from 'react';
import { View, StyleSheet, TextInput, TouchableOpacity, Text, ScrollView } from 'react-native';

const HomeSearch = () => {

  const locationHome = [
    { type: 'Home', latitude: '10.764734', longitude: '106.742971' },
    { type: 'Work', latitude: '10.774734', longitude: '106.752971' },
    { type: 'Pin', latitude: '10.784734', longitude: '106.762971' },
  ];

  const onSelectLocation = (type) => {
    // Xử lý logic chọn vị trí ở đây
    console.log("Loại vị trí đã chọn: ", type);
  };

  return (
    <View style={styles.container}>
      <View style={styles.searchContainer}>
        <TextInput
          style={styles.input}
          placeholder="Search for a destination"
        />
        <TouchableOpacity style={styles.button} onPress={() => console.log("Search button pressed")}>
          <Text style={styles.buttonText}>Search</Text>
        </TouchableOpacity>
      </View>
      <ScrollView style={styles.locationList} showsVerticalScrollIndicator={false}>
        {locationHome.map((location, index) => (
          <TouchableOpacity
            key={index}
            onPress={() => onSelectLocation(location.type)}
            style={styles.locationButton}
          >
            <Text style={styles.locationButtonText}>{location.type}</Text>
          </TouchableOpacity>
        ))}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    borderRadius: 20,
    paddingVertical: 10,
    paddingHorizontal: 20,
    elevation: 5,
  },
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  input: {
    flex: 1,
    marginRight: 10,
    paddingVertical: 8,
    paddingHorizontal: 12,
    borderRadius: 10,
    backgroundColor: '#f0f0f0',
  },
  button: {
    backgroundColor: '#007AFF',
    borderRadius: 10,
    paddingVertical: 10,
    paddingHorizontal: 20,
  },
  buttonText: {
    color: 'white',
    fontWeight: 'bold',
  },
  locationList: {
    maxHeight: 100,
    marginTop: 10,
  },
  locationButton: {
    backgroundColor: '#f0f0f0',
    borderRadius: 10,
    paddingVertical: 8,
    paddingHorizontal: 12,
    marginBottom: 5,
  },
  locationButtonText: {
    color: 'black',
    fontWeight: 'bold',
  },
});

export default HomeSearch;
