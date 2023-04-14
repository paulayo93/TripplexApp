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

export const AllTabs = () => {
  return (
    <Tab.Navigator
      initialRouteName="Bill"
      screenOptions={{ headerShown: false }}>
      <Tab.Screen name="Home" component={Home} />
      <Tab.Screen name="Bill" component={BillScreen} />
      <Tab.Screen name="Wallet" component={Wallet} />
      <Tab.Screen name="Insight" component={Insight} />
      <Tab.Screen name="Profile" component={Profile} />
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
