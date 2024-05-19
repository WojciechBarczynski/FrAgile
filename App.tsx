import * as React from "react";
import {NavigationContainer} from "@react-navigation/native";
import {createNativeStackNavigator} from "@react-navigation/native-stack";
import MainScreen from "./src/screens/MainScreen";
import QrScanScreen from "./src/screens/QrScanScreen";
import List from "./src/screens/List";


const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="StartScreen">
        <Stack.Screen name="MainScreen" component={MainScreen} />
        <Stack.Screen name="QrScanScreen" component={QrScanScreen} />
        <Stack.Screen name="List" component={List} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
