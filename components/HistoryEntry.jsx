import * as React from "react";
import { StyleSheet, TouchableOpacity, View, Text } from "react-native";
import { Dimensions } from "react-native";
import TabBarIcon from "./TabBarIcon";
export default function HistoryEntry(props) {
  return (
    <View >
      <View
        style={styles.line}
      />
      <View>
      <Text style={styles.itemName}>Item Name</Text></View>
      <Text style={styles.parentCompany}>Paren Company</Text>
      <View
        style={styles.line}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  border: {
    paddingTop: 100,
  },
  line: {
    borderBottomColor: "#bce0fd",
    borderBottomWidth: 1,
  },
  itemName:{
    marginLeft:81,
    marginTop:21,
    fontSize: 14,
    marginBottom:4,
    fontWeight: "bold",
    textAlign: "left",
    color: "#000000"

  },
  parentCompany:{
    marginTop:4,
    marginLeft:81,
    paddingBottom:21,
    fontSize: 10,
    marginBottom:4,
    textAlign: "left",
    color: "#000000"
  }
});
