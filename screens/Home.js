import * as React from "react";
import { StyleSheet, TouchableOpacity, View, Text, Button} from "react-native";
export default function HomeScreen(props) {
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
    <Text>----------- Screens-----------</Text>

        <TouchableOpacity onPress={() => props.navigation.navigate("ParentCompany")}>
        <Text>ParentCompanyScreen</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => props.navigation.navigate("Bookmarked")}>
        <Text>Bookmarked Screen</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => props.navigation.navigate("History")}>
        <Text>History Screen</Text>
        </TouchableOpacity>
        
        <Text>----------- Test Area-----------</Text>

        <TouchableOpacity onPress={() => props.navigation.navigate("StockGraph")}>
        <Text>StockGraph component </Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => props.navigation.navigate("BarCode")}>
        <Text>Barcode Reader test</Text>
        </TouchableOpacity>

    </View>
  );
}
