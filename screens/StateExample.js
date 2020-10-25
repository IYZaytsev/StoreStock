import React, { useEffect, useState } from "react";
import {
  StyleSheet,
  TouchableOpacity,
  View,
  Text,
  TextInput,
} from "react-native";

export default function Example1(props) {
  // The purpose of this screen is to exaplain states
  // notice that import statement in line 1 for useEffect and useState
  // {} means import non default code from file, See line 10? It says "default"
  // you would import this WITHOUT the {}. You can only have 1 default function per file
  // IF i had a second function in here I would import it with {}

  // Example of a string state (primitive types)
  // So states are used to "rerender" screens and components (which are basically the same thing)
  // The contain two things, the state variable and the setStateFunction (myStateString  and setMyStateString )
  // They also need you to declare an initial state by using useState
  // This is the state used in the first render of the compoenet
  // you use the setStateFunction (setMyStateString) to update the state,
  // This will causes a rerender on componenets where it the state is located.
  const [myStateString, setMyStateString] = useState("Some Random Initial State");

  //Example of a complex state (objects, arrays)
  var initialObjectState = { name: "John smith", job: "Programmer" };
  const [myStateObject, setMyStatObject] = useState(initialObjectState);
  // For primitive types in js,(numbers, strings, booleans), you just use setStateFunction(newValue);
  // but for complex types u need to define to more...
  // Because react has a funny rule about states being immutable. Basically the can't be updated by only replaced.
  // So you have to make a copy of the object and then edit it and then replace it.
  function UpdateName(newName){
    // Creating a copy of the object to edit 
    let newState = {};
    Object.assign(newState, myStateObject);

    // Making changes to copy
    newState.name= newName;
    // Setting copy to state
    setMyStatObject(newState)
    };



  // Some caveats
  // The code in the return statement is called JSX
  // Any js code has to be wrapped in { } otherwise it won't compile
  // on onChangeText={(text) => myStateString(text)} This is passing 
  // an anonymous function just like onPress but instead it has a parameter 
  // which onChangeText pass to it

  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
     <Text>-------------------------Simple State-------------------------</Text>
      <Text>{myStateString}</Text>
      <TextInput onChangeText={(text) => setMyStateString(text)} value={myStateString} />


      
      <Text>-------------------------ComplexState-------------------------</Text>
      <Text>Name: {myStateObject.name}  Job:{myStateObject.job} </Text>
      <TextInput onChangeText={(text) => UpdateName(text)} value={myStateObject.name} />
    </View>
  );
}
