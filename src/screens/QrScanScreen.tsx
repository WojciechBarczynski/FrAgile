import { PrimaryButton, Title } from "components/atoms";
import { useState } from "react";
import { TextInput, View } from "react-native";
import { QrScanScreenProps } from "../types";

export function QrScanScreen({ navigation, route }: QrScanScreenProps) {
  const [inputText, setText] = useState('');

  return (
    <View style={{ flex: 1, padding: 10, justifyContent: 'center', alignItems: 'center'}}>
      <PrimaryButton
        title="Open QR scanner"
        handleOnClick={() => {
          navigation.navigate("QrScanner", route.params);
        }}
      />

      <Title title={" or "} />

      <TextInput
        style={{height: 40, alignSelf: 'stretch'}}
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
