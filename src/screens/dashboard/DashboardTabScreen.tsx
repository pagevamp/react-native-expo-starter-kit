import { View } from "react-native";
import { useTheme } from "@rneui/themed";

import { Typography, FormButton, TextType } from "@io/components";
import { vs } from "@io/constants";
import { useAuthStore } from "@io/store";

const DashboardTabScreen = () => {
  const { theme } = useTheme();
  const logout = useAuthStore(state => state.logout);

  const handleLogin = () => {
    logout();
  };

  return (
    <View
      className="flex-1 items-center justify-center"
      style={{ backgroundColor: theme.colors.background }}>
      <Typography text="Dashboard Screen" type={TextType.SUBHEADING} />

      <FormButton
        title="Logout"
        onPress={handleLogin}
        customButtonStyle={{ marginVertical: vs.mr24 }}
      />
    </View>
  );
};

export default DashboardTabScreen;
