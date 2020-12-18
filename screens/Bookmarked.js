import React, { useEffect, useState } from "react";
import { StyleSheet, TouchableOpacity, View, Text, ScrollView, ActivityIndicator } from "react-native";
import AlphabetList from "../components/FlatlistAlphabet/index";
import BottomBar from "../components/BottomBar";
import Constants from "expo-constants";
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function Bookmarked(props) {
  const [bookMarkData, setBookMarkData] = useState(null);
  useEffect(() => {
    getData();
 
  }, [bookMarkData]);
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
      let objectFromString = await JSON.parse(value)
      if (value == null){
        // if bookmarked listed is empty don't display loading indicator
        setBookMarkData(-1);
      }
      else{
        setBookMarkData(objectFromString);
      }
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
  if (bookMarkData == -1) {
    return (
      <View style={{flex: 1, backgroundColor: '#F1F9FF',paddingTop: Constants.statusBarHeight}}>
      <Text style={styles.header}> Bookmarked</Text>
      <View
          style={styles.line}
        />
        <BottomBar
            pages={["BarCode","History"]}
            navigation={props.navigation}
          />
        </View>
    );
  }
  if (bookMarkData == null) {
    return (
      <View style={{flex: 1, backgroundColor: '#F1F9FF',paddingTop: Constants.statusBarHeight}}>
      <Text style={styles.header}> Bookmarked</Text>
      <View
          style={styles.line}
        />
        <ActivityIndicator size="large" color="#bce0fd" />
        <BottomBar
            pages={["BarCode","History"]}
            navigation={props.navigation}
          />
        </View>
    );
  }
  return (
    <View style={{flex: 1, backgroundColor: '#F1F9FF',paddingTop: Constants.statusBarHeight}}>
    <Text style={styles.header}> Bookmarked</Text>
    <View
        style={styles.line}
      />
      <ScrollView>
        <AlphabetList 
          data={bookMarkData}
          navigation={props.navigation}
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
