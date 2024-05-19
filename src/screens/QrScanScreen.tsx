import { PrimaryButton, Title } from "components/atoms";
import { useState } from "react";
import { TextInput, View, StyleSheet, Text } from "react-native";
import { QrScanScreenProps } from "../types";

export function QrScanScreen({ navigation, route }: QrScanScreenProps) {
  const [inputText, setText] = useState('');

  return (
    <View style={qrScanScreenStyle.container}>
      <PrimaryButton
        title="Open QR scanner"
        handleOnClick={() => {
          navigation.navigate("QrScanner", route.params);
        }}
      />

      <Text style={qrScanScreenStyle.text}>
        OR
      </Text>

      <TextInput
        style={qrScanScreenStyle.text_input}
        placeholder="Type station ID here!"
        onChangeText={newText => setText(newText)}
        defaultValue={inputText}
      />

      <PrimaryButton
        title="Submit QR code number"
        handleOnClick={() => {
          if (route.params.data.stands.hasOwnProperty(inputText)) {
            if (route.params.stands_list[0].toString()  === inputText) {
              console.log(`You are on right station! Display quiz here!`);
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
