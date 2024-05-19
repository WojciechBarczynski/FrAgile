import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import MainScreen from "./src/screens/MainScreen";
import QrScanScreen from "./src/screens/QrScanScreen";
import { NavigationArrow } from "./src/screens/NavigationArrow";
import { StackParams } from "./types";


export const Stack = createNativeStackNavigator<StackParams>();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="NavigationArrow">
        <Stack.Screen name="NavigationArrow" component={NavigationArrow} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
