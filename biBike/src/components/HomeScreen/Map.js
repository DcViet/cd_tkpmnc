import { View, Text, Image } from 'react-native'
import React from 'react'
import MapView, {PROVIDER_GOOGLE, Marker} from 'react-native-maps';

import cars from '../../../assets/data/car';

const Map = () => {

  const getImage = (type) => {
    if (type === 'UberX') {
      return require('../../../assets/images/glc-300.png')
    }
    if (type === 'Comfort') {
      return require('../../../assets/images/glc-300.png')
    }
    if (type === 'UberXL') {
      return require('../../../assets/images/glc-300.png')
    }
  }
  return (
    <MapView
        style={{ width: '100%', height: '100%'}}
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
            style={{ width: 70, height: 70, resizeMode: 'contain', transform: [{ rotate:`${car.heading}deg` }] }}
            source={getImage(car.type)} />
          </Marker>
      ))}
    </MapView>
  )
}

export default Map