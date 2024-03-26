import React, { useState } from 'react';
import { View, StyleSheet, Text, TouchableOpacity, ScrollView, Modal } from 'react-native'; // Import Modal
import { CheckBox } from '@rneui/themed'; // Import CheckBox component

const UberTypes = ({ onSelect }) => {
  const [selectedType, setSelectedType] = useState(null); // State to store the selected Uber type
  const [modalVisible, setModalVisible] = useState(false); // State to control the visibility of the modal

  const uberTypes = [
    { type: 'UberX', price: '$10-15', time: '5 min' },
    { type: 'UberXL', price: '$15-20', time: '7 min' },
    { type: 'UberBlack', price: '$20-25', time: '10 min' },
  ];

  const handleSelect = (type) => {
    setSelectedType(type === selectedType ? null : type);
    // onSelect(type);
  };

  const handleConfirmation = () => {
    setModalVisible(true); // Show the modal when the confirmation button is pressed
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Choose a ride</Text>
      <ScrollView>
        {uberTypes.map((uberType, index) => (
          <TouchableOpacity
            key={index}
            style={styles.uberType}
            onPress={() => handleSelect(uberType.type)}
          >
            <View style={styles.row}>
              <CheckBox
                checked={selectedType === uberType.type}
                onChange={() => handleSelect(uberType.type)}
              />
              <Text style={styles.uberTypeName}>{uberType.type}</Text>
            </View>
            <Text style={styles.uberTypeDetails}>{uberType.price} • {uberType.time}</Text>
          </TouchableOpacity>
        ))}
      </ScrollView>
      {selectedType && (
        <TouchableOpacity onPress={handleConfirmation} style={styles.confirmationButton}>
          <Text style={styles.confirmationButtonText}>Confirm</Text>
        </TouchableOpacity>
      )}
      {/* Modal for confirmation */}
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          setModalVisible(false);
        }}
      >
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <Text style={styles.modalText}>You have selected:</Text>
            <Text style={styles.selectedType}>{selectedType}</Text>
            <TouchableOpacity
              style={styles.closeButton}
              onPress={() => setModalVisible(false)}
            >
              <Text style={styles.closeButtonText}>Close</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 20,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  uberType: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 10,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  uberTypeName: {
    fontSize: 16,
    fontWeight: 'bold',
    marginLeft: 10,
  },
  uberTypeDetails: {
    fontSize: 14,
    color: '#666',
  },
  confirmationButton: {
    backgroundColor: '#007AFF',
    paddingVertical: 10,
    borderRadius: 5,
    alignItems: 'center',
  },
  confirmationButtonText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#fff',
  },
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 22,
  },
  modalView: {
    margin: 20,
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 35,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  modalText: {
    marginBottom: 15,
    textAlign: 'center',
    fontSize: 18,
  },
  selectedType: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 15,
  },
  closeButton: {
    backgroundColor: '#007AFF',
    borderRadius: 5,
    padding: 10,
  },
  closeButtonText: {
    color: 'white',
    fontWeight: 'bold',
  },
});

export default UberTypes;
