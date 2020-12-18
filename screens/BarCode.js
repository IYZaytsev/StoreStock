import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  Button,
  ActivityIndicator,
} from "react-native";
import { Camera } from "expo-camera";
import AsyncStorage from "@react-native-async-storage/async-storage";
import uuid from "react-native-uuid";

export default function BarCode(props) {
  const [hasPermission, setHasPermission] = useState(null);
  const [type, setType] = useState(Camera.Constants.Type.back);
  const [scanned, setScanned] = useState(false);
  const [barCodeData, setBarCodeData] = useState(null);
  // Do not push api key to public repo
  var apiKey = "";
  // Useffect is called on initial render of page to grab camera premissions.
  useEffect(() => {
    (async () => {
      const { status } = await Camera.requestPermissionsAsync();
      setHasPermission(status === "granted");
    })();
  }, []);
  // Makes API call
  async function makeApiCall(barcodeID) {
    let urlString = `http://161.35.52.56:5000/product/${barcodeID}`;
    try {
      //Converting the HTTP response to JS object from JSON payload
      let response = await fetch(urlString);
      var objectFromJSON = await response.json();
    } catch (error) {
      console.error(error);
    }
    // No data can be found about this product, let user try to scan something else
    if ("result" in objectFromJSON) {
      setScanned(false);
      setBarCodeData(null);
      // Show message
    } else {
      let ticker = objectFromJSON["ticker"];
      setBarCodeData(ticker);
      // save results of api call to history
      try {
        var uniqueid = uuid.v4();
        var parentCompany = "";
        var text = "";
        if (objectFromJSON["parent_company"]["title"] !== undefined) {
          parentCompany = objectFromJSON["parent_company"]["title"];
        } else {
          parentCompany = objectFromJSON["parent_company"];
        }
        if (objectFromJSON["product"]["title"].length > 40) {
          text = objectFromJSON["product"]["title"].substring(0, 37) + "...";
        } else {
          text = objectFromJSON["product"]["title"];
        }
        var newAddition = {
          value: text,
          company: parentCompany,
          ticker: objectFromJSON["ticker"],
          key: uniqueid,
        };
        let data = await AsyncStorage.getItem("@History");
        var parsedData = await JSON.parse(data);
        if (data == null) {
          // if the current history list is empty create new list with the first addition
          let temp = [];
          temp.push(newAddition);
          AsyncStorage.setItem("@History", JSON.stringify(temp));
        } else {
          parsedData.push(newAddition);
          AsyncStorage.setItem("@History", JSON.stringify(parsedData));
        }
      } catch (e) {
        // saving error
      }
    }
  }
  // handles barcode being scanned, API fetch logic will go here
  const handleBarCodeScanned = ({ type, data }) => {
    setScanned(true);
    makeApiCall(data);
  };

  //Return text componenet if no access to camera is don't have permissions to access camera.
  if (hasPermission === null) {
    return <View />;
  }
  if (hasPermission === false) {
    return <Text>No access to camera</Text>;
  }
  if (scanned == true && barCodeData == null) {
    return (
      <View style={{ flex: 1, justifyContent: "center" }}>
        <ActivityIndicator size="large" />
      </View>
    );
  }
  if ((scanned == true) & (barCodeData != null)) {
    // Found result on server
    props.navigation.navigate("ParentCompany", {
      data: barCodeData,
    });
  }
  return (
    <View style={{ flex: 1 }}>
      <Camera
        style={{ flex: 1 }}
        type={type}
        onBarCodeScanned={scanned ? undefined : handleBarCodeScanned}
      >
        <View
          style={{
            flex: 1,
            backgroundColor: "transparent",
            flexDirection: "row",
          }}
        ></View>
      </Camera>
      {scanned && (
        <Button title={"Tap to Scan Again"} onPress={() => setScanned(false)} />
      )}
    </View>
  );
}
