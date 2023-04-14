import React from 'react';
import { View, StyleSheet, TouchableOpacity } from 'react-native';
import { Icon, Tab, TabView, Layout } from '@ui-kitten/components';
import { NavigationProp, useNavigation } from '@react-navigation/native';
import { Container, TopNavigationComponent, Text } from './../../components';
import { ms, vs, s } from 'react-native-size-matters';

const SchedulePayment = () => {
  const [selectedIndex, setSelectedIndex] = React.useState(0);

  return (
    <Container padded={false} scroll>
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
        onSelect={index => setSelectedIndex(index)}>
        <Tab
          style={{
            backgroundColor: '#ffffff',
            borderRadius: ms(6.93),
            marginLeft: ms(3),
          }}
          title={<Text style={{ color: 'text-label-color' }}>One-off</Text>}>
          <Layout style={styles.tabContainer}>
            <Text>One-off</Text>
          </Layout>
        </Tab>
        <Tab title="Recurring">
          <Layout style={styles.tabContainer}>
            <Text color="#000000">Recurring</Text>
          </Layout>
        </Tab>
      </TabView>
    </Container>
  );
};

const styles = StyleSheet.create({
  tabContainer: {
    height: 64,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
export default SchedulePayment;
