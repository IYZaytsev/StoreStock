import React, { useEffect, useState } from "react";
import {
  Image,
  StyleSheet,
  ActivityIndicator,
  View,
  Text,
  Linking,
  ScrollView,
} from "react-native";
import BottomBar from "../components/BottomBar";
import Constants from "expo-constants";
import StockGraph from "../components/StockGraph";

export default function ParentCompany(props) {
  // Useffect is called on initial render of page to grab camera premissions.
  const [financeData, setFinanceData] = useState(null);
  useEffect(() => {makeApiCall()}, [financeData]);

  async function makeApiCall() {
    let urlString = `http://161.35.52.56:5000/company/${props.route.params.data}`;
    try {
      //Converting the HTTP response to JS object from JSON payload
      let response = await fetch(urlString);
      var objectFromJSON = await response.json();
    } catch (error) {
      console.error(error);
    }
    setFinanceData(objectFromJSON);
  }

  if (financeData == null) {
    return (
      <View style={{ flex: 1, justifyContent: "center" }}>
        <ActivityIndicator size="large" color="#0000ff" />
      </View>
    );
  }
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: "#FFFFFF",
        paddingTop: Constants.statusBarHeight,
      }}
    >
      <ScrollView style={styles.scrollView}>
        <Text style={styles.header}> Parent Company: {financeData.name}</Text>

        <Image
          source={{ uri: financeData.logo_url }}
          style={{
            justifyContent: "center",
            alignItems: "center",
            width: 100,
            height: 100,
          }}
        />

        <Text style={styles.eco}> Eco-Friendly </Text>

        {/* <Image source={logo} /> */}

        {/* <Image source={require('../assets/favicon.png')} /> */}

        <View style={styles.line} />

        {/* Inner Scroll to view company information starts here */}
        <ScrollView
          style={{
            flex: 1,
            backgroundColor:
              "#FFFFFF" /*paddingTop: Constants.statusBarHeight*/,
          }}
        >
          <Text style={styles.body}>{financeData.summary}</Text>
        </ScrollView>
        {/* Inner Scroll ends here */}

        <View style={styles.line} />

        <Text
          style={styles.link}
          onPress={() => Linking.openURL(financeData.website)}
        >
          Open Website
        </Text>
        <StockGraph data={financeData["5day_prices"]} />
        <Stats
          weekHigh={financeData.fiftyTwoWeekHigh}
          weekLow={financeData.fiftyTwoWeekLow}
          marketCap={financeData.marketCap}
        />
      </ScrollView>

      <BottomBar
        pages={["BarCode", "History", "Bookmarked"]}
        navigation={props.navigation}
      />
    </View>
  );
}

const Stats = (props) => {
  return (
    <View style={containerStyle.container}>
      <View style={containerStyle.rowContainer}>
        <Text style={textStyle.weekStats}>52 Week High: {props.weekLow}</Text>
        <Text style={[textStyle.weekStats, textStyle.weekLow]}>
          52 Week Low: {props.weekHigh}
        </Text>
      </View>
      <View style={containerStyle}>
        <Text style={[textStyle.weekStats, textStyle.marketCap]}>
          Market Cap: {props.marketCap}
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  line: {
    borderBottomColor: "#bce0fd",
    borderBottomWidth: 1,
  },
  header: {
    marginTop: 23,
    paddingBottom: 39,
    fontSize: 14,
    fontWeight: "bold",
    textAlign: "center",
    color: "#000000",
  },
  eco: {
    paddingBottom: 39,
    fontSize: 14,
    textAlign: "center",
    color: "#3cc390",
  },
  body: {
    marginTop: 5,
    paddingBottom: 15,
    paddingLeft: 14,
    paddingRight: 14,
    fontSize: 14,
    fontWeight: "normal",
    textAlign: "justify",
    color: "#000000",
  },
  link: {
    marginTop: 9,
    paddingBottom: 15,
    fontSize: 14,
    fontWeight: "normal",
    textAlign: "center",
    color: "#2699fb",
  },
  scrollView: {
    marginHorizontal: 15,
    marginBottom: 60,
  },
});
const containerStyle = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#FFFFFF",
  },
  rowContainer: {},
});

const textStyle = StyleSheet.create({
  weekStats: {
    fontSize: 30,
    color: "#000000",
    fontWeight: "normal",
  },
  weekLow: {},
});
