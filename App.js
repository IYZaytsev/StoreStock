import * as React from "react";
import { View, Text } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import HomeScreen from "./screens/Home";
import ParentCompany from "./screens/ParentCompany";
import BarCode from "./screens/BarCode";
import Bookmarked from "./screens/Bookmarked";
import History from "./screens/History";
import StockGraphTest from "./screens/StockGraphTest";
const Stack = createStackNavigator();
// This file is the main "entry point" of the app
// It is the first thing that appears on the string

// The Stack object is used to move between screens
// Notice the order of the screen, Home is first therefore it
// is the first thing that appears when the app launches
export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}
      >
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          initialParams={{ test: "test" }}
        />
        <Stack.Screen
          name="ParentCompany"
          component={ParentCompany}
          initialParams={{ test: "test" }}
        />
        <Stack.Screen
          name="BarCode"
          component={BarCode}
          initialParams={{ test: "test" }}
        />
        <Stack.Screen
          name="Bookmarked"
          component={Bookmarked}
          initialParams={{ test: "test" }}
        />
        <Stack.Screen
          name="History"
          component={History}
          initialParams={{ test: "test" }}
        />
        <Stack.Screen
          name="StockGraph"
          component={StockGraphTest}
          initialParams={{ test: "test" }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
