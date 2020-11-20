import React, { useEffect, useState } from "react";
import { StyleSheet, TouchableOpacity, View, Text, Button,ActivityIndicator} from "react-native";
import { Camera } from 'expo-camera';
export default function BarCode(props) {
  const [hasPermission, setHasPermission] = useState(null);
  const [type, setType] = useState(Camera.Constants.Type.back);
  const [scanned, setScanned] = useState(false);
  const [barCodeData, setBarCodeData] = useState(null);
  // Do not push api key to public repo
  var apiKey = ""
  // Useffect is called on initial render of page to grab camera premissions.
  useEffect(() => {
    (async () => {
      const { status } = await Camera.requestPermissionsAsync();
      setHasPermission(status === 'granted');
    })();
  }, []);
  // Makes API call
  async function makeApiCall(barcodeID){
    let urlString = `http://161.35.52.56:5000/product/${barcodeID}`;
    try {
        //Converting the HTTP response to JS object from JSON payload
        let response = await fetch(urlString);
        var objectFromJSON = await response.json();
      } catch (error) {
        console.error(error);
      }
      //Once API call is done, chaning the 
      if (objectFromJSON["result"] == "no data can be found about this product" || objectFromJSON["result"]["ticker"] == "none"){
        setScanned(false);
        setBarCodeData(null);
      }
      let ticker = objectFromJSON["result"]["ticker"];
      urlString = `http://161.35.52.56:5000/company/${ticker}`;
      try {
          //Converting the HTTP response to JS object from JSON payload
          let response = await fetch(urlString);
          objectFromJSON = await response.json();
        } catch (error) {
          console.error(error);
        }
      setBarCodeData(objectFromJSON)
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
  if (scanned == true && barCodeData == null){
    return  <View style={{ flex: 1, justifyContent: "center" }}><ActivityIndicator size="large" /></View>
  }
  if (scanned == true & barCodeData != null){
    // Found result on server
    props.navigation.navigate("ParentCompany", {
      data:barCodeData
    });
  }
  return (
    <View style={{ flex: 1 }}>
      <Camera style={{ flex: 1 }} type={type} onBarCodeScanned={scanned ? undefined : handleBarCodeScanned}>
        <View
          style={{
            flex: 1,
            backgroundColor: 'transparent',
            flexDirection: 'row',
          }}>
        </View>
      </Camera>
      {scanned && <Button title={'Tap to Scan Again'} onPress={() => setScanned(false)} />}
    </View>
  );
}