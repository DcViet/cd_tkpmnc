// LocationPickerModal.js
import React, { Component } from 'react';
import { Modal, TextInput, TouchableOpacity, Text, View } from 'react-native';

export default class LocationPickerModal extends Component {
  constructor(props) {
    super(props);
    this.state = {
      startLocation: '',
      endLocation: ''
    };
  }

  render() {
    const { visible, onClose } = this.props;
    const { startLocation, endLocation } = this.state;

    return (
      <Modal
        visible={visible}
        animationType="slide"
        transparent={true}
        onRequestClose={onClose}>
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: 'rgba(0, 0, 0, 0.5)' }}>
          <View style={{ backgroundColor: 'white', padding: 20, borderRadius: 10 }}>
            <TextInput
              style={{ marginBottom: 10, borderWidth: 1, borderColor: '#ccc', padding: 5 }}
              placeholder="Vị trí đi"
              value={startLocation}
              onChangeText={(text) => this.setState({ startLocation: text })}
            />
            <TextInput
              style={{ marginBottom: 10, borderWidth: 1, borderColor: '#ccc', padding: 5 }}
              placeholder="Vị trí đến"
              value={endLocation}
              onChangeText={(text) => this.setState({ endLocation: text })}
            />
            <TouchableOpacity onPress={() => this.props.onStartLocationSelect(startLocation, endLocation)}>
              <Text>OK</Text>
            </TouchableOpacity>
            
            <TouchableOpacity onPress={onClose}>
              <Text>Đóng</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    );
  }
}
