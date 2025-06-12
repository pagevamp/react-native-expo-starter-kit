import { View } from "react-native";

import { Typography, FormButton, TextType } from "@io/components";
import { CommonStyles, vs } from "@io/constants";
import { useThemeColor } from "@io/hooks";
import { useAuthStore } from "@io/store";

const DashboardTabScreen = () => {
  const theme = useThemeColor();
  const logout = useAuthStore(state => state.logout);

  const handleLogin = () => {
    logout();
  };

  return (
    <View style={[CommonStyles.flexContainer, { backgroundColor: theme.background }]}>
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
