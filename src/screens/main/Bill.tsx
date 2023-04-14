import React from 'react';
import { StyleSheet, TouchableOpacity } from 'react-native';
import { Layout, Text, Button } from '@ui-kitten/components';
import { NavigationProp, useNavigation } from '@react-navigation/native';
import { RootStackParamList } from '../../navigation/type';
import { Container, TopNavigationComponent } from './../../components';
import { StatusBar } from 'expo-status-bar';
import { Icon, useTheme, Input } from '@ui-kitten/components';
import { ms } from 'react-native-size-matters';
const Bill = () => {
  const { navigate, goBack } =
    useNavigation<NavigationProp<RootStackParamList>>();
  const theme = useTheme();
  return (
    <Container padded={false} scroll>
      <StatusBar />
      <TopNavigationComponent
        backgroundColor="#C8F2FE"
        title="Your Bill"
        textProps={{
          lineHeight: 'line17',
          fontSize: 'size16',
          fontWeight: 'bold',
        }}
        // showNotification={false}
        hideBack={true}
      />

      <Layout
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-between',
          marginTop: ms(30),
          paddingHorizontal: ms(20, 1),
        }}>
        <Icon
          style={{
            width: ms(84),
            height: ms(27),
          }}
          pack="assets"
          name="personal"
        />
        <TouchableOpacity onPress={() => navigate('CreateBill')}>
          <Icon pack="assets" name="addcircle" />
        </TouchableOpacity>
      </Layout>
      <Layout
        style={{
          marginTop: ms(18),
          paddingHorizontal: ms(20, 1),
        }}>
        <Input
          placeholder="Search for bill"
          style={[
            {
              backgroundColor: theme['color-basic-100'],
              ...styles.input,
            },
          ]}
        />
      </Layout>
      <Layout
        style={{
          flex: 1,
          alignItems: 'center',
          justifyContent: 'center',
          paddingHorizontal: ms(20, 1),
        }}>
        <TouchableOpacity onPress={() => navigate('CreateBill')}>
          <Icon
            style={{
              width: ms(157),
              height: ms(189),
            }}
            pack="assets"
            name="nobill"
          />
        </TouchableOpacity>
      </Layout>
      {/* <Icon
        style={{
          width: 335,
          height: ms(34),
        }}
        pack="assets"
        name="input"
      /> */}
      {/* <Content>
        <Text category="h3">Bill</Text>

        <Button onPress={() => navigate('CreateBill')}>BUTTON</Button>
      </Content> */}
    </Container>
  );
};

const styles = StyleSheet.create({
  input: {
    marginTop: ms(6, 0.5),
    borderRadius: ms(5),
  },
});
export default Bill;
