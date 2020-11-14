import * as React from "react";
import { StyleSheet, TouchableOpacity, View, Text } from "react-native";
import { Dimensions } from "react-native";
import TabBarIcon from "./TabBarIcon";
export default function BottomBar(props) {
  return (
    <View style={styles.border}>
      {props.pages.map((x) => (
        <TouchableOpacity key={x} onPress={() => props.navigation.navigate(x)}>
          <TabBarIcon name={x} />
        </TouchableOpacity>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  border: {
    position: "absolute",
    bottom: 0,
    width: "100%",
    height: 56,
    backgroundColor: "#6b6e71",
    flexDirection: "row",
    justifyContent: "space-around",
  },
});
