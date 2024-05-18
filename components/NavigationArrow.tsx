import { ThemedText } from './ThemedText';
import { DataContext, Position } from '@/app/_layout';
import React, { useContext } from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';

type NavigationArrowProps = {
    current_stand_id: number,
    next_stand_id: number
}

export function NavigationArrow({ current_stand_id, next_stand_id }: NavigationArrowProps) {
    const data = useContext(DataContext);

    const image = require('@/assets/images/xp.png')

    const current_stand_position = data.tags[current_stand_id].position
    const current_stand_angle = data.tags[current_stand_id].angle
    const next_stand_position = data.tags[next_stand_id].position

    // const current_stand_position = { x: 0, y: 0 }
    // const current_stand_angle = Math.PI * 1 / 4
    // const next_stand_position = { x: 1, y: 1 }

    const rotationAngle = getArrowAngle(current_stand_position, current_stand_angle, next_stand_position)

    return (
        <View style={styles.container}>
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                <Image source={image} style={[styles.image, { transform: [{ rotate: rotationAngle }] }]} />
            </View>
            <View style={styles.buttonContainer}>
                <TouchableOpacity style={styles.button} onPress={() => console.log('Button pressed!')}>
                    <Text style={styles.buttonText}>Scan Code</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}

function getArrowAngle(current_stand_position: Position, current_stand_angle: number, next_stand_position: Position) {

    const current_stand_unit_vector = {
        x: Math.cos(current_stand_angle),
        y: Math.sin(current_stand_angle)
    }

    const vector_between_stands = {
        x: (next_stand_position.x - current_stand_position.x),
        y: (next_stand_position.y - current_stand_position.y)
    }

    const angle_between_vectors =
        Math.atan2(vector_between_stands.y, vector_between_stands.x) -
        Math.atan2(current_stand_unit_vector.y, current_stand_unit_vector.x)

    return `${angle_between_vectors * 180 / Math.PI}deg`
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'red',
        alignItems: 'center',
        justifyContent: 'center',
    },
    image: {
        width: 400,
        height: 400,
    },
    buttonContainer: {
        width: '100%',
        padding: 10,
        position: 'absolute',
        bottom: 0,
        alignItems: 'center',
    },
    button: {
        width: 200,
        height: 50,
        backgroundColor: '#fff',
        justifyContent: 'center',
        alignItems: 'center',
    },
    buttonText: {
        fontSize: 20,
        color: '#000',
    },
})