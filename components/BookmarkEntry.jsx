import * as React from "react";
import { StyleSheet, TouchableOpacity, View, Text } from "react-native";
import { Dimensions } from "react-native";
import TabBarIcon from "./TabBarIcon";
export default function BookmarkEntry(props) {
  return (
    <View >
      <View style={{flexDirection:"row", marginLeft:81,}}>
      <View style={styles.circle}></View>
      <View style={{flexDirection:"column"}}>
      <Text style={styles.itemName}>Item Name</Text>
      <Text style={styles.parentCompany}>Paren Company</Text>
      </View>
      </View>
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
  circle:{
    borderRadius:50,
    width:40,
    height:40,
    backgroundColor:"black",
  },
  itemName:{
    marginTop:21,
    fontSize: 14,
    marginBottom:4,
    fontWeight: "bold",
    textAlign: "left",
    color: "#000000"

  },
  parentCompany:{
    marginTop:4,

    paddingBottom:21,
    fontSize: 10,
    marginBottom:4,
    textAlign: "left",
    color: "#000000"
  }
});
