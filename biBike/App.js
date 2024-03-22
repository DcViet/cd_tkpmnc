import * as React from 'react';
import { Provider } from 'react-redux';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { GestureHandlerRootView } from 'react-native-gesture-handler';

import store from './store';
import HomeScreen from './src/screens/HomeScreen';
import CompleteScreen from './src/screens/CompleteScreen';

export default function App() {
  const Drawer = createDrawerNavigator();
  
  return (
    <Provider store={store}>
      <NavigationContainer>
        <SafeAreaProvider>
          <GestureHandlerRootView style={{ flex: 1 }}>
            <Drawer.Navigator>
              <Drawer.Screen
                name="Home"
                component={HomeScreen}
                options={{
                  drawerLabel: 'Home',
                  title: 'Overview',
                }}
              />
              <Drawer.Screen
                name="User"
                component={CompleteScreen}
                options={{
                  drawerLabel: 'User',
                  title: 'Overview',
                }}
              />
            </Drawer.Navigator>
          </GestureHandlerRootView>
        </SafeAreaProvider>
      </NavigationContainer>
    </Provider>
  );
}
