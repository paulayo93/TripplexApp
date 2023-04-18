import React from 'react';
import { View, StyleSheet, Platform } from 'react-native';
import { Icon, useTheme } from '@ui-kitten/components';
import { useNavigation } from '@react-navigation/native';
import {
  Container,
  TopNavigationComponent,
  Text,
  Content,
  Button,
} from './../../components';
import { ms, vs, s, mvs } from 'react-native-size-matters';

const NameCard = ({ title, iconName, style, titleStyle, onPress }) => {
  return (
    <View style={[{ ...styles.billContainer }, style]}>
      <View style={{ flexDirection: 'row', alignItems: 'center' }}>
        <Icon
          style={{ height: ms(40, 0.1), width: ms(43, 0.1) }}
          pack="assets"
          name={iconName || 'bookmarkblue'}
        />
        <View style={{ marginLeft: s(9) }}>
          <Text
            fontSize="size13"
            fontWeight="semiBold"
            lineHeight="line15"
            {...titleStyle}>
            {title}
          </Text>
        </View>
      </View>
    </View>
  );
};

const DetailCard = ({ title, iconName, style, titleStyle, onPress, type }) => {
  return (
    <View style={[{ ...styles.detailCard }, style]}>
      <View style={{}}>
        {type === 'one' ? (
          <>
            <View style={{ flexDirection: 'row' }}>
              <View
                style={[
                  styles.contentWithBorder,
                  { paddingBottom: ms(11), marginBottom: ms(11) },
                ]}>
                <Text fontSize="size8" lineHeight="line17">
                  Bill amount:
                </Text>
                <Text
                  style={{
                    fontFamily: 'OpenSans_700Bold',
                    marginTop: ms(6, -3),
                  }}
                  fontSize="size16"
                  lineHeight="line17">
                  N60,000.00
                </Text>
              </View>
            </View>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                alignItems: 'center',
                paddingBottom: mvs(14),
              }}>
              <Text lineHeight="line17" fontSize="size10">
                Bill Type
              </Text>
              <Text lineHeight="line17" fontWeight="semiBold" fontSize="size10">
                Personal Bill
              </Text>
            </View>
          </>
        ) : type === 'two' ? (
          <>
            <View style={{ flexDirection: 'row' }}>
              <View
                style={[
                  styles.contentWithBorder,
                  {
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                  },
                ]}>
                <Text color="#1E293B" lineHeight="line17" fontSize="size10">
                  Due Date
                </Text>
                <Text
                  lineHeight="line17"
                  fontWeight="semiBold"
                  fontSize="size10">
                  20.02.2023
                </Text>
              </View>
            </View>
            <View style={{ flexDirection: 'row' }}>
              <View
                style={[
                  styles.contentWithBorder,
                  {
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                  },
                ]}>
                <Text color="#1E293B" lineHeight="line17" fontSize="size10">
                  Status
                </Text>
                <Icon
                  style={{ height: 22, width: 62 }}
                  pack="assets"
                  name="unpaidstatus"
                />
              </View>
            </View>
            <View style={{ flexDirection: 'row' }}>
              <View
                style={[
                  styles.contentWithBorder,
                  {
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                  },
                ]}>
                <Text color="#1E293B" lineHeight="line17" fontSize="size10">
                  Date Created
                </Text>
                <Text
                  lineHeight="line17"
                  fontWeight="semiBold"
                  fontSize="size10">
                  05.02.2023
                </Text>
              </View>
            </View>
            <View style={{ flexDirection: 'row' }}>
              <View
                style={[
                  styles.contentWithBorder,
                  {
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    borderBottomWidth: 0,
                    paddingBottom: 0,
                  },
                ]}>
                <Text color="#1E293B" lineHeight="line17" fontSize="size10">
                  Time
                </Text>
                <Text
                  lineHeight="line17"
                  fontWeight="semiBold"
                  fontSize="size10">
                  06:00PM
                </Text>
              </View>
            </View>
          </>
        ) : (
          <View style={{ paddingBottom: mvs(14) }}>
            <Text fontSize="size10">Payment account</Text>
            <Icon
              style={{
                width: 292,
                height: 62,
                marginTop: ms(10),
                right: 5,
              }}
              pack="assets"
              name="paymentaccount"
            />
          </View>
        )}
      </View>
    </View>
  );
};

const SingleBillDetails = ({ navigation }) => {
  const theme = useTheme();
  return (
    <Container backgroundColor="#0F172A" padded={true}>
      <Content>
        <TopNavigationComponent
          title="Eletrical Bill"
          backgroundColor={'#0F172A'}
          textProps={{
            lineHeight: 'line17',
            fontSize: 'size13',
            fontWeight: 'bold',
            color: '#FFFFFF',
          }}
          iconName="leftarrowwhite"
          showNotification={false}
          // hideBack={true}
        />

        <NameCard iconName={'ikejaelectric'} title={'Ikeja electric'} />

        <View
          style={[
            styles.registerContent,
            { backgroundColor: theme['color-basic-100'] },
          ]}>
          <DetailCard type="one" />

          <View style={{ marginVertical: s(14) }}>
            <DetailCard type="two" />
          </View>

          <DetailCard />
        </View>
      </Content>
    </Container>
  );
};

const styles = StyleSheet.create({
  billContainer: {
    marginHorizontal: s(4),
    flexDirection: 'row',
    alignItems: 'center',
    borderRadius: ms(10),
    backgroundColor: '#FFFFFF',
    paddingHorizontal: ms(18),
    paddingVertical: ms(19),
    justifyContent: 'space-between',
  },
  registerContent: {
    minWidth: 338,
    minHeight: 528,
    borderRadius: ms(20),
    borderWidth: 0,
    paddingHorizontal: ms(15),
    marginTop: ms(24),
    paddingTop: vs(30),
    paddingBottom: vs(80),
    marginHorizontal: s(4),
  },
  detailCard: {
    flexDirection: 'row',
    alignItems: 'center',
    borderRadius: ms(10),
    backgroundColor: '#FFFFFF',
    paddingHorizontal: s(10),
    paddingTop: ms(19),
    justifyContent: 'space-between',
    borderWidth: ms(1),
    borderColor: '#E2E8F0',
  },
  contentWithBorder: {
    borderBottomWidth: ms(1, -2),
    borderBottomColor: '#E2E8F0',
    paddingBottom: ms(22, 0.1),
    width: '100%',
    marginBottom: ms(22),
  },
});

export default SingleBillDetails;
