import * as React from "react";
import { StyleSheet, TouchableOpacity, View, Text } from "react-native";
import { Dimensions } from "react-native";
import TabBarIcon from "./TabBarIcon";
import AlphabetList from "../components/FlatlistAlphabet/index";
export default function HistoryEntry(props) {
    const Companies = [
        {
          value: "Apple",
          key: "1",
        },
        {
          value: "Coca-Cola",
          key: "2",
        },
        {
          value: "Dell",
          key: "3",
        },
        {
          value: "LG",
          key: "4",
        },
      ];

  return (
    <View >
      <AlphabetList 
        data={companies}
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