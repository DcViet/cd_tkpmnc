import { View, TextInput, SafeAreaView } from 'react-native'
import React, { useEffect, useState } from 'react'
// import styles from './styles'
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete'
import PlacesRow from './PlacesRow'
import { useNavigation } from '@react-navigation/native'
import { StyleSheet } from "react-native";

const homePlace = {
    description: 'Home',
    geometry: { location: { lat: 48.8152937, lng: 2.4597668 } },
};

const workPlace = {
    description: 'Work',
    geometry: { location: { lat: 48.8496818, lng: 2.2940881 } },
};

const Search = () => {

    const [ originPlace, setOriginPlace ] = useState(null);
    const [ destinationPlace, setDestinationPlace ] = useState(null);

    const navigation = useNavigation();

    const checkNavigation = () => {
        console.log('checkNavigation is called');
        if (originPlace && destinationPlace) {
            navigation.navigate('SearchResult', {
                originPlace,
                destinationPlace
            })
        }
    }

    useEffect(() => {
        checkNavigation();
    }, [originPlace, destinationPlace])

  return (
    <SafeAreaView>
        <View style={styles.container}>
            <GooglePlacesAutocomplete 
                placeholder='Điểm đón?'
                onPress={(data, details = null) => {
                    setOriginPlace({data, details})
                }}
                suppressDefaultStyles
                styles={{
                    textInput: styles.textInput,
                    container: styles.autocompleteContainer,
                    listView: styles.listView,
                    separator: styles.separator
                }}
                fetchDetails
                query={{
                    key: 'AIzaSyC4d9HJz5nBz1ZXochyb-J3vwLopdw_9H8',
                    language: 'en',
                }}
                enablePoweredByContainer={false}
                renderRow={(data) => <PlacesRow data={data} />}
                renderDescription={(data) => data.description || data.vicinity}
                currentLocation={true}
                currentLocationLabel='Current Location'
                predefinedPlaces={[homePlace, workPlace]}
            />

            <GooglePlacesAutocomplete 
                placeholder='Điểm đến'
                onPress={(data, details = null) => {
                    setDestinationPlace({data, details})
                }}
                suppressDefaultStyles
                styles={{
                    textInput: styles.textInput,
                    container: {
                        ...styles.autocompleteContainer,
                        top: 55
                    },
                    separator: styles.separator

                }}
                fetchDetails
                query={{
                    key: 'AIzaSyC4d9HJz5nBz1ZXochyb-J3vwLopdw_9H8',
                    language: 'en',
                }}
                enablePoweredByContainer={false}
                renderRow={(data) => <PlacesRow data={data} />}
            />  

            {/* Circle near origin input */}
            <View style={styles.circle}>

            </View>

            {/* the line connecting the two */}
            <View style={styles.line}>

            </View>

            {/* Square near destination input */}
            <View style={styles.square}>

            </View>
        </View>
    </SafeAreaView>
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

export default Search