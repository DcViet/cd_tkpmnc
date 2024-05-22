import React from 'react';
import {Image } from 'react-native';
import MapView, { PROVIDER_GOOGLE, Marker } from 'react-native-maps';
import cars from '../../assets/data/car';

export default function Map() {
  const getImage = (type) => {
    if (type === 'UberX' || type === 'Comfort' || type === 'UberXL') {
      return require('../../assets/images/react-logo.png');
    }
  };

  return (
    <MapView
      style={{ width: '100%', height: '100%' }}
      provider={PROVIDER_GOOGLE}
      showsUserLocation={true}
      initialRegion={{
        latitude: 10.7375807,
        longitude: 106.6870569,
        latitudeDelta: 0.01,
        longitudeDelta: 0.01,
      }}
    >
      {cars.map((car) => (
        <Marker key={car.id} coordinate={{ latitude: car.latitude, longitude: car.longitude }}>
          <Image
            style={{ width: 70, height: 70, resizeMode: 'contain', transform: [{ rotate: `${car.heading}deg` }] }}
            source={getImage(car.type)}
          />
        </Marker>
      ))}
    </MapView>
  );
}
