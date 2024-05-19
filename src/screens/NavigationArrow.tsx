
import React, { useContext } from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import { Data, NavigationArrowProps, Position } from '../types';


export function NavigationArrow({ navigation, route }: NavigationArrowProps) {
    const image = require('../../assets/images/arrow.png')

    // const data = hardcoded_json
    // const current_stand_id = 0
    // let next_stand_id = 1

    const data = route.params.common_args.data
    const current_stand_id = route.params.current_stand_id
    let next_stand_id = route.params.next_stand_id

    const change_floor = data.stands[current_stand_id].floor != data.stands[next_stand_id].floor && current_stand_id != 2137

    let info_text
    let navigation_callback
    let button_text

    if (change_floor) {
        info_text = `Kieruj się do klatki schodowej, idź na piętro ${data.stands[next_stand_id].floor} i ustaw się przodem do drzwi`
        const actual_next_stand_id = next_stand_id
        navigation_callback = () => navigation.navigate('NavigationArrow', { next_stand_id: actual_next_stand_id, current_stand_id: 2137, common_args: route.params.common_args })
        button_text = `Kontynuuj`
        next_stand_id = 2137
    } else {
        info_text = `Kieruj się do stanowiska ${data.stands[next_stand_id].name}`
        navigation_callback = () => navigation.navigate('QrScanScreen', route.params.common_args)
        button_text = `Skanuj kod QR`
    }

    const current_stand_position = data.stands[current_stand_id].position
    const current_stand_angle = data.stands[current_stand_id].angle
    const next_stand_position = data.stands[next_stand_id].position

    const rotationAngle = getArrowAngle(current_stand_position, current_stand_angle, next_stand_position)

    return (
        <View style={styles.container}>
            <Text style={styles.topText}>{info_text}</Text>
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                <Image source={image} style={[styles.image, { transform: [{ rotate: rotationAngle }] }]} />
            </View>
            <View style={styles.buttonContainer}>
                <TouchableOpacity style={styles.button} onPress={navigation_callback}>
                    <Text style={styles.buttonText}>{button_text}</Text>
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
    topText: {
        fontSize: 34,
        color: '#fff',
        position: 'absolute',
        top: 0,
    },
    image: {
        width: 300,
        height: 300,
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

export const hardcoded_json: Data = {
    stands: {
        2137: {
            position: { x: 3.0, y: 3.0 },
            angle: 0.0,
            floor: 0,
            room: "klatka schodowa",
            name: "klatka schodowa",
            description: "schody tu som"
        },
        0: {
            position: {
                x: 3.0,
                y: 1.0
            },
            angle: 3.14 * 1,
            floor: 0,
            room: "dupa",
            name: "dupa1",
            description: "dupa"
        },
        1: {
            position: {
                x: 2.0,
                y: 2.0
            },
            angle: 0.0,
            floor: 1,
            room: "dupa",
            name: "dupa2",
            description: "dupa"
        },
        2: {
            position: {
                x: 5.0,
                y: 6.0
            },
            angle: 0.0,
            floor: 0,
            room: "dupa",
            name: "dupa3",
            description: "dupa"
        },
    }
}