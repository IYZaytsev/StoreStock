import * as React from "react";
import { StyleSheet, TouchableOpacity, View, Text } from "react-native";
export default function HomeScreen(props) {
  // The purpose of this screen is to show react naviagation
  // Notice the "props" prop being passed? it contains the react navigation object
  // It contains two objects you should care about Naviagation and Route
  // Navigation controls what appears on the screen and route contains contains the name of the screen 
  // and the parameters passed to it the previous function. That would App.js as initialParams prop, 
  // you need to pass something for this otherwise you don't get the navigation object
          /* navigation:
            addListener: ƒ addListener(type, callback)
            canGoBack: ƒ canGoBack()
            dangerouslyGetParent: ƒ dangerouslyGetParent()
            dangerouslyGetState: ƒ ()
            dispatch: ƒ dispatch(action)
            goBack: ƒ ()
            isFocused: ƒ isFocused()
            navigate: ƒ ()
            pop: ƒ ()
            popToTop: ƒ ()
            push: ƒ ()
            removeListener: ƒ removeListener(type, callback)
            replace: ƒ ()
            reset: ƒ ()
            setOptions: ƒ setOptions(options)
            setParams: ƒ ()
            __proto__: Object
                              route:
                              key: "Home-1GEOKKEqnmmkyz0QDQXyJ"
                              name: "Home"
                              params:
                                      test: "test"

*/


// A quick word on onPress, and why the () => is needed
// This is called an anonymous function, basically a function without a name
// you could in theory also do but this is more typing.
// <TouchableOpacity onPress={props.navigation.navigate("SecondScreen")}>
// It would try to evaluate it as soon as the object is rendered
/*

function something(){
  props.navigation.navigate("SecondScreen")
}
<TouchableOpacity onPress={something}></TouchableOpacity>
*/
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
    <Text>----------- Navigation Example-----------</Text>

        <TouchableOpacity onPress={() => props.navigation.navigate("SecondScreen")}>
        <Text>Go to SecondScreen</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => props.navigation.navigate("ThirdScreen")}>
        <Text>Go to Third Screen</Text>
        </TouchableOpacity>

        <Text>----------- State example-----------</Text>

        <TouchableOpacity onPress={() => props.navigation.navigate("Example1")}>
        <Text>Example1</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => props.navigation.navigate("Example2")}>
        <Text>Example2</Text>
        </TouchableOpacity>

        <Text>----------- Styling example-----------</Text>

        <TouchableOpacity onPress={() => props.navigation.navigate("Styling")}>
        <Text>Styling</Text>
        </TouchableOpacity>

        <Text>----------- Fetch example-----------</Text>

        <TouchableOpacity onPress={() => props.navigation.navigate("Fetch")}>
        <Text>Fetch</Text>
        </TouchableOpacity>
    </View>
  );
}
