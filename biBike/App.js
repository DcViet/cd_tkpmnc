import React, { Component } from 'react';
import { View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import TripListScreen from './src/screens/TripListScreen';
import TripDetailScreen from './src/screens/TripDetailScreen';

const Stack = createStackNavigator();

export default class Example extends Component {
  render() {
    return (
      <NavigationContainer>
        <Stack.Navigator initialRouteName="TripList">
          <Stack.Screen name="TripList" component={TripListScreen} />
          <Stack.Screen name="TripDetail" component={TripDetailScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    );
  }
}
