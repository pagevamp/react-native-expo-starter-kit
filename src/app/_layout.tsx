import "../../global.css";
import "react-native-reanimated";
import { useEffect } from "react";
import { createTheme, ThemeProvider } from "@rneui/themed";
import { useFonts } from "expo-font";
import { Stack } from "expo-router";
import * as SplashScreen from "expo-splash-screen";
import * as Sentry from "@sentry/react-native";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

import { useColorScheme } from "@io/hooks";
import { AppFonts, CustomTheme } from "@io/constants";
import { sentryConfig } from "@io/config";
import { useIsUserLoggedIn } from "@io/store";

/*
  Initialize Sentry after setting up sentry project
  Follow steps mentioned here https://docs.sentry.io/platforms/react-native/manual-setup/expo/
  add SENTRY_AUTH_TOKEN as EAS secret if you're using EAS build
*/
if (!__DEV__) {
  Sentry.init(sentryConfig);
}

// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync();

const queryClient = new QueryClient();

const RootLayout = () => {
  const colorScheme = useColorScheme();
  const isLoggedIn = useIsUserLoggedIn();

  const AppTheme = createTheme({
    lightColors: CustomTheme.light,
    darkColors: CustomTheme.dark,
    mode: colorScheme ?? "dark",
  });

  const [loaded] = useFonts({
    [AppFonts.SpaceMono]: require("@io/assets/fonts/SpaceMono-Regular.ttf"),
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
    <ThemeProvider theme={AppTheme}>
      <QueryClientProvider client={queryClient}>
        <Stack
          screenOptions={{
            headerShown: false,
          }}>
          <Stack.Protected guard={!isLoggedIn}>
            <Stack.Screen name="(auth)" options={{ animation: "slide_from_left" }} />
          </Stack.Protected>

          <Stack.Protected guard={isLoggedIn}>
            <Stack.Screen name="(tabs)" />
          </Stack.Protected>
        </Stack>
      </QueryClientProvider>
    </ThemeProvider>
  );
};

export default Sentry.wrap(RootLayout);
