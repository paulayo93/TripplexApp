import React from 'react';
import Text from './Text';
import { Button } from '@ui-kitten/components';
import { ms } from 'react-native-size-matters';

const ButtonComponent = props => {
  const { onPress, textProps, text, buttonProps } = props;
  return (
    <Button
      onPress={onPress}
      {...buttonProps}
      size="large"
      style={{ borderRadius: ms(8) }}>
      {/* {props.children} */}
      <Text {...textProps}>{text}</Text>
    </Button>
  );
};

export default ButtonComponent;
