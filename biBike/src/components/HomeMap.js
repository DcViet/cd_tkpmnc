import React, { useEffect, useState } from 'react';
import { View, StyleSheet, Text, TouchableOpacity } from 'react-native';
import MapView, { Marker } from 'react-native-maps';
import { MaterialIcons } from '@expo/vector-icons';
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';
import * as Location from 'expo-location';

const HomeMap = () => {
  const [location, setLocation] = useState(null);
  const [errorMsg, setErrorMsg] = useState(null);
  const [destination, setDestination] = useState(null);

  useEffect(() => {
    (async () => {
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== 'granted') {
        setErrorMsg('Permission to access location was denied');
        return;
      }

      let location = await Location.getCurrentPositionAsync({});
      setLocation(location.coords);
    })();
  }, []);

  const updateLocation = async () => {
    let { status } = await Location.requestForegroundPermissionsAsync();
    if (status !== 'granted') {
      setErrorMsg('Permission to access location was denied');
      return;
    }

    let location = await Location.getCurrentPositionAsync({});
    setLocation(location.coords);
  };

  return (
    <View style={styles.container}>
      {location && (
        <MapView
          style={styles.map}
          region={{
            latitude: location.latitude,
            longitude: location.longitude,
            latitudeDelta: 0.0922,
            longitudeDelta: 0.0421,
          }}
        >
          {destination && (
            <Marker coordinate={destination} title="Destination">
              <MaterialIcons name="location-on" size={24} color="blue" />
            </Marker>
          )}
          <Marker coordinate={location} title="Current Location">
            <MaterialIcons name="my-location" size={24} color="blue" />
          </Marker>
        </MapView>
      )}
      {errorMsg && <Text>{errorMsg}</Text>}
      <TouchableOpacity style={styles.button} onPress={updateLocation}>
        <MaterialIcons name="my-location" size={24} color="white" />
      </TouchableOpacity>
      <View style={styles.searchBox}>
        <GooglePlacesAutocomplete
          placeholder="Search"
          onPress={(data, details = null) => {
            setDestination({
              latitude: details.geometry.location.lat,
              longitude: details.geometry.location.lng,
            });
          }}
          query={{
            key: 'AIzaSyC4d9HJz5nBz1ZXochyb-J3vwLopdw_9', // Thay YOUR_API_KEY bằng khóa API của bạn
            language: 'en',
          }}
          fetchDetails={true}
          styles={{
            textInputContainer: {
              backgroundColor: 'rgba(0,0,0,0)',
              borderTopWidth: 0,
              borderBottomWidth: 0,
              width: '100%',
            },
            textInput: {
              marginLeft: 0,
              marginRight: 0,
              height: 38,
              color: '#5d5d5d',
              fontSize: 16,
              width: '100%',
            },
            predefinedPlacesDescription: {
              color: '#1faadb',
            },
          }}
        />
        <TouchableOpacity style={styles.searchButton} onPress={() => console.log('Search pressed')}>
          <Text style={styles.searchButtonText}>Search</Text>
        </TouchableOpacity>
      </View>
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
  map: {
    width: '100%',
    height: '80%',
  },
  button: {
    position: 'absolute',
    backgroundColor: 'blue',
    borderRadius: 30,
    width: 50,
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    bottom: 20,
    right: 20,
  },
  searchBox: {
    position: 'absolute',
    top: 20,
    left: 20,
    width: '80%',
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'white',
    borderRadius: 5,
    paddingHorizontal: 10,
    zIndex: 999,
  },
  searchButton: {
    backgroundColor: 'blue',
    paddingHorizontal: 15,
    paddingVertical: 10,
    borderRadius: 5,
    marginLeft: 10,
  },
  searchButtonText: {
    color: 'white',
  },
});

export default HomeMap;
