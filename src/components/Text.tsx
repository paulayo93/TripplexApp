import React from 'react';
import { StyleSheet } from 'react-native';
import { Text as RNText } from '@ui-kitten/components';
import { scale, ms } from 'react-native-size-matters';

export default Text = React.memo(props => {
  const {
    lineHeight = 'line14',
    fontSize = 'size10',
    children,
    onPress,
    color,
    fontWeight = 'normal',
    centered = false,
    style,
    ...rest
  } = props;
  return (
    <RNText
      onPress={onPress}
      style={[
        {
          color: color || '#111317',
          textAlign: centered ? 'center' : 'left',
          ...textStyles[fontWeight],
          ...textStyles[fontSize],
          ...textStyles[lineHeight],
          ...style,
        },
      ]}
      {...rest}>
      {children}
    </RNText>
  );
});

const textStyles = StyleSheet.create({
  black: {
    fontWeight: '900',
    fontFamily: 'Merriweather_900Black',
  },
  bold: {
    fontWeight: '700',
    fontFamily: 'Merriweather_700Bold',
  },
  semiBold: {
    fontWeight: '600',
    fontFamily: 'OpenSans_600SemiBold',
  },
  medium: {
    fontWeight: '500',
    fontFamily: 'OpenSans_500Medium',
  },
  normal: {
    fontWeight: 'normal',
    fontFamily: 'OpenSans_400Regular',
  },
  light: {
    fontWeight: '400',
    fontFamily: 'OpenSans_400Regular',
  },
  size8: {
    fontSize: ms(8),
  },
  size10: {
    fontSize: ms(10),
  },
  size11: {
    fontSize: ms(11),
  },
  size12: {
    fontSize: ms(12),
  },
  size13: {
    fontSize: ms(13),
  },
  size14: {
    fontSize: ms(14),
  },
  size16: {
    fontSize: ms(16),
  },
  size17: {
    fontSize: ms(17),
  },
  size22: {
    fontSize: ms(22),
  },
  size27: {
    fontSize: ms(27),
  },
  line10: {
    lineHeight: ms(10),
  },
  line14: {
    lineHeight: ms(14),
  },
  line15: {
    lineHeight: ms(15),
  },
  line17: {
    lineHeight: ms(17),
  },
  line19: {
    lineHeight: ms(19),
  },
  line20: {
    lineHeight: ms(20),
  },
  line22: {
    lineHeight: ms(22),
  },
  line24: {
    lineHeight: ms(24),
  },
  line30: {
    lineHeight: ms(30),
  },
  line35: {
    lineHeight: ms(35),
  },
});
