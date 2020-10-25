import React, { useEffect, useState } from "react";
import {
  StyleSheet,
  TouchableOpacity,
  View,
  Text,
  TextInput,
} from "react-native";

export default function FetchExample(props) {
  // The purpose of this screen is to exaplain fetch
  // This screen is using a combination of everything we've learned
  // 
  var cords = {longitude:"-80.791", latitude:"35.1022"};
  const [locationAtGps, setLocationAtGps] = useState(null);
  useEffect(() => {
    makeApiCall();
  }, []);
  
  // Since fetch is async function, we use await to wait for the response
  // You can think of this as multithreading 
  // makeApiCall is running in the background while the rest of the page is already rendering
  // This is the whole point of states 
  /*
    Diagram explaining Async functions
    You can think of return as the "render method", In the class version of react that's what its called.

    FetchExample()---------> UseEffect()------->return----------------------->return---> 
                                |                                              |
                                |                                              |
                                -----> makeApiCall()---->setLocationAtGps()----
    
  */
  async function makeApiCall(){
    let urlString = `https://nominatim.openstreetmap.org/reverse?format=jsonv2&lat=${cords.latitude}&lon=${cords.longitude}`;
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
      setLocationAtGps(objectFromJSON.address)
  }


  // This is called ternary operator
  // We need to do this because the inital state of the state is null 
  // which we do on purpose to track when the json request is done  
  // {locationAtGps == null ? "loading...": locationAtGps.state}
  /* it means:
  if(locationAtGps == null){
    return "loading";
  }else{
      return locationAtGps.state
  }
  */
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
    <Text>Getting the location at longitude: {cords.longitude} latitude: {cords.latitude}</Text>
    <Text>State: {locationAtGps == null ? "loading...": locationAtGps.state}</Text>
    <Text>County: {locationAtGps == null ? "loading...": locationAtGps.county}</Text>
    <Text>City: {locationAtGps == null ? "loading...": locationAtGps.city}</Text>
    </View>
  );
}
