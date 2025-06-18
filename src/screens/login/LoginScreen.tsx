import { View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

import { Typography, FormButton, TextType } from "@io/components";
import { vs } from "@io/constants";
import { useAuthStore } from "@io/store";
import { useTheme } from "@rneui/themed";

const LoginScreen = () => {
  const setLoggedIn = useAuthStore(state => state.setLoggedIn);
  const insets = useSafeAreaInsets();
  const { theme } = useTheme();

  const handleLogin = () => {
    setLoggedIn(true);
  };

  return (
    <View
      className="flex-1 p-6"
      style={{ paddingBottom: insets.bottom ?? vs.pd24, backgroundColor: theme.colors.background }}>
      <View className="flex-1 items-center justify-center">
        <Typography text="Login Screen" type={TextType.HEADING} />
      </View>

      <FormButton title="Login" onPress={handleLogin} />
    </View>
  );
};

export default LoginScreen;
