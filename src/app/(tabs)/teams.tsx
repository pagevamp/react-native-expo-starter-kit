import { View } from "react-native";

import { FontedText } from "@io/components";
import { CommonStyles } from "@io/constants";
import { useThemeColor } from "@io/hooks";

const TeamsTabScreen = () => {
  const theme = useThemeColor();
  return (
    <View
      style={[
        CommonStyles.flexRoot,
        CommonStyles.justifyContentCenter,
        CommonStyles.alignItemsCenter,
        { backgroundColor: theme.background },
      ]}
    >
      <FontedText text="Teams Screen" />
    </View>
  );
};

export default TeamsTabScreen;
