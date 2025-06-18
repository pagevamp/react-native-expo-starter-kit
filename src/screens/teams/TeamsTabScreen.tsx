import { View } from "react-native";
import { useTheme } from "@rneui/themed";

import { Typography, TextType } from "@io/components";

const TeamsTabScreen = () => {
  const { theme } = useTheme();
  return (
    <View
      className="flex-1 items-center justify-center"
      style={{ backgroundColor: theme.colors.background }}>
      <Typography text="Teams Screen" type={TextType.HEADING} />
    </View>
  );
};

export default TeamsTabScreen;
