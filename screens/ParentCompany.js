import * as React from "react";
import { Image, StyleSheet, TouchableOpacity, View, Text, Linking, ScrollView } from "react-native";
import BottomBar from "../components/BottomBar";
import Constants from "expo-constants";
import StockGraph from "../components/StockGraph";



export default function ParentCompany(props) {
  var newData = props.route.params.data;
  return (
    <View style={{ flex: 1, backgroundColor: '#FFFFFF', paddingTop: Constants.statusBarHeight }}>

      <ScrollView style={styles.scrollView}>

        <Text style={styles.header}> Parent Company:  {newData.name}</Text>

        <Image source={{ uri: newData.logo_url }} style={{ justifyContent: 'center', alignItems: 'center', width: 100, height: 100 }} />

        <Text style={styles.eco}> Eco-Friendly </Text>

        {/* <Image source={logo} /> */}

        {/* <Image source={require('../assets/favicon.png')} /> */}

        <View style={styles.line} />

        {/* Inner Scroll to view company information starts here */}
        <ScrollView style={{ flex: 1, backgroundColor: '#FFFFFF', /*paddingTop: Constants.statusBarHeight*/ }}>

          <Text style={styles.body}>
            {newData.summary}
          </Text>
        </ScrollView>
        {/* Inner Scroll ends here */}

        <View style={styles.line} />

        <Text style={styles.link}
          onPress={() => Linking.openURL(newData.website)}>
          Open Website
        </Text>
        <StockGraph data={newData["5day_prices"]}/>
        <Stats weekHigh={newData.fiftyTwoWeekHigh} weekLow={newData.fiftyTwoWeekLow} marketCap={newData.marketCap} />
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
        <Text style={[textStyle.weekStats, textStyle.weekLow]}>52 Week Low: {props.weekHigh}</Text>
      </View>
      <View style={containerStyle}>
        <Text style={[textStyle.weekStats, textStyle.marketCap]}>Market Cap: {props.marketCap}</Text>
      </View>
    </View>
  );
}

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
    color: '#2699fb',
  },
  scrollView: {
    marginHorizontal: 15,
    marginBottom: 60,
  }

});
const containerStyle = StyleSheet.create({
  container: {
    flex: 1, 
    alignItems: 'center', 
    justifyContent: 'center',
    backgroundColor: '#FFFFFF',
  },
  rowContainer: {
  }, 
}); 

const textStyle = StyleSheet.create({
  
  weekStats: {
    fontSize: 30,
    color: "#000000",
    fontWeight: "normal",
  },
  weekLow: {
  },
}); 
