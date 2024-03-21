import React, { useState } from 'react';
import { View, StyleSheet, Text, TouchableOpacity, Modal } from 'react-native';
import BookCalendar from './BookCalendar';

const BookLate = () => {
    const [modalVisible, setModalVisible] = useState(false);

    const handleConfirm = () => {
        // Thực hiện các hành động khi xác nhận
        console.log('Booked');
        setModalVisible(false); // Ẩn modal sau khi xác nhận

    };

    return (
        <View style={styles.container}>
            <TouchableOpacity style={styles.confirmButton} onPress={() => setModalVisible(true)}>
                <Text style={styles.confirmButtonText}>BookLate</Text>
            </TouchableOpacity>

            <Modal
                animationType="slide"
                transparent={true}
                visible={modalVisible}
                onRequestClose={() => {
                    setModalVisible(false);
                }}
            >
                <View style={styles.modalContainer}>
                    <View style={styles.modalContent}>

                        <TouchableOpacity style={styles.closeButton} onPress={() => setModalVisible(false)}>
                            <Text style={styles.closeButtonText}>Close</Text>
                        </TouchableOpacity>

                        {/* <BookCalendar /> */}

                        <TouchableOpacity style={styles.modalConfirmButton} onPress={handleConfirm}>
                            <Text style={styles.modalConfirmButtonText}>BLate</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </Modal>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'white',
        borderRadius: 10,
        padding: 20,
        elevation: 5,
    },
    title: {
        fontSize: 20,
        fontWeight: 'bold',
        marginBottom: 10,
    },
    info: {
        fontSize: 16,
        marginBottom: 5,
    },
    confirmButton: {
        backgroundColor: 'blue',
        borderRadius: 5,
        paddingVertical: 10,
        alignItems: 'center',
        marginTop: 20,
    },
    confirmButtonText: {
        fontSize: 18,
        color: 'white',
        fontWeight: 'bold',
    },
    modalContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
    },
    modalContent: {
        backgroundColor: 'white',
        borderRadius: 10,
        padding: 20,
        elevation: 5,
    },
    closeButton: {
        alignSelf: 'flex-end',
    },
    closeButtonText: {
        fontSize: 16,
        color: 'blue',
    },
    modalTitle: {
        fontSize: 20,
        fontWeight: 'bold',
        marginBottom: 10,
    },
    modalInfo: {
        fontSize: 16,
        marginBottom: 5,
    },
    modalConfirmButton: {
        backgroundColor: 'blue',
        borderRadius: 5,
        paddingVertical: 10,
        alignItems: 'center',
        marginTop: 20,
    },
    modalConfirmButtonText: {
        fontSize: 18,
        color: 'white',
        fontWeight: 'bold',
    },
});

export default BookLate;
