import React from 'react';
import { View, StyleSheet, TouchableOpacity } from 'react-native';
import { Icon } from '@ui-kitten/components';
import { NavigationProp, useNavigation } from '@react-navigation/native';
import { Container, TopNavigationComponent, Text } from './../../components';
import { StatusBar } from 'expo-status-bar';
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
            style={{ height: ms(40, 0.1), width: ms(40, 0.1), marginRight: 15 }}
            pack="assets"
            name={iconName || 'tvblue'}
          />
          <View style={{ top: -4 }}>
            <Text fontWeight="semiBold" lineHeight="line24" {...titleStyle}>
              {title || 'Customise Your Bill'}
            </Text>
            <Text {...subTitleStyle}>
              {subTitle || 'Make plans for the rainy day'}{' '}
            </Text>
          </View>
        </View>
        <View>
          <Icon
            style={{ height: s(9), width: s(5) }}
            pack="assets"
            name="chevronforward"
          />
        </View>
      </View>
    </TouchableOpacity>
  );
};

const CreateBill = () => {
  const { navigate } = useNavigation();

  const EnterBillDetail = () => navigate('EnterBillDetail');
  return (
    <Container backgroundColor="#f5f5f5" padded={false} scroll>
      <StatusBar style="dark" />
      <TopNavigationComponent
        title="Create a bill"
        textProps={{
          lineHeight: 'line30',
          fontSize: 'size22',
          fontWeight: 'bold',
          letterSpacing: 0.32,
        }}
        showNotification={false}
        // hideBack={true}
      />

      <BillCard onPress={EnterBillDetail} />

      <View style={{ marginTop: ms(28) }}>
        <BillCard
          titleStyle={{
            fontSize: 'size13',
          }}
          subTitleStyle={{
            color: 'rgba(60, 60, 67, 0.6)',
          }}
          title={'Television'}
          subTitle={'Pay your TV bill here'}
          iconName={'tvorange'}
          style={{ borderBottomLeftRadius: 0, borderBottomRightRadius: 0 }}
        />
        <BillCard
          titleStyle={{
            fontSize: 'size13',
          }}
          subTitleStyle={{
            color: 'rgba(60, 60, 67, 0.6)',
          }}
          title={'Electricity Bill'}
          subTitle={'View how much you need to pay'}
          iconName={'greenwhitebulb'}
          style={{ borderTopLeftRadius: 0, borderTopRightRadius: 0 }}
        />
      </View>
    </Container>
  );
};

const styles = StyleSheet.create({
  billContainer: {
    marginHorizontal: ms(16),
    flexDirection: 'row',
    alignItems: 'center',
    borderRadius: ms(10),
    backgroundColor: '#ffffff',
    paddingHorizontal: ms(12),
    paddingVertical: ms(16),
    justifyContent: 'space-between',
  },
});

export default CreateBill;
