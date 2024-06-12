import React, { FC } from 'react';
import { Text, StyleSheet, TextProps } from 'react-native';

import { Colors, hs, AppFonts } from '@io/constants';
import { useThemeColor } from '@io/hooks';

interface FontedTextProps extends TextProps {
  text: string | undefined;
  fontFamily?: object;
  fontSize?: number;
  lightColor?: string;
  darkColor?: string;
  numberOfLines?: number;
  customTextStyle?: object;
  onTextPress?: () => void;
}

const FontedText: FC<FontedTextProps> = ({
  text = '',
  fontFamily = AppFonts.FTBase,
  fontSize = hs.w14,
  lightColor = Colors.neutral900,
  darkColor = Colors.neutral100,
  numberOfLines,
  customTextStyle,
  onTextPress,
  ...restProps
}) => {
  const theme = useThemeColor({ light: lightColor, dark: darkColor }, "text");
  
  return (
    <Text
      style={StyleSheet.flatten([
        {
          fontFamily,
          fontSize,
          color: theme.text,
        },
        customTextStyle,
      ])}
      onPress={onTextPress}
      numberOfLines={numberOfLines}
      {...restProps}
    >
      {text}
    </Text>
  );
};

export default FontedText;
