import { View } from "react-native";

import { Typography, TextType } from "@io/components";
import { CommonStyles } from "@io/constants";
import { useThemeColor } from "@io/hooks";

const TeamsTabScreen = () => {
  const theme = useThemeColor();
  return (
    <View style={[CommonStyles.flexContainer, { backgroundColor: theme.background }]}>
      <Typography text="Teams Screen" type={TextType.HEADING} />
    </View>
  );
};

export default TeamsTabScreen;
