import { StyleSheet, Text, SafeAreaView, View} from "react-native";
import { PrimaryButton } from "components/atoms";
import React, { useState } from 'react';
import data from "../questions/questions.json";
import Checkbox from 'expo-checkbox'

const QuizScreen = ({route, navigation }: {route: any, navigation: any }) => {
  const [isChecked1, setChecked1] = useState(false);
  const [isChecked2, setChecked2] = useState(false);
  const [isChecked3, setChecked3] = useState(false);
  const [isChecked4, setChecked4] = useState(false);

  let question = data[route.params.questionId];
  return (
    <View
        style={{
          marginTop: 30,
          backgroundColor: "#F0F8FF",
          padding: 10,
          borderRadius: 6,
        }}
      >
        <Text style={{ fontSize: 18, fontWeight: "bold" }}>
          {question.Question}
        </Text>
        <View style={{ marginTop: 12 }}>
            <View style={{flexDirection: 'row'}}>
                <Checkbox value={isChecked1} onValueChange={setChecked1} />
                <Text>{question.options[0].content}</Text>
            </View>
            <View style={{flexDirection: 'row'}}>
                <Checkbox value={isChecked2} onValueChange={setChecked2} />
                <Text>{question.options[1].content}</Text>
            </View>
            <View style={{flexDirection: 'row'}}>
                <Checkbox value={isChecked3} onValueChange={setChecked3} />
                <Text>{question.options[2].content}</Text>
            </View>
            <View style={{flexDirection: 'row'}}>
                <Checkbox value={isChecked4} onValueChange={setChecked4} />
                <Text>{question.options[3].content}</Text>
            </View>
            <PrimaryButton
              title="Submit"
              handleOnClick={() => {
                navigation.navigate(
                  "QuizResultScreen",
                  { result: (
                    (isChecked1 === question.options[0].correct)
                    && (isChecked2 === question.options[1].correct)
                    && (isChecked3 === question.options[2].correct)
                    && (isChecked4 === question.options[3].correct)
                  )}
                );
              }}
            />
        </View>
      </View>
  );
};

export default QuizScreen;