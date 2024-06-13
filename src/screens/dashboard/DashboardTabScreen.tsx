import { View } from "react-native";

import { FontedText, FormButton } from "@io/components";
import { CommonStyles, vs } from "@io/constants";
import { useAppDispatch, useThemeColor } from "@io/hooks";
import { setLoggedIn } from "@io/redux/slices";

const DashboardTabScreen = () => {
  const theme = useThemeColor();
  const dispatch = useAppDispatch();

  const handleLogin = () => {
    dispatch(setLoggedIn(false));
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
