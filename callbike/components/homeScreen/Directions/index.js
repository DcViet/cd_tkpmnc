import React, { useEffect, useState } from 'react';
import MapView, { Polyline } from 'react-native-maps';
import { View, ActivityIndicator, StyleSheet } from 'react-native';
import axios from 'axios';

const Directions = ({ destination, origin, onReady }) => {
  const [route, setRoute] = useState(null);

  useEffect(() => {
    const fetchDirections = async () => {
      const url = `http://router.project-osrm.org/route/v1/driving/${origin.longitude},${origin.latitude};${destination.longitude},${destination.latitude}?overview=full&geometries=geojson`;

      try {
        const response = await axios.get(url);
        const routeData = response.data.routes[0];
        const coordinates = routeData.geometry.coordinates.map(([longitude, latitude]) => ({
          latitude,
          longitude,
        }));
        setRoute(coordinates);
        if (onReady) {
          onReady(routeData);
        }
      } catch (error) {
        console.error('Error fetching directions:', error);
      }
    };

    fetchDirections();
  }, [origin, destination, onReady]);

  if (!route) {
    return (
      <View style={styles.loading}>
        <ActivityIndicator size="large" color="#0000ff" />
      </View>
    );
  }

  return (
    <Polyline
      coordinates={route}
      strokeWidth={3}
      strokeColor="#222"
    />
  );
};

const styles = StyleSheet.create({
  loading: {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: [{ translateX: -50 }, { translateY: -50 }],
  },
});

export default Directions;
