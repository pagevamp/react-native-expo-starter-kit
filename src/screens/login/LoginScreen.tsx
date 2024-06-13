import { View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

import { FontedText, FormButton } from "@io/components";
import { CommonStyles, vs } from "@io/constants";
import { useAppDispatch, useThemeColor } from "@io/hooks";
import { setLoggedIn } from "@io/redux/slices";

const LoginScreen = () => {
  const theme = useThemeColor();
  const dispatch = useAppDispatch();

  const insets = useSafeAreaInsets();

  const handleLogin = () => {
    dispatch(setLoggedIn(true));
  };

  return (
    <View
      style={[
        CommonStyles.flexRoot,
        CommonStyles.paddingHorizontal20,
        { backgroundColor: theme.background, paddingBottom: insets.bottom ?? vs.h18 },
      ]}
    >
      <View style={CommonStyles.flexContainer}>
        <FontedText
          text="Login Screen"
        />
      </View>

      <FormButton title="Login" onPress={handleLogin} />
    </View>
  );
};

export default LoginScreen;
