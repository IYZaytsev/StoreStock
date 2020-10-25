import * as React from "react";
import { StyleSheet, TouchableOpacity, View, Text } from "react-native";
import CustomComponent from "../components/Example"
export default function StylingExample(props) {
    
    return (
      <View style={styles.someRandomStyle}>

        <Text>Example of Styling </Text>
        <Text style={styles.colorfulText}>Some fancy text</Text>
        <CustomComponent
            word="Sucks!"
        />
      </View>
    );
  }
  // Create a style sheet object and use it instead of inline CSS
  // React has basically same css as standerd web except
  // All non number properties are strings, IE center vs "center"
  // Instead of allign-tems you do aligntItem IE camelcase
  // no unit specification, margin-top: 15px, is now marginTop:15
  const styles = StyleSheet.create({
    someRandomStyle:{ flex: 1, alignItems: 'center', justifyContent: 'center'},
    colorfulText:{color:"pink"}
  });