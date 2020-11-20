import * as React from "react";
import { StyleSheet, TouchableOpacity, View, Text } from "react-native";
import { Dimensions } from "react-native";
import TabBarIcon from "./TabBarIcon";
export default function BookmarkEntry(props) {
  return (
    <View >
      <View style={{flexDirection:"row", marginLeft:24,}}>
      <View style={styles.circle}><Text style={styles.plus}>+</Text></View>
      <View style={{flexDirection:"column"}}>
      <Text style={styles.companyName}>{props.companyName}</Text>
      <Text style={styles.location}>{props.location}</Text>
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
    marginTop: 24,
    backgroundColor:"black",
  },
  companyName:{
    marginTop:21,
    fontSize: 14,
    marginBottom:4,
    marginRight: 24,
    marginLeft: 16,
    fontWeight: "bold",
    textAlign: "left",
    color: "#000000"

  },
  location:{
    marginTop:4,
    marginLeft: 16,
    paddingBottom:21,
    fontSize: 10,
    marginBottom:4,
    textAlign: "left",
    color: "#000000"
  },
  plus:{
      color: "white",
      fontSize: 30,
      textAlign: "center",

  }
});
