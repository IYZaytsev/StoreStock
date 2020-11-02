import * as React from "react";
import { StyleSheet, TouchableOpacity, View, Text } from "react-native";
export default function StockGraph() {
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