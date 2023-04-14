import React from 'react';
import { View, StyleSheet, TouchableOpacity, Platform } from 'react-native';
import { Icon } from '@ui-kitten/components';
import { useNavigation } from '@react-navigation/native';
import {
  Container,
  TopNavigationComponent,
  Text,
  TitleComponent,
  Button,
} from './../../components';
import { ms, vs, s } from 'react-native-size-matters';

const AddBankDetails = () => {
  const { navigate } = useNavigation();

  const ReviewPersonalBill = () => navigate('ReviewPersonalBill');
  return (
    <Container padded={false} scroll>
      <TopNavigationComponent
        title="Bank details"
        textProps={{
          lineHeight: 'line17',
          fontSize: 'size13',
          fontWeight: 'bold',
        }}
        showNotification={false}
        // hideBack={true}
      />

      <TitleComponent title={'Add Bank Details'} />

      <View style={{ marginTop: Platform.OS === 'android' ? s(150) : s(180) }}>
        <Button text="Continue" onPress={() => ReviewPersonalBill()} />
      </View>
    </Container>
  );
};

export default AddBankDetails;
