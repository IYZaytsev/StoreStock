import * as React from "react";
import { StyleSheet, TouchableOpacity, View, Text } from "react-native";
import AlphabetList from "../components/FlatlistAlphabet/index";
export default function Bookmarked(props) {
  // Using https://www.npmjs.com/package/react-native-flatlist-alphabet component
  const YourData = [
    {
      value: "Apple",
      key: "A",
    },
    {
      value: "pear",
      key: "B",
    },
    {
      value: "peach",
      key: "C",
    },
    {
      value: "watermelon",
      key: "D",
    },
  ];

  return (

      <AlphabetList
        data={YourData}
      />
  );
}

