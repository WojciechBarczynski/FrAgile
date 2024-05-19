import { StyleSheet } from "react-native";

import primaryColors from "./colors";
import { borderRadiusSize, fontSize, paddingSize } from "./vars";

export const buttonStyle = StyleSheet.create({
  buttonContainer: {
    elevation: paddingSize.xSmall,
    borderRadius: borderRadiusSize.medium,
    paddingVertical: paddingSize.medium,
    paddingHorizontal: paddingSize.small,
  },
  buttonText: {
    color: primaryColors.white,
    alignSelf: "center",
    fontSize: fontSize.buttonMobileFontSize,
  },
});
