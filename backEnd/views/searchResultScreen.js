// search screen = searchResult 
import { View, Text, Dimensions, ScrollView } from 'react-native';
import React from 'react';
import mapsBoxService from '../services/mapsBoxService';
import CarType from './carTypes/CarType';
import { useRoute } from '@react-navigation/native';

const SearchResult = (props) => {

  const route = useRoute();

  console.log(route);

  const {originPlace, destinationPlace} = route.params;

  return (
    <ScrollView>
      <View style={{ display: 'flex', justifyContent: 'space-between' }}>
          {/* Map showing destination */}
          <View style={{ height: Dimensions.get('window').height - 400 }}>
            <mapsBoxService origin={originPlace} destination={destinationPlace} />
            {/* noi dung map dc lay tu routeMap- tuy nhien dc chuyen ve dich vu mapsboxService xu ly */}
          </View>

          {/* Select a type of taxi to use */}
          <View style={{ height: 400 }}>
            {/* <TaxiTypes /> */}
            <CarType />
          </View>
      </View>
    </ScrollView>
  )
}

export default SearchResult