// HomeSidebar.js
import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const HomeSidebar = () => {
  const navigation = useNavigation();

  const goToCompleteScreen = () => {
    navigation.navigate('CompleteScreen');
  };

  const goToMapApp = () => {
    navigation.navigate('MapApp');
  };

  return (
    <View style={{ flex: 1, backgroundColor: '#fff', paddingTop: 50 }}>
      <TouchableOpacity onPress={goToCompleteScreen}>
        <Text>Complete Screen</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={goToMapApp}>
        <Text>Map App</Text>
      </TouchableOpacity>
    </View>
  );
};

export default HomeSidebar;
