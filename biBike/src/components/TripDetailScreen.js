import React from 'react';
import { View, StyleSheet, Text } from 'react-native';
import MapView, { Marker, Polyline } from 'react-native-maps';

const TripDetailScreen = () => {
  // Dữ liệu mẫu cho chuyến đi
  const trip = {
    startLocation: { latitude: 37.78825, longitude: -122.4324 },
    destination: { latitude: 37.785834, longitude: -122.406417 },
    type: 'UberX',
    price: '$10-15',
    time: '5 min',
    driverInfo: 'John Doe (Uber Driver)',
  };

  return (
    <View style={styles.container}>
      <MapView
        style={styles.map}
        initialRegion={{
          latitude: (trip.startLocation.latitude + trip.destination.latitude) / 2,
          longitude: (trip.startLocation.longitude + trip.destination.longitude) / 2,
          latitudeDelta: Math.abs(trip.startLocation.latitude - trip.destination.latitude) * 2,
          longitudeDelta: Math.abs(trip.startLocation.longitude - trip.destination.longitude) * 2,
        }}
      >
        <Marker coordinate={trip.startLocation} title="Start Location" />
        <Marker coordinate={trip.destination} title="Destination" />
        <Polyline
          coordinates={[trip.startLocation, trip.destination]}
          strokeColor="#000" // màu đường
          strokeWidth={2} // độ rộng đường
        />
      </MapView>
      <View style={styles.detailsContainer}>
        <Text style={styles.title}>Trip Details</Text>
        <Text style={styles.detail}>Start Location: {trip.startLocation.latitude}, {trip.startLocation.longitude}</Text>
        <Text style={styles.detail}>Destination: {trip.destination.latitude}, {trip.destination.longitude}</Text>
        <Text style={styles.detail}>Type: {trip.type}</Text>
        <Text style={styles.detail}>Price: {trip.price}</Text>
        <Text style={styles.detail}>Time: {trip.time}</Text>
        <Text style={styles.detail}>Driver Information: {trip.driverInfo}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  map: {
    flex: 1,
  },
  detailsContainer: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: 'white',
    padding: 20,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    elevation: 5,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  detail: {
    fontSize: 16,
    marginBottom: 5,
  },
});

export default TripDetailScreen;
