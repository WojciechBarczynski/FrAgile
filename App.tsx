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
import { QuizScreen } from "./src/screens/QuizScreen";
import { QuizResultScreen } from "./src/screens/QuizResultScreen";

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
          component={List}
          options={{ title: "Lista", headerTitleAlign: 'center' }}
        />

        <Stack.Screen
          name="QrScanScreen"
          component={QrScanScreen}
          options={{ title: "Start", headerTitleAlign: 'center' }}
        />

        <Stack.Screen
          name="QrScanner"
          component={QrScanner}
          options={{ title: "Skanowanie kodu QR", headerTitleAlign: 'center' }} />

        <Stack.Screen
          name="NavigationArrow"
          component={NavigationArrow}
          options={{ title: "Nawigacja", headerTitleAlign: 'center' }}
        />

        <Stack.Screen
          name="CreditsScreen"
          component={CreditsScreen}
          options={{ title: "Autorzy", headerTitleAlign: 'center' }} />

        <Stack.Screen
          name="EndScreen"
          component={EndScreen}
          options={{ title: "Koniec", headerTitleAlign: 'center' }}
        />

        <Stack.Screen
          name="QuizScreen"
          component={QuizScreen}
          options={{ title: "Quiz", headerTitleAlign: 'center' }}
        />
        <Stack.Screen
          name="QuizResultScreen"
          component={QuizResultScreen}
          options={{ title: "Wynik", headerTitleAlign: 'center' }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
