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

const initialData: Item[] = [...Array(NUM_ITEMS)].map((d, index) => {
    // const backgroundColor = getColor(index);
    // @ts-ignore
    const stand = stands.stands[index.toString()];
    return {
        key: `item-${index}`,
        label: `${stand["room"]} ${stand["name"]}} - ${stand["description"]}`, //undefined
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

    const submit = () => {
        const commonArgs: CommonArgs = {
            data: stands,
            stands_list: data.filter((_item, index) => chosenList[index]).map(item => item.id),
        };
        console.log("commonArgs", commonArgs);
        navigation.navigate("QrScanScreen", commonArgs);
    }

    return (
        <GestureHandlerRootView style={{ marginTop: 25, flex: 1 }}>
            <NestableScrollContainer>
                <Text style={{ fontSize: 32 }}>
                    Przeciągnij elementy, aby ustawić swoje preferencje oraz odhacz stoiska, które cię nie interesują.
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
