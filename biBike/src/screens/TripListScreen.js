import React, { Component } from 'react';
import { View, Text, FlatList, ScrollView, TouchableOpacity, StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import TripDetailScreen from './TripDetailScreen';

const Stack = createStackNavigator();

export default class TripListScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      trips: [
        { id: 1, destination: 'Địa điểm A', startTime: '08:00', endTime: '09:30' },
        { id: 2, destination: 'Địa điểm B', startTime: '10:00', endTime: '11:30' },
        { id: 3, destination: 'Địa điểm C', startTime: '13:00', endTime: '14:30' },
        
        // Thêm các chuyến đi khác nếu cần
      ],
    };
  }

  renderTripItem = ({ item }) => (
    <TouchableOpacity onPress={() => this.props.navigation.navigate('TripDetail', { trip: item })}>
      <View style={styles.tripItem}>
        <Text style={styles.tripDestination}>{item.destination}</Text>
        <Text>Start Time: {item.startTime}</Text>
        <Text>End Time: {item.endTime}</Text>
      </View>
    </TouchableOpacity>
  );

  render() {
    return (
      <View style={styles.container}>
        <ScrollView style={styles.scrollView}>
        <Text>Danh sách chuyến đi</Text>  
          <FlatList
            data={this.state.trips}
            renderItem={this.renderTripItem}
            keyExtractor={(item) => item.id.toString()}
          />
        </ScrollView>
        <View style={styles.buttonContainer}>
          <TouchableOpacity style={styles.button}>
            <Text style={styles.buttonText}>Xác Nhận</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button}>
            <Text style={styles.buttonText}>Bản Đồ</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5FCFF',
    padding: 16,
  },
  scrollView: {
    flex: 1,
    marginBottom: 16,
  },
  tripItem: {
    marginBottom: 16,
  },
  tripDestination: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  button: {
    backgroundColor: '#007AFF',
    padding: 10,
    borderRadius: 5,
    width: '48%', // 48% to leave space between buttons
  },
  buttonText: {
    color: '#FFFFFF',
    textAlign: 'center',
    fontSize: 16,
  },
});
