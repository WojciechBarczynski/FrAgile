import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import MainScreen from "./src/screens/MainScreen";
import QrScanScreen from "./src/screens/QrScanScreen";
import { NavigationArrow } from "./src/screens/NavigationArrow";
import { StackParams } from "./src/types";
import QrScanner from "./src/screens/QrScan";
import CreditsScreen from "./src/screens/CreditsScreen";
import EndScreen from "./src/screens/EndScreen";
import List from "./src/screens/List";
import QuizScreen from "./src/screens/QuizScreen";
import QuizResultScreen from "./src/screens/QuizResultScreen";


export const Stack = createNativeStackNavigator<StackParams>();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="StartScreen">
        <Stack.Screen 
          name="NavigationArrow" 
          component={NavigationArrow} 
          initialParams={{ current_stand_id: 0, next_stand_id: 1, data: hardcoded_json }} />
        
        <Stack.Screen
          name="MainScreen"
          component={MainScreen}
          options ={{title:"Start", headerTitleAlign: 'center'}} />

        <Stack.Screen
          name="QrScanScreen"
          component={QrScanScreen}
          options ={{title:"Scan QR code", headerTitleAlign: 'center'}} />
        
        <Stack.Screen
          name="List"
          component={List} />

        <Stack.Screen
          name="QrScanner"
          component={QrScanner}
          options ={{title:"Scan QR code", headerTitleAlign: 'center'}} />

        <Stack.Screen
          name="CreditsScreen"
          component={CreditsScreen}
          options ={{title:"Credits", headerTitleAlign: 'center'}} />
        
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


const hardcoded_json = {
  tags: {
    0: {
      position: {
        x: 1.0,
        y: 1.0
      },
      angle: 3.14 * 1,
    },
    1: {
      position: {
        x: 2.0,
        y: 2.0
      },
      angle: 0.0,
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
