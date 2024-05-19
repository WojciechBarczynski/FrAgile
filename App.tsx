import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import MainScreen from "./src/screens/MainScreen";
import { NavigationArrow } from "./src/screens/NavigationArrow";
import { StackParams } from "./src/types";
import QrScanner from "./src/screens/QrScan";
import CreditsScreen from "./src/screens/CreditsScreen";
import EndScreen from "./src/screens/EndScreen";
import List from "./src/screens/List";
import { QrScanScreen } from "./src/screens/QrScanScreen";


export const Stack = createNativeStackNavigator<StackParams>();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="MainScreen"
          component={MainScreen}
          options={{ title: "Start", headerTitleAlign: 'center' }} />

        <Stack.Screen
          name="List"
          component={List} />

        <Stack.Screen
          name="QrScanScreen"
          component={QrScanScreen}
         />

        <Stack.Screen
          name="QrScanner"
          component={QrScanner}
          options={{ title: "Scan QR code", headerTitleAlign: 'center' }} />

        <Stack.Screen
          name="NavigationArrow"
          component={NavigationArrow}
        />

        <Stack.Screen
          name="CreditsScreen"
          component={CreditsScreen}
          options={{ title: "Credits", headerTitleAlign: 'center' }} />

        <Stack.Screen
          name="EndScreen"
          component={EndScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;


const hardcoded_json = {
  stands: {
    0: {
      position: {
        x: 1.0,
        y: 1.0
      },
      angle: 3.14 * 1,
      floor: 0,
      room: "dupa",
      name: "dupa",
      description: "dupa"
    },
    1: {
      position: {
        x: 2.0,
        y: 2.0
      },
      angle: 0.0,
      floor: 0,
      room: "dupa",
      name: "dupa",
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
      name: "dupa",
      description: "dupa"
    },
  }
}
