import React from 'react';
import { View, Text, Dimensions, ScrollView } from 'react-native';
import RouteMap from './RouteMap';
import TaxiTypes from './TaxiTypes';

import { useRoute } from '@react-navigation/native';

export default function SearchResult(props) {
  const route = useRoute();
  const { originPlace, destinationPlace } = route.params;

  console.log(route);

  return (
    <ScrollView>
      <View style={{ flex: 1 }}>
        {/* Map showing destination */}
        <View style={{ height: Dimensions.get('window').height - 400 }}>
          <RouteMap origin={originPlace} destination={destinationPlace} />
        </View>

        {/* Select a type of taxi to use */}
        <View style={{ height: 400 }}>
          <TaxiTypes />
        </View>
      </View>
    </ScrollView>
  );
}
