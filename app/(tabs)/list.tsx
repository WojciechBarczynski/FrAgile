import React, { useState } from "react";
import { Text, StyleSheet, TouchableOpacity } from "react-native";
import DraggableFlatList, { RenderItemParams, ScaleDecorator } from "react-native-draggable-flatlist";
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import stands from "./stands.json";
import {Checkbox} from "expo-checkbox";
import {ThemedText} from "@/components/ThemedText";

const NUM_ITEMS = stands.stands.length

function getColor(i: number) {
    // const multiplier = 255 / (NUM_ITEMS - 1);
    // const colorVal = i * multiplier;
    // return `rgb(${colorVal}, ${Math.abs(128 - colorVal)}, ${255 - colorVal})`;
    return 'rgb(0, 153, 255)a'
}

type Item = {
    key: string;
    label: string;
    backgroundColor: string;
};

const initialData: Item[] = [...Array(NUM_ITEMS)].map((d, index) => {
    const backgroundColor = getColor(index);
    const stand = stands.stands.at(index);
    return {
        key: `item-${index}`,
        label: `${stand!.id}. ${stand!.title} - ${stand!.text}`, //undefined
        backgroundColor,
    };
});

export default function List() {
    const [data, setData] = useState(initialData);

    const renderItem = ({ item, drag, isActive }: RenderItemParams<Item>) => {
        const [isChecked, setChecked] = useState(true);
        return (
            <ScaleDecorator>
                <TouchableOpacity
                    onPressIn={drag}
                    disabled={isActive}
                    style={[
                        styles.rowItem,
                        { backgroundColor: isActive ? "red" : item.backgroundColor },
                    ]}
                >
                    <Checkbox
                        style={{alignSelf: "center"}}
                        value={isChecked}
                        onValueChange={setChecked}
                    />
                    <Text style={styles.text}>
                        {item.label}
                    </Text>

                </TouchableOpacity>
            </ScaleDecorator>
        );
    };

    return (
        <GestureHandlerRootView style={{ marginTop: 25, flex: 1 }}>
            <ThemedText type="title">
                Drag items to set your preferences and check out stands you're not interested in.
            </ThemedText>
            <DraggableFlatList
                data={data}
                onDragEnd={({ data }) => setData(data)}
                keyExtractor={(item) => item.key}
                renderItem={renderItem}
            />
        </GestureHandlerRootView>

    );
}

const styles = StyleSheet.create({
    rowItem: {
        height: "auto",
        width: "auto",
        padding: 15,
        flexDirection:"row"
    },
    text: {
        color: "white",
        fontSize: 24,
        fontWeight: "bold",
        textAlign: "left",
        paddingHorizontal: 15
    },
});