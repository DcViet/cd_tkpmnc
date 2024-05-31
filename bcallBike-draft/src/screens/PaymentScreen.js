import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

const PaymentScreen = () => {
  const [selectedPaymentMethod, setSelectedPaymentMethod] = useState(null);

  const handlePaymentSelection = (method) => {
    setSelectedPaymentMethod(method);
  };

  const handlePayment = () => {
    // Xử lý thanh toán dựa trên phương thức được chọn
    if (selectedPaymentMethod) {
      console.log(`Processing payment with ${selectedPaymentMethod}`);
      // Thực hiện xử lý thanh toán ở đây (ví dụ: gửi yêu cầu thanh toán đến API)
    } else {
      console.log('Please select a payment method');
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Choose Payment Method</Text>
      <TouchableOpacity
        style={[styles.paymentOption, selectedPaymentMethod === 'Cash' && styles.selectedPaymentOption]}
        onPress={() => handlePaymentSelection('Cash')}
      >
        <Text style={styles.paymentOptionText}>Cash (after the trip)</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={[styles.paymentOption, selectedPaymentMethod === 'Card' && styles.selectedPaymentOption]}
        onPress={() => handlePaymentSelection('Card')}
      >
        <Text style={styles.paymentOptionText}>Credit/Debit Card</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={[styles.paymentOption, selectedPaymentMethod === 'Other' && styles.selectedPaymentOption]}
        onPress={() => handlePaymentSelection('Other')}
      >
        <Text style={styles.paymentOptionText}>Other Payment Methods</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.paymentButton} onPress={handlePayment}>
        <Text style={styles.paymentButtonText}>Proceed to Payment</Text>
      </TouchableOpacity>
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
  paymentOption: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    paddingVertical: 10,
    paddingHorizontal: 20,
    marginBottom: 20,
  },
  selectedPaymentOption: {
    backgroundColor: '#e0e0e0',
  },
  paymentOptionText: {
    fontSize: 16,
  },
  paymentButton: {
    backgroundColor: 'blue',
    paddingVertical: 15,
    paddingHorizontal: 30,
    borderRadius: 5,
  },
  paymentButtonText: {
    color: 'white',
    fontSize: 18,
  },
});

export default PaymentScreen;
