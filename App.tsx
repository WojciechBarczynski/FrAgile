import * as React from "react";
import {NavigationContainer} from "@react-navigation/native";
import {createNativeStackNavigator} from "@react-navigation/native-stack";
import MainScreen from "./src/screens/MainScreen";
import QrScanScreen from "./src/screens/QrScanScreen";
import QrScanner from "./src/screens/QrScan";
//import CreditsScreen from "./src/screens/CreditsScreen";


const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="StartScreen">
        <Stack.Screen
          name="MainScreen"
          component={MainScreen}
          options ={{title:"Start", headerTitleAlign: 'center'}} />

        <Stack.Screen
          name="QrScanScreen"
          component={QrScanScreen}
          options ={{title:"Scan QR code", headerTitleAlign: 'center'}} />

        <Stack.Screen
          name="QrScanner"
          component={QrScanner}
          options ={{title:"Scan QR code", headerTitleAlign: 'center'}} />

      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
