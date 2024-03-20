// App.js
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import PaymentScreen from './PaymentScreen';
import CardPaymentScreen from './CardPaymentScreen';
import ReviewScreen from './ReviewScreen';

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="1-Home" component={HomeScreen} />
	    <Tab.Screen name="2-Booking" component={BookingScreen} />
	    <Tab.Screen name="3-Progress" component={ProgressScreen} />
        <Tab.Screen name="4-Complete" component={CompleteScreen} />
        <Tab.Screen name="5-Payment" component={PaymentScreen} />
        <Tab.Screen name="6-Review" component={ReviewScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
