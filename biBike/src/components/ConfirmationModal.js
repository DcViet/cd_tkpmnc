// ConfirmationModal.js
import React, { Component } from 'react';
import { Modal, TouchableOpacity, Text, View } from 'react-native';

export default class ConfirmationModal extends Component {
  render() {
    const { visible, tripInfo, onConfirm, onClose } = this.props;

    return (
      <Modal
        visible={visible}
        animationType="slide"
        transparent={true}
        onRequestClose={onClose}>
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: 'rgba(0, 0, 0, 0.5)' }}>
          <View style={{ backgroundColor: 'white', padding: 20, borderRadius: 10 }}>
            {/* Hiển thị thông tin chuyến đi */}
            <Text>Start Location: {tripInfo.startLocation}</Text>
            <Text>End Location: {tripInfo.endLocation}</Text>
            <Text>Car Type: {tripInfo.selectedCarType}</Text>
            <Text>Price: {tripInfo.price}</Text>

            <TouchableOpacity onPress={onConfirm}>
              <Text>Confirm</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={onClose}>
              <Text>Cancel</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    );
  }
}
