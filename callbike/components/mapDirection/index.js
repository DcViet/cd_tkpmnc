// import React, { Component, Fragment } from 'react';
// import { View, StyleSheet, Text, Image } from 'react-native';
// import MapView, { Marker, Polyline } from 'react-native-maps';
// import * as Location from 'expo-location';

// import markerImage from '@/assets/marker.png';

// const Directions = ({ destination, origin, onReady }) => {
//   const [coordinates, setCoordinates] = React.useState([]);

//   React.useEffect(() => {
//     const getDirections = async () => {
//       try {
//         const response = await fetch(`http://router.project-osrm.org/route/v1/driving/${origin.longitude},${origin.latitude};${destination.longitude},${destination.latitude}?overview=full&geometries=geojson`);
//         const json = await response.json();
//         const points = json.routes[0].geometry.coordinates.map(point => ({
//           latitude: point[1],
//           longitude: point[0],
//         }));
//         setCoordinates(points);
//         if (onReady) {
//           onReady(json.routes[0]);
//         }
//       } catch (error) {
//         console.error(error);
//       }
//     };

//     getDirections();
//   }, [destination, origin, onReady]);

//   return (
//     <Polyline
//       coordinates={coordinates}
//       strokeWidth={3}
//       strokeColor="#222"
//     />
//   );
// };

// export default class MapDirection extends Component {
//   state = {
//     userRegion: null,
//     predefinedRegion: {
//       latitude: 10.7628356,
//       longitude: 106.6799021,
//       latitudeDelta: 0.0143,
//       longitudeDelta: 0.0134,
//     },
//     routeDuration: null,
//     routeDistance: null,
//   };

//   async componentDidMount() {
//     let { status } = await Location.requestForegroundPermissionsAsync();
//     if (status !== 'granted') {
//       console.log('Location permission denied');
//       return;
//     }

//     let { coords: { latitude, longitude } } = await Location.getCurrentPositionAsync({
//       accuracy: Location.Accuracy.High,
//     });

//     this.setState({
//       userRegion: {
//         latitude,
//         longitude,
//         latitudeDelta: 0.0143,
//         longitudeDelta: 0.0134,
//       },
//     });
//   }

//   handleRouteReady = (result) => {
//     this.setState({
//       routeDuration: Math.floor(result.duration / 60),
//       routeDistance: (result.distance / 1000).toFixed(2),
//     });
//   };

//   calculatePrice = (distance) => {
//     const baseFee = 10000;
//     const additionalFee = 4000;
//     const totalDistance = parseFloat(distance);
//     const totalPrice = totalDistance <= 1 ? baseFee : baseFee + (totalDistance - 1) * additionalFee;
//     return totalPrice.toFixed(0);
//   };

//   render() {
//     const { userRegion, predefinedRegion, routeDuration, routeDistance } = this.state;

//     // const pricePerKm = 15000; // đơn giá 15000 VND / 1km
//     // const totalPrice = routeDistance ? (routeDistance * pricePerKm).toFixed(0) : null;
//     const totalPrice = routeDistance ? this.calculatePrice(routeDistance) : null;

//     return (
//       <View style={{ flex: 1 }}>
//         {userRegion && (
//           <Fragment>
//             <MapView
//               style={styles.map}
//               initialRegion={{
//                 latitude: (userRegion.latitude + predefinedRegion.latitude) / 2,
//                 longitude: (userRegion.longitude + predefinedRegion.longitude) / 2,
//                 latitudeDelta: Math.abs(userRegion.latitude - predefinedRegion.latitude) + 0.1,
//                 longitudeDelta: Math.abs(userRegion.longitude - predefinedRegion.longitude) + 0.1,
//               }}
//               showsUserLocation
//               loadingEnabled
//             >
//               <Marker
//                 coordinate={userRegion}
//                 anchor={{ x: 0.5, y: 0.5 }}
//                 image={markerImage}
//               />
//               <Marker
//                 coordinate={predefinedRegion}
//                 anchor={{ x: 0.5, y: 0.5 }}
//                 image={markerImage}
//               />
//               <Directions
//                 origin={userRegion}
//                 destination={predefinedRegion}
//                 onReady={this.handleRouteReady}
//               />
//             </MapView>

