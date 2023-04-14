import React from 'react';
import { MainScreen, OnBoarding } from './app.navigator';

import { useSelector } from 'react-redux';

function AppNavigator() {
  const isLoggedIn = useSelector(state => state.tripplex.isLoggedIn);

  return <>{!isLoggedIn ? <OnBoarding /> : <MainScreen />}</>;
}

export default AppNavigator;
