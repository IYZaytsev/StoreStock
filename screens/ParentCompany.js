import * as React from "react";
import { Image, StyleSheet, TouchableOpacity, View, Text, Linking, ScrollView} from "react-native";
import BottomBar from "../components/BottomBar";
import Constants from "expo-constants";
import { textSpanOverlapsWith } from "typescript";
import { Assets } from "@react-navigation/stack";

const logo = {
  uri: 'https://reactnative.dev/img/tiny_logo.png',
  width: 64,
  height: 64
}

export default function ParentCompany(props) {
    return (
      <View style={{flex: 1, backgroundColor: '#F1F9FF',paddingTop: Constants.statusBarHeight}}>

      <ScrollView style={styles.scrollView}>

        <Text style={styles.header}> Parent Company: Nestle, S.A.</Text>
        <Image source={logo} />
        <Image source={require('../assets/favicon.png')} />
        <View
          style={styles.line}
          />
          <Text style={styles.body}> ??? Nestlé S.A., together with its subsidiaries, operates as a food and beverage company. The company operates through Zone Europe, Middle East and North Africa; Zone Americas; Zone Asia, Oceania and sub-Saharan Africa; and Nestlé Waters segments. It offers baby foods under the Cerelac, Gerber, and NaturNes brands; bottled water under the Nestlé Pure Life, Perrier, Poland Spring, and S.Pellegrino brands; cereals under the Fitness, Nesquik, cheerios, and Lion Cereals brands; and chocolate and confectionery products under the KitKat, Nestle L'atelier, Nestle Toll House, Milkybar, Smarties, Quality Street, Aero, Garoto, Orion, and Cailler brands. The company also provides coffee products under the Nescafé original, Nespresso, Nescafé Dolce Gusto, Nescafé, Nescafé Original 3 in 1, Coffee-Mate, Nescafé Gold, and Nescafé Cappuccino brands; culinary, chilled, and frozen foods under the Maggi, Hot Pockets, Stouffer's, Thomy, Jacks, TombStone, Buitoni, DiGiorno, and Lean Cuisine brands; dairy products under the Carnation, Nido, Coffee-Mate, and La Laitière brands; and drinks under the Nesquik, Nestea, and Milo brands. In addition, it offers food service products under the Milo, Nescafé, Maggi, Chef, Nestea, Stouffer's, Chef-Mate, Sjora, Minor's, and Lean Cuisine brand names; healthcare nutrition products under the Boost, Peptamen, Resource, and Nutren Junior brands; ice cream products under the Dreyer's, Mövenpick, Häagen-Dazs, Nestlé Ice Cream, and Extrême brands; and pet care products under the Purina, ONE, Alpo, Felix, Pro Plan, Cat Chow, Fancy Feast, Chef Michael's, Bakers, Friskies, Dog Chow, Beneful, and Gourmet brands. Further, it provides coffee creamers under the Starbucks brand. The company was founded in 1866 and is headquartered in Vevey, Switzerland.
          </Text>
          <View
          style={styles.line}
          />
            <Text style={styles.link}
            onPress={() => Linking.openURL('https://www.nestle.com/')}>
            Go to company website
          </Text>
        </ScrollView>

        <BottomBar
          pages={["BarCode", "History", "Bookmarked"]}
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
    header:{
      marginTop:5,
      paddingBottom:23,
      fontSize: 14,
      fontWeight: "bold",
      textAlign: "center",
      color: "#000000",
      },
      body:{
        marginTop:5,
        paddingBottom:15,
        paddingLeft:14,
        paddingRight:14,
        fontSize: 14,
        fontWeight: "normal",
        textAlign: "left",
        color: "#000000",
      },
      link:{
        marginTop:5,
        paddingBottom:15,
        fontSize: 14,
        fontWeight: "normal",
        textAlign: "center",
        color: 'blue',
      },
      scrollView: {
        marginHorizontal: 15,
        marginBottom: 60,
      }
  
  });