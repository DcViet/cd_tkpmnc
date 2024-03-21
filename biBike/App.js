// App.js
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import HomeScreen from './src/screens/HomeScreen';
import BookingS from './src/screens/BookingS';
import ProgressScreen from './src/screens/ProgressScreen';
import CompleteScreen from './src/screens/CompleteScreen';
import PaymentScreen from './src/screens/PaymentScreen';
import ReviewS from './src/screens/ReviewS';

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="1-Home" component={HomeScreen} />
        <Tab.Screen name="2-Booking" component={BookingS} />
        <Tab.Screen name="3-Progress" component={ProgressScreen} />
        <Tab.Screen name="4-Complete" component={CompleteScreen} />
        <Tab.Screen name="5-Payment" component={PaymentScreen} />
        <Tab.Screen name="6-Review" component={ReviewS} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
