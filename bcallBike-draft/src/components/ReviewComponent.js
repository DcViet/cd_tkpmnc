import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, Modal, TouchableOpacity } from 'react-native';
import { AntDesign } from '@expo/vector-icons'; // import icon từ thư viện

const ReviewComponent = () => {
  const [rating, setRating] = useState(0);
  const [feedback, setFeedback] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [modalVisible, setModalVisible] = useState(false);

  const handleRatingChange = (value) => {
    setRating(value);
  };

  const handleFeedbackChange = (text) => {
    setFeedback(text);
  };

  const handleSubmit = () => {
    // Điều này sẽ gửi đánh giá và phản hồi của người dùng lên máy chủ hoặc xử lý chúng theo cách khác
    console.log('Rating:', rating);
    console.log('Feedback:', feedback);
    // Sau khi gửi, bạn có thể xử lý việc chuyển hướng hoặc hiển thị thông báo thành công
    setSubmitted(true);
    // Sau khi gửi, đóng modal
    setModalVisible(false);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Rate Your Trip</Text>
      <Button title="Open Feedback Form" onPress={() => setModalVisible(true)} />
      <Modal
        visible={modalVisible}
        animationType="slide"
        transparent={true}
        onRequestClose={() => setModalVisible(false)}
      >
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <TouchableOpacity onPress={() => setModalVisible(false)} style={styles.closeButton}>
              <AntDesign name="close" size={24} color="black" />
            </TouchableOpacity>
            <Text>Please rate your trip:</Text>
            {[1, 2, 3, 4, 5].map((value) => (
              <Button key={value} title={value.toString()} onPress={() => handleRatingChange(value)} />
            ))}
            <TextInput
              style={styles.feedbackInput}
              placeholder="Enter your feedback here..."
              multiline
              numberOfLines={4}
              onChangeText={handleFeedbackChange}
            />
            <Button title="Submit" onPress={handleSubmit} />
          </View>
        </View>
      </Modal>
      {submitted && <Text style={styles.submittedText}>Thank you for your feedback!</Text>}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 20,
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalContent: {
    backgroundColor: '#fff',
    padding: 20,
    borderRadius: 10,
    width: '80%',
  },
  feedbackInput: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    padding: 10,
    marginBottom: 20,
  },
  submittedText: {
    fontSize: 18,
    textAlign: 'center',
  },
  closeButton: {
    position: 'absolute',
    top: 10,
    right: 10,
  },
});

export default ReviewComponent;
