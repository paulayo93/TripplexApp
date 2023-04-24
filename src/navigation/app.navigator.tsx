import React, { Fragment, useEffect, useState } from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import {
  RootAppStackParamList,
  RootStackParamList,
  OnBoardingStackParamList,
} from './type';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Layout, Text } from '@ui-kitten/components';
import Register from '../screens/onboarding/Register';
import SignIn from '../screens/onboarding/SignIn';
import CreateBill from '../screens/main/CreateBill';
import SchedulePayment from '../screens/main/SchedulePayment';
import OneOffPayment from '../screens/main/OneOffPayment';
import RecurringPayment from '../screens/main/RecurringPayment';
import PaymentMethod from '../screens/main/PaymentMethod';
import AddBankDetails from '../screens/main/AddBankDetails';
import ReviewPersonalBill from '../screens/main/ReviewPersonalBill';
import Bill from '../screens/main/Bill';
import SingleBillDetails from '../screens/main/SingleBillDetails';
import EnterBillDetail from '../screens/main/EnterBillDetail';

import { View, StyleSheet } from 'react-native';
import { useTheme } from '@ui-kitten/components';
import HomeIcon from '../assets/icons/HomeIcon';
import BillIcon from '../assets/icons/BillIcon';
import WalletIcon from '../assets/icons/WalletIcon';
import InsightIcon from '../assets/icons/InsightIcon';
import ProfileIcon from '../assets/icons/ProfileIcon';
import { ms, mvs, s, vs } from 'react-native-size-matters';

const OnBoardingStack = createNativeStackNavigator<OnBoardingStackParamList>();
const Stack = createNativeStackNavigator<RootStackParamList>();
const Tab = createBottomTabNavigator();

export const OnBoarding = () => {
  return (
    <OnBoardingStack.Navigator screenOptions={{ headerShown: false }}>
      <OnBoardingStack.Screen name="Register" component={Register} />
      <OnBoardingStack.Screen name="SignIn" component={SignIn} />
    </OnBoardingStack.Navigator>
  );
};

const Home = () => {
  return (
    <Layout style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text category="h1">HOME</Text>
    </Layout>
  );
};

const BillScreen = () => {
  return (
    <Stack.Navigator
      screenOptions={{ header: () => null }}
      initialRouteName="Bill">
      <Stack.Screen name="Bill" component={Bill} />
    </Stack.Navigator>
  );
};

const Wallet = () => {
  return (
    <Layout style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text category="h1">Wallet</Text>
    </Layout>
  );
};

const Insight = () => {
  return (
    <Layout style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text category="h1">Insight</Text>
    </Layout>
  );
};

const Profile = () => {
  return (
    <Layout style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text category="h1">Profile</Text>
    </Layout>
  );
};
interface TabIcon {
  tabName: string;
  focused: boolean;
}

const TabIcon = ({ tabName, focused }: TabIcon) => {
  if (tabName === 'home') {
    return <HomeIcon focused={focused} />;
  }
  if (tabName === 'bills') {
    return <BillIcon focused={focused} />;
  }
  if (tabName === 'wallet') {
    return <WalletIcon focused={focused} />;
  }
  if (tabName === 'insight') {
    return <InsightIcon focused={focused} />;
  }
  if (tabName === 'profile') {
    return <ProfileIcon focused={focused} />;
  }
};

const RenderText = ({ text, focused }) => {
  return (
    <Text style={focused ? styles.activeLabelStyle : styles.labelStyle}>
      {text}
    </Text>
  );
};
export const boxShadow = (x, y, rad, color, opacity, elevation) => ({
  shadowColor: color,
  shadowRadius: rad,
  shadowOffset: {
    width: x,
    height: y,
  },
  shadowOpacity: opacity,
  elevation,
});

const screenOptions = {
  headerShown: false,
  tabBarStyle: {
    backgroundColor: '#FDFDFF',
    paddingVertical: s(13),
    borderRadius: s(10),
    ...boxShadow(0, 1, s(84), '#000', 0.09, 8),
    borderBottomEndRadius: 0,
    borderBottomStartRadius: 0,
  },
  tabBarItemStyle: {},
};

export const AllTabs = () => {
  return (
    <Tab.Navigator initialRouteName="Home" screenOptions={screenOptions}>
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarLabel: ({ focused }) => (
            <RenderText text="Home" focused={focused} />
          ),
          tabBarIcon: ({ focused }) => (
            <TabIcon tabName={'home'} focused={focused} />
          ),
        }}
      />
      <Tab.Screen
        name="Bill"
        component={BillScreen}
        options={{
          tabBarLabel: ({ focused }) => (
            <RenderText text="Bill" focused={focused} />
          ),
          tabBarIcon: ({ focused }) => (
            <BillIcon tabName={'bill'} focused={focused} />
          ),
        }}
      />
      <Tab.Screen
        name="Wallet"
        component={Wallet}
        options={{
          tabBarLabel: ({ focused }) => (
            <RenderText text="Wallet" focused={focused} />
          ),
          tabBarIcon: ({ focused }) => (
            <WalletIcon tabName={'wallet'} focused={focused} />
          ),
        }}
      />
      <Tab.Screen
        name="Insight"
        component={Insight}
        options={{
          tabBarLabel: ({ focused }) => (
            <RenderText text="Insight" focused={focused} />
          ),
          tabBarIcon: ({ focused }) => (
            <TabIcon tabName={'insight'} focused={focused} />
          ),
        }}
      />
      <Tab.Screen
        name="Profile"
        component={Profile}
        options={{
          tabBarLabel: ({ focused }) => (
            <RenderText text="Profile" focused={focused} />
          ),
          tabBarIcon: ({ focused }) => (
            <TabIcon tabName={'profile'} focused={focused} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export const MainScreen = () => {
  return (
    <Stack.Navigator
      initialRouteName={'Bill'}
      screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Bill" component={AllTabs} />
      <Stack.Screen name="CreateBill" component={CreateBill} />
      <Stack.Screen name="SchedulePayment" component={SchedulePayment} />
      <Stack.Screen name="OneOffPayment" component={OneOffPayment} />
      <Stack.Screen name="RecurringPayment" component={RecurringPayment} />
      <Stack.Screen name="PaymentMethod" component={PaymentMethod} />
      <Stack.Screen name="AddBankDetails" component={AddBankDetails} />
      <Stack.Screen name="ReviewPersonalBill" component={ReviewPersonalBill} />
      <Stack.Screen name="SingleBillDetails" component={SingleBillDetails} />
      <Stack.Screen name="EnterBillDetail" component={EnterBillDetail} />
    </Stack.Navigator>
  );
};

const styles = StyleSheet.create({
  icon: {
    width: ms(24, 0.8),
    height: ms(24, 0.8),
  },
  labelStyle: {
    fontSize: ms(10, 0.8),
    lineHeight: ms(18, 0.8),
    fontWeight: 'normal',
    fontFamily: 'OpenSans_400Regular',
    marginTop: mvs(6),
    color: '#94A3B8',
    opacity: 0.5,
  },
  activeLabelStyle: {
    fontSize: ms(10, 0.8),
    lineHeight: s(18),
    fontWeight: 'bold',
    fontFamily: 'OpenSans_400Regular',
    marginTop: mvs(6),
    color: '#407BFF',
  },
  container: {
    backgroundColor: 'white',
  },
});
