import React, { FC } from "react";
import { Text, StyleSheet, TextProps } from "react-native";

import { Colors, hs, AppFonts, TextTypeStyles } from "@io/constants";
import { useThemeColor } from "@io/hooks";

interface FontedTextProps extends TextProps {
  text: string | undefined;
  fontFamily?: object;
  fontSize?: number;
  type?:
    | "heading"
    | "subheading"
    | "bodyText"
    | "secondaryText"
    | "buttonText"
    | "linkText"
    | "errorMessage"
    | "label"
    | "placeholderText"
    | "disabledText";
  lightColor?: string;
  darkColor?: string;
  numberOfLines?: number;
  customTextStyle?: object;
  onTextPress?: () => void;
}

const FontedText: FC<FontedTextProps> = ({
  text = "",
  fontFamily = AppFonts.SpaceMono,
  fontSize = hs.w14,
  type = "bodyText",
  lightColor = Colors.neutral900,
  darkColor = Colors.neutral100,
  numberOfLines,
  customTextStyle,
  onTextPress,
  ...restProps
}) => {
  const theme = useThemeColor({ light: lightColor, dark: darkColor }, "text");

  const textStyle = [TextTypeStyles[type], { color: theme.text }];

  return (
    <Text
      style={StyleSheet.flatten([
        {
          fontFamily,
          fontSize,
        },
        textStyle,
        customTextStyle,
      ])}
      onPress={onTextPress}
      numberOfLines={numberOfLines}
      {...restProps}>
      {text}
    </Text>
  );
};

export default FontedText;
