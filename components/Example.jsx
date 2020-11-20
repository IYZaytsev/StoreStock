import * as React from "react";
import { StyleSheet, TouchableOpacity, View, Text } from "react-native";
export default function CustomComponent(props) {
    // Notice the .jsx ending instead of js, both work react is weird
    // Componenets are useful because they can break up your code into more managable chuncks
    // They can have their own states and props just like pages
    // Using more compoenents in ur code makes performance better and is easier to deal with 
    // Becausue when you can rerender just a single componenet on a page instead of the whole thing 
    // So if you have a whole page of componenets and one has a stateupdate, it doesnt rerender the whole page
    return (
      <View style={styles.border}>
        <Text style={styles.colorfulText}>Our Custom Componenet {props.word}</Text>
      </View>
    );
  }

  const styles = StyleSheet.create({
    border:{borderStyle:"dotted", borderColor:"red",borderWidth:2, borderRadius:15},
    colorfulText:{color:"black"}
  });