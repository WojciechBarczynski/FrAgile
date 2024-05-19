import React, { useState } from "react";
import { Text, StyleSheet, TouchableOpacity, Button } from "react-native";
import {
    NestableDraggableFlatList,
    NestableScrollContainer,
    RenderItemParams,
    ScaleDecorator
} from "react-native-draggable-flatlist";
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import stands from "../../config/stands.json";
import { Checkbox } from "expo-checkbox";
import { CommonArgs, StackParams } from "../types";
import { StackNavigationProp } from "@react-navigation/stack";

const NUM_ITEMS = Object.keys(stands.stands).length
const COLOR = 'rgb(0, 153, 255)'

type Item = {
    key: string;
    label: string;
    backgroundColor: string;
    id: number;
};

const initialData: Item[] = Object.entries(stands.stands).map(([index, stand]) => {
    return {
        key: `item-${index}`,
        label: `${stand["room"]} ${stand["name"]} - ${stand["description"]}`, //undefined
        backgroundColor: COLOR,
        id: parseInt(index),
    };
});

export default function List({ navigation: navigation }: { navigation: StackNavigationProp<StackParams, 'List'> }) {
    const [data, setData] = useState(initialData);
    const [chosenList, setChosenList] = useState(new Array(NUM_ITEMS).fill(true));
    const handleOnChange = (position: number) => {
        const updatedList = chosenList.map((item, index) => index === position ? !item : item)
        setChosenList(updatedList)
    }

    const renderItem = ({ item, drag, isActive }: RenderItemParams<Item>) => {
        return (
            <ScaleDecorator>
                <TouchableOpacity
                    onPressIn={drag}
                    disabled={isActive}
                    style={[
                        styles.rowItem,
                        { backgroundColor: isActive ? "red" : !chosenList.at(item.id) ? "gray" : item.backgroundColor },
                    ]}
                >
                    <Checkbox
                        style={{ alignSelf: "center" }}
                        value={chosenList.at(item.id)}
                        onValueChange={() => handleOnChange(item.id)}
                    />
                    <Text style={styles.text}>
                        {item.label}
                    </Text>
                </TouchableOpacity>
            </ScaleDecorator>
        );
    };

    const submit = () => {
        // @ts-ignore
        stands.stands[2137] = stands.staircase
        const commonArgs: CommonArgs = {
            data: stands,
            stands_list: data.filter((_item, index) => chosenList[index]).map(item => item.id),
        };
        console.log("commonArgs", commonArgs);
        navigation.navigate("QrScanScreen", commonArgs);
    }

    return (
        <GestureHandlerRootView style={{ flex: 1, backgroundColor: 'skyblue' }}>
            <NestableScrollContainer>
                <Text style={{ margin: 10, fontSize: 28, textAlign: 'center' }}>
                    Zaznacz interesujące Cię stanowiska i ułóż je w kolejności w jakiej chcesz je odwiedzić.
                </Text>
                <NestableDraggableFlatList
                    data={data}
                    onDragEnd={({ data }) => { setData(data) }}
                    keyExtractor={(item) => item.key}
                    renderItem={renderItem}
                />
                <Button title={"Submit"} onPress={submit} color={"#0059b3"} />
            </NestableScrollContainer>
        </GestureHandlerRootView>
    );
}

const styles = StyleSheet.create({
    rowItem: {
        height: "auto",
        width: "80%",
        padding: 10,
        margin: 3,
        flexDirection: "row",
        alignSelf: "center"
    },
    text: {
        color: "white",
        fontSize: 24,
        fontWeight: "bold",
        textAlign: "left",
        paddingHorizontal: 15
    },
});
