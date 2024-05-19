import { PrimaryButton, Title } from "../components/atoms";
import { useState } from "react";
import { TextInput, View, StyleSheet, Text } from "react-native";
import { QrScanScreenProps } from "../types";
import React from "react";

export function QrScanScreen({ navigation, route }: QrScanScreenProps) {
  const [inputText, setText] = useState('');

  return (
    <View style={qrScanScreenStyle.container}>
      <PrimaryButton
        title="Otwórz skaner QR"
        handleOnClick={() => {
          navigation.navigate("QrScanner", route.params);
        }}
      />

      <Text style={qrScanScreenStyle.text}>
        LUB
      </Text>

      <TextInput
        style={qrScanScreenStyle.text_input}
        placeholder="Wprowadź ID stacji!"
        onChangeText={newText => setText(newText)}
        defaultValue={inputText}
      />

      <PrimaryButton
        title="Prześlij ID stacji"
        handleOnClick={() => {
          if (route.params.data.stands.hasOwnProperty(inputText)) {
            if (route.params.stands_list[0].toString() === inputText) {
              navigation.navigate("QuizScreen", route.params);
            } else {
              console.log(`You are on wrong station!`);
              navigation.navigate("NavigationArrow", {
                common_args: route.params,
                current_stand_id: parseInt(inputText),
                next_stand_id: route.params.stands_list[0],
              });
            }
          } else {
            console.log(`Such station doesn't exist!`);
          }
        }}
      />
    </View>
  );
};

export default QrScanScreen;

export const qrScanScreenStyle = StyleSheet.create({
  container: {
    flex: 1, 
    padding: 10, 
    justifyContent: 'center', 
    alignItems: 'center',
    backgroundColor: "skyblue",
    gap: 20
  },
  text: {
    color: 'black',
    fontSize: 50,
    marginVertical: 20
  },
  text_input: {
    height: 40, 
    alignSelf: 'stretch',
    fontSize: 25,
    paddingHorizontal: 20
  }
});
