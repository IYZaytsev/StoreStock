
import { Ionicons } from '@expo/vector-icons';
import * as React from 'react';
import { Platform } from 'react-native';

export default function TabBarIcon(props) {
  return (
    <Ionicons
      name={turnScreenNameIntoIcon(props.name)}
      size={30}
      style={{marginTop:10}}
      color={"#A9AEB2"}
    />
  );
}
function turnScreenNameIntoIcon(name) {
    //Changing from material design and Ios deisgn for icons
    var icon_library = "md";
    if (Platform.OS == "ios"){
        icon_library = "ios"
    }
    switch (name) {
      case "History":
        return icon_library + "-list-box";
      case "BarCode":
        return icon_library + "-camera";
    }
  }