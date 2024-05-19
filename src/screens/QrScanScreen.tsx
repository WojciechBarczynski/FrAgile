import { PrimaryButton, Title } from "components/atoms";
import { useState } from "react";
import { TextInput, View, StyleSheet, Text } from "react-native";

const rooms = [{
  id: 1,
  name: 'Room 1',
}, {
  id: 2,
  name: 'Room 2',
}, {
  id: 3,
  name: 'Room 3',
}];

const QrScanScreen = ({ navigation }: { navigation: any }) => {
  const [inputText, setText] = useState('');

  return (
    <View style={qrScanScreenStyle.container}>
      <PrimaryButton
        title="Open QR scanner"
        handleOnClick={() => {
          navigation.navigate("QrScanner");
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
          if (rooms.find(room => room.id.toString() === inputText)) {
            console.log('Room found');
          } else {
            console.log('Room not found');
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
