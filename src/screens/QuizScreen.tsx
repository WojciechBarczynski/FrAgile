import React, { useState } from 'react';
import { StyleSheet, Text, SafeAreaView, View, TouchableOpacity, ScrollView } from 'react-native';
import Checkbox from 'expo-checkbox';
import { PrimaryButton } from 'components/atoms';
import data from '../questions/questions.json';


const QuizScreen = ({route, navigation }: {route: any, navigation: any }) => {
  const [isChecked1, setChecked1] = useState(false);
  const [isChecked2, setChecked2] = useState(false);
  const [isChecked3, setChecked3] = useState(false);
  const [isChecked4, setChecked4] = useState(false);


  const question = data[route.params.questionId] ;

  const handleSubmit = () => {
    navigation.navigate('QuizResultScreen', {
      result:
        isChecked1 === question.options[0].correct &&
        isChecked2 === question.options[1].correct &&
        isChecked3 === question.options[2].correct &&
        isChecked4 === question.options[3].correct,
    });
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.contentContainer}>
        <View style={styles.card}>
          <Text style={styles.question}>{question.Question}</Text>
          <View style={styles.optionsContainer}>
            <View style={styles.option}>
              <Checkbox value={isChecked1} onValueChange={setChecked1} />
              <Text style={styles.optionText}>{question.options[0].content}</Text>
            </View>
            <View style={styles.option}>
              <Checkbox value={isChecked2} onValueChange={setChecked2} />
              <Text style={styles.optionText}>{question.options[1].content}</Text>
            </View>
            <View style={styles.option}>
              <Checkbox value={isChecked3} onValueChange={setChecked3} />
              <Text style={styles.optionText}>{question.options[2].content}</Text>
            </View>
            <View style={styles.option}>
              <Checkbox value={isChecked4} onValueChange={setChecked4} />
              <Text style={styles.optionText}>{question.options[3].content}</Text>
            </View>
          </View>
          <PrimaryButton title="Submit" handleOnClick={handleSubmit} />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#E8F4F8',
    padding: 16,
  },
  contentContainer: {
    flexGrow: 1,
    justifyContent: 'center',
    alignItems: 'center',
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
  },
  question: {
    fontSize: 20,
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
  },
  optionText: {
    marginLeft: 8,
    fontSize: 16,
    color: '#333',
  },
  button: {
    marginTop: 20,
  },
});

export default QuizScreen;