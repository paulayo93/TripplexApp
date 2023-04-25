import React from 'react';
import { View, StyleSheet, TouchableOpacity, Platform } from 'react-native';
import { Icon } from '@ui-kitten/components';
import { NavigationProp, useNavigation } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';
import {
  Container,
  TopNavigationComponent,
  Text,
  TitleComponent,
  Button,
} from './../../components';
import { ms, vs, s } from 'react-native-size-matters';

const BillCard = ({
  title,
  subTitle,
  iconName,
  style,
  subTitleStyle,
  titleStyle,
  onPress,
}) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <View style={[{ ...styles.billContainer }, style]}>
        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
          <Icon
            style={{ height: ms(63, 0.1), width: ms(63, 0.1) }}
            pack="assets"
            name={iconName || 'locker'}
          />
          <View style={{ top: -4, marginLeft: ms(30) }}>
            <Text
              fontSize="size16"
              fontWeight="black"
              lineHeight="line30"
              {...titleStyle}>
              {title || 'Customise Your Bill'}
            </Text>
            <Text
              style={{ width: ms(150) }}
              color="#0F172A"
              lineHeight="line20"
              {...subTitleStyle}>
              {subTitle}
            </Text>
          </View>
        </View>
        <View>
          <Icon
            style={{ height: s(24), width: s(24) }}
            pack="assets"
            name="chevronforward"
          />
        </View>
      </View>
    </TouchableOpacity>
  );
};

const PaymentMethod = ({ navigation }) => {
  const AddBankDetails = () => navigation.navigate('AddBankDetails');
  return (
    <Container padded={false} scroll>
      <StatusBar style="dark" />
      <TopNavigationComponent
        backgroundColor=""
        title="Payment method"
        textProps={{
          lineHeight: 'line17',
          fontSize: 'size13',
          fontWeight: 'bold',
        }}
        showNotification={false}
        // hideBack={true}
      />

      <TitleComponent
        style={{ width: ms(279, 0.4) }}
        title={'Select Payment Destination'}
      />

      <BillCard
        title="Bank account"
        subTitle="Withdraw funds directly to your bank"
        onPress={() => navigation.navigate('AddBankDetails')}
      />
      <View style={{ marginTop: s(16) }} />
      <BillCard
        title="Tripplex wallet"
        subTitle="Receive funds instantly in your Tripplex Wallet"
        iconName={'wallet'}
      />

      <View
        style={{
          marginBottom: Platform.OS === 'android' ? s(48) : s(48),
          paddingHorizontal: ms(20),
          flex: 1,
          justifyContent: 'flex-end'
        }}>
        <Button textProps={{lineHeight: 'line20'}} text="Continue" onPress={() => AddBankDetails()} />
      </View>
    </Container>
  );
};

const styles = StyleSheet.create({
  billContainer: {
    marginHorizontal: ms(16),
    flexDirection: 'row',
    alignItems: 'center',
    borderRadius: ms(20),
    backgroundColor: '#F1F5F9',
    paddingHorizontal: ms(18),
    paddingVertical: ms(22),
    justifyContent: 'space-between',
  },
});

export default PaymentMethod;
