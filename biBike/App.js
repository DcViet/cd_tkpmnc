import React, { Component } from 'react';
import { View, TouchableOpacity, Text, StyleSheet } from 'react-native';
import CarTypeModal from './src/components/CarTypeModal';
import LocationPickerModal from './src/components/LocationPickerModal';
import BookingSuccessModal from './src/components/BookingSuccessModal';
import ConfirmationModal from './src/components/ConfirmationModal';


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

      selectedStartLocation: null,
      selectedEndLocation: null,

      selectedCarType: null,

    };
  }

  handleCarTypeSelect = (carType) => {
    this.setState({ selectedCarType: carType, showCarTypeModal: false });
  };


  handleStartLocationSelection = (startLocation, endLocation) => {
    this.setState({
      showLocationPickerModal: false,
      showConfirmationModal: true,
      selectedStartLocation: startLocation,
      selectedEndLocation: endLocation
    });
  };

  handleEndLocationSelection = (location) => {
    this.setState({ selectedEndLocation: location });
  };

  render() {
    const { showLocationPickerModal, showConfirmationModal, showBookingSuccessModal, selectedStartLocation, selectedEndLocation, selectedCarType } = this.state;

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
          onPress={() => this.setState({ showLocationPickerModal: true })}
        >
          <Text style={styles.buttonText}>Chọn Vị Trí Đi - Đến</Text>
        </TouchableOpacity>


        <TouchableOpacity
          style={styles.button}
          onPress={() => this.setState({ showConfirmationModal: true })}
        >
          <Text style={styles.buttonText}>Nhận chuyến xe</Text>
        </TouchableOpacity>

        <CarTypeModal
          visible={this.state.showCarTypeModal}
          carTypes={carTypesData} // Lấy dữ liệu từ carTypesData gán vào biến carTypes rồi đưa vào CarTypeModal
          onCarTypeSelect={this.handleCarTypeSelect}
          onClose={() => this.setState({ showCarTypeModal: false })}
        />

        {/* <LocationPickerModal
          visible={showConfirmationModal}
          onStartLocationSelect={this.handleStartLocationSelection}
          onEndLocationSelect={this.handleEndLocationSelection}
          onClose={() => this.setState({ showConfirmationModal: false })}
        /> */}

        <LocationPickerModal
          visible={showLocationPickerModal}
          onStartLocationSelect={this.handleStartLocationSelection}
          onClose={() => this.setState({ showLocationPickerModal: false })}
        />

        <ConfirmationModal
          visible={showConfirmationModal}
          tripInfo={{
            startLocation: selectedStartLocation,
            endLocation: selectedEndLocation,
            carType: selectedCarType?.name,
            price: '$20', // Giả sử giá cố định là $20
          }}
          onConfirm={this.handleConfirm}
          onClose={() => this.setState({ showConfirmationModal: false })}
        />

        <BookingSuccessModal
          visible={showBookingSuccessModal}
          tripInfo={{
            startLocation: selectedStartLocation,
            endLocation: selectedEndLocation,
            carType: selectedCarType?.name,
            price: '$20', // Giả sử giá cố định là $20
          }}
          onClose={() => this.setState({ showBookingSuccessModal: false })}
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

