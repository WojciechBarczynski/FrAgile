import primaryColors from "properties/styles/colors";
import {
  borderRadiusSize,
  fontSize,
  paddingSize,
} from "properties/styles/vars";
import React from "react";
import { Text, StyleSheet, View } from "react-native";

export const titleStyle = StyleSheet.create({
  container: {
    elevation: paddingSize.xSmall,
    borderRadius: borderRadiusSize.medium,
    paddingVertical: paddingSize.medium,
    paddingHorizontal: paddingSize.small,
  },
  text: {
    color: primaryColors.goldYellow,
    alignSelf: "center",
    fontSize: fontSize.h2MobileFontSize,
    fontWeight: "700",
  },
});

const Title: React.FC<{ title: string }> = (props: { title: string }) => {
  const { title } = props;
  return (
    <View style={titleStyle.container}>
      <Text style={titleStyle.text}>{title}</Text>
    </View>
  );
};

export default Title;
