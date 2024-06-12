import { View } from "react-native";

import { FontedText } from "@io/components";
import { CommonStyles } from "@io/constants";
import { useThemeColor } from "@io/hooks";

const DashboardTabScreen = () => {
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
      <FontedText text="Dashboard Screen" />
    </View>
  );
};

export default DashboardTabScreen;
