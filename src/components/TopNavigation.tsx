import React, { memo } from 'react';
import { Icon, useTheme, TopNavigationProps } from '@ui-kitten/components';
import { useNavigation } from '@react-navigation/native';
import { ms, vs, s } from 'react-native-size-matters';
import { View, StyleSheet, Pressable } from 'react-native';
import Text from './Text';
interface TopNavigationProps_ extends TopNavigationProps {
  hideBack?: boolean | undefined;
  pressBack?: () => void;
  showNotification: boolean;
  textStyle: unknown;
  containerStyle: unknown;
  backgroundColor: unknown;
  textProps: unknown;
}

const TopNavigationComponent = memo(
  ({
    showNotification = true,
    textStyle,
    title,
    backgroundColor,
    hideBack = false,
    containerStyle,
    textProps,
    pressBack,
    iconName,
  }: TopNavigationProps_) => {
    const theme = useTheme();
    const { goBack } = useNavigation();

    return (
      <View
        style={[
          {
            backgroundColor: backgroundColor || '#f5f5f5',
            ...styles.container,
          },
          containerStyle,
        ]}>
        <View
          style={{
            flexDirection: hideBack ? 'row-reverse' : 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
            paddingHorizontal: s(20),
          }}>
          {!hideBack && (
            <Pressable onPress={() => goBack()}>
              <Icon
                style={{
                  height: vs(13.75),
                  width: ms(16.58),
                }}
                name={iconName || 'leftArrow'}
                pack="assets"
              />
            </Pressable>
          )}

          {showNotification && (
            <Pressable onPress={() => null}>
              <Icon
                style={{
                  height: vs(16.5),
                  width: vs(18.33),
                }}
                name="bell"
                pack="assets"
              />
            </Pressable>
          )}
        </View>
        <View
          style={{
            paddingTop: vs(22),
            paddingHorizontal: ms(20, 0.5),
            paddingBottom: vs(22),
          }}>
          <Text {...textProps}>{title || 'Create a bill'}</Text>
        </View>
      </View>
    );
  },
);

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: ms(8),
    paddingTop: vs(50),
    minHeight: vs(56),
  },
});

export default TopNavigationComponent;
