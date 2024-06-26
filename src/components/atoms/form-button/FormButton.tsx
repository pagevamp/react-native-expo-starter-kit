import React, { FC } from "react";
import { GestureResponderEvent, StyleProp, TextStyle, ViewStyle, StyleSheet } from "react-native";
import { Button } from "@rneui/themed";
import { ButtonProps } from "@rneui/themed";

import { Colors, hs, TextStyles, vs } from "@io/constants";
import { useThemeColor } from "@io/hooks";

interface FormButtonProps extends ButtonProps {
  title?: string;
  onPress: ((event: GestureResponderEvent) => void) | undefined;
  customButtonStyle?: StyleProp<ViewStyle>;
  customDisabledButtonStyle?: StyleProp<ViewStyle>;
  customTitleStyle?: StyleProp<TextStyle>;
  customDisabledTitleStyle?: StyleProp<TextStyle>;
}

const ButtonStyles = StyleSheet.create({
  buttonHeight60: {
    height: vs.h44,
  },
  formDisabledButton: {
    borderColor: "transparent",
  },
  formButtonTitle: {
    ...TextStyles.FTBaseRegular,
    fontSize: hs.w15,
    color: Colors.neutral200,
  },
  formDisabledTitleStyle: {
    ...TextStyles.FTBaseRegular,
    opacity: 0.8,
  },
});

const FormButton: FC<FormButtonProps> = ({
  title,
  onPress,
  customButtonStyle = ButtonStyles.buttonHeight60,
  customDisabledButtonStyle = ButtonStyles.formDisabledButton,
  customTitleStyle = ButtonStyles.formButtonTitle,
  customDisabledTitleStyle = ButtonStyles.formDisabledTitleStyle,
  ...restProps
}) => {
  const theme = useThemeColor();

  return (
    <Button
      title={title}
      buttonStyle={[customButtonStyle, { backgroundColor: theme.button }]}
      titleStyle={[customTitleStyle, { color: theme.text }]}
      onPress={onPress}
      disabledStyle={customDisabledButtonStyle}
      disabledTitleStyle={customDisabledTitleStyle}
      activeOpacity={0.9}
      loadingProps={{ color: theme.text }}
      {...restProps}
    />
  );
};

export default FormButton;
