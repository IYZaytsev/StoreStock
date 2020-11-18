import * as React from "react";
import { StyleSheet, TouchableOpacity, View, Text } from "react-native";
import AlphabetList from "../components/FlatlistAlphabet/index";
import BottomBar from "../components/BottomBar";
import Constants from "expo-constants";
import BookmarkEntry from "../components/BookmarkEntry";
export default function Bookmarked(props) {
  // Using https://www.npmjs.com/package/react-native-flatlist-alphabet component
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
    <View style={{flex: 1, backgroundColor: '#F1F9FF',paddingTop: Constants.statusBarHeight}}>
    <Text style={styles.header}> Bookmarked</Text>
    <View
        style={styles.line}
      />
    <BookmarkEntry/>
      <BottomBar
        pages={["BarCode","History"]}
        navigation={props.navigation}
      />
      </View>
  );
}
const styles = StyleSheet.create({
  line: {
    borderBottomColor: "#bce0fd",
    borderBottomWidth: 1,
  },
  header:{
    marginTop:5,
    paddingBottom:23,
    fontSize: 14,
    fontWeight: "bold",
    textAlign: "center",
    color: "#000000",
    }

});
