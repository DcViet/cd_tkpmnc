import * as React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import AuthModalScreen from '../components/AuthModalScreen';
import HomeScreen from './HomeScreen';
import BookingScreen from './BookingScreen';
import ProgressScreen from './ProgressScreen';
import CompleteScreen from './CompleteScreen';
import PaymentScreen from './PaymentScreen';
import ReviewScreen from './ReviewScreen';

const Stack = createStackNavigator();

const MapApp = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Main" component={HomeScreen} options={{ headerShown: false }} />
      <Stack.Screen name="AuthModal" component={AuthModalScreen} />
      <Stack.Screen name="Booking" component={BookingScreen} />
      <Stack.Screen name="Progress" component={ProgressScreen} />
      <Stack.Screen name="Complete" component={CompleteScreen} />
      <Stack.Screen name="Payment" component={PaymentScreen} />
      <Stack.Screen name="Review" component={ReviewScreen} />
    </Stack.Navigator>
  );
};

export default MapApp;
