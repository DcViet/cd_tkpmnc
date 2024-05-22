import React from 'react';
import { StyleSheet } from 'react-native';
// import Map from '../../components/homeScreen/Map';
// import MapSearch from '../../components/homeScreen/MapSearch';
// import RouteMap from '../../components/homeScreen/RouteMap';
import Map2 from '../../components/homeScreen/Map2';
import { ThemedView } from '@/components/ThemedView';

export default function HomeScreen() {
  const origin = {
    details: {
      geometry: {
        location: {
          lat: 10.7375807,
          lng: 106.6870569,
        },
      },
    },
  };

  const destination = {
    details: {
      geometry: {
        location: {
          lat: 10.7805807,
          lng: 106.7000569,
        },
      },
    },
  };

  return (
    <ThemedView style={HomeStyles.container}>
      {/* <ThemedView style={HomeStyles.mapContainer}>
        <Map />
      </ThemedView> */}

      <ThemedView style={HomeStyles.mapContainer}>
        <Map2 />
      </ThemedView>

      {/* <ThemedView style={HomeStyles.searchContainer}>
        <MapSearch />
      </ThemedView> */}

      {/* <ThemedView style={HomeStyles.routeContainer}>
        <RouteMap origin={origin} destination={destination} />
      </ThemedView> */}
    </ThemedView>
  );
}

const HomeStyles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
  },
  mapContainer: {
    flex: 1,
  },
  searchContainer: {
    backgroundColor: 'white',
    padding: 10,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    elevation: 2,
  },
  routeContainer: {
    flex: 1,
  },
});
