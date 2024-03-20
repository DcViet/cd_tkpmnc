import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';

const ReviewScreen = () => {
  const [rating, setRating] = useState(0);
  const [feedback, setFeedback] = useState('');
  const [submitted, setSubmitted] = useState(false);

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
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Rate Your Trip</Text>
      {submitted ? (
        <Text style={styles.submittedText}>Thank you for your feedback!</Text>
      ) : (
        <>
          <View style={styles.ratingContainer}>
            <Text>Please rate your trip:</Text>
            {[1, 2, 3, 4, 5].map((value) => (
              <Button key={value} title={value.toString()} onPress={() => handleRatingChange(value)} />
            ))}
          </View>
          <TextInput
            style={styles.feedbackInput}
            placeholder="Enter your feedback here..."
            multiline
            numberOfLines={4}
            onChangeText={handleFeedbackChange}
          />
          <Button title="Submit" onPress={handleSubmit} />
        </>
      )}
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
  ratingContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  feedbackInput: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    padding: 10,
    marginBottom: 20,
    width: '100%',
    height: 100,
  },
  submittedText: {
    fontSize: 18,
    textAlign: 'center',
  },
});

export default ReviewScreen;
