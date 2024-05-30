// import React from 'react';
// import { View, Text, StyleSheet, Button } from 'react-native';
// import { useSelector } from 'react-redux';

// const InfoBox = () => {
//   const { routeDuration, routeDistance, destination } = useSelector(state => state.map);
//   const { selectedCarType } = useSelector(state => state.car);

//   calculatePrice = (distance) => {
//     const baseFee = 10000;
//     const additionalFee = 4000;
//     const totalDistance = parseFloat(distance);
//     const totalPrice = totalDistance <= 1 ? baseFee : baseFee + (totalDistance - 1) * additionalFee;
//     return totalPrice.toFixed(0);
//   };

//   const totalPrice = routeDistance ? this.calculatePrice(routeDistance) : null;

//   if (routeDuration === null || routeDistance === null || !destination.formattedAddress) {
//     return null; // Không hiển thị nếu không có thông tin
//   }

//   return (
//     <View style={styles.infoBox}>
//       <Text style={styles.infoText}>Điểm đến: {destination.formattedAddress}</Text>
//       <Text style={styles.infoText}>Khoảng cách: {routeDistance} km</Text>
//       <Text style={styles.infoText}>Loại xe: {selectedCarType}</Text>
//       <Text style={styles.infoText}>Thời gian dự kiến: {routeDuration} min</Text>        
//       <Text style={styles.infoText}>Giá cước: {totalPrice} VND</Text>

//       <Button title="Tìm tài xế" />
//     </View>


//   );
// };

// const styles = StyleSheet.create({
//   infoBox: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//     padding: 5,
//     backgroundColor: '#F5F5F5',
//   },
//   infoText: {
//     fontSize: 16,
//     fontWeight: 'bold',
//   },
// });

// export default InfoBox;

import React from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';
import { useSelector } from 'react-redux';

const InfoBox = () => {
  const { routeDuration, routeDistance, destination } = useSelector(state => state.map);
  const { selectedCarType } = useSelector(state => state.car);

  const calculatePrice = (distance) => {
    const baseFee = 10000;
    const additionalFee = 4000;
    const totalDistance = parseFloat(distance);
    const totalPrice = totalDistance <= 1 ? baseFee : baseFee + (totalDistance - 1) * additionalFee;
    return totalPrice.toFixed(0);
  };

  const totalPrice = routeDistance ? calculatePrice(routeDistance) : null;

  if (routeDuration === null || routeDistance === null || !destination.formattedAddress) {
    return null; // Không hiển thị nếu không có thông tin
  }

  return (
    <View style={styles.infoBox}>
      <Text style={styles.infoText}>Điểm đến: {destination.formattedAddress}</Text>
      <Text style={styles.infoText}>Khoảng cách: {routeDistance} km</Text>
      <Text style={styles.infoText}>Loại xe: {selectedCarType}</Text>
      <Text style={styles.infoText}>Thời gian dự kiến: {routeDuration} phút</Text>
      <Text style={styles.infoText}>Giá cước: {totalPrice} VND</Text>
      <Button title="Tìm tài xế" onPress={() => {}} />
    </View>
  );
};

const styles = StyleSheet.create({
  infoBox: {
    // justifyContent: 'center',
    // alignItems: 'center',
    padding: 20,
    backgroundColor: '#F5F5F5',
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2, // For Android shadow
    margin: 10,
  },
  infoText: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  button: {
    marginTop: 20,
    padding: 10,
    backgroundColor: '#2196F3',
    borderRadius: 5,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default InfoBox;