//             {(routeDuration !== null && routeDistance !== null) && (
//               <View style={styles.infoBox}>
//                 <Text style={styles.infoText}>Duration: {routeDuration} min</Text>
//                 <Text style={styles.infoText}>Distance: {routeDistance} km</Text>
//                 <Text style={styles.infoText}>Price: {totalPrice} VND</Text>
//               </View>
//             )}
//           </Fragment>
//         )}
//       </View>
//     );
//   }
// }

// const styles = StyleSheet.create({
//   map: {
//     flex: 1,
//     marginBottom: 10,
//   },
//   infoBox: {
//     position: 'absolute',
//     bottom: 10,
//     left: 10,
//     right: 10,
//     padding: 10,
//     backgroundColor: '#FFF',
//     borderRadius: 5,
//     borderWidth: 1,
//     borderColor: '#DDD',
//   },
//   infoText: {
//     fontSize: 16,
//   },
// });



// //nhap vi trí đi:

// import React, { Component, Fragment, useState } from 'react';
// import { View, StyleSheet, Text, Image } from 'react-native';
// import MapView, { Marker, Polyline } from 'react-native-maps';
// import * as Location from 'expo-location';
// import { ThemedText } from '@/components/ThemedText';

// import markerImage from '@/assets/marker.png';
// import SearchBar from '../searchBar';

// import { setRouteInfo } from '../redux/mapSlice';


// const Directions = ({ destination, origin, onReady }) => {
//   const [coordinates, setCoordinates] = useState([]);

//   React.useEffect(() => {
//     const getDirections = async () => {
//       try {
//         const response = await fetch(`http://router.project-osrm.org/route/v1/driving/${origin.longitude},${origin.latitude};${destination.longitude},${destination.latitude}?overview=full&geometries=geojson`);
//         const json = await response.json();
//         const points = json.routes[0].geometry.coordinates.map(point => ({
//           latitude: point[1],
//           longitude: point[0],
//         }));
//         setCoordinates(points);
//         if (onReady) {
//           onReady(json.routes[0]);
//         }
//       } catch (error) {
//         console.error(error);
//       }
//     };

//     getDirections();
//   }, [destination, origin, onReady]);

//   return (
//     <Polyline
//       coordinates={coordinates}
//       strokeWidth={3}
//       strokeColor="#222"
//     />
//   );
// };

// export default class MapDirection extends Component {
//   state = {
//     userRegion: null,
//     predefinedRegion: {
//       latitude: 10.7628356,
//       longitude: 106.6799021,
//       latitudeDelta: 0.0143,
//       longitudeDelta: 0.0134,
//     },
//     routeDuration: null,
//     routeDistance: null,
//   };

//   async componentDidMount() {
//     let { status } = await Location.requestForegroundPermissionsAsync();
//     if (status !== 'granted') {
//       console.log('Location permission denied');
//       return;
//     }

//     let { coords: { latitude, longitude } } = await Location.getCurrentPositionAsync({
//       accuracy: Location.Accuracy.High,
//     });

//     this.setState({
//       userRegion: {
//         latitude,
//         longitude,
//         latitudeDelta: 0.0143,
//         longitudeDelta: 0.0134,
//       },
//     });
//   }

//   handleRouteReady = (result) => {
//     this.setState({
//       routeDuration: Math.floor(result.duration / 60),
//       routeDistance: (result.distance / 1000).toFixed(2),
//     });
//   };

