import React from 'react';
import { View, StyleSheet } from 'react-native';
import {
  Icon,
  useTheme,
  Modal,
  Card,
  useStyleSheet,
  StyleService,
} from '@ui-kitten/components';
import {
  Container,
  TopNavigationComponent,
  Text,
  Content,
  Button,
} from './../../components';
import { ms, vs, s, mvs } from 'react-native-size-matters';

const NameCard = ({ title, iconName, style, titleStyle, onPress }) => {
  const styles = useStyleSheet(themedStyles);

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
  const styles = useStyleSheet(themedStyles);

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
                  fontWeight="semiBold"
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
const ReviewPersonalBill = ({ navigation }) => {
  const theme = useTheme();
  const [visible, setVisible] = React.useState(false);
  const styles = useStyleSheet(themedStyles);

  return (
    <Container backgroundColor="#f5f5f5" padded={true}>
      <Content>
        <TopNavigationComponent
          title="Personal Bill"
          textProps={{
            lineHeight: 'line17',
            fontSize: 'size13',
            fontWeight: 'bold',
          }}
          showNotification={false}
          // hideBack={true}
        />

        <NameCard title={'Jaye School fees'} />

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

        <View
          style={{
            flex: 1,
            justifyContent: 'flex-end',
            paddingVertical: s(22),
          }}>
          <Button
            text="Create Bill"
            textProps={{
              lineHeight: 'line22',
              fontSize: 'size16',
              fontWeight: 'semiBold',
            }}
            // onPress={() => navigation.navigate('SingleBillDetails')}
            onPress={() => setVisible(true)}
          />
        </View>
      </Content>

      <Modal backdropStyle={styles.backdrop} visible={visible}>
        <Card
          onPress={() => null}
          appearance="filled"
          style={{
            borderRadius: 12,
            width: ms(343),
            height: mvs(366),
            paddingHorizontal: s(16),
            paddingVertical: mvs(20),
          }}>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              // paddingTop: mvs(20),
              alignItems: 'flex-start',
              marginBottom: s(16),
            }}>
            <Icon
              style={{ width: ms(48, 0.8), height: mvs(48, 0.8) }}
              pack="assets"
              name="greencheck"
            />
            <Icon
              style={{ width: ms(48, 0.8), height: mvs(48, 0, 8) }}
              pack="assets"
              name="buttonclosex"
            />
          </View>

          <Text
            fontWeight="openSansBold"
            fontSize="size17"
            lineHeight="line30"
            color="#101828"
            textBreakStrategy="balanced"
            lineBreakStrategyIOS="push-out"
            style={{ marginBottom: s(8) }}>
            You have successfully created your bill
          </Text>

          <Text
            style={{ width: s(190) }}
            color="#475467"
            fontWeight="interNormal"
            lineHeight="line20">
            Your bills and expenses will never be caught unpaid.
          </Text>

          <View style={styles.modalMiniCard}>
            <View style={[styles.modalMiniCardContent]}>
              <Text
                lineHeight="line19"
                fontWeight="openSansBold"
                fontSize="size14"
                color="#0F172A">
                Rent
              </Text>
              <Text lineHeight="line19" fontSize="size14" color="#0F172A">
                N60,000.00
              </Text>
            </View>
            <View style={[styles.modalMiniCardContent, { marginTop: vs(4) }]}>
              <Text fontSize="size14" lineHeight="line19" color="#94A3B8">
                Yearly
              </Text>
              <Text fontSize="size14" lineHeight="line19" color="#94A3B8">
                20.02.2023
              </Text>
            </View>
          </View>

          <Button
            textProps={{
              color: 'red',
              lineHeight: 'line20',
              fontWeight: 'semiBold',
            }}
            text="Done"
            onPress={() => {
              setVisible(false);
              navigation.navigate('Bill');
            }}
          />
        </Card>
      </Modal>
    </Container>
  );
};

const themedStyles = StyleService.create({
  billContainer: {
    marginHorizontal: ms(4),
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
    paddingVertical: vs(30),
    marginHorizontal: ms(4),
  },
  detailCard: {
    // marginHorizontal: ms(16),
    flexDirection: 'row',
    alignItems: 'center',
    borderRadius: s(10),
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
  backdrop: {
    backgroundColor: 'color-primary-100',
    opacity: 0.83333,
  },
  modalMiniCard: {
    marginTop: mvs(24),
    borderRadius: s(10),
    borderWidth: 1,
    borderColor: '#CBD5E1',
    paddingVertical: mvs(13),
    paddingHorizontal: ms(13),
    marginBottom: mvs(24),
  },
  modalMiniCardContent: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
});

export default ReviewPersonalBill;
