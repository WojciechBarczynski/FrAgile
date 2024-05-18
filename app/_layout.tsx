import { DarkTheme, DefaultTheme, ThemeProvider } from '@react-navigation/native';
import { useFonts } from 'expo-font';
import { Stack } from 'expo-router';
import * as SplashScreen from 'expo-splash-screen';
import { useEffect, createContext, useState } from 'react';
import 'react-native-reanimated';

import { useColorScheme } from '@/hooks/useColorScheme';
import { NavigationArrow } from '@/components/NavigationArrow';

// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync();

export type Position = {
  x: number,
  y: number
}

export type Data = {
  tags: {
    [key: number]: {
      position: Position,
      angle: number
    }
  }

}

export const DataContext = createContext<Data>({ tags: {} });
export default function RootLayout() {
  const colorScheme = useColorScheme();
  const [loaded] = useFonts({
    SpaceMono: require('../assets/fonts/SpaceMono-Regular.ttf'),
  });
  const [data, setData] = useState({ tags: {} });

  useEffect(() => {
    const fetchData = async () => {
      try {
        // const response = await fetch('/data.json');
        // const json = await response.json();
        const json = hardcoded_json;

        setData(json);
      } catch (error) {
        console.error("Error fetching data: ", error);
      }
    };

    fetchData();
  }, []); // empty array means to run this effect only on first component render

  useEffect(() => {
    if (loaded) {
      SplashScreen.hideAsync();
    }
  }, [loaded]);

  if (!loaded) {
    return null;
  }

  return (
    <DataContext.Provider value={data}>
      <ThemeProvider value={colorScheme === 'dark' ? DarkTheme : DefaultTheme}>
        <NavigationArrow current_stand_id={2} next_stand_id={1} />
        {/* <Stack>
          <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
          <Stack.Screen name="+not-found" />
        </Stack> */}
      </ThemeProvider>
    </DataContext.Provider>
  );
}

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

