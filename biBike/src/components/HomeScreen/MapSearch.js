import { View, Text, Pressable, StyleSheet } from 'react-native'
import React from 'react'
// import MapSearchStyles from './MapSearchStyles'

import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import { useNavigation } from '@react-navigation/native'

const MapSearch = () => {

    const navigation = useNavigation();

    const goToSearch = () => {
        navigation.navigate('Search')
    }

    return (
        <View>
            {/* Input Box */}
            <Text style={MapSearchStyles.inputText}>Muốn đi đâu ?</Text>
            <Pressable style={MapSearchStyles.inputBox} onPress={goToSearch}>               
                <View style={MapSearchStyles.timeContainer}>
                    <MaterialIcons name={"fmd-good"} size={16} />
                    <Text>Bây giờ</Text>
                    <MaterialIcons name={"keyboard-arrow-right"} size={16} />
                </View>
                <View style={MapSearchStyles.timeContainer}>
                    <MaterialIcons name={"access-time"} size={16} />
                    <Text>Đặt trước</Text>
                    <MaterialIcons name={"keyboard-arrow-down"} size={16} />
                </View>
            </Pressable>

            {/* Previous Destination */}
            <View style={MapSearchStyles.row}>
                <View style={[MapSearchStyles.iconContainer, { backgroundColor: "#218cff" }]}>
                    <MaterialIcons name="access-time" size={20} color={"#ffffff"} />
                </View>
                <Text style={MapSearchStyles.destinationText}>VNG Q7</Text>
            </View>

            {/* Home Destination */}
            <View style={MapSearchStyles.row}>
                <View style={[MapSearchStyles.iconContainer, { backgroundColor: "#218cff" }]}>
                    <MaterialIcons name="home" size={20} color={"#ffffff"} />
                </View>
                <Text style={MapSearchStyles.destinationText}>Home</Text>
            </View>

        </View>
    )
}

const MapSearchStyles = StyleSheet.create({
    inputBox: {
        backgroundColor: '#1ABC9C',
        marginHorizontal: 10,
        marginVertical: 5,
        padding: 10,
        flexDirection: "row",
        justifyContent: 'space-between',
        alignItems: 'center',
        borderRadius: 10
    },
    inputText: {
        fontSize: 20,
        fontWeight: 'bold',
        color: '#fff',
        marginLeft: 15,
        marginBottom: 5
    },
    timeContainer: {
        flexDirection: "row",
        alignItems: 'center',
        backgroundColor: 'rgba(255, 255, 255, 0.3)',
        paddingVertical: 8,
        paddingHorizontal: 12,
        borderRadius: 20
    },
    timeText: {
        fontSize: 16,
        color: '#fff',
        marginLeft: 5
    },
    row: {
        flexDirection: 'row',
        paddingVertical: 15,
        paddingHorizontal: 10,
        alignItems: 'center',
        borderBottomWidth: 1,
        borderColor: '#dbdbdb'
    },
    iconContainer: {
        backgroundColor: '#218cff',
        padding: 10,
        borderRadius: 25
    },
    destinationText: {
        marginLeft: 10,
        fontWeight: '500',
        fontSize: 16,
        color: '#000' // Màu chữ của destinationText
    },
})

export default MapSearch