import React from 'react';
import { View, StyleSheet, TouchableOpacity } from 'react-native';
import { Icon, } from '@ui-kitten/components';
import { NavigationProp, useNavigation } from '@react-navigation/native';
import {
  Container,
  TopNavigationComponent,
  Text,
  TitleComponent,
  Button,
} from './../../components';
import { ms, vs, s } from 'react-native-size-matters';

const EnterBillDetail = () => {
  const { navigate } = useNavigation();

  const onSchedulePayment = () => navigate();
  return (
    <Container padded={false} scroll>
      <TopNavigationComponent
        title="Create a custom bill"
        textProps={{
          lineHeight: 'line17',
          fontSize: 'size13',
          fontWeight: 'bold',
        }}
        showNotification={false}
        // hideBack={true}
      />

      <TitleComponent title={'Enter bill details'} />

      <Button text="Next" onPress={() => navigate('SchedulePayment')} />
    </Container>
  );
};

const styles = StyleSheet.create({
  titleContainer: {
    paddingTop: vs(30),
    paddingHorizontal: ms(20, 0.8),
  },
});

export default EnterBillDetail;
