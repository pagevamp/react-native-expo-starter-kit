/**
 * Below are the colors that are used in the app. The colors are defined in the light and dark mode.
 */

import { Colors } from "./Colors";

const tintColorLight = Colors.primary400;
const tintColorDark = Colors.primary400;

export const CustomTheme = {
  light: {
    text: Colors.neutral900,
    background: Colors.neutral100,
    tint: tintColorLight,
    icon: Colors.neutral400,
    tabIconDefault: Colors.neutral400,
    tabIconSelected: tintColorLight,
    inputText: Colors.neutral800,
    inputBackground: Colors.neutral300,
    button: Colors.primary300,
  },
  dark: {
    text: Colors.neutral200,
    background: Colors.neutral800,
    tint: tintColorDark,
    icon: Colors.neutral500,
    tabIconDefault: Colors.neutral500,
    tabIconSelected: tintColorDark,
    inputText: Colors.neutral200,
    inputBackground: Colors.black100,
    button: Colors.primary400,
  },
};
