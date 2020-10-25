import * as React from "react";
import { StyleSheet, TouchableOpacity, View, Text } from "react-native";
export default function ThirdScreen(props) {
    // The purpose of this screen is to explain the pop navigation method
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <TouchableOpacity onPress={() => props.navigation.navigate("SecondScreen")}>
        <Text>SecondScreen</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => props.navigation.pop()}>
        <Text>pop</Text>
        </TouchableOpacity>
      </View>
    );
  }