//   calculatePrice = (distance) => {
//     const baseFee = 10000;
//     const additionalFee = 4000;
//     const totalDistance = parseFloat(distance);
//     const totalPrice = totalDistance <= 1 ? baseFee : baseFee + (totalDistance - 1) * additionalFee;
//     return totalPrice.toFixed(0);
//   };

//   handleSearch = (destination) => {
//     this.setState({ predefinedRegion: destination });
//   };

//   render() {
//     const { userRegion, predefinedRegion, routeDuration, routeDistance } = this.state;

//     const totalPrice = routeDistance ? this.calculatePrice(routeDistance) : null;

//     return (
//       <View style={{ flex: 1 }}>
//         <ThemedText>Go to home!</ThemedText>
//         <SearchBar onSearch={this.handleSearch} />
//         {userRegion && (
//           <Fragment>
//             <MapView
//               style={styles.map}
//               initialRegion={{
//                 latitude: (userRegion.latitude + predefinedRegion.latitude) / 2,
//                 longitude: (userRegion.longitude + predefinedRegion.longitude) / 2,
//                 latitudeDelta: Math.abs(userRegion.latitude - predefinedRegion.latitude) + 0.1,
//                 longitudeDelta: Math.abs(userRegion.longitude - predefinedRegion.longitude) + 0.1,
//               }}
//               showsUserLocation
//               loadingEnabled
//             >
//               <Marker
//                 coordinate={userRegion}
//                 anchor={{ x: 0.5, y: 0.5 }}
//                 image={markerImage}
//               />
//               <Marker
//                 coordinate={predefinedRegion}
//                 anchor={{ x: 0.5, y: 0.5 }}
//                 image={markerImage}
//               />
//               <Directions
//                 origin={userRegion}
//                 destination={predefinedRegion}
//                 onReady={this.handleRouteReady}
//               />
//             </MapView>


//             {(routeDuration !== null && routeDistance !== null) && (
//               <View style={styles.infoBox}>
//                 <Text style={styles.infoText}>Duration: {routeDuration} min</Text>
//                 <Text style={styles.infoText}>Distance: {routeDistance} km</Text>
//                 <Text style={styles.infoText}>Price: {totalPrice} VND</Text>
//               </View>
//             )}
//           </Fragment>
//         )}
//       </View>
//     );
//   }
// }

// const styles = StyleSheet.create({
//   map: {
//     flex: 1,
//     marginBottom: 10,
//   },
//   infoBox: {
//     position: 'absolute',
//     bottom: 10,
//     left: 10,
//     right: 10,
//     padding: 10,
//     backgroundColor: '#FFF',
//     borderRadius: 5,
//     borderWidth: 1,
//     borderColor: '#DDD',
//   },
//   infoText: {
//     fontSize: 16,
//   },
// });

// import React, { Component, Fragment } from 'react';
// import { View, StyleSheet, Text } from 'react-native';
// import MapView, { Marker, Polyline } from 'react-native-maps';
// import * as Location from 'expo-location';
// import { connect } from 'react-redux';
// import { ThemedText } from '@/components/ThemedText';

// import markerImage from '@/assets/marker.png';
// import SearchBar from '../searchBar';

// import { setRouteInfo } from '../redux/mapSlice';

// const Directions = ({ destination, origin, onReady }) => {
//   const [coordinates, setCoordinates] = React.useState([]);

//   React.useEffect(() => {
//     const getDirections = async () => {
//       try {
//         const response = await fetch(`http://router.project-osrm.org/route/v1/driving/${origin.longitude},${origin.latitude};${destination.longitude},${destination.latitude}?overview=full&geometries=geojson`);
//         const json = await response.json();
//         const points = json.routes[0].geometry.coordinates.map(point => ({
//           latitude: point[1],
//           longitude: point[0],
//         }));
//         setCoordinates(points);
//         if (onReady) {
//           onReady(json.routes[0]);
//         }
//       } catch (error) {
//         console.error(error);
//       }
//     };

