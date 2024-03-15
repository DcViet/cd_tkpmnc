// import React, { Component } from 'react';
// import { View } from 'react-native';
// import { NavigationContainer } from '@react-navigation/native';
// import { createStackNavigator } from '@react-navigation/stack';
// import TripListScreen from './src/screens/TripListScreen';
// import TripDetailScreen from './src/screens/TripDetailScreen';

// const Stack = createStackNavigator();

// export default class Example extends Component {
//   render() {
//     return (
//       <NavigationContainer>
//         <Stack.Navigator initialRouteName="TripList">
//           <Stack.Screen name="TripList" component={TripListScreen} />
//           <Stack.Screen name="TripDetail" component={TripDetailScreen} />
//         </Stack.Navigator>
//       </NavigationContainer>
//     );
//   }
// }

import React, { Component } from 'react';
import { View, TouchableOpacity, Text, StyleSheet } from 'react-native';
import CarTypeModal from './src/components/CarTypeModal'; 
import ConfrimationModal from './src/components/ConfirmationModal';

export const carTypesData = [
  { id: 1, name: 'Xe Hạng Sang' },
  { id: 2, name: 'Xe Tiêu Chuẩn' },
  { id: 3, name: 'Xe Gia Đình' },
  // Thêm các loại xe khác nếu cần
];

export const locationsData = [
  { id: 1, name: 'Địa điểm A' },
  { id: 2, name: 'Địa điểm B' },
  { id: 3, name: 'Địa điểm C' },
  // Thêm các địa điểm khác nếu cần
];

export default class MainScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showCarTypeModal: false,
      showConfirmationModal: false,
      showBookingSuccessModal: false,
      selectedCarType: null,
    };
  }

  handleCarTypeSelect = (carType) => {
    this.setState({ selectedCarType: carType, showCarTypeModal: false });
  };

  render() {
    return (
      <View style={styles.container}>
        <TouchableOpacity
          style={styles.button}
          onPress={() => this.setState({ showCarTypeModal: true })}
        >
          <Text style={styles.buttonText}>Chọn Loại Xe</Text>
        </TouchableOpacity>


        <TouchableOpacity
          style={styles.button}
          onPress={() => this.setState({ showConfirmationModal: true })}
        >
          <Text style={styles.buttonText}>Chọn Vị Trí Đi - Đến</Text>
        </TouchableOpacity>


        <TouchableOpacity
          style={styles.button}
          onPress={() => this.setState({ showConfirmationModal: true })}
        >
          <Text style={styles.buttonText}>Nhận chuyến xe</Text>
        </TouchableOpacity>

        
        <LocationPicker
          visible={this.state.showConfirmationModal}
          selectedStartLocation={selectedStartLocation}
          selectedEndLocation={selectedEndLocation}
          onStartLocationSelect={this.setState({ selectedStartLocation: location})}
          onEndLocationSelect={this.setState({ selectedEndLocation: location})}
          onClose={this.setState({ showConfirmationModal: false })}
        />


        <CarTypeModal
          visible={this.state.showCarTypeModal}
          carTypes={carTypesData} // Lấy dữ liệu từ carTypesData gán vào biến carTypes rồi đưa vào CarTypeModal
          onCarTypeSelect={this.handleCarTypeSelect}
          onClose={() => this.setState({ showCarTypeModal: false })}
        />

        <ConfrimationModal 
        visible={this.state.showConfirmationModal}
        tripInfo={{
          startLocation: selectedStartLocation?.name,
          endLocation: selectedEndLocation?.name,
          carType: selectedCarType?.name,
          price: '$20', // Giả sử giá cố định là $20
        }}
        onConfirm={this.setState({ showConfirmationModal: false, showBookingSuccessModal: true })}
        onClose={() => this.setState({ showConfirmationModal: false })}       
        />

        <BookingSuccessModal
          visible={showBookingSuccessModal}
          tripInfo={{
            startLocation: selectedStartLocation?.name,
            endLocation: selectedEndLocation?.name,
            carType: selectedCarType?.name,
            price: '$20', // Giả sử giá cố định là $20
          }}
          onClose={this.setState({ showBookingSuccessModal: false })}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  button: {
    backgroundColor: 'blue',
    padding: 15,
    borderRadius: 10,
  },
  buttonText: {
    color: 'white',
    fontWeight: 'bold',
  },
});

