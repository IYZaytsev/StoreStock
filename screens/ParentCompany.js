import * as React from "react";
import { StyleSheet, TouchableOpacity, View, Text } from "react-native";
import StockGraph from "../components/StockGraph"

const Stats = (props) => {
  return (
    <View style={containerStyle.container}>
      <View style={containerStyle.rowContainer}>
        <Text style={textStyle.weekStats}>52 Week High: {props.weekLow}</Text>
        <Text style={[textStyle.weekStats, textStyle.weekLow]}>52 Week Low: {props.weekHigh}</Text>
      </View>
      <View style={containerStyle}>
        <Text style={[textStyle.weekStats, textStyle.marketCap]}>Market Cap: {props.marketCap}</Text>
      </View>
    </View>
  );
}

export default function StockGraphTest(props) {    
    return (
      <View style={containerStyle.container}>
        <StockGraph />
        <Stats weekHigh="$124.30" weekLow="$115.22" marketCap="$200m" />
      </View>
    );
  }

const containerStyle = StyleSheet.create({
  container: {
    flex: 1, 
    alignItems: 'center', 
    justifyContent: 'center',
    backgroundColor: '#FFFFFF',
  },
  rowContainer: {
    flexDirection: 'row',
    paddingTop: 40
  }, 
  marketCapContainer: {
    paddingTop: 1000
  }
}); 

const textStyle = StyleSheet.create({
  weekStats: {
    fontSize: 30,
    fontFamily: "roboto",
    color: "#000000",
    fontWeight: "normal",
  },
  weekLow: {
    paddingLeft: 60,
  },
}); 
  