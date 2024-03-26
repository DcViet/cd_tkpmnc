import * as React from 'react';
import { Provider } from 'react-redux';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator, DrawerContentScrollView, DrawerItemList, DrawerItem } from '@react-navigation/drawer';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { Ionicons } from '@expo/vector-icons';

import store from './store';
import HomeScreen from './src/screens/HomeScreen';
import Search from './src/screens/Search';
import BookingScreen from './src/screens/BookingScreen';
import ProgressScreen from './src/screens/ProgressScreen';
import CompleteScreen from './src/screens/CompleteScreen';
import ReviewScreen from './src/screens/ReviewScreen';
import LoginScreen from './src/screens/LoginScreen';
import PaymentScreen from './src/screens/PaymentScreen';
import SearchResult from './src/components/SearchResult';

export default function App() {
  const Drawer = createDrawerNavigator();

  // Custom Drawer Content
  function CustomDrawerContent(props) {
    return (
      <DrawerContentScrollView {...props}>
        <DrawerItemList {...props} />
        {/* Đây là nút chuông thông báo trong Drawer */}
        <DrawerItem
          label="Notifications"
          onPress={() => alert('Notification pressed')}
          icon={({ focused, color, size }) => (
            <Ionicons
              name={focused ? 'notifications' : 'notifications-outline'}
              size={size}
              color={color}
            />
          )}
        />

      </DrawerContentScrollView>
    );
  }

  return (
    <Provider store={store}>
      <NavigationContainer>
        <SafeAreaProvider>
          <GestureHandlerRootView style={{ flex: 1 }}>
            <Drawer.Navigator
              drawerContent={props => <CustomDrawerContent {...props} />}
              screenOptions={({ navigation }) => ({
                headerLeft: () => (
                  <Ionicons
                    name="menu"
                    size={30}
                    style={{ marginLeft: 10 }}
                    onPress={() => navigation.toggleDrawer()}
                  />
                ),
                headerRight: () => (
                  <Ionicons
                    name="notifications"
                    size={20}
                    style={{ marginRight: 10 }}
                    onPress={() => alert('Notification pressed')}
                  />
                )
              })}
            >
              <Drawer.Screen
                name="Home"
                component={HomeScreen}
                options={{
                  drawerLabel: 'Home',
                  title: 'Overview',
                }}
              />

              <Drawer.Screen
                name="Search"
                component={Search}
                options={{
                  drawerLabel: 'Search',
                  title: 'Overview',
                }}
              />
              <Drawer.Screen
                name="SearchResult"
                component={SearchResult}
                options={{
                  drawerLabel: 'SearchResult',
                  title: 'Overview',
                }}
              />
              
              <Drawer.Screen
                name="Booking"
                component={BookingScreen}
                options={{
                  drawerLabel: 'Booking',
                  title: 'BookingScreen',
                }}
              />

              <Drawer.Screen
                name="Progress"
                component={ProgressScreen}
                options={{
                  drawerLabel: 'Progress',
                  title: 'ProgressScreen',
                }}
              />

              <Drawer.Screen
                name="Complete"
                component={CompleteScreen}
                options={{
                  drawerLabel: 'Complete',
                  title: 'CompleteScreen',
                }}
              />

              <Drawer.Screen
                name="Review"
                component={ReviewScreen}
                options={{
                  drawerLabel: 'Review',
                  title: 'ReviewScreen',
                }}
              />

              <Drawer.Screen
                name="Login/Signup"
                component={LoginScreen}
                options={{
                  drawerLabel: 'Login/Signup',
                  title: 'LoginScreen',
                }}
              />

              <Drawer.Screen
                name="Payment"
                component={PaymentScreen}
                options={{
                  drawerLabel: 'Payment',
                  title: 'PaymentScreen',
                }}
              />

            </Drawer.Navigator>
          </GestureHandlerRootView>
        </SafeAreaProvider>
      </NavigationContainer>
    </Provider>
  );
}
