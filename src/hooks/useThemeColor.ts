/**
 * Learn more about light and dark modes:
 * https://docs.expo.dev/guides/color-schemes/
 */

import { useColorScheme } from "react-native";

import { CustomTheme } from "@io/constants";

export function useThemeColor(
  props?: { light?: string; dark?: string },
  colorName?: keyof typeof CustomTheme.light & keyof typeof CustomTheme.dark
) {
  const theme = useColorScheme() ?? "light";
  const colorFromProps = props?.[theme];

  if (colorFromProps) {
    return { [colorName! as string]: props?.[theme] };
  } else {
    return CustomTheme[theme];
  }
}
