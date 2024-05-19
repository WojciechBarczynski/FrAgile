import React, { useState } from 'react';
import data from "../questions/questions.json";
import Checkbox from 'expo-checkbox'
import { QuizResult, QuizScreenProps } from "../types";
import { StyleSheet, Text, SafeAreaView, View, ScrollView } from 'react-native';
import { PrimaryButton } from "../components/atoms";

export function QuizScreen({navigation, route }: QuizScreenProps) {
  console.log("Is in quiz screen");

  const [isChecked1, setChecked1] = useState(false);
  const [isChecked2, setChecked2] = useState(false);
  const [isChecked3, setChecked3] = useState(false);
  const [isChecked4, setChecked4] = useState(false);

  const question = data[route.params.stands_list[0]] ;

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.contentContainer}>
        <View style={styles.card}>
          <Text style={styles.question}>{question.Question}</Text>
          <View style={styles.optionsContainer}>
            <View style={styles.option}>
              <Checkbox color='#095E9F' style={styles.checkbox} value={isChecked1} onValueChange={setChecked1} />
              <Text style={styles.optionText}>{question.options[0].content}</Text>
            </View>
            <View style={styles.option}>
              <Checkbox color='#095E9F' style={styles.checkbox} value={isChecked2} onValueChange={setChecked2} />
              <Text style={styles.optionText}>{question.options[1].content}</Text>
            </View>
            <View style={styles.option}>
              <Checkbox color='#095E9F' style={styles.checkbox} value={isChecked3} onValueChange={setChecked3} />
              <Text style={styles.optionText}>{question.options[2].content}</Text>
            </View>
            <View style={styles.option}>
              <Checkbox color='#095E9F' style={styles.checkbox} value={isChecked4} onValueChange={setChecked4} />
              <Text style={styles.optionText}>{question.options[3].content}</Text>
            </View>
            <PrimaryButton
              title="Prześlij odpowiedź"
              handleOnClick={() => {
                const isCorrect = isChecked1 === (question.options[0].correct)
                  && (isChecked2 === question.options[1].correct)
                  && (isChecked3 === question.options[2].correct)
                  && (isChecked4 === question.options[3].correct);
                
                const quizResult: QuizResult = {
                  isCorrect,
                  commonArgs: route.params,
                };

                navigation.navigate(
                  "QuizResultScreen",
                  quizResult
                );
              }}
            />
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'skyblue',
    padding: 16,
  },
  contentContainer: {
    flexGrow: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  card: {
    backgroundColor: '#FFF',
    padding: 20,
    borderRadius: 10,
    shadowColor: '#000',
    shadowOpacity: 0.2,
    shadowRadius: 5,
    elevation: 3,
    width: '100%',
    gap: 10
  },
  checkbox: {
    width: 30,
    height: 30
  },
  question: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
    color: '#333',
  },
  optionsContainer: {
    marginBottom: 20,
  },
  option: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 12,
    gap: 10
  },
  optionText: {
    marginLeft: 8,
    fontSize: 24,
    fontWeight: 'normal',
    color: '#333',
  }
});