//     getDirections();
//   }, [destination, origin, onReady]);

//   return (
//     <Polyline
//       coordinates={coordinates}
//       strokeWidth={3}
//       strokeColor="#222"
//     />
//   );
// };

// class MapDirection extends Component {
//   state = {
//     userRegion: null,
//     predefinedRegion: {
//       latitude: 10.7628356,
//       longitude: 106.6799021,
//       latitudeDelta: 0.0143,
//       longitudeDelta: 0.0134,
//     },
//     routeDuration: null,
//     routeDistance: null,
//   };

//   async componentDidMount() {
//     let { status } = await Location.requestForegroundPermissionsAsync();
//     if (status !== 'granted') {
//       console.log('Location permission denied');
//       return;
//     }

//     let { coords: { latitude, longitude } } = await Location.getCurrentPositionAsync({
//       accuracy: Location.Accuracy.High,
//     });

//     this.setState({
//       userRegion: {
//         latitude,
//         longitude,
//         latitudeDelta: 0.0143,
//         longitudeDelta: 0.0134,
//       },
//     });
//   }

//   handleRouteReady = (result) => {
//     this.setState({
//       routeDuration: Math.floor(result.duration / 60),
//       routeDistance: (result.distance / 1000).toFixed(2),
//     });
//  // dua du lieu len redux
//     this.props.setRouteInfo({
//       duration: Math.floor(result.duration / 60),
//       distance: (result.distance / 1000).toFixed(2),
//     });
//   };

//   handleSearch = (destination) => {
//     this.setState({ predefinedRegion: destination });
//   };

//   render() {
//     const { userRegion, predefinedRegion } = this.state;


//     return (
//       <View style={{ flex: 1, marginTop: 20 }}>
//         <ThemedText>Go to home!</ThemedText>
//         <SearchBar onSearch={this.handleSearch} />
//         {userRegion && (
//           <Fragment>
//             <MapView
//               style={styles.map}
//               initialRegion={{
//                 latitude: (userRegion.latitude + predefinedRegion.latitude) / 2,
//                 longitude: (userRegion.longitude + predefinedRegion.longitude) / 2,
//                 latitudeDelta: Math.abs(userRegion.latitude - predefinedRegion.latitude) + 0.1,
//                 longitudeDelta: Math.abs(userRegion.longitude - predefinedRegion.longitude) + 0.1,
//               }}
//               showsUserLocation
//               loadingEnabled
//             >
//               <Marker
//                 coordinate={userRegion}
//                 anchor={{ x: 0.5, y: 0.5 }}
//                 image={markerImage}
//               />
//               <Marker
//                 coordinate={predefinedRegion}
//                 anchor={{ x: 0.5, y: 0.5 }}
//                 image={markerImage}
//               />
//               <Directions
//                 origin={userRegion}
//                 destination={predefinedRegion}
//                 onReady={this.handleRouteReady}
//               />
//             </MapView>
//           </Fragment>
//         )}
//       </View>
//     );
//   }
// }

// const styles = StyleSheet.create({
//   map: {
//     flex: 1,
//     marginBottom: 10,
//   },
//   infoBox: {
//     position: 'absolute',
//     bottom: 10,
//     left: 10,
//     right: 10,
//     padding: 10,
//     backgroundColor: '#FFF',
//     borderRadius: 5,
//     borderWidth: 1,
//     borderColor: '#DDD',
//   },
//   infoText: {
//     fontSize: 16,
//   },
// });

// const mapDispatchToProps = {
//   setRouteInfo,
// };

// export default connect(null, mapDispatchToProps)(MapDirection);


// // them tinh nang cap nhat vi tri don
// import React, { Component, Fragment } from 'react';
// import { View, StyleSheet, Text, TouchableOpacity } from 'react-native';
// import MapView, { Marker, Polyline } from 'react-native-maps';
// import * as Location from 'expo-location';
// import { connect } from 'react-redux';
// import { ThemedText } from '@/components/ThemedText';

