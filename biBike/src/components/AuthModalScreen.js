import React from 'react';
import { View, Text, Button } from 'react-native';
import LoginScreen from '../screens/LoginScreen';

const AuthModalScreen = ({ navigation }) => {
  < LoginScreen />
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>This is the Auth Modal Screen</Text>
      <Button
        title="Close"
        onPress={() => navigation.goBack()}
      />
    </View>
  );
};

export default AuthModalScreen;
