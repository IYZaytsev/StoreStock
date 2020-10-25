import * as React from "react";
import { StyleSheet, TouchableOpacity, View, Text } from "react-native";
export default function SecondScreen(props) {
    console.log(props);
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <TouchableOpacity onPress={() => props.navigation.navigate("ThirdScreen")}>
        <Text>Go To Third Screen</Text>
        </TouchableOpacity>
      </View>
    );
  }