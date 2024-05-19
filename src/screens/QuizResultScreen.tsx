import {View, Text} from "react-native";
import React  from 'react';
import { NavigationArrowArgs, QuizResultScreenProps } from "../types";
import { PrimaryButton } from "components/atoms";


const QuizResultScreen = ({navigation, route }: QuizResultScreenProps) => {
    const handleOnClick = () => {
        if (route.params.commonArgs.stands_list.length > 1) {
            route.params.commonArgs.stands_list.shift();
            const args: NavigationArrowArgs = {
                common_args: route.params.commonArgs,
                current_stand_id: route.params.commonArgs.stands_list[0],
                next_stand_id: route.params.commonArgs.stands_list[1],
            };

            navigation.navigate("NavigationArrow", args);
        } else {
            navigation.navigate("EndScreen");
        }
    }

    let msg = "";
    if(route.params.isCorrect) msg = "Correct";
    else msg = "Incorrect";

    return (
        <View>
            <Text>{msg}</Text>
            <PrimaryButton
              title="Next"
              handleOnClick={handleOnClick}
            />
        </View>
  );
};

export default QuizResultScreen;
