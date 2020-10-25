import React, { useEffect, useState } from "react";
import {
  StyleSheet,
  TouchableOpacity,
  View,
  Text,
  TextInput,
} from "react-native";

export default function Example2(props) {
  // The purpose of this screen is to exaplain useEffect
  // Any code you put here will run every time the function is rendered 
  // example: console.log("something"); This will print something to the console everytime this screen is rendered 


  // Use effect lets you control how often some code is called when the object is rendered,
  /* useEffect(() => {Some code here}); Run everytime  its rendered
     useEffect(() => {Some code here} , []); Run only on initial render
     useEffect(() => {Some code here} , [SomeState]); Run only on  rerender caused by SomeState
  */

  const [myStateString, setMyStateString] = useState("Some Random Initial State");
  var initialObjectState = { name: "John smith", job: "Programmer" };
  const [myStateObject, setMyStatObject] = useState(initialObjectState);
  console.log("Screen has been rerendered");
  useEffect(() => {
    console.log("state called myStateString Has been updated causing a rerender");
  }, [myStateString]);

  function updateComplexState(newName){
    // Creating a copy of the object to edit 
    let newState = {};
    Object.assign(newState, myStateObject);

    // Making changes to copy
    newState.name= newName;
    // Setting copy to state
    setMyStatObject(newState)
    };

  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
     <Text>-------------------------Simple State-------------------------</Text>
      <Text>{myStateString}</Text>
      <TextInput onChangeText={(text) => setMyStateString(text)} value={myStateString} />



      <Text>-------------------------ComplexState-------------------------</Text>
      <Text>Name: {myStateObject.name}  Job:{myStateObject.job} </Text>
      <TextInput onChangeText={(text) => updateComplexState(text)} value={myStateObject.name} />
    </View>
  );
}
