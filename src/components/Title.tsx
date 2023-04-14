import React from 'react';
import { View, StyleSheet } from 'react-native';
import Text from './Text';
import { ms, vs, s } from 'react-native-size-matters';

const TitleComponent = ({ title, subTitle, style }) => {
  return (
    <View style={[{ ...styles.titleContainer }, style]}>
      <Text fontWeight="bold" fontSize="size22" lineHeight="line35">
        {title}
      </Text>

      <Text
        lineHeight="line15"
        style={{ width: ms(229), letterSpacing: ms(0.32), marginTop: vs(16) }}
        color="#0F172A">
        {subTitle}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  titleContainer: {
    paddingTop: vs(30),
    paddingHorizontal: ms(20, 0.8),
  },
});

export default TitleComponent;
