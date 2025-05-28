import { View } from "react-native";

import { FontedText, FormButton } from "@io/components";
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
      <FontedText text="Dashboard Screen" />

      <FormButton
        title="Logout"
        onPress={handleLogin}
        customButtonStyle={{ marginVertical: vs.h10 }}
      />
    </View>
  );
};

export default DashboardTabScreen;
