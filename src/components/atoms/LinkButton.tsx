import primaryColors from "properties/styles/colors";
import { ButtonProps } from "properties/types/ButtonProps";
import { FontWeight, fontSize, paddingSize } from "properties/styles/vars";
import React from "react";
import { Pressable, StyleSheet, Text, View } from "react-native";

const LinkButton: React.FC<
  ButtonProps & { color: string; fontWeight?: FontWeight }
> = (props: ButtonProps & { color: string; fontWeight?: FontWeight }) => {
  const {
    handleOnClick,
    title,
    color,
    fontWeight,
    helperText,
    helperTextColor,
  } = props;

  const buttonStyle = StyleSheet.create({
    buttonContainer: {
      display: "flex",
      flexDirection: "row",
      columnGap: paddingSize.xxSmall,
    },
    buttonText: {
      color,
      fontWeight,
      fontSize: fontSize.baseMobileFontSize,
    },
    helperText: {
      color: helperTextColor || primaryColors.darkGrey,
      fontSize: fontSize.baseMobileFontSize,
    },
  });

  return (
    <View style={buttonStyle.buttonContainer}>
      <Text style={buttonStyle.helperText}>{helperText}</Text>
      <Pressable onPress={handleOnClick}>
        <Text style={buttonStyle.buttonText}>{title}</Text>
      </Pressable>
    </View>
  );
};

export default LinkButton;