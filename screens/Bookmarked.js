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
      location: "San Fransico, CA",
      key: "1",
    },
    {
      value: "Coca-Cola",
      location: "Atlanta, GA",
      key: "2",
    },
    {
      value: "Dell",
      location: "Dallas, TX",
      key: "3",
    },
    {
      value: "LG",
      location: "Soel, Korea",
      key: "4",
    },
    {
      value: "Avista",
      location: "City, AK",
      key: "6",
    },
    {
      value: "Black Hills",
      location: "City, AZ",
      key: "7",
    },
    {
      value: "Belk Inc",
      location: "Charlotte, NC",
      key: "8",
    },
    {
      value: "FMC Corp",
      location: "City, WA",
      key: "9",
    },
    {
      value: "Ingram Micro",
      location: "Idianapollis, IA",
      key: "10",
    },
    {
      value: "Nike",
      location: "Beaverton, OR",
      key: "11",
    },
  ];

  return (
    <View style={{flex: 1, backgroundColor: '#F1F9FF',paddingTop: Constants.statusBarHeight}}>
    <Text style={styles.header}> Bookmarked</Text>
    <View
        style={styles.line}
      />
    <AlphabetList 
      data={Companies}
      />
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
