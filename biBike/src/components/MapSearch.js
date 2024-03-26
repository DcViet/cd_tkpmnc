import { View, Text, Pressable, StyleSheet } from 'react-native'
import React from 'react'
// import styles from './styles'

import AntDesign from 'react-native-vector-icons/AntDesign'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import Entypo from 'react-native-vector-icons/Entypo'
import { useNavigation } from '@react-navigation/native'

const MapSearch = () => {

    const navigation = useNavigation();

    const goToSearch = () => {
        navigation.navigate('Search')
    }

  return (
    <View>
        {/* Input Box */}
        <Pressable style={styles.inputBox} onPress={goToSearch}>
            <Text style={styles.inputText}>Where To?</Text>
            <View style={styles.timeContainer}>
                <AntDesign name={"clockcircle"} size={16} />
                <Text>Now</Text>
                <MaterialIcons name={"keyboard-arrow-down"} size={16} />
            </View>
        </Pressable>

        {/* Previous Destination */}
        <View style={styles.row}>
            <View style={styles.iconContainer}>
                <AntDesign name="clockcircle" size={20} color={"#ffffff"} />
            </View>
            <Text style={styles.destinationText}>Spin Nightclub</Text>
        </View>

        {/* Home Destination */}
        <View style={styles.row}>
            <View style={[styles.iconContainer, { backgroundColor: "#218cff" }]}>
                <Entypo name="home" size={20} color={"#ffffff"} />
            </View>
            <Text style={styles.destinationText}>Spin Nightclub</Text>
        </View>
    </View>
  )
}

const styles = StyleSheet.create({
    inputBox: {
        backgroundColor: '#e7e7e7',
        margin: 10,
        padding: 10,
        flexDirection: "row",
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    inputText: {
        fontSize: 20,
        fontWeight: '600',
        color: '#6e6e6e'
    },
    timeContainer: {
        flexDirection: "row",
        justifyContent: 'space-between',
        width: 100,
        backgroundColor: '#fff',
        padding: 10,
        borderRadius: 50
    },

    row: {
        flexDirection: 'row',
        padding: 20,
        alignItems: 'center',
        borderBottomWidth: 1,
        borderColor: '#dbdbdb'
    },
    iconContainer: {
        backgroundColor: '#b3b3b3',
        padding: 10,
        borderRadius: 25
    },
    destinationText: {
        marginLeft: 10,
        fontWeight: '500',
        fontSize: 16
    },
})

export default MapSearch