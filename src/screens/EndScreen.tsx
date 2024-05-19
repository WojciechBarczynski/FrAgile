import { useState } from "react";
import { Text, View, Image } from "react-native";


const EndScreen = ({ navigation }: { navigation: any }) => {
    const [inputText, setText] = useState('');
  
    return (
        <View style={{flex:1, margin: 10, justifyContent: 'center', alignItems: 'center', gap: 10, backgroundColor: 'skyblue'}}>
            <Text style={{fontSize: 40, fontWeight: 600}} >
                KONIEC! 🔥🔥🔥
            </Text>
            <Text style={{fontSize: 30, fontWeight: 600, textAlign: 'center'}} >
                Obejrzałeś juz wszystkie zaplanowane stanowiska. 
            </Text>
            <Image
                style={{width: "100%",
                height: 200,
                resizeMode: "contain",
                alignSelf: "center"}}
                source={require("../../assets/happy-emoji.png")}
            />
        </View>
    );
  };
  
  export default EndScreen;