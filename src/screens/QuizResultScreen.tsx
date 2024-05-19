import {View, Text} from "react-native";
import React  from 'react';


const QuizResultScreen = ({route, navigation }: {route: any, navigation: any }) => {
    let result = route.params.result;
    let msg = "";
    if(result) msg = "Correct";
    else msg = "Incorrect";
    return (
        <View>
            <Text>{msg}</Text>
        </View>
  );
};

export default QuizResultScreen;