// import markerImage from '@/assets/marker.png';
// import SearchBar from '../searchBar';

// import { setRouteInfo } from '../redux/mapSlice';

// const Directions = ({ destination, origin, onReady }) => {
//   const [coordinates, setCoordinates] = React.useState([]);

//   React.useEffect(() => {
//     const getDirections = async () => {
//       try {
//         const response = await fetch(`http://router.project-osrm.org/route/v1/driving/${origin.longitude},${origin.latitude};${destination.longitude},${destination.latitude}?overview=full&geometries=geojson`);
//         const json = await response.json();
//         const points = json.routes[0].geometry.coordinates.map(point => ({
//           latitude: point[1],
//           longitude: point[0],
//         }));
//         setCoordinates(points);
//         if (onReady) {
//           onReady(json.routes[0]);
//         }
//       } catch (error) {
//         console.error(error);
//       }
//     };

//     getDirections();
//   }, [destination, origin, onReady]);

//   return (
//     <Polyline
//       coordinates={coordinates}
//       strokeWidth={3}
//       strokeColor="#222"
//     />
//   );
// };

// class MapDirection extends Component {
//   state = {
//     userRegion: null,
//     predefinedRegion: {
//       latitude: 10.7628356,
//       longitude: 106.6799021,
//       latitudeDelta: 0.0143,
//       longitudeDelta: 0.0134,
//     },
//     routeDuration: null,
//     routeDistance: null,
//     useDeviceLocation: true,  // New state to toggle between device location and manual input
//   };

//   async componentDidMount() {
//     this.requestLocationPermission();
//   }

//   requestLocationPermission = async () => {
//     let { status } = await Location.requestForegroundPermissionsAsync();
//     if (status !== 'granted') {
//       console.log('Location permission denied');
//       return;
//     }

//     this.updateDeviceLocation();
//   };

//   updateDeviceLocation = async () => {
//     let { coords: { latitude, longitude } } = await Location.getCurrentPositionAsync({
//       accuracy: Location.Accuracy.High,
//     });

//     this.setState({
//       userRegion: {
//         latitude,
//         longitude,
//         latitudeDelta: 0.0143,
//         longitudeDelta: 0.0134,
//       },
//     });
//   };

//   handleRouteReady = (result) => {
//     this.setState({
//       routeDuration: Math.floor(result.duration / 60),
//       routeDistance: (result.distance / 1000).toFixed(2),
//     });

//     // Update Redux store with route info
//     this.props.setRouteInfo({
//       duration: Math.floor(result.duration / 60),
//       distance: (result.distance / 1000).toFixed(2),
//     });
//   };

//   handleSearch = (destination) => {
//     this.setState({ predefinedRegion: destination });
//   };

//   toggleLocationMethod = () => {
//     this.setState(prevState => ({
//       useDeviceLocation: !prevState.useDeviceLocation,
//     }), () => {
//       if (this.state.useDeviceLocation) {
//         this.updateDeviceLocation();
//       }
//     });
//   };

//   render() {
//     const { userRegion, predefinedRegion, useDeviceLocation } = this.state;

