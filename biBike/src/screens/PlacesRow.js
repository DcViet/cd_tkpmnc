import { View, Text } from 'react-native'
import React from 'react'
// import styles from './styles'
import Entypo from 'react-native-vector-icons/Entypo'
import { StyleSheet } from "react-native";

const PlacesRow = ({ data }) => {
  return (
    <View style={styles.row}>
        <View style={styles.iconContainer}>
            {data.description === 'Home' ? < Entypo name='home' size={20} color={'#fff'} /> : <Entypo name='location-pin' size={20} color={'#fff'} />}
        </View>
        <Text style={styles.locationText}>
            {data.description || data.vicinity}
        </Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
      padding: 10,
      height: '100%',
  },
  textInput: {
      padding: 10,
      backgroundColor: "#eee",
      marginVertical: 5,
      marginLeft: 20
  },

  autocompleteContainer: {
      position: 'absolute',
      top: 0,
      left: 10,
      right: 10,
      width: '100%'
  },
  separator: {
      backgroundColor: '#efefef',
      height: 1
  },
  listView: {
      position: 'absolute',
      top: 105
  },

  row: {
      flexDirection: 'row',
      alignItems: 'center',
      marginVertical: 10
  },
  iconContainer: {
      backgroundColor: '#a2a2a2',
      padding: 5,
      borderRadius: 50,
      marginRight: 15
  },
  locationText: {

  },

  circle: {
      width: 5,
      height: 5,
      backgroundColor: 'black',
      position: 'absolute',
      top: 20,
      left: 15,
      borderRadius: 5
  },
  line: {
      width: 1,
      height: 50,
      backgroundColor: '#919191',
      position: 'absolute',
      top: 28,
      left: 17
  },
  square: {
      width: 5,
      height: 5,
      backgroundColor: 'black',
      position: 'absolute',
      top: 80,
      left: 15
  }
})

export default PlacesRow