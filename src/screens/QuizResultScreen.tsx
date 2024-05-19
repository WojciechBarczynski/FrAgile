import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import React from 'react';
import { NavigationArrowArgs, QuizResultScreenProps } from "../types";


export function QuizResultScreen({ navigation, route }: QuizResultScreenProps) {
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
    if (route.params.isCorrect) msg = "Correct";
    else msg = "Incorrect";

    return (
        <View style={styles.container}>
            <View style={styles.card}>
                <Text style={[styles.message]}>{msg}</Text>
                <TouchableOpacity
                    style={styles.button}
                    onPress={handleOnClick}
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
