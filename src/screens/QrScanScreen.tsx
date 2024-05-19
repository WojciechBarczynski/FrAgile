import { useState } from "react";
import { Text, Button, TextInput, View } from "react-native";

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
    <View style={{ flex: 1, padding: 10, justifyContent: 'center', alignItems: 'center'}}>
      <Button
        title="Open QR scanner"
        onPress={() => {
          navigation.navigate("QrScanner");
        }}
      />

      <Text>QR code number:</Text>

      <TextInput
        style={{height: 40, alignSelf: 'stretch'}}
        placeholder="Type station ID here!"
        onChangeText={newText => setText(newText)}
        defaultValue={inputText}
      />

      <Button
        title="Submit QR code number"
        onPress={() => {
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
