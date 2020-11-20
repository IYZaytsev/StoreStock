import * as React from "react";
import { StyleSheet, TouchableOpacity, View, Text } from "react-native";
export default function ParentCompany(props) {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>ParentCompany This screen needs to change!</Text>
          <BottomBar
            pages={["BarCode", "Bookmarked"]}
            navigation={props.navigation}
          />
      </View>
      
    );
  }