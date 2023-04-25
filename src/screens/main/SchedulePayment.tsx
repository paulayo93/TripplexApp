import React from 'react';
import { View, StyleSheet } from 'react-native';
import {
  Icon,
  Tab,
  TabView,
  Layout,
  useTheme,
  Input,
  Select,
  SelectItem,
} from '@ui-kitten/components';
import {
  Container,
  TopNavigationComponent,
  Text,
  Button,
  Label,
} from './../../components';
import { ms, vs, s, mvs } from 'react-native-size-matters';
import { StatusBar } from 'expo-status-bar';


const SchedulePayment = ({ navigation }) => {
  const [selectedIndex, setSelectedIndex] = React.useState(0);
  const theme = useTheme();
  return (
    <Container padded={false} scroll>
      <StatusBar style="dark" />

      <TopNavigationComponent
        title="Schedule Payment"
        textProps={{
          lineHeight: 'line17',
          fontSize: 'size13',
          fontWeight: 'bold',
        }}
        showNotification={false}

        // hideBack={true}
      />
      <TabView
        tabBarStyle={{
          backgroundColor: 'rgba(118, 118, 128, 0.12)',
          marginHorizontal: ms(20),
          marginTop: ms(22),
          borderRadius: ms(8.91, 0.8),
        }}
        indicatorStyle={{
          backgroundColor: 'transparent',
          color: '#000000',
        }}
        selectedIndex={selectedIndex}
        onSelect={index => {
          setSelectedIndex(index);
        }}>
        <Tab
          style={{
            backgroundColor: selectedIndex === 0 ? '#ffffff' : 'transparent',
            borderRadius: ms(6.93),
            marginLeft: ms(3),
            paddingVertical: s(3),
          }}
          title={() => (
            <Text
              fontSize="size14"
              fontWeight="semiBold"
              lineHeight="line20"
              style={{ color: '#000000' }}>
              One-off
            </Text>
          )}>
          <Layout style={styles.tabContainer}>
            <View
              style={[
                styles.registerContent,
                { backgroundColor: theme['color-basic-100'] },
              ]}>
              <View style={styles.pbInput}>
                <Label
                  color="#0F172A"
                  fontSize="size14"
                  lineHeight="line20"
                  text="Due date"
                  theme={theme}
                />
                <Input
                  placeholder="dd/mm/yy"
                  style={[
                    {
                      backgroundColor: theme['color-basic-100'],
                      ...styles.input,
                    },
                  ]}
                />
              </View>
            </View>
          </Layout>
        </Tab>
        <Tab
          style={{
            backgroundColor: selectedIndex === 1 ? '#ffffff' : 'transparent',
            borderRadius: ms(6.93),
            marginRight: ms(3),
            paddingVertical: s(3),
          }}
          title={() => (
            <Text
              fontSize="size14"
              fontWeight="semiBold"
              lineHeight="line20"
              style={{ color: '#000000' }}>
              Recurring
            </Text>
          )}>
          <Layout style={styles.tabContainer}>
            <View
              style={[
                styles.registerContent,
                { backgroundColor: theme['color-basic-100'] },
              ]}>
              <View style={styles.pbInput}>
                <Label
                  color="#0F172A"
                  fontSize="size14"
                  lineHeight="line20"
                  text="Due date"
                  theme={theme}
                />
                <Input
                  placeholder="dd/mm/yy"
                  editable={false}
                  style={[
                    {
                      backgroundColor: theme['color-basic-100'],
                      ...styles.input,
                    },
                  ]}
                />
              </View>
              <View style={styles.pbInput}>
                <Label
                  color="#0F172A"
                  fontSize="size14"
                  lineHeight="line20"
                  text="Frequency of deduction "
                  theme={theme}
                />
                <Select
                  placeholder="Select"
                  status="basic"
                  style={[
                    {
                      backgroundColor: theme['color-basic-100'],
                      ...styles.input,
                    },
                  ]}>
                  <SelectItem title="Monthly" />
                </Select>
              </View>
            </View>
          </Layout>
        </Tab>
      </TabView>

      <View
        style={{
          flex: 1,
          justifyContent: 'flex-end',
          paddingBottom: mvs(48),
          paddingHorizontal: ms(21),
        }}>
        <Button
          text="Next"
          onPress={() => navigation.navigate('PaymentMethod')}
        />
      </View>
    </Container>
  );
};

const styles = StyleSheet.create({
  tabContainer: {
    marginTop: vs(31),
  },
  registerContent: {
    paddingHorizontal: ms(20),
  },
  input: {
    marginTop: ms(6, 0.5),
  },
  pbInput: {
    paddingBottom: vs(24),
  },
});
export default SchedulePayment;
