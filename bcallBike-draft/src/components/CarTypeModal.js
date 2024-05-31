import React, { useState } from 'react';
import { Modal, View, TouchableOpacity, Text, StyleSheet } from 'react-native';

const CarTypeModal = ({ visible, carTypes, onCarTypeSelect, onClose }) => {
  const [selectedCarType, setSelectedCarType] = useState(null);

  const handleCarTypeSelect = (carTypeName) => {
    setSelectedCarType(carTypeName);
    onCarTypeSelect(carTypeName); // Chuyển loại xe đã chọn ra ngoài để sử dụng trong modal confirm
  };

  return (
    <Modal
      visible={visible}
      transparent={true}
      animationType="fade"
    >
      <View style={styles.overlay}>
        <View style={styles.modal}>
          <Text style={styles.title}>Chọn Loại Xe</Text>
          {carTypes.map((carType) => (
            <TouchableOpacity
              key={carType.id}
              style={styles.carTypeItem}
              onPress={() => handleCarTypeSelect(carType.name)} // Sử dụng hàm handleCarTypeSelect để xử lý sự kiện chọn loại xe
            >
              <Text style={styles.carTypeName}>{carType.name}</Text>
            </TouchableOpacity>
          ))}
          <TouchableOpacity style={styles.closeButton} onPress={onClose}>
            <Text style={styles.closeButtonText}>Đóng</Text>
          </TouchableOpacity>
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  overlay: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  modal: {
    backgroundColor: 'white',
    padding: 20,
    borderRadius: 10,
    width: '80%',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  carTypeItem: {
    backgroundColor: '#E0E0E0',
    padding: 20,
    borderRadius: 10,
    marginBottom: 10,
  },
  carTypeName: {
    fontSize: 18,
  },
  closeButton: {
    backgroundColor: 'red',
    padding: 10,
    borderRadius: 5,
    alignSelf: 'center',
    marginTop: 20,
  },
  closeButtonText: {
    color: 'white',
    fontWeight: 'bold',
  },
});

export default CarTypeModal;
