import React, { useEffect, useState } from "react";
import {
  StyleSheet,
  TouchableOpacity,
  View,
  Text,
  FlatList,
  SafeAreaView,
  ActivityIndicator,
} from "react-native";
import BottomBar from "../components/BottomBar";
import HistoryEntry from "../components/HistoryEntry";
import AsyncStorage from "@react-native-async-storage/async-storage";
import Constants from "expo-constants";
import { useIsFocused } from '@react-navigation/native'
export default function History(props) {
  const [historyData, setHistoryData] = useState(null);
  const isFocused = useIsFocused()
  useEffect(() => {
    getData();
  },[isFocused]);
  const storeData = async (value) => {
    try {
      await AsyncStorage.setItem("@History", JSON.stringify(value));
    } catch (e) {
      // saving error
    }
  };

  const getData = async () => {
    try {
      const value = await AsyncStorage.getItem("@History");
      let objectFromString = await JSON.parse(value);
      if (value == null) {
        // if bookmarked listed is empty don't display loading indicator
        setHistoryData(-1);
      } else {
        setHistoryData(objectFromString);
      }
    } catch (e) {
      // error reading value
    }
  };
  const renderItem = (passedItems) => (
    <TouchableOpacity  onPress={() => props.navigation.navigate("ParentCompany", {
      data:passedItems.item.ticker
    })}>
    <HistoryEntry
      itemName={passedItems.item.value}
      parentCompany={passedItems.item.company}
    />
      </TouchableOpacity>
  );

  if (historyData == -1) {
    return (
      <View
        style={{
          flex: 1,
          backgroundColor: "#F1F9FF",
          paddingTop: Constants.statusBarHeight,
        }}
      >
        <Text style={styles.header}> History</Text>
        <View style={styles.line} />
        <BottomBar
          pages={["BarCode", "Bookmarked"]}
          navigation={props.navigation}
        />
      </View>
    );
  }
  if (historyData == null) {
    return (
      <View
        style={{
          flex: 1,
          backgroundColor: "#F1F9FF",
          paddingTop: Constants.statusBarHeight,
        }}
      >
        <Text style={styles.header}> History</Text>
        <View style={styles.line} />
        <ActivityIndicator size="large" color="#bce0fd" />
        <BottomBar
          pages={["BarCode", "Bookmarked"]}
          navigation={props.navigation}
        />
      </View>
    );
  }
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: "#f1f9ff",
        paddingTop: Constants.statusBarHeight,
      }}
    >
      <Text style={styles.header}> History</Text>
      <View style={styles.line} />
      <SafeAreaView style={{ paddingBottom: 100 }}>
        <FlatList
          data={historyData}
          renderItem={renderItem}
          keyExtractor={(item) => item.key}
        />
      </SafeAreaView>
      <BottomBar
        pages={["BarCode", "Bookmarked"]}
        navigation={props.navigation}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  line: {
    borderBottomColor: "#bce0fd",
    borderBottomWidth: 1,
  },
  header: {
    marginTop: 5,
    paddingBottom: 23,
    fontSize: 14,
    fontWeight: "bold",
    textAlign: "center",
    color: "#000000",
  },
});
