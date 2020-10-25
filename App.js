
import * as React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from "./screens/Screen1"
import SecondScreen from "./screens/Screen2"
import ThirdScreen from "./screens/Screen3"
import Example1 from "./screens/StateExample"
import Example2 from "./screens/UseEffectExample"
import StylingExample from "./screens/Styling"
import FetchExample from "./screens/ResourceRetrieval"
import { startClock } from 'react-native-reanimated';
const Stack = createStackNavigator();
// This file is the main "entry point" of the app
// It is the first thing that appears on the string 

// The Stack object is used to move between screens
// Notice the order of the screen, Home is first therefore it 
// is the first thing that appears when the app launches
export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} initialParams={{test:"test"}} />
        <Stack.Screen name="SecondScreen" component={SecondScreen} initialParams={{test:"test"}} />
        <Stack.Screen name="ThirdScreen" component={ThirdScreen} initialParams={{test:"test"}} />
        <Stack.Screen name="Example1" component={Example1} initialParams={{test:"test"}} />
        <Stack.Screen name="Example2" component={Example2} initialParams={{test:"test"}} />
        <Stack.Screen name="Styling" component={StylingExample} initialParams={{test:"test"}} />
        <Stack.Screen name="Fetch" component={FetchExample} initialParams={{test:"test"}} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
