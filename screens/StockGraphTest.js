import * as React from "react";
import { StyleSheet, TouchableOpacity, View, Text } from "react-native";
import StockGraph from "../components/StockGraph"

export default function StockGraphTest(props) {    
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center'}}>
        <StockGraph />
      </View>
    );
  }