//     return (
//       <View style={{ flex: 1, marginTop: 20 }}>
//         <ThemedText>Go to home!</ThemedText>
//         <SearchBar onSearch={this.handleSearch} />
//         <TouchableOpacity onPress={this.toggleLocationMethod} style={styles.toggleButton}>
//           <Text style={styles.toggleButtonText}>
//             {useDeviceLocation ? 'Use Manual Location' : 'Use Device Location'}
//           </Text>
//         </TouchableOpacity>
//         {!useDeviceLocation && (
//           <SearchBar onSearch={(region) => this.setState({ userRegion: region })} placeholder="Enter pickup location" />
//         )}
//         {userRegion && (
//           <Fragment>
//             <MapView
//               style={styles.map}
//               initialRegion={{
//                 latitude: (userRegion.latitude + predefinedRegion.latitude) / 2,
//                 longitude: (userRegion.longitude + predefinedRegion.longitude) / 2,
//                 latitudeDelta: Math.abs(userRegion.latitude - predefinedRegion.latitude) + 0.1,
//                 longitudeDelta: Math.abs(userRegion.longitude - predefinedRegion.longitude) + 0.1,
//               }}
//               showsUserLocation={useDeviceLocation}
//               loadingEnabled
//             >
//               <Marker
//                 coordinate={userRegion}
//                 anchor={{ x: 0.5, y: 0.5 }}
//                 image={markerImage}
//               />
//               <Marker
//                 coordinate={predefinedRegion}
//                 anchor={{ x: 0.5, y: 0.5 }}
//                 image={markerImage}
//               />
//               <Directions
//                 origin={userRegion}
//                 destination={predefinedRegion}
//                 onReady={this.handleRouteReady}
//               />
//             </MapView>
//           </Fragment>
//         )}
//       </View>
//     );
//   }
// }

// const styles = StyleSheet.create({
//   map: {
//     flex: 1,
//     marginBottom: 10,
//   },
//   toggleButton: {
//     margin: 10,
//     padding: 10,
//     backgroundColor: '#007bff',
//     borderRadius: 5,
//   },
//   toggleButtonText: {
//     color: '#fff',
//     textAlign: 'center',
//   },
//   infoBox: {
//     position: 'absolute',
//     bottom: 10,
//     left: 10,
//     right: 10,
//     padding: 10,
//     backgroundColor: '#FFF',
//     borderRadius: 5,
//     borderWidth: 1,
//     borderColor: '#DDD',
//   },
//   infoText: {
//     fontSize: 16,
//   },
// });

// const mapDispatchToProps = {
//   setRouteInfo,
// };

// export default connect(null, mapDispatchToProps)(MapDirection);


// them map mac dinh
import React, { Component, Fragment } from 'react';
import { View, StyleSheet, Text, TouchableOpacity } from 'react-native';
import MapView, { Marker, Polyline } from 'react-native-maps';
import * as Location from 'expo-location';
import { connect } from 'react-redux';
import { ThemedText } from '@/components/ThemedText';

import markerImage from '@/assets/marker.png';
import SearchBar from '../searchBar';

import { setRouteInfo } from '../redux/mapSlice';

const Directions = ({ destination, origin, onReady }) => {
  const [coordinates, setCoordinates] = React.useState([]);

  React.useEffect(() => {
    const getDirections = async () => {
      try {
        const response = await fetch(`http://router.project-osrm.org/route/v1/driving/${origin.longitude},${origin.latitude};${destination.longitude},${destination.latitude}?overview=full&geometries=geojson`);
        const json = await response.json();
        const points = json.routes[0].geometry.coordinates.map(point => ({
          latitude: point[1],
          longitude: point[0],
        }));
        setCoordinates(points);
        if (onReady) {
          onReady(json.routes[0]);
        }
      } catch (error) {
        console.error(error);
      }
    };

    getDirections();
  }, [destination, origin, onReady]);

  return (
    <Polyline
      coordinates={coordinates}
      strokeWidth={3}
      strokeColor="#222"
    />
  );
};

class MapDirection extends Component {
  state = {
    userRegion: null,
    predefinedRegion: null,
    routeDuration: null,
    routeDistance: null,
    useDeviceLocation: true,  // New state to toggle between device location and manual input
  };

  async componentDidMount() {
    this.requestLocationPermission();
  }

  requestLocationPermission = async () => {
    let { status } = await Location.requestForegroundPermissionsAsync();
    if (status !== 'granted') {
      console.log('Location permission denied');
      return;
    }

    this.updateDeviceLocation();
  };

