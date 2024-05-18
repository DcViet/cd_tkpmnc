// man hinh hien thi ket qua search, ve tuyen duong de tu diem di den diem den

import React from 'react'
import MapView, {PROVIDER_GOOGLE, Marker} from 'react-native-maps';
import MapViewDirections from 'react-native-maps-directions';


const mapsBoxService = ({ origin, destination }) => {

    const originLoc = {
        latitude: origin.details.geometry.location.lat,
        longitude: origin.details.geometry.location.lng
    }

    const destinationLoc = {
        latitude: destination.details.geometry.location.lat,
        longitude: destination.details.geometry.location.lng
    }

    const api_key = 'AIzaSyC4d9HJz5nBz1ZXochyb-J3vwLopdw_9H';

  return (
    <MapView
        style={{ width: '100%', height: '100%'}}
        provider={PROVIDER_GOOGLE}
        showsUserLocation={true}
        initialRegion={{
        latitude: 10.7375807,
        longitude: 106.6870569,
        latitudeDelta: 0.0922,
        longitudeDelta: 0.0421,
      }}
    >
        <MapViewDirections 
            origin={originLoc}
            destination={destinationLoc}
            apikey={api_key}
            strokeWidth={3}
        />
        <Marker 
            coordinate={originLoc}
            title={'Origin'}
        />
        <Marker 
            coordinate={destinationLoc}
            title={'Destination'}
        />
    </MapView>
  )
}

export default mapsBoxService