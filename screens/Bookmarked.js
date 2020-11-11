import * as React from "react";
import { StyleSheet, TouchableOpacity, View, Text } from "react-native";
import AlphabetList from "../components/FlatlistAlphabet/index";
import BottomBar from "../components/BottomBar";
import Constants from "expo-constants";
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
    <View style={{flex: 1, backgroundColor: '#F1F9FF',paddingTop: Constants.statusBarHeight}}>
      <AlphabetList
        data={YourData}
      />
      <BottomBar
        pages={["BarCode","History"]}
        navigation={props.navigation}
      />
      </View>
  );
}
const styles = StyleSheet.create({

});
