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
import { hardcoded_json } from "./src/screens/NavigationArrow";
import { QrScanScreen } from "./src/screens/QrScanScreen";
import QuizScreen from "./src/screens/QuizScreen";
import QuizResultScreen from "./src/screens/QuizResultScreen";

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

        <Stack.Screen 
          name="QuizScreen"
          component={QuizScreen} />
        <Stack.Screen 
          name="QuizResultScreen"
          component={QuizResultScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
