import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import MainScreen from "./src/screens/MainScreen";
import QrScanScreen from "./src/screens/QrScanScreen";
import { NavigationArrow } from "./src/screens/NavigationArrow";
import { StackParams } from "./src/types";
import QrScanner from "./src/screens/QrScan";


export const Stack = createNativeStackNavigator<StackParams>();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="StartScreen">
        <Stack.Screen name="NavigationArrow" component={NavigationArrow} initialParams={{ current_stand_id: 0, next_stand_id: 1, data: hardcoded_json }} />
        <Stack.Screen name="MainScreen" component={MainScreen} />
        <Stack.Screen name="QrScanScreen" component={QrScanScreen} />
        <Stack.Screen name="QrScanner" component={QrScanner} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;


const hardcoded_json = {
  tags: {
    0: {
      position: {
        x: 1.0,
        y: 1.0
      },
      angle: 0.0,
    },
    1: {
      position: {
        x: 2.0,
        y: 4.0
      },
      angle: 120.0,
    },
    2: {
      position: {
        x: 5.0,
        y: 6.0
      },
      angle: 0.0,
    },
  }
}
