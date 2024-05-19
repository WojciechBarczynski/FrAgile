import { PrimaryButton, Title } from "components/atoms";
import { useState } from "react";
import { TextInput, View } from "react-native";


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
      <PrimaryButton
        title="Open QR scanner"
        handleOnClick={() => {
          navigation.navigate("QrScanner");
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
          if (rooms.find(room => room.id.toString() === inputText)) {
            console.log('Room found');
          } else if (inputText === 'end') {
            navigation.navigate("EndScreen");
          } else {
            console.log('Room not found');
          }
        }}
      />
    </View>
  );
};


export default QrScanScreen;
