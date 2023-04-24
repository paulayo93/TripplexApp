import React from 'react';
import Text from './Text';

const Label = ({
  text,
  theme,
  lineHeight,
  fontWeight,
  fontSize,
  color,
}: {
  text: string;
  theme: Record<string, string>;
}) => {
  return (
    <Text
      color={color || theme['text-label-color']}
      lineHeight={lineHeight || 'line17'}
      fontWeight={fontWeight || 'semiBold'}
      fontSize={fontSize}>
      {text}
    </Text>
  );
};

export default Label;
