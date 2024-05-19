import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import React from 'react';

const QuizResultScreen = ({route, navigation }: {route: any, navigation: any }) => {
    const result = route.params.result;
    const msg = result ? "Correct!" : "Incorrect";
    const resultStyle = result ? styles.correct : styles.incorrect;

    return (
        <View style={styles.container}>
            <View style={styles.card}>
                <Text style={[styles.message, resultStyle]}>{msg}</Text>
                <TouchableOpacity 
                    style={styles.button} 
                    onPress={() => navigation.navigate('QuizScreen', { questionId: 0 })}
                >
                    <Text style={styles.buttonText}>Next task</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#E8F4F8',
        justifyContent: 'center',
        alignItems: 'center',
        padding: 16,
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
        alignItems: 'center',
    },
    message: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 20,
    },
    correct: {
        color: 'green',
    },
    incorrect: {
        color: 'red',
    },
    button: {
        backgroundColor: '#007BFF',
        padding: 15,
        borderRadius: 8,
        alignItems: 'center',
        marginTop: 20,
        width: '80%',
    },
    homeButton: {
        backgroundColor: '#6C757D',
    },
    buttonText: {
        color: '#FFF',
        fontSize: 16,
        fontWeight: 'bold',
    },
});

export default QuizResultScreen;