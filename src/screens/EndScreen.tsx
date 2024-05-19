import { useState } from "react";
import { Text, View, Image } from "react-native";
import { PrimaryButton } from "components/atoms";


const EndScreen = ({ navigation }: { navigation: any }) => {
    const [inputText, setText] = useState('');

    const navigateBackToMainScreen = () => {
        navigation.navigate("MainScreen");
    };
  
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
            <PrimaryButton
                title={"Powrót do startu"}
                handleOnClick={navigateBackToMainScreen}
            ></PrimaryButton>
        </View>
    );
  };
  
  export default EndScreen;