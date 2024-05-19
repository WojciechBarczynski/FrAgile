import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import { NavigationArrowProps, Position } from '../types';
import React from 'react';


export function NavigationArrow({ navigation, route }: NavigationArrowProps) {
    const image = require('../../assets/images/arrow.png')

    const data = route.params.common_args.data
    const current_stand_id = route.params.current_stand_id
    let next_stand_id = route.params.next_stand_id

    const change_floor = data.stands[current_stand_id].floor != data.stands[next_stand_id].floor && current_stand_id != 2137

    let info_text
    let navigation_callback
    let button_text
    let prefix
    const current_stand_name = data.stands[current_stand_id].name
    const next_stand_name = data.stands[next_stand_id].name
    
    if (current_stand_id == 2137){
        prefix = `Jesteś przy wejściu na piętro. Kieruj się do stanowiska ${next_stand_name} (${next_stand_id}).`
    }
    else{
        prefix = `Jesteś przy stanowisku ${current_stand_name} (${current_stand_id}). Kieruj się do stanowiska ${next_stand_name} (${next_stand_id}).`
    }

    if (change_floor) {
        info_text = `${prefix} Kieruj się do klatki schodowej, idź na piętro ${data.stands[next_stand_id].floor} i ustaw się przodem do drzwi`
        const actual_next_stand_id = next_stand_id
        navigation_callback = () => navigation.navigate('NavigationArrow', { next_stand_id: actual_next_stand_id, current_stand_id: 2137, common_args: route.params.common_args })
        button_text = `Kontynuuj`
        next_stand_id = 2137
    } else {
        info_text = prefix
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

export function getArrowAngle(current_stand_position: Position, current_stand_angle: number, next_stand_position: Position) {
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

    return `${-angle_between_vectors * 180 / Math.PI}deg`
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'skyblue',
        alignItems: 'center',
        justifyContent: 'center',
    },
    topText: {
        textAlign: 'center',
        margin: 10,
        fontSize: 24,
        fontWeight: "bold",
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
        backgroundColor: 'orange',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 10,
        margin: 10
    },
    buttonText: {
        fontSize: 30,
        fontWeight: "bold"
    },
})
