import "react-native-reanimated";
import { useEffect } from "react";
import {
  DarkTheme,
  DefaultTheme,
  ThemeProvider,
} from "@react-navigation/native";
import { useFonts } from "expo-font";
import { Stack } from "expo-router";
import * as SplashScreen from "expo-splash-screen";
import * as Sentry from "@sentry/react-native";

import { useColorScheme } from "@io/hooks";
import { AppFonts } from "@io/constants";
import { sentryConfig } from "@io/config";

/*
  Initialize Sentry after setting up sentry project
  Follow steps mentioned here https://docs.sentry.io/platforms/react-native/manual-setup/expo/
  add SENTRY_AUTH_TOKEN as EAS secret if you're using EAS build
*/
Sentry.init(sentryConfig);

// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync();

const RootLayout = () => {
  const colorScheme = useColorScheme();
  const [loaded] = useFonts({
    [AppFonts.SpaceMono]: require("@io/assets/fonts/SpaceMono-Regular.ttf"),
    [AppFonts.FTBase]: require("@io/assets/fonts/FTBase-Book.otf"),
  });

  useEffect(() => {
    if (loaded) {
      SplashScreen.hideAsync();
    }
  }, [loaded]);

  if (!loaded) {
    return null;
  }

  return (
    <ThemeProvider value={colorScheme === "dark" ? DarkTheme : DefaultTheme}>
      <Stack>
        <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
        {/* Other Screens in Stack */}
      </Stack>
    </ThemeProvider>
  );
};

export default Sentry.wrap(RootLayout);
