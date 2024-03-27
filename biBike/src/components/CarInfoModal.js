import React from 'react';
import { View, Text, TouchableOpacity, Modal } from 'react-native';
import { CarTypeStyles } from '../../styles/componentsStyle';

const CarInfoModal = ({ selectedCarInfo, modalVisible, closeModal }) => {
    return (
        <Modal
            animationType="slide"
            transparent={true}
            visible={modalVisible}
            onRequestClose={closeModal}
        >
            <View style={CarTypeStyles.centeredView}>
                <View style={CarTypeStyles.modalView}>
                    <Text style={CarTypeStyles.modalText}>You have selected:</Text>
                    <Text style={CarTypeStyles.selectedType}>{selectedCarInfo.title}</Text>
                    <TouchableOpacity
                        style={CarTypeStyles.closeButton}
                        onPress={closeModal}
                    >
                        <Text style={CarTypeStyles.closeButtonText}>Close</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </Modal>
    );
};

export default CarInfoModal;
