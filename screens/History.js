import * as React from "react";
import { StyleSheet, TouchableOpacity, View, Text } from "react-native";
import BottomBar from "../components/BottomBar";
import HistoryEntry from "../components/HistoryEntry";
import Constants from "expo-constants";
export default function History(props) {
  return (
    <View style={{flex: 1,backgroundColor: "#f1f9ff",paddingTop: Constants.statusBarHeight,}}>
      <Text style={styles.header}> History</Text>
      <HistoryEntry />
      <BottomBar
        pages={["BarCode", "Bookmarked"]}
        navigation={props.navigation}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  header:{
  marginTop:5,
  paddingBottom:23,
  fontSize: 14,
  fontWeight: "bold",
  textAlign: "center",
  color: "#000000",
  }
});
