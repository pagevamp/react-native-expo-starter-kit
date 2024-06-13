import "react-native-reanimated";
import { useEffect } from "react";
import { DarkTheme, DefaultTheme, ThemeProvider } from "@react-navigation/native";
import { useFonts } from "expo-font";
import { Stack } from "expo-router";
import * as SplashScreen from "expo-splash-screen";
import * as Sentry from "@sentry/react-native";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";

import { useColorScheme } from "@io/hooks";
import { AppFonts } from "@io/constants";
import { sentryConfig } from "@io/config";
import { store, persistor } from "@io/redux/Store";
import { AuthProvider } from "@io/services/providers";

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
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <AuthProvider>
          <ThemeProvider value={colorScheme === "dark" ? DarkTheme : DefaultTheme}>
            <Stack
              screenOptions={{
                headerShown: false,
              }}>
              <Stack.Screen name="(auth)" options={{ animation: "slide_from_left" }} />

              <Stack.Screen name="(tabs)" />
            </Stack>
          </ThemeProvider>
        </AuthProvider>
      </PersistGate>
    </Provider>
  );
};

export default Sentry.wrap(RootLayout);
