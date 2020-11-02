import * as React from "react";
import { StyleSheet, TouchableOpacity, View, Text } from "react-native";
export default function StockGraph() {
  // Example of json for five day price
  /*
    (last entry in the array is current day)
    "5day_prices":[
    {"close":49.900001525878906,"open":49.810001373291016},
    {"close":47.959999084472656,"open":49.0},
    {"close":48.02000045776367,"open":47.72999954223633},
    {"close":48.060001373291016,"open":47.810001373291016},
    {"close":48.63999938964844,"open":48.75}
  ]
  
  // For the non graph fields
    I have "fiftyTwoWeekHigh":60.13,"fiftyTwoWeekLow":36.27,"marketCap":209026990080
  */
    return (
      <View style={styles.border}>
        <Text style={styles.colorfulText}>StockGraph Componenet</Text>
      </View>
    );
  }

  const styles = StyleSheet.create({
    border:{borderStyle:"dotted", borderColor:"red",borderWidth:2, borderRadius:15},
    colorfulText:{color:"black"}
  });