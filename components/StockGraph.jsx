import * as React from "react";
import { StyleSheet, TouchableOpacity, View, Text } from "react-native";
import { LineChart } from "react-native-chart-kit";
import { Dimensions } from "react-native";


const screenWidth = Dimensions.get("window").width;
const screenHeigth = Dimensions.get("window").height;

const data = {
  labels: ["January", "February", "March", "April", "May", "June"],
  datasets: [
    {
      data: [
        Math.random() * 100,
        Math.random() * 100,
        Math.random() * 100,
        Math.random() * 100,
        Math.random() * 100,
        Math.random() * 100
      ]
    }
  ]
};

const chartConfig = {
  backgroundColor: "#FFFFFF",
  backgroundGradientFrom: "#FFFFFF",
  backgroundGradientTo: "#FFFFFF",
  decimalPlaces: 2, // optional, defaults to 2dp
  color: (opacity = 1) => `rgba(61, 136, 136, ${opacity})`,
  labelColor: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
};


export default function StockGraph() {
  // Example of json for five day price
  /*
    (last entry in the array is current day)
    "5day_prices":
    [
      {"close":49.900001525878906,"open":49.810001373291016},
      {"close":47.959999084472656,"open":49.0},
      {"close":48.02000045776367,"open":47.72999954223633},
      {"close":48.060001373291016,"open":47.810001373291016},
      {"close":48.63999938964844,"open":48.75}
    ]
  
    // For the non graph fields
    I have "fiftyTwoWeekHigh":60.13,"fiftyTwoWeekLow":36.27,"marketCap":209026990080
  */
    return (
      <View>
        <LineChart
          data={data}
          width={screenWidth} // from react-native
          height={(screenHeigth * .75)}
          yAxisLabel="$"
          yAxisInterval={2} // optional, defaults to 1
          chartConfig={chartConfig}
          bezier
          style={{
            marginVertical: 8,
            borderRadius: 16
          }}
        />
      </View>
    );
  }

  const styles = StyleSheet.create({
    border:{borderStyle:"dotted", borderColor:"red",borderWidth:2, borderRadius:15},
    colorfulText:{color:"black"}
  });