import React, { useState } from 'react';
import { ThemedText } from '@/components/ThemedText';
import { View, StyleSheet, Button, ScrollView } from 'react-native';
import { useRouter, useLocalSearchParams } from 'expo-router';
import CarButton from '../carButton';

const CarSelectionScreen: React.FC = () => {
  const [selected, setSelected] = useState<'economy' | 'luxury' | 'family'>('economy');
  const router = useRouter();
  const { userName } = useLocalSearchParams<{ userName: string }>();

  const handleSubmit = () => {
    router.push({ pathname: '/ride', params: { selectedCarType: selected, userName } });
  };

  return (
    <View style={styles.container}>
      <View style={styles.upperSection}>
        <ThemedText type="title" style={styles.title}>Chọn loại xe!</ThemedText>
        
      </View>

      <View style={styles.lowerSection}>
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          <CarButton text="economy" active={selected === 'economy'} onPress={() => setSelected('economy')} />
          <CarButton text="luxury" active={selected === 'luxury'} onPress={() => setSelected('luxury')} />
          <CarButton text="family" active={selected === 'family'} onPress={() => setSelected('family')} />
        </ScrollView>
      </View>

      <View style={styles.submitButton}>
        <Button title="Submit" onPress={handleSubmit} />
      </View>
      
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#F5F5F5',
  },
  upperSection: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  lowerSection: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    marginBottom: 20,
    fontSize: 20,
    fontWeight: 'bold',
  },
  submitButton: {
    width: '100%',
    alignItems: 'center',
  },
});

export default CarSelectionScreen;
