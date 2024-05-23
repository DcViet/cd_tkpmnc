import React, { Component, Fragment } from 'react';
import { View, Image } from 'react-native';
import MapView, { Marker, UrlTile, Polyline } from 'react-native-maps';
import * as Location from 'expo-location';
import axios from 'axios';
import { getPixelSize } from '../untils';
import Search from '../Search';
import Details from '../Details';
import markerImage from '@/assets/marker.png';
import backImage from '@/assets/history.png';
import {
  Back,
  LocationBox,
  LocationText,
  LocationTimeBox,
  LocationTimeText,
  LocationTimeTextSmall,
} from './styles';

export default class Map extends Component {
  state = {
    region: null,
    destination: null,
    duration: null,
    location: null,
    route: null,
  };

  async componentDidMount() {
    let { status } = await Location.requestForegroundPermissionsAsync();
    if (status !== 'granted') {
      console.log('Quyền truy cập vị trí đã bị từ chối');
      return;
    }

    let { coords: { latitude, longitude } } = await Location.getCurrentPositionAsync({
      accuracy: Location.Accuracy.High,
    });

    this.setState({
      location: 'Your Location', // Bạn có thể thay đổi cách hiển thị địa chỉ
      region: {
        latitude,
        longitude,
        latitudeDelta: 0.0143,
        longitudeDelta: 0.0134,
      },
    });
  }

  handleLocationSelected = (data, { geometry }) => {
    const {
      location: { lat: latitude, lng: longitude },
    } = geometry;

    this.setState({
      destination: {
        latitude,
        longitude,
        title: data.structured_formatting.main_text,
      },
    }, this.getRouteDirections);
  };

  getRouteDirections = async () => {
    const { region, destination } = this.state;
    if (!region || !destination) return;

    const url = `http://router.project-osrm.org/route/v1/driving/${region.longitude},${region.latitude};${destination.longitude},${destination.latitude}?overview=full&geometries=geojson`;

    try {
      const response = await axios.get(url);
      const routeData = response.data.routes[0];
      const coordinates = routeData.geometry.coordinates.map(([longitude, latitude]) => ({
        latitude,
        longitude,
      }));
      this.setState({ route: coordinates, duration: Math.floor(routeData.duration / 60) });
      this.mapView.fitToCoordinates(coordinates, {
        edgePadding: {
          right: getPixelSize(50),
          left: getPixelSize(50),
          top: getPixelSize(50),
          bottom: getPixelSize(350),
        },
      });
    } catch (error) {
      console.error('Error fetching directions:', error);
    }
  };

  handleBack = () => {
    this.setState({ destination: null, route: null });
  };

  render() {
    const { region, destination, duration, location, route } = this.state;
    const thunderforestApiKey = 'c82c81c3ae1f42b48cf72ff4655754c1'; // Thay bằng API key của bạn

    return (
      <View style={{ flex: 1 }}>
        <MapView
          style={{ flex: 1 }}
          region={region}
          showsUserLocation
          loadingEnabled
          ref={el => (this.mapView = el)}>
          <UrlTile
            urlTemplate={`https://tile.thunderforest.com/cycle/{z}/{x}/{y}.png?apikey=${thunderforestApiKey}`}
            maximumZ={19}
          />
          {destination && route && (
            <Fragment>
              <Polyline
                coordinates={route}
                strokeWidth={3}
                strokeColor="#222"
              />
              <Marker
                coordinate={destination}
                anchor={{ x: 0, y: 0 }}
                image={markerImage}>
                <LocationBox>
                  <LocationText>{destination.title}</LocationText>
                </LocationBox>
              </Marker>

              <Marker coordinate={region} anchor={{ x: 0, y: 0 }}>
                <LocationBox>
                  <LocationTimeBox>
                    <LocationTimeText>{duration}</LocationTimeText>
                    <LocationTimeTextSmall>MIN</LocationTimeTextSmall>
                  </LocationTimeBox>
                  <LocationText>{location}</LocationText>
                </LocationBox>
              </Marker>
            </Fragment>
          )}
        </MapView>

        {destination ? (
          <Fragment>
            <Back onPress={this.handleBack}>
              <Image source={backImage} />
            </Back>
            <Details />
          </Fragment>
        ) : (
          <Search onLocationSelected={this.handleLocationSelected} />
        )}
      </View>
    );
  }
}
