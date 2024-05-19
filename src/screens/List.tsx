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
import { StackParams } from "../types";
import { StackNavigationProp } from "@react-navigation/stack";

const NUM_ITEMS = stands.stands.length
const COLOR = 'rgb(0, 153, 255)'

type Item = {
    key: string;
    label: string;
    backgroundColor: string;
    id: number;
};

const initialData: Item[] = [...Array(NUM_ITEMS)].map((d, index) => {
    const stand = stands.stands.at(index);
    return {
        key: `item-${index}`,
        label: `${stand!.id}. ${stand!.title} - ${stand!.text}`, //undefined
        backgroundColor: COLOR,
        id: index,
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

    const formatData = () => {
        console.log(data.filter((item, index) => chosenList[index])) //do debugowania
        return data.filter((item, index) => chosenList[index])
    }

    return (
        <GestureHandlerRootView style={{flex: 1, backgroundColor: 'skyblue' }}>
            <NestableScrollContainer>
                <Text style={{ margin:10, fontSize: 28, textAlign: 'center' }}>
                    Zaznacz interesujące Cię stanowiska i ułóż je w kolejności w jakiej chcesz je odwiedzić.
                </Text>
                <NestableDraggableFlatList
                    data={data}
                    onDragEnd={({ data }) => { setData(data) }}
                    keyExtractor={(item) => item.key}
                    renderItem={renderItem}
                />
                <Button title={"Submit"} onPress={formatData} color={"#0059b3"} />
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