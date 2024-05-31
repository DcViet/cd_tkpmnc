import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import MapView, { Marker } from 'react-native-maps';
import DirectionsMap from '../directionsMap';
import { useSelector } from 'react-redux';

const TripProgress = () => {
  const { pickupLocation, destination } = useSelector(state => state.map);

  const customMarkerUrl = 'https://api.geoapify.com/v1/icon/?type=awesome&color=green&size=large&icon=user&scaleFactor=2&apiKey=73b004e1726b4e76bb8dbad223aff721';
  const driverMarkerUrl = 'https://api.geoapify.com/v1/icon/?type=awesome&color=red&size=large&icon=car&scaleFactor=2&apiKey=73b004e1726b4e76bb8dbad223aff721';

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Tiến trình chuyến đi</Text>
      <MapView
        style={styles.map}
        initialRegion={{
          latitude: (pickupLocation.latitude + destination.latitude) / 2,
          longitude: (pickupLocation.longitude + destination.longitude) / 2,
          latitudeDelta: 0.1,
          longitudeDelta: 0.1,
        }}
      >
        <Marker coordinate={pickupLocation} title="Tài xế" image={{ uri: driverMarkerUrl }} />
        <Marker coordinate={destination} title="Khách hàng" image={{ uri: customMarkerUrl }} />
        <DirectionsMap
          origin={pickupLocation}
          destination={destination}
          onReady={(result) => {
            console.log('Route is ready', result);
          }}
        />
      </MapView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  map: {
    width: '100%',
    height: '80%',
  },
});

export default TripProgress;
