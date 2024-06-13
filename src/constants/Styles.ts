import { StyleSheet } from "react-native";

import { AppFonts } from "./AppFonts";
import { hs } from "./Scaling";

const COMMON_TEXT_FONT = {
  fontFamily: AppFonts.FTBase,
};

const TextStyles = StyleSheet.create({
  FTBaseRegular: {
    ...COMMON_TEXT_FONT,
    fontWeight: "400",
  },
  FTBaseMedium: {
    ...COMMON_TEXT_FONT,
    fontWeight: "500",
  },
  FTBaseSemiBold: {
    ...COMMON_TEXT_FONT,
    fontWeight: "600",
  },
  FTBaseBold: {
    ...COMMON_TEXT_FONT,
    fontWeight: "800",
  },
});

const CommonStyles = StyleSheet.create({
  flexRoot: {
    flex: 1,
  },
  flexGrowRoot: {
    flexGrow: 1,
  },
  justifyStart: {
    justifyContent: "flex-start",
  },
  alignItemsCenter: {
    alignItems: "center",
  },
  alignItemsEnd: {
    alignItems: "flex-end",
  },
  alignSelfCenter: {
    alignSelf: "center",
  },
  alignSelfEnd: {
    alignSelf: "flex-end",
  },
  alignTextCenter: {
    textAlign: "center",
  },
  flexContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  flexRow: {
    flexDirection: "row",
  },
  flexWrap: {
    flexWrap: "wrap",
  },
  justifySpaceBetween: {
    justifyContent: "space-between",
  },
  justifyContentCenter: {
    justifyContent: "center",
  },
  justifyContentEvenly: {
    justifyContent: "space-evenly",
  },
  justifyContentEnd: {
    justifyContent: "flex-end",
  },
  image: {
    flex: 1,
    width: undefined,
    height: undefined,
  },
  width100: {
    width: "100%",
  },
  paddingHorizontal20: {
    paddingHorizontal: hs.w20,
  },
});

export { TextStyles, CommonStyles };
