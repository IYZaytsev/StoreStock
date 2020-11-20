import React, { useEffect, useState } from "react";
import { StyleSheet, TouchableOpacity, View, Text, Button} from "react-native";
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
        console.log("response from server is");
        console.log(objectFromJSON);
      } catch (error) {
        console.error(error);
      }
      //Once API call is done, chaning the 
      setBarCodeData(objectFromJSON)
  }
  // handles barcode being scanned, API fetch logic will go here
  const handleBarCodeScanned = ({ type, data }) => {
    setScanned(true);
    makeApiCall(data);
    alert(`Bar code with type ${type} and data ${data} has been scanned!`);
  };

  //Return text componenet if no access to camera is don't have permissions to access camera. 
  if (hasPermission === null) {
    return <View />;
  }
  if (hasPermission === false) {
    return <Text>No access to camera</Text>;
  }
  if (scanned == true && barCodeData == false){
    return //loading
  }
  if (scanned == true & barCodeData == true){
    return //homepage
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