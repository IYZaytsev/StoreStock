import * as React from "react";
import { StyleSheet, TouchableOpacity, View, Text, ScrollView } from "react-native";
import AlphabetList from "../components/FlatlistAlphabet/index";
import BottomBar from "../components/BottomBar";
import Constants from "expo-constants";
import BookmarkEntry from "../components/BookmarkEntry";
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function Bookmarked(props) {
  const storeData = async (value) => {
    try {
      await AsyncStorage.setItem('@bookMarkedCompanies', JSON.stringify(value))
    } catch (e) {
      // saving error
    }
  } 


  const getData = async () => {
    try {
      const value = await AsyncStorage.getItem('@bookMarkedCompanies')
     
    } catch (e) {
      // error reading value
    }
  }


  const Companies = [
    {
      value: "Apple",
      location: "San Fransico, CA",
      ticker: "AAPL",
      navigation:props.navigation,
      key: "1",
    },
    {
      value: "Coca-Cola",
      location: "Atlanta, GA",
      ticker: "KO",
      navigation:props.navigation,
      key: "2",
    },
  
  ];

  return (
    <View style={{flex: 1, backgroundColor: '#F1F9FF',paddingTop: Constants.statusBarHeight}}>
    <Text style={styles.header}> Bookmarked</Text>
    <View
        style={styles.line}
      />
      <ScrollView>
        <AlphabetList 
          data={Companies}
        />
      </ScrollView>
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
