import * as React from "react";
import { StyleSheet, TouchableOpacity, View, Text, FlatList,SafeAreaView} from "react-native";
import BottomBar from "../components/BottomBar";
import HistoryEntry from "../components/HistoryEntry";

import Constants from "expo-constants";
const renderItem = (props) => (
<HistoryEntry itemName={props.item.value}
  parentCompany={props.item.company}
/>
);
export default function History(props) {
  const Products = [
    {
      value: "IPhone 11",
      company: "Apple",
      key: "1",
    },
    {
      value: "Diet Coke 12 oz",
      company: "Coca-Cola",
      key: "2",
    },
    {
      value: "13 inch XPS",
      company: "Dell",
      key: "3",
    },
    {
      value: "Smart TV",
      company: "LG",
      key: "4",
    },
    {
      value: "IPhone 11",
      company: "Apple",
      key: "5",
    },
    {
      value: "Diet Coke 12 oz",
      company: "Coca-Cola",
      key: "6",
    },
    {
      value: "13 inch XPS",
      company: "Dell",
      key: "7",
    },
    {
      value: "Smart TV",
      company: "LG",
      key: "8",
    },
    {
      value: "IPhone 11",
      company: "Apple",
      key: "9",
    },
    {
      value: "Diet Coke 12 oz",
      company: "Coca-Cola",
      key: "10",
    },
    {
      value: "13 inch XPS",
      company: "Dell",
      key: "11",
    },
    {
      value: "Smart TV",
      company: "LG",
      key: "12",
    },
  ];
  return (
    <View style={{flex: 1,backgroundColor: "#f1f9ff",paddingTop: Constants.statusBarHeight,}}>
      <Text style={styles.header}> History</Text>
      <View
        style={styles.line}
      />
      <SafeAreaView style={{paddingBottom:100}}>
      <FlatList
        data={Products}
        renderItem={renderItem}
        keyExtractor={item => item.key}
      />
      </SafeAreaView>
      <BottomBar
        pages={["BarCode", "Bookmarked"]}
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
