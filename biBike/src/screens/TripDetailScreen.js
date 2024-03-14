import React, { Component } from 'react';
import { View, Text } from 'react-native';

export default class TripDetailScreen extends Component {
  render() {
    // Lấy thông tin chi tiết của chuyến đi từ props
    const { route } = this.props;
    const { trip } = route.params;

    return (
      <View>
        <Text>Destination: {trip.destination}</Text>
        <Text>Start Time: {trip.startTime}</Text>
        <Text>End Time: {trip.endTime}</Text>
        {/* Thêm các thông tin khác của chuyến đi nếu cần */}
      </View>
    );
  }
}
