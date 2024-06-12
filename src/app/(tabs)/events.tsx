import { View } from "react-native";

import { FontedText } from "@io/components";
import { CommonStyles } from "@io/constants";
import { useThemeColor } from "@io/hooks";

const EventsTabScreen = () => {
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
      <FontedText text="Events Screen" />
    </View>
  );
};

export default EventsTabScreen;
