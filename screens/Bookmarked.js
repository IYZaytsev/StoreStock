import * as React from "react";
import { StyleSheet, TouchableOpacity, View, Text, ScrollView } from "react-native";
import AlphabetList from "../components/FlatlistAlphabet/index";
import BottomBar from "../components/BottomBar";
import Constants from "expo-constants";
import BookmarkEntry from "../components/BookmarkEntry";
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function Bookmarked(props) {
  const storeData = async (value) => {
    try {
      await AsyncStorage.setItem('@candidatesSelected', JSON.stringify(value))
    } catch (e) {
      // saving error
    }
  } 

  var initialstates = {};
  var uniqueValues = arrayOfContests(props.route.params.bookmarkedEntry);
  const initState = () => {
    uniqueValues.map((x) => {
      initialstates[x] = { value: "Unknown", location: "Unknown", ticker: "Unknown", index=null };
    });
  };
  initState();

  const [userCompanyChoice, setuserCompanyChoice] = useState(initialstates);
  // Figuring out how many unique companies there are from json data
  function arrayOfContests(jsData) {
    var companies = [];
    jsData.map((x) => {
      contests.push(x.company);
    });
    return contests.filter((c, index) => {
      return contests.indexOf(c) === index;
    });
  }

  //returns the number of candidates that have been selected
  function companySelected() {
    let x = Object.keys(userCompanyChoice).filter(x => (
      userCompanyChoice[x].name != "Unknown")).length;
    return x;
  }

  const getData = async () => {
    try {
      const value = await AsyncStorage.getItem('@candidatesSelected')
      if (value !== null) {
        setuserCompanyChoice(JSON.parse(value));
      }
    } catch (e) {
      // error reading value
    }
  }

  useEffect(() => {
    if (companySelected() == 0) {
      getData();
    }
  }, []);

  if (companySelected() != 0) {
    storeData(userCompanyChoice);
  }

  // Using https://www.npmjs.com/package/react-native-flatlist-alphabet component
  const Companies = [
    {
      value: "Apple",
      location: "San Fransico, CA",
      key: "1",
    },
    {
      value: "Coca-Cola",
      location: "Atlanta, GA",
      key: "2",
    },
    {
      value: "Dell",
      location: "Dallas, TX",
      key: "3",
    },
    {
      value: "LG",
      location: "Soel, Korea",
      key: "4",
    },
    {
      value: "Avista",
      location: "City, AK",
      key: "6",
    },
    {
      value: "Black Hills",
      location: "City, AZ",
      key: "7",
    },
    {
      value: "Belk Inc",
      location: "Charlotte, NC",
      key: "8",
    },
    {
      value: "FMC Corp",
      location: "City, WA",
      key: "9",
    },
    {
      value: "Ingram Micro",
      location: "Idianapollis, IA",
      key: "10",
    },
    {
      value: "Nike",
      location: "Beaverton, OR",
      key: "11",
    },
  ];

  return (
    <View style={{flex: 1, backgroundColor: '#F1F9FF',paddingTop: Constants.statusBarHeight}}>
    <Text style={styles.header}> Bookmarked</Text>
    <View
        style={styles.line}
      />
      <ScrollView>
        <AlphabetList 
          data={userCompanyChoice}
        />
      <BottomBar
          pages={["BarCode","History"]}
          navigation={props.navigation}
        />
      </ScrollView>
      </View>
  );
}
const styles = StyleSheet.create({
  line: {
    borderBottomColor: "#bce0fd",
    borderBottomWidth: 1,
  },
  header:{
    marginTop:5,
    paddingBottom:23,
    fontSize: 14,
    fontWeight: "bold",
    textAlign: "center",
    color: "#000000",
    }

});
