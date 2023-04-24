/* eslint-disable no-void */
import React, { useState, useMemo, useCallback, useEffect } from 'react';
import * as SplashScreen from 'expo-splash-screen';
import { StatusBar } from 'expo-status-bar';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { NavigationContainer } from '@react-navigation/native';
import * as eva from '@eva-design/eva';
import { EvaIconsPack } from '@ui-kitten/eva-icons';
import AssetIconsPack from './../assets/AssetIconsPack';
import { default as customTheme } from './../constants/theme/appTheme.json';
import { default as lightTheme } from './../constants/theme/lightTheme.json';
import { default as mapping } from './../constants/theme/mapping.json';
import { persistStore } from 'redux-persist';
import { PersistGate } from 'redux-persist/integration/react';
import { Provider } from 'react-redux';
import store from '../store/store';
import AppNavigator from './AppContainer';

import {
  ApplicationProvider,
  IconRegistry,
  Layout,
  Text,
} from '@ui-kitten/components';
import * as Font from 'expo-font';
import { Inter_400Regular } from '@expo-google-fonts/inter';

import {
  Merriweather_400Regular,
  Merriweather_700Bold,
  Merriweather_900Black,
} from '@expo-google-fonts/merriweather';
import {
  OpenSans_400Regular,
  OpenSans_500Medium,
  OpenSans_600SemiBold,
  OpenSans_700Bold,
  OpenSans_300Light,
} from '@expo-google-fonts/open-sans';

let persistor = persistStore(store);
SplashScreen.preventAutoHideAsync();

const Base = () => {
  const [appIsReady, setAppIsReady] = useState<boolean>(false);
  const [isNewUser, setIsNewUser] = useState<boolean>(true);

  const fonts = {
    Merriweather_400Regular,
    Merriweather_700Bold,
    Merriweather_900Black,
    OpenSans_400Regular,
    OpenSans_500Medium,
    OpenSans_600SemiBold,
    OpenSans_700Bold,
    OpenSans_300Light,
    Inter_400Regular,
  };

  const customFonts = useMemo(() => fonts, []);

  useEffect(() => {
    async function prepare() {
      try {
        await Font.loadAsync(customFonts);
      } catch (e) {
        console.warn(e);
      } finally {
        setAppIsReady(true);
      }
    }

    void prepare();
  }, [customFonts]);

  const onLayoutRootView = useCallback(async () => {
    if (appIsReady) {
      await SplashScreen.hideAsync();
    }
  }, [appIsReady]);

  if (!appIsReady) {
    return null;
  }

  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <SafeAreaProvider onLayout={onLayoutRootView}>
          <IconRegistry icons={[AssetIconsPack, EvaIconsPack]} />
          <ApplicationProvider
            {...eva}
            customMapping={mapping}
            theme={{
              ...(eva.light as Record<string, 'light'>),
              ...customTheme,
              ...lightTheme,
            }}>
            <StatusBar
              style={'light'}
              translucent={true}
              backgroundColor={'#000'}
            />

            <NavigationContainer>
              <AppNavigator />
            </NavigationContainer>
          </ApplicationProvider>
        </SafeAreaProvider>
      </PersistGate>
    </Provider>
  );
};

export default Base;
