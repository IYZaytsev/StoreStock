import * as React from "react";
import { StyleSheet, TouchableOpacity, View } from "react-native";
import TabBarIcon from "./TabBarIcon";
import uuid from "react-native-uuid"
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function BottomBar(props) {
  const update = async () => {
    try {
      var uniqueid = uuid.v4();
      var newAddition = {
        value: props.pageData.name,
        location: props.pageData.city +", " + props.pageData.country,
        ticker: props.ticker,
        navigation:props.navigation,
        key: uniqueid,
      }
      let data = await AsyncStorage.getItem('@bookMarkedCompanies');
      var parsedData = await JSON.parse(data);
      if (data == null){
        // if the current bookmark list is empty create new list with the first addition 
        let temp = [];
        temp.push(newAddition);
        AsyncStorage.setItem('@bookMarkedCompanies', JSON.stringify(temp));
      }else{
        parsedData.push(newAddition);
        AsyncStorage.setItem('@bookMarkedCompanies', JSON.stringify(parsedData));
      }
    } catch (e) {
      // saving error
    }
  } 

  return (
    <View style={styles.border}>
      {props.pages.map((x) => {
        if (x == "Bookmarked-Action"){
        return <TouchableOpacity key={x} onPress={() => update()}>
          <TabBarIcon name={x} />
        </TouchableOpacity>
        }else{
        return <TouchableOpacity key={x} onPress={() => props.navigation.navigate(x)}>
          <TabBarIcon name={x} />
        </TouchableOpacity>}
      })}

    </View>
  );
}

const styles = StyleSheet.create({
  border: {
    position: "absolute",
    bottom: 0,
    width: "100%",
    height: 56,
    backgroundColor: "#6b6e71",
    flexDirection: "row",
    justifyContent: "space-around",
  },
});