  updateDeviceLocation = async () => {
    let { coords: { latitude, longitude } } = await Location.getCurrentPositionAsync({
      accuracy: Location.Accuracy.High,
    });

    this.setState({
      userRegion: {
        latitude,
        longitude,
        latitudeDelta: 0.0143,
        longitudeDelta: 0.0134,
      },
    });
  };

  handleRouteReady = (result) => {
    this.setState({
      routeDuration: Math.floor(result.duration / 60),
      routeDistance: (result.distance / 1000).toFixed(2),
    });

    // Update Redux store with route info
    this.props.setRouteInfo({
      duration: Math.floor(result.duration / 60),
      distance: (result.distance / 1000).toFixed(2),
    });
  };

  handleSearch = (destination) => {
    this.setState({ predefinedRegion: destination });
  };

  toggleLocationMethod = () => {
    this.setState(prevState => ({
      useDeviceLocation: !prevState.useDeviceLocation,
    }), () => {
      if (this.state.useDeviceLocation) {
        this.updateDeviceLocation();
      }
    });
  };

  render() {
    const { userRegion, predefinedRegion, useDeviceLocation } = this.state;

    return (
      <View style={{ flex: 1, marginTop: 20 }}>
        <ThemedText>Nhập điểm đến:</ThemedText>
        <SearchBar onSearch={this.handleSearch} />

        <TouchableOpacity onPress={this.toggleLocationMethod} style={styles.toggleButton}>
          <Text style={styles.toggleButtonText}>
            {useDeviceLocation ? 'Chọn điểm đón' : 'Dùng vị trí hiện tại'}
          </Text>
        </TouchableOpacity>

        {!useDeviceLocation && (
          <View>
            <ThemedText>Nhập điểm đón</ThemedText>
            <SearchBar onSearch={(region) => this.setState({ userRegion: region })} />           
          </View>
        )}

        {userRegion && predefinedRegion ? (
          <Fragment>
            <MapView
              style={styles.map}
              initialRegion={{
                latitude: (userRegion.latitude + predefinedRegion.latitude) / 2,
                longitude: (userRegion.longitude + predefinedRegion.longitude) / 2,
                latitudeDelta: Math.abs(userRegion.latitude - predefinedRegion.latitude) + 0.1,
                longitudeDelta: Math.abs(userRegion.longitude - predefinedRegion.longitude) + 0.1,
              }}
              showsUserLocation={useDeviceLocation}
              loadingEnabled
            >
              <Marker
                coordinate={userRegion}
                anchor={{ x: 0.5, y: 0.5 }}
                image={markerImage}
              />
              <Marker
                coordinate={predefinedRegion}
                anchor={{ x: 0.5, y: 0.5 }}
                image={markerImage}
              />
              <Directions
                origin={userRegion}
                destination={predefinedRegion}
                onReady={this.handleRouteReady}
              />
            </MapView>
          </Fragment>
        ) : (
          userRegion && (
            <MapView
              style={styles.map}
              region={userRegion}
              showsUserLocation
              loadingEnabled
            >
              <Marker
                coordinate={userRegion}
                anchor={{ x: 0.5, y: 0.5 }}
                image={markerImage}
              />
            </MapView>
          )
        )}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  map: {
    flex: 1,
    marginBottom: 10,
  },
  toggleButton: {
    margin: 10,
    padding: 10,
    backgroundColor: '#007bff',
    borderRadius: 5,
  },
  toggleButtonText: {
    color: '#fff',
    textAlign: 'center',
  },
  infoBox: {
    position: 'absolute',
    bottom: 10,
    left: 10,
    right: 10,
    padding: 10,
    backgroundColor: '#FFF',
    borderRadius: 5,
    borderWidth: 1,
    borderColor: '#DDD',
  },
  infoText: {
    fontSize: 16,
  },
});

const mapDispatchToProps = {
  setRouteInfo,
};

export default connect(null, mapDispatchToProps)(MapDirection